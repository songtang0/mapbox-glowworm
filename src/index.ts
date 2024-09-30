import type {Map, AnySourceData, GeoJSONSource} from 'mapbox-gl';
import {MapDotBack, GlowwormMapOptions, ChinaSpecialLayerConfig, LayerInstance} from '../types';
import {cloneDeep} from 'lodash-es';
import {gcj02towgs84} from './utils/coordinateTransform';
import {
  getStandardMapData,
  getSourceData
} from './utils/map';
import {GLOWWORM1, GLOWWORM2, GLOWWORM3} from './utils/constMap';
import {
  defaultInnerGlowwormColorList,
  defaultMapColorList,
  defaultOutGlowwormColorList,
  mapOpacityColor
} from './data/defaultMapConfigData';
import {MapOptions} from '../types';
import type {FeatureCollection} from 'geojson';

export default class GlowwormMap {
  private map = {} as Map;
  private options = {} as GlowwormMapOptions;

  constructor(map: Map) {
    this.map = map;
  }

  addCommonLayer(data: MapDotBack[], layerName: string, options?: MapOptions): LayerInstance {
    const {
      dotTypeKey = 'level',
      mapColorList,
      circleBlur,
      circleColor,
      circleOpacity,
      circleRadius,
      dotSize,
      circleStrokeWidth,
      circleStrokeColor,
      coordinateSystemType = 'WGS84',
      needRandom = false,
    } = options || this.options;
    this.map.addSource(layerName, getSourceData(data, coordinateSystemType, needRandom));
    this.map.addLayer({
      id: layerName,
      type: 'circle',
      source: layerName,
      paint: {
        'circle-blur': (circleBlur) ?? 0,
        'circle-color': (circleColor) ?? [
          'match',
          ['get', dotTypeKey],
          ...(mapColorList || defaultMapColorList),
          'rgba(237,97,147,0.9)',
        ],
        'circle-color-transition': {
          duration: 2,
        },
        'circle-opacity': circleOpacity ?? 1,
        'circle-radius': (circleRadius) ?? [
          'interpolate',
          ['exponential', 0.1],
          ['zoom'],
          ...(dotSize ? dotSize : [14.1, 3, 32, 9]),
        ],
        'circle-stroke-width': (circleStrokeWidth) ?? [
          'interpolate',
          ['exponential', 0.1],
          ['zoom'],
          14.1,
          2,
          32,
          8,
        ],
        'circle-stroke-color':
          (circleStrokeColor) ?? [
            'match',
            ['get', dotTypeKey],
            ...mapOpacityColor,
            'rgba(241,118,163,0.3)',
          ],
      },
    });

    const hide = (callback?: Function) => {
      if (this.map.getLayer(layerName)) {
        this.map.setLayoutProperty(layerName, 'visibility', 'none');
      } else {
        throw new TypeError(`The layer named '${layerName}' does not exist on the map instance`)
      }
      callback && callback();
    }
    const show = (callback?: Function) => {
      if (this.map.getLayer(layerName)) {
        this.map.setLayoutProperty(layerName, 'visibility', 'visible');
      } else {
        throw new TypeError(`The layer named '${layerName}' does not exist on the map instance`)
      }
      callback && callback();
    }
    const remove = (callback?: Function) => {
      this.remove(layerName);
      callback && callback();
    }
    const updateSource = (data: MapDotBack[], callback?: Function) => {
      const resData = getStandardMapData(data);
      if (this.map.getSource(layerName)) {
        (this.map.getSource(layerName) as GeoJSONSource).setData(resData);
      }
      callback && callback();
      return resData;
    }
    return {
      layerName,
      updateSource,
      show,
      hide,
      remove,
    }
  }
  private remove(layerName: string | string[]) {
    if (Array.isArray(layerName)) {
      layerName.forEach(layer => {
        this.map.off('click', layer,  (e) => {})
      })
    } else {
      this.map.off('click', layerName,  (e) => {})
    }
    const style = this.map.getStyle();
    if (style && style.layers) {
      style.layers = Array.isArray(layerName) ?
        style.layers.filter(item => !layerName.includes(item.id)) :
        style.layers.filter(item => item.id !== layerName)
    }
    if (style && style.sources) {
      if (Array.isArray(layerName)) {
        layerName.forEach(layer => {
          Reflect.deleteProperty(style.sources, layer);
        })
      } else {
        Reflect.deleteProperty(style.sources, layerName);
      }
    }
    this.map.setStyle(style);
    if (Array.isArray(layerName)) {
      layerName.forEach(layer => {
        this.map.getLayer(layer) && this.map.removeLayer(layer);
        this.map.getSource(layer) && this.map.removeSource(layer);
      })
    } else {
      this.map.getLayer(layerName) && this.map.removeLayer(layerName);
      this.map.getSource(layerName) && this.map.removeSource(layerName);
    }
  }
  addGlowwormLayer(data: MapDotBack[], options: GlowwormMapOptions, callback?: Function) {
    // console.log('Test:', options);
    const {
      dotTypeKey = 'level',
      glowwormLayerName = GLOWWORM1,
      glowwormInnerColorList ,
      glowwormOutColorList,
      circleOpacity,
      circleBlur,
    } = options;
    const glowworm1Instance = this.addCommonLayer(data, glowwormLayerName || GLOWWORM1, {
      circleOpacity: circleOpacity || 0.4,
      circleBlur: circleBlur || 3,
      circleColor: [
        'match',
        ['get', dotTypeKey],
        // ...mapGlowwormColorList1, // 外环
        ...(glowwormOutColorList || defaultOutGlowwormColorList),
        'rgba(237,97,147,0.9)',
      ],
      circleRadius: [
        'interpolate',
        ['exponential', 0.1],
        ['zoom'],
        14.1,
        14,
        32,
        22,
      ],
      circleStrokeWidth: 0,
    });
    const glowworm2Instance = this.addCommonLayer(data, GLOWWORM2, {
      circleOpacity: circleOpacity || 0.4,
      circleBlur: circleBlur || 3,
      circleColor: [
        'match',
        ['get', dotTypeKey],
        ...(glowwormInnerColorList || defaultInnerGlowwormColorList),
        'rgba(237,97,147,0.9)',
      ],
      circleRadius: [
        'interpolate',
        ['exponential', 0.1],
        ['zoom'],
        14.1,
        9,
        32,
        12,
      ],
      circleStrokeWidth: 0,
    });
    const glowworm3Instance = this.addCommonLayer(data, GLOWWORM3, {
      circleOpacity: 1,
      circleBlur: 0,
      circleColor: '#ffffff',
      circleRadius: [
        'interpolate',
        ['exponential', 0.1],
        ['zoom'],
        14.1,
        1.3,
        32,
        2.2,
      ],
      circleStrokeWidth: 0,
    });
    // setCurrentZoom();
    // callback && this.bindEventGlowwormDot(callback);

    const hide = (callback?: Function) => {
      glowworm1Instance.hide();
      glowworm2Instance.hide();
      glowworm3Instance.hide();
      callback && callback();
    }
    const show = (callback?: Function) => {
      glowworm1Instance.show();
      glowworm2Instance.show();
      glowworm3Instance.show();
      callback && callback();
    }
    const remove = (callback?: Function) => {
      const layerNames = [glowwormLayerName, GLOWWORM2, GLOWWORM3];
      this.remove(layerNames);
      callback && callback();
    }
    const updateSource = (data: MapDotBack[], callback?: Function) => {
      const resData = getStandardMapData(data);
      this.map.getSource(glowwormLayerName) && (this.map.getSource(glowwormLayerName) as GeoJSONSource).setData(resData);
      this.map.getSource(GLOWWORM2) && (this.map.getSource(GLOWWORM2) as GeoJSONSource).setData(resData);
      this.map.getSource(GLOWWORM3) && (this.map.getSource(GLOWWORM3) as GeoJSONSource).setData(resData);
      callback && callback();
      return resData;
    }
    return {
      glowwormLayerName,
      updateSource,
      show,
      hide,
      remove: remove,
    }
  }
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
  addSimpleTaiWanTitle(config?: ChinaSpecialLayerConfig) {
    const { textColor } = config || {};
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
        "text-color": textColor || "rgba(96, 91, 91, 1)",
      }
    });
  }
}
