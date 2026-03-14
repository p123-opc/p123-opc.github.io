// 这个变量名必须是 toolLibraryData，一字不能错！
const toolLibraryData = {
  // projects里放你的项目列表
  projects: [
    {
      name: "737航电维修", // 工作名称（必填，唯一）
      model: "737", // 机型
      chapter: "23", // 章节号
      image: "" // 图片暂时留空
    },
    {
      name: "787发动机检查",
      model: "787",
      chapter: "71",
      image: ""
    }
  ],
  // toolsMap里放对应项目的工具，键必须和project的name完全一致
  toolsMap: {
    "737航电维修": [
      {
        id: "t_1",
        name: "万用表",
        type: "基础工具",
        spec: "FLUKE 17B",
        qty: "1"
      },
      {
        id: "t_2",
        name: "清洁剂",
        type: "化工品",
        spec: "环保型",
        qty: "2"
      }
    ],
    "787发动机检查": [
      {
        id: "t_3",
        name: "扭矩扳手",
        type: "专用工具",
        spec: "80-400N.m",
        qty: "1"
      }
    ]
  }
};