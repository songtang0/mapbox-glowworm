import type {Expression, Map, StyleFunction} from 'mapbox-gl';
import type {Feature, FeatureCollection} from 'geojson';

export interface MapDotBack {
  gps: number[];
  level?: string;
  count?: number;
  realGps?: number[];
  data?: any;
  point_type?: string;
  visible?: boolean;
}
export type CoordinateSystemType = 'WGS84' | 'BD09' | 'GCJ02'
export interface MapOptions {
  dotTypeKey?: string;
  mapColorList?: (number | string) []; // 普通打点颜色列表
  colorKey?: string; // 匹配颜色的自定义字段
  dotSize?: number[];
  circleBlur?: number | StyleFunction | Expression;
  circleColor?: string | StyleFunction | Expression;
  circleRadius?: number | StyleFunction | Expression;
  circleStrokeWidth?: number | StyleFunction | Expression;
  circleStrokeColor?: string | StyleFunction | Expression;
  circleOpacity?: number;
  coordinateSystemType?: CoordinateSystemType;
  needRandom?: boolean;
}
export interface GlowwormMapOptions extends MapOptions{
  glowwormLayerName?: string; // 萤火虫图层名称
  glowwormInnerColorList?: (number | string) []; // 萤火虫打点内环颜色
  glowwormOutColorList?: (number | string) []; // 萤火虫打点外环颜色
}
export type ChinaSpecialLayerConfig = {
  textColor?: string | StyleFunction | Expression;
}

export interface LayerInstance {
  layerName: string | string[];
  updateSource(data: MapDotBack[], callback?: Function):FeatureCollection;
  show(callback?: Function):void;
  hide(callback?: Function):void;
  remove(callback?: Function):void;
}

export default class GlowwormMap{
  data: MapDotBack[];
  map: Map;
  constructor(map: Map);
  addCommonLayer(data: MapDotBack[], layerName: string, options?: MapOptions): LayerInstance;
  addGlowwormLayer(data: MapDotBack[], options: GlowwormMapOptions, callback?: Function): LayerInstance;
  addSimpleCityLayer(): void;
  addChinaCountryBoundaryLine(json: FeatureCollection): void;
  addSimpleTaiWanTitle(config?: ChinaSpecialLayerConfig): void;
}
