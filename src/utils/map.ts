import {CoordinateSystemType, MapDotBack} from '../../types';
import type {Feature, FeatureCollection} from 'geojson';
import {cloneDeep} from 'lodash-es'
import {bd09towgs84, gcj02towgs84} from './coordinateTransform';
import type {AnySourceData} from 'mapbox-gl';

export const getSourceData = (
  data: MapDotBack[],
  coordinateSystemType: CoordinateSystemType = 'WGS84',
  needRandom = false
): AnySourceData => {
  return {
    type: 'geojson',
    data: getStandardMapData(data, coordinateSystemType, needRandom),
    cluster: false,
  };
};
export const getStandardMapData = (
  mapDotList: MapDotBack[],
  coordinateSystemType: CoordinateSystemType  = 'WGS84',
  needRandom = false,
) => {
  const afterRandomNumGopList = needRandom
    ? transformRandomNumToGps(mapDotList)
    : mapDotList;
  return getEmptyMapData(getTransformList(afterRandomNumGopList, coordinateSystemType));
};
export const getTransformList = (
  gpsList: MapDotBack[],
  coordinateSystemType: CoordinateSystemType  = 'WGS84'
): Feature[] => {
  return gpsList?.map((e, index) => {
    const level =
      e.level ||
      '层级类型';
    const realGps = e.realGps ? [...e.realGps!] : [];
    const copyGps = [...e.gps];
    let gps = [];
    if (coordinateSystemType === 'BD09') {
      gps = bd09towgs84(copyGps[0], copyGps[1]);
    } else if (coordinateSystemType === 'GCJ02') {
      gps = gcj02towgs84(copyGps[0], copyGps[1])
    } else {
      gps = [...copyGps]
    }
    const realGpsObj = {
      realLngGps: realGps ? realGps![0] : gps[0],
      realLatGps: realGps ? realGps![1] : gps[1],
    };
    const res: Feature = {
      type: 'Feature',
      properties: {
        data: e.data,
        count: e.count || 0,
        lng: gps[0],
        lat: gps[1],
        queryLng: copyGps[0],
        queryLat: copyGps[1],
        level,
        point_type: e.point_type,
        ...realGpsObj,
      },
      geometry: {
        type: 'Point',
        coordinates: [...gps],
      },
    };
    return res;
  });
};


function getRandom() {
  return Math.floor(Math.random() * 9 + 1);
}
function addTargetNumToGps(dotLngOrLat: string, len: number, target?: number) {
  let resDot = String(dotLngOrLat);
  for (let i = 0; i < len; i++) {
    resDot = `${resDot}${target || target === 0 ? target : getRandom()}`;
  }
  return resDot;
}
function addRandomNumToGps(lngOrLat: number, randomLen: number): number {
  const maxLen = 6;
  const cloneLngOrLat = String(lngOrLat);
  const NumLngOrLat = cloneLngOrLat.split('.')[0];
  let dotLngOrLat = cloneLngOrLat.split('.')[1];
  if (!dotLngOrLat) {
    return Number(cloneLngOrLat);
  }
  dotLngOrLat = addTargetNumToGps(dotLngOrLat, maxLen - dotLngOrLat.length, 0);
  dotLngOrLat = addTargetNumToGps(dotLngOrLat, randomLen);
  return parseFloat(`${NumLngOrLat}.${dotLngOrLat}`);
}
export const transformRandomNumToGps = (gpsList: MapDotBack[]) => {
  return gpsList.map((item) => {
    const [lng, lat] = item.gps;
    const resLng = addRandomNumToGps(lng, 3);
    const resLat = addRandomNumToGps(lat, 3);
    return {
      ...item,
      realGps: item.gps,
      gps: [resLng, resLat],
    };
  });
};
export const getEmptyMapData = (
  data: Feature[] | [] = []
): FeatureCollection => {
  return {
    type: 'FeatureCollection',
    features: data,
  };
};

