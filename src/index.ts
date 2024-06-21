import mapbox from 'mapbox-gl';
import type {Map, AnySourceData} from 'mapbox-gl';
import type {MapDotBack, GlowwormMapOptions} from '../types';
import {cloneDeep} from 'lodash-es';
import {gcj02towgs84} from './utils/coordinateTransform';
import {
  transformRandomNumToGps,
  getEmptyMapData,
  getTransformList,
  getStandardMapData,
  getSourceData
} from './utils/map';
import {GLOWWORM1, GLOWWORM2, GLOWWORM3} from './utils/constMap';
import {
  defaultInnerGlowwormColorList,
  defaultMapColorList,
  defaultOutGlowwormColorList
} from './data/defaultMapConfigData';
import {MapOptions} from '../types';
import {FeatureCollection} from 'geojson';

export class GlowwormMap {
  // private layerName = '';
  // private data = [] as MapDotBack[];
  private map = {} as Map;
  private options = {} as GlowwormMapOptions;

  constructor( map: Map, layerName: string) {
    // this.layerName = layerName;
    // this.options = options;
    this.map = map;
  }

  addCommonLayer(data: MapDotBack[], layerName: string, options?: MapOptions) {
    const {
      mapColorList,
      circleBlur,
      circleColor,
      circleOpacity,
      circleRadius,
      dotSize,
      circleStrokeWidth,
      circleStrokeColor,
    } = options || this.options;
    // mapboxgl.AnyLayer
    this.map.addSource(layerName, getSourceData(data));
    this.map.addLayer({
      id: layerName,
      type: 'circle',
      source: layerName,
      paint: {
        'circle-blur': (circleBlur) ?? 0,
        'circle-color': (circleColor) ?? [
          'match',
          ['get', 'keyStr'],
          ...(mapColorList || defaultMapColorList),
          'rgba(237,97,147,0.9)',
        ],
        'circle-color-transition': {
          duration: 2,
        },
        'circle-opacity': circleOpacity,
        'circle-radius': (circleRadius) ?? [
          'interpolate',
          ['exponential', 0.1],
          ['zoom'],
          ...(dotSize ? dotSize : [14.1, 3, 32, 9]),
          // 14.1, // 小于200m打点变大
          // 3,
          // 32,
          // 9,
        ],
        'circle-stroke-width': (circleStrokeWidth) ?? 0,
        'circle-stroke-color':
          (circleStrokeColor) ?? '#ffffff',
      },
    });
  }

  addGlowwormLayer(data: MapDotBack[], options: GlowwormMapOptions, callback?: Function) {
    // console.log('Test:', options);
    // const glowwormLayerName = options?.glowwormLayerName || '';
    // const glowwormInnerColorList = options?.glowwormInnerColorList || undefined;
    // const glowwormOutColorList = options?.glowwormOutColorList || undefined;
    const {
      glowwormLayerName,
      glowwormInnerColorList ,
      glowwormOutColorList,
    } = options;
    this.addCommonLayer(data, glowwormLayerName || GLOWWORM1, {
      circleOpacity: 0.4,
      circleBlur: 3,
      circleColor: [
        'match',
        ['get', 'keyStr'],
        // ...mapGlowwormColorList1, // 外环
        ...(glowwormOutColorList || defaultOutGlowwormColorList),
        'rgba(237,97,147,0.9)',
      ],
      circleRadius: [
        'interpolate',
        ['exponential', 0.1],
        ['zoom'],
        14.1, // 小于200m打点变大
        14,
        32,
        22,
      ],
    });
    this.addCommonLayer(data, GLOWWORM2, {
      circleOpacity: 0.4,
      circleBlur: 3,
      circleColor: [
        'match',
        ['get', 'keyStr'],
        ...(glowwormInnerColorList || defaultInnerGlowwormColorList),
        'rgba(237,97,147,0.9)',
      ],
      circleRadius: [
        'interpolate',
        ['exponential', 0.1],
        ['zoom'],
        14.1, // 小于200m打点变大
        9,
        32,
        12,
      ],
    });
    this.addCommonLayer(data, GLOWWORM3, {
      circleOpacity: 1,
      circleBlur: 0,
      circleColor: '#ffffff',
      circleRadius: [
        'interpolate',
        ['exponential', 0.1],
        ['zoom'],
        14.1, // 小于200m打点变大
        1.3,
        32,
        2.2,
      ],
    });
    // setCurrentZoom();
    // callback && this.bindEventGlowwormDot(callback);
  }
  // bindEventGlowwormDot(updateSourceDebounce: Function) {
  //   this.map.on('zoomend', updateSourceDebounce);
  // }
  addSimpleCityLayer() {
    this.map.addLayer({
      id: 'simple-cities',
      type: 'symbol',
      source: 'simpleCity',
      minzoom: 5,
      maxzoom: 12,
      layout: {
        'text-field': '{title}',
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        "text-size": [
          "interpolate",
          ["cubic-bezier", 0.2, 0, 0.9, 1],
          ["zoom"],
          2,
          ["step", ["get", "symbolrank"], 3, 3, 3],
          6,
          [
            "step",
            ["get", "symbolrank"],
            23.400000000000002,
            6,
            20.8,
            7,
            18.2
          ],
          8,
          ["step", ["get", "symbolrank"], 10, 9, 10, 10, 18.2],
          15,
          [
            "step",
            ["get", "symbolrank"],
            31.200000000000003,
            9,
            26,
            12,
            20.8,
            15,
            18.2
          ]
        ],
      },
      paint: {
        'text-color': 'hsl(215, 28%, 71%)',
        'text-halo-color': 'hsla(215, 91%, 48%, 0.24)',
        'text-halo-width': 1,
        'icon-opacity': 0.63,
        'text-halo-blur': 1,
      },
    });
  }
  addChinaCountryBoundaryLine(json: FeatureCollection) {
    const transformGpsToWgs84 = (chinaJson: any) => {
      const {coordinates} = chinaJson.features[0].geometry;
      const resChinaJson = cloneDeep(chinaJson);
      const transformGps = (childGps: any) =>
        childGps.map((item: any) => {
          if (
            item &&
            Array.isArray(item) &&
            item.length === 2 &&
            typeof item[0] === 'number'
          ) {
            return gcj02towgs84(item[0], item[1]);
          }
          return transformGps(item);
        });
      resChinaJson.features[0].geometry.coordinates = transformGps(coordinates);
      return resChinaJson;
    };
    const lineConfig = {
      id: 'south-line',
      type: 'line',
      source: {
        type: 'geojson',
        lineMetrics: true,
        data: transformGpsToWgs84(json),
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': 'rgb(50, 121, 149)',
        'line-width': 2,
        'line-opacity': 0.9,
        'line-dasharray': [4, 0],
      },
    };
    this.map.addLayer(lineConfig as any);
  }
  addSimpleTaiWanTitle() {
    this.map.addSource('taiwan', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.99362840456797, 23.916543753069078],
            },
            properties: {
              title: '台湾省',
            },
          },
        ],
      },
      cluster: true,
    });
    this.map.addLayer({
      id: 'taiwan',
      type: 'symbol',
      source: 'taiwan',
      minzoom: 2,
      maxzoom: 12,
      layout: {
        'text-field': '{title}',
        'text-font': ['Open Sans Regular'],
        'text-size': [
          'interpolate',
          ['exponential', 0.1],
          ['zoom'],
          5,
          12,
          10,
          28,
        ],
      },
      paint: {
        'text-color': 'hsl(215, 14%, 82%)'
      }
    });
  }
}
