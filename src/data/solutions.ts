export interface Solution {
  id: string;
  name: string;
  description: string;
  href: string;
}

export const solutions: Solution[] = [
  {
    id: "manufacturing",
    name: "制造业",
    description: "工业物联网数据采集、产线智能质检、设备预测性维护",
    href: "/solutions/manufacturing",
  },
  {
    id: "government",
    name: "政府",
    description: "智慧城市视频分析、政务数据安全存储、跨部门协同",
    href: "/solutions/government",
  },
  {
    id: "finance",
    name: "金融",
    description: "风控模型推理、交易数据实时分析、合规审计存证",
    href: "/solutions/finance",
  },
  {
    id: "internet",
    name: "互联网",
    description: "AI 内容审核、推荐系统推理、海量日志存储与检索",
    href: "/solutions/internet",
  },
];

export interface AIModel {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
}

export const aiModels: AIModel[] = [
  {
    id: "water-quality",
    name: "水质异常检测",
    category: "智慧水务",
    description: "基于时序传感器数据的实时水质异常检测与预警模型",
    tags: ["时序分析", "异常检测"],
  },
  {
    id: "traffic-flow",
    name: "交通流量预测",
    category: "智慧城市",
    description: "融合多源数据的城市路网交通流量短时预测模型",
    tags: ["时空预测", "图神经网络"],
  },
  {
    id: "medical-image",
    name: "医学影像辅助诊断",
    category: "智慧医疗",
    description: "CT/MRI 影像的病灶检测与分类辅助诊断模型",
    tags: ["目标检测", "分类"],
  },
  {
    id: "crop-disease",
    name: "农作物病害识别",
    category: "智慧农业",
    description: "基于无人机/手机拍摄图像的农作物病虫害识别模型",
    tags: ["图像分类", "边缘部署"],
  },
  {
    id: "pipe-leak",
    name: "管网漏损定位",
    category: "智慧水务",
    description: "供水管网压力数据分析与漏损点准确定位模型",
    tags: ["信号处理", "定位"],
  },
  {
    id: "crowd-density",
    name: "人流密度分析",
    category: "智慧城市",
    description: "实时视频流的人流密度估计与异常聚集预警模型",
    tags: ["视频分析", "密度估计"],
  },
];

export const modelCategories = ["全部", "智慧城市", "智慧水务", "智慧医疗", "智慧农业"];
