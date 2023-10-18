import type {MapDotBack} from '../../types';
import type {Feature, FeatureCollection} from 'geojson';
import {cloneDeep} from 'lodash-es'
import {bd09towgs84} from './coordinateTransform';
import type {AnySourceData} from 'mapbox-gl';

export const getSourceData = (
  data: MapDotBack[],
  needRandom = true
): AnySourceData => {
  return {
    type: 'geojson',
    data: getStandardMapData(data, needRandom),
    cluster: false,
  };
};
export const getStandardMapData = (
  mapDotList: MapDotBack[],
  needRandom = true
) => {
  const afterRandomNumGopList = needRandom
    ? transformRandomNumToGps(mapDotList)
    : mapDotList;
  return getEmptyMapData(getTransformList(afterRandomNumGopList));
};
export const getTransformList = (gpsList: MapDotBack[]): Feature[] => {
  return gpsList?.map((e, index) => {
    const level =
      e.level ||
      e.vul_level ||
      e.risk_category ||
      e.ransom_type ||
      e.malicious_name ||
      e.gps_type ||
      '机构';
    const realGps = cloneDeep(e.realGps);
    const copyGps = cloneDeep(e.gps);
    const gps =
      level === '机构' ? bd09towgs84(copyGps[0], copyGps[1]) : [...copyGps];
    const assetRealGps = {
      realLngGps: realGps ? realGps![0] : gps[0],
      realLatGps: realGps ? realGps![1] : gps[1],
    };
    const res: Feature = {
      type: 'Feature',
      properties: {
        data: e.data,
        count: e.count || 0,
        lng: gps[0], // 转换后的
        lat: gps[1],
        queryLng: copyGps[0],
        queryLat: copyGps[1],
        level,
        point_type: e.point_type,
        keyStr: level,
        ...assetRealGps,
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

