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

/* ═══════════════════════════════════════════
   方案详情页补充数据
   ═══════════════════════════════════════════ */

export interface PainPoint {
  title: string;
  desc: string;
}

export interface SolutionAdvantage {
  icon: string;
  title: string;
  desc: string;
}

export interface SolutionArchitecture {
  description: string;
  steps: string[];
}

export interface SolutionDetail {
  heroTagline: string;
  painPoints: PainPoint[];
  architecture: SolutionArchitecture;
  advantages: SolutionAdvantage[];
}

export const solutionDetails: Record<string, SolutionDetail> = {
  manufacturing: {
    heroTagline: "从自动化到智能化，为工厂装上 AI 大脑",
    painPoints: [
      {
        title: "质检依赖人工",
        desc: "传统产线依赖人工目检，效率低、漏检率高，且难以 7×24 小时连续作业。AI 视觉质检可提升检出率至 99.5% 以上。",
      },
      {
        title: "设备意外停机",
        desc: "缺乏预测性维护能力，设备故障导致产线停摆，单次停机损失可达数十万元。边缘 AI 实时分析振动/温度数据，提前预警。",
      },
      {
        title: "数据孤岛严重",
        desc: "ERP/MES/SCADA 等系统数据割裂，无法形成全域数据洞察。分布式存储打破数据孤岛，实现全链路数据贯通。",
      },
    ],
    architecture: {
      description:
        "从端侧传感器采集 → 边缘节点实时推理 → 云端训练迭代的端边云三级架构",
      steps: [
        "端侧：工业相机/传感器采集原始数据",
        "边缘侧：RK3588 边缘服务器近场推理，延迟 < 50ms",
        "云端：分布式 GPU 集群进行模型训练和迭代",
        "闭环：推理结果实时反馈产线，标注数据回传云端优化模型",
      ],
    },
    advantages: [
      { icon: "Eye", title: "AI 视觉质检", desc: "缺陷检出率 > 99.5%，7×24 不间断运行，支持 200+ 种缺陷类型" },
      { icon: "Activity", title: "预测性维护", desc: "基于振动/温度等多维数据的设备健康度评估，提前 72h 故障预警" },
      { icon: "HardDrive", title: "数据不出厂", desc: "产线数据本地处理存储，满足工业数据安全合规要求" },
      { icon: "TrendingUp", title: "持续优化", desc: "标注数据自动回传云端，模型持续迭代，越用越准" },
    ],
  },
  government: {
    heroTagline: "安全可控的数字政务基础设施",
    painPoints: [
      {
        title: "数据安全合规压力",
        desc: "政务数据涉及公民隐私和国家安全，必须满足等保三级、数据不出域等严格合规要求。自研加密存储方案确保数据自主可控。",
      },
      {
        title: "跨部门协同困难",
        desc: "公安/城管/交通等部门数据格式不一、系统孤立，难以形成城市治理合力。统一数据平台打通跨部门壁垒。",
      },
      {
        title: "海量视频分析效率低",
        desc: "城市数万路摄像头每天产生 PB 级视频数据，人工查看效率极低。分布式 AI 推理实现实时全量分析。",
      },
    ],
    architecture: {
      description: "视频前端 → 边缘推理 → 中心汇聚 → 政务云的四层架构",
      steps: [
        "视频接入：兼容 GB/T 28181 / ONVIF 标准，利旧现有摄像头",
        "边缘推理：分布式算力节点实时分析视频流，提取结构化信息",
        "数据汇聚：分析结果加密回传政务云，原始视频本地存储",
        "业务应用：城管/公安/应急等多部门按权限调用分析结果",
      ],
    },
    advantages: [
      { icon: "Shield", title: "等保三级合规", desc: "全链路加密、数据不出域、操作全审计，完全满足政务安全标准" },
      { icon: "Database", title: "统一数据平台", desc: "打破部门壁垒，跨系统数据统一汇聚、清洗、分析" },
      { icon: "Video", title: "全量视频分析", desc: "万路摄像头并发分析，支持人脸/车牌/行为识别" },
      { icon: "Server", title: "自主可控", desc: "支持国产芯片（昇腾/鲲鹏），自研加密存储引擎，无外部依赖" },
    ],
  },
  finance: {
    heroTagline: "毫秒级风控，金融级安全",
    painPoints: [
      {
        title: "风控实时性不足",
        desc: "传统批处理风控延迟达小时级，难以拦截实时欺诈交易。边缘推理可将风控延迟降低至 50ms 以内。",
      },
      {
        title: "合规审计成本高",
        desc: "交易数据的长期安全存档是监管硬性要求，传统存储成本高昂。分布式加密存储在保证安全的同时降低 90% 成本。",
      },
      {
        title: "数据协同与隐私矛盾",
        desc: "跨机构联合风控需要数据共享，但原始数据不能出域。隐私计算 + 分布式架构实现数据可用不可见。",
      },
    ],
    architecture: {
      description: "交易网关 → 实时风控引擎 → 分布式存储 → 监管报送全链路",
      steps: [
        "实时拦截：交易请求经过边缘风控引擎，毫秒级风险评估",
        "模型推理：预加载的 XGBoost / 深度学习模型实时打分",
        "加密存证：交易数据自动分片加密，四重冗余持久化",
        "监管对接：自动生成合规报表，支持监管机构在线审计",
      ],
    },
    advantages: [
      { icon: "Gauge", title: "毫秒级风控", desc: "推理延迟 < 50ms，不阻断正常交易体验，实时拦截异常行为" },
      { icon: "Lock", title: "数据可用不可见", desc: "联邦学习 + 多方安全计算，跨机构联合风控不暴露原始数据" },
      { icon: "ShieldCheck", title: "金融级加密", desc: "AES-256 + 国密 SM4 双算法，满足央行和银保监会合规要求" },
      { icon: "FileText", title: "自动化审计", desc: "所有操作记录链上存证，审计报告自动生成，监管检查零准备" },
    ],
  },
  internet: {
    heroTagline: "支撑亿级用户的 AI 基础设施",
    painPoints: [
      {
        title: "内容审核成本飙升",
        desc: "UGC 内容爆发式增长，人工审核团队成本高昂且效率低下。AI 自动审核可将人工工作量降低 80%。",
      },
      {
        title: "推荐系统延迟敏感",
        desc: "推荐结果的响应速度直接影响用户留存，每增加 100ms 延迟可能导致转化率下降 7%。",
      },
      {
        title: "日志存储成本失控",
        desc: "日增 TB 级日志数据，传统集中式存储成本指数级增长。分布式压缩存储大幅降低成本。",
      },
    ],
    architecture: {
      description: "用户请求 → 边缘推理 → 推荐/审核结果返回 → 日志异步归档",
      steps: [
        "就近接入：用户请求路由至最近边缘节点，降低网络延迟",
        "模型服务：预缓存的推荐/审核模型毫秒级推理",
        "结果返回：个性化推荐或审核结果实时返回客户端",
        "日志归档：分析/推荐日志异步写入分布式存储，压缩比 > 5:1",
      ],
    },
    advantages: [
      { icon: "Image", title: "AI 内容审核", desc: "图文音视频全模态审核，准确率 > 98%，降低 80% 人工审核成本" },
      { icon: "Zap", title: "低延迟推荐", desc: "P99 延迟 < 20ms，支持万级 QPS，用户无感知的毫秒级推荐" },
      { icon: "HardDrive", title: "低成本存储", desc: "分布式压缩存储，综合成本降低 90%，支持 PB 级日志实时检索" },
      { icon: "Maximize", title: "弹性伸缩", desc: "节假日/大促流量高峰自动扩容，流量回落自动缩容，按需付费" },
    ],
  },
};

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}

export function getSolutionDetail(id: string): SolutionDetail | undefined {
  return solutionDetails[id];
}

/* ═══════════════════════════════════════════
   AI Model data (used on landing page)
   ═══════════════════════════════════════════ */

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
