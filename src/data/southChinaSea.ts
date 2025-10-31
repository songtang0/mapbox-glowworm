const southSeaGpsDataL1 = [
  {
    title: '钓鱼岛',
    coordinates: [123.479442,25.750691],
  },
  {
    title: '黄尾屿',
    coordinates: [123.687883,25.929257],
  },
  {
    title: '赤尾屿',
    coordinates: [124.580625,25.913131],
  },
  {
    title: '台湾海峡',
    coordinates: [119.203372,23.999425]
  },
  {
    title: '东沙群岛',
    coordinates: [116.368557,20.874125]
  },
  {
    title: '西沙群岛',
    coordinates: [111.816378,16.216238]
  },
  {
    title: '中沙群岛',
    coordinates: [114.457027,15.881425]
  },
  {
    title: '南沙群岛',
    coordinates: [113.552194,9.385270]
  },
  {
    title: '黄岩岛',
    coordinates: [117.717406,15.148399]
  },{
    title: '南海',
    coordinates: [114.963567,12.597042]
  },
  {
    title: '曾母暗沙',
    coordinates: [112.292021,3.977458],
  },
]
const southSeaGpsDataL2 = [
  {
    title: '中北暗沙',
    coordinates: [114.462417,16.088926]
  },
  {
    title: '比微暗沙',
    coordinates: [114.462417,16.088926]
  },
  {
    title: '隐矶滩',
    coordinates: [114.889375,16.054961]
  },{
    title: '指掌暗沙',
    coordinates: [114.670748,15.995215]
  },
]
const globalSeaData1 = [
  {
    title: '太平洋',
    coordinates: [168.919495,17.256149]
  },
  {
    title: '印度洋',
    coordinates: [76.591002,-28.567288]
  },
  {
    title: '大西洋',
    coordinates: [-34.511436,19.283393]
  },{
    title: '北冰洋',
    coordinates: [11.920579,82.755217]
  },
]
const globalSeaData2 = [
  {
    title: '渤海',
    coordinates: [119.836315,38.632665]
  },
  {
    title: '黄海',
    coordinates: [122.745379,35.022842]
  },
  {
    title: '东海',
    coordinates: [123.978168,27.846702]
  },
  {
    title: '南海',
    coordinates: [114.968768,12.617436]
  },
  {
    title: '菲律宾海',
    coordinates: [128.433098,19.078635]
  }, {
    title: '望加锡海峡',
    coordinates: [118.614113,-0.522220]
  }, {
    title: '爪哇海',
    coordinates: [111.853705,-5.443099]
  }, {
    title: '卡里马塔海峡',
    coordinates: [108.090796,-1.632331]
  }, {
    title: '北部湾',
    coordinates: [108.036004,20.159885]
  },{
    title: '琼州海峡',
    coordinates: [111.209699,20.299368]
  },{
    title: '格雷特海峡',
    coordinates: [94.967147,6.300835]
  },{
    title: '十度海峡',
    coordinates: [92.670694,9.713930]
  },{
    title: '安达曼海',
    coordinates: [95.151438,11.339947]
  },
  {
    title: '泰国湾',
    coordinates: [101.910564,9.188279]
  },{
    title: '莫塔马湾',
    coordinates: [96.192091,15.729385]
  },
  {
    title: '南普雷帕里斯海峡',
    coordinates: [92.575683,14.461631]
  },  {
    title: '孟加拉湾',
    coordinates: [87.396729,14.241749]
  },  {
    title: '阿拉伯海',
    coordinates: [64.343709,14.266059]
  },  {
    title: '亚丁湾',
    coordinates: [47.797993,12.423041]
  }, {
    title: '波斯湾',
    coordinates: [51.743050,26.668467]
  }, {
    title: '红海',
    coordinates: [38.362023,20.593274]
  }, {
    title: '里海',
    coordinates: [50.600648,41.722110]
  }, {
    title: '黑海',
    coordinates: [34.400433,43.449047]
  }, {
    title: '亚速海',
    coordinates: [36.045413,46.075275]
  }, {
    title: '马尔马拉海',
    coordinates: [27.442333,39.000834]
  },{
    title: '爱琴海',
    coordinates: [25.234596,39.000755]
  },{
    title: '苏尔特湾',
    coordinates: [17.112513,31.775875]
  },{
    title: '突尼斯海峡',
    coordinates: [11.899988,36.964088]
  },{
    title: '第勒尼安海',
    coordinates: [11.099527,39.842991]
  },{
    title: '亚得里亚海',
    coordinates: [16.191797,42.320223]
  },{
    title: '直布罗陀海峡',
    coordinates: [-7.500821,35.885924]
  },{
    title: '波罗的海',
    coordinates: [18.519216,56.839259]
  },{
    title: '波的尼亚湾',
    coordinates: [20.509482,62.959768]
  },{
    title: '白海',
    coordinates: [36.687588,65.767595]
  },{
    title: '黑尔戈兰湾',
    coordinates: [6.943041,54.162741]
  },{
    title: '北海',
    coordinates: [3.284610,56.111513]
  },{
    title: '英吉利海峡',
    coordinates: [-2.710431,49.951510]
  },{
    title: '布里斯托尔湾',
    coordinates: [-5.458189,51.262341]
  },{
    title: '圣乔治海峡',
    coordinates: [-5.812306,52.098049]
  },{
    title: '挪威海',
    coordinates: [0.582988,69.468057]
  },
]
export const southChinaSea = () => {
  return {
    type: 'FeatureCollection',
    features: southSeaGpsDataL1.map((item) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: item.coordinates,
      },
      properties: {
        title: item.title,
      },
    })),
  }
}
