import type {Expression, Map, StyleFunction} from 'mapbox-gl';
import type {Feature, FeatureCollection} from 'geojson';

export interface MapDotBack {
  gps: number[];
  level?: string;
  vul_level?: string;
  ransom_type?: string;
  malicious_name?: string;
  gps_type?: string;
  risk_category?: string;
  count?: number;
  realGps?: number[];
  data?: any;
  point_type?: string;
  visible?: boolean;
}
export interface MapOptions {
  // map: Map;
  // layerName: string;
  mapColorList?: (number | string) []; // 普通打点颜色列表
  glowwormInnerColorList?: (number | string) []; // 萤火虫打点内环颜色
  glowwormOutColorList?: (number | string) []; // 萤火虫打点外环颜色
  colorKey?: string; // 匹配颜色的自定义字段
  dotSize?: number[];
  circleBlur?: number | StyleFunction | Expression;
  circleColor?: string | StyleFunction | Expression;
  circleRadius?: number | StyleFunction | Expression;
  circleStrokeWidth?: number | StyleFunction | Expression;
  circleStrokeColor?: string | StyleFunction | Expression;
  circleOpacity?: number;
}
export interface GlowwormMapOptions extends MapOptions{
  glowwormLayerName: string; // 萤火虫图层名称
}

export class GlowwormMap{
  data: MapDotBack[];
  map: Map;
  constructor(map: Map);
  addCommonLayer(data: MapDotBack[], layerName: string, options?: MapOptions): void;
  addGlowwormLayer(data: MapDotBack[], options: GlowwormMapOptions, callback?: Function): void;
  addSimpleCityLayer(): void;
  addChinaCountryBoundaryLine(json: FeatureCollection):void;
  addSimpleTaiWanTitle():void;
}
