# mapbox-glowworm
适用于mapbox-gl的萤火虫打点效果

效果如下：

![效果1](https://raw.githubusercontent.com/songtang0/mapbox-glowworm-example/main/images/result3.jpg)

在线体验demo(请配置自己的mapbox token): [open in codesandbox](https://codesandbox.io/p/github/songtang0/mapbox-glowworm-example/main?workspaceId=55a67d7e-e330-43d3-9eae-802b79fee3a9)
# example
1. 初始化一个GlowwormMap实例并且添加一个萤火虫发光图层
```typescript
import {GlowwormMap} from 'mapbox-glowworm';

// ...
const map = new mapboxgl.Map({
  ...
});
// ...
map.on('load', () => {
  const mapData = [
    {
      gps: [114.184921, 22.350617],
      level: '', // 点类型 自定义，后序点的颜色根据这个字段匹配
    }
  ]
  const glowworm = new GlowwormMap(map); // 传入mapbox实例
  glowworm.addGlowwormLayer(mapData, {
    glowwormLayerName: 'glowwormLayerName',
  });
});
```
# addGlowwormLayer方法配置项以及参数说明
## 1. params data
`data: MapDotBack[]`
## 2. params options
`options: GlowwormMapOptions`


| GlowwormMapOptions     | type                                  | required | description                                                                                    |
|------------------------|---------------------------------------|----------|------------------------------------------------------------------------------------------------|
| mapColorList           | string[] or number[]                  | false    | 普通环形打点颜色列表                                                                                     |
| glowwormInnerColorList | string[] or number[]                  | false    | 萤火虫打点内环颜色列表                                                                                    |
| glowwormOutColorList   | string[] or number[]                  | false    | 萤火虫打点外环颜色列表，内环比外环颜色应当更深一点                                                                      |
| colorKey               | string                                | false    | 匹配颜色的自定义字段，不传则默认为keyStr                                                                        |
| dotSize                | number[]                              | false    | dotSize示例：[14.1, 3, 32, 9]，根据不同zoom匹配不同的大小，circleRadius和dotSize只能二选一，传入circleRadius后则dotSize失效 |
| circleBlur             | number or StyleFunction or Expression | false    |                                                                                                |
| circleColor            | string or StyleFunction or Expression | false    |                                                                                                |
| circleRadius           | number or StyleFunction or Expression | false    |                                                                                                |
| circleStrokeWidth      | number or StyleFunction or Expression | false    |                                                                                                |
| circleStrokeColor      | string or StyleFunction or Expression | false    |                                                                                                |
| circleOpacity          | number                                | false    |                                                                                                |


# 全局types
```typescript
interface MapDotBack {
  gps: number[];
  level?: string;
}
interface MapOptions {
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
```
