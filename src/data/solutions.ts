export interface Solution {
  id: string;
  name: string;
  description: string;
  href: string;
}

export const solutions: Solution[] = [
  {
    id: "general",
    name: "通用解决方案",
    description: "统一算力调度与智能运维平台，支持 AI 推理、办公等多场景",
    href: "/solutions/general",
  },
  {
    id: "government",
    name: "政府",
    description: "打破数据壁垒，跨部门安全共享，支撑一网通办与城市大脑",
    href: "/solutions/government",
  },
  {
    id: "education",
    name: "高校科研",
    description: "算力池化共享，统一数据平台，全托管免运维",
    href: "/solutions/education",
  },
  {
    id: "security-chain",
    name: "安防与连锁经营",
    description: "视频安全上云，AI 智能分析，集中管控降本增效",
    href: "/solutions/security-chain",
  },
  {
    id: "finance",
    name: "金融",
    description: "金融级高可用 + 安全合规，异构资源统一管理",
    href: "/solutions/finance",
  },
  {
    id: "internet",
    name: "互联网",
    description: "弹性架构 + 智能存储，应对流量洪峰与海量数据",
    href: "/solutions/internet",
  },
  {
    id: "smart-city",
    name: "智慧城市",
    description: "AI + 无人机全场景智能监测，替代人工值守",
    href: "/solutions/smart-city",
  },
  {
    id: "manufacturing",
    name: "制造业",
    description: "工业数据就近处理与统一管理，AI 知识库赋能",
    href: "/solutions/manufacturing",
  },
  {
    id: "healthcare",
    name: "医疗",
    description: "存算一体加速 AI 辅助诊断，区域影像共享",
    href: "/solutions/healthcare",
  },
  {
    id: "autonomous-driving",
    name: "自动驾驶",
    description: "海量低成本存储，存算一体加速数据迭代",
    href: "/solutions/autonomous-driving",
  },
  {
    id: "embodied-ai",
    name: "具身智能",
    description: "边缘节点下沉毫秒级响应，存算一体端云协同",
    href: "/solutions/embodied-ai",
  },
  {
    id: "enterprise",
    name: "企业解决方案",
    description: "智能算力调度、统一集群管理、高可用架构",
    href: "/solutions/enterprise",
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
  general: {
    heroTagline: "通过统一算力调度与智能运维平台，支持 AI 推理、办公系统等多场景应用",
    painPoints: [
      {
        title: "业务中断风险高",
        desc: "推理服务中断影响 AI 业务连续性，单节点故障易致系统瘫痪与数据丢失。",
      },
      {
        title: "集群管理复杂",
        desc: "异构设备多，监控排障难度大，运维成本高。",
      },
      {
        title: "资源分配不合理",
        desc: "多项目争抢资源，利用率低、成本不可控。",
      },
    ],
    architecture: {
      description: "智能算力调度 → 统一集群管理 → 高可用架构三层体系",
      steps: [
        "智能算力调度：算力池化、按需分配、弹性伸缩，精细化计量与成本分摊",
        "统一集群管理：异构资源统一纳管，可视化监控，细粒度权限保障安全",
        "高可用架构：多节点部署 + 故障自动切换，分布式存储冗余备份",
      ],
    },
    advantages: [
      { icon: "Cpu", title: "智能算力调度", desc: "算力池化、按需分配、弹性伸缩，精细化计量与成本分摊，提升利用率" },
      { icon: "Monitor", title: "统一集群管理", desc: "异构资源统一纳管，可视化监控，细粒度权限保障安全，全链路日志与根因定位" },
      { icon: "Shield", title: "高可用架构", desc: "多节点部署 + 故障自动切换，分布式存储冗余备份，确保 RPO=0" },
    ],
  },
  government: {
    heroTagline: "打破数据壁垒，跨部门安全共享。数据不出域、授权可用，支撑一网通办与城市大脑",
    painPoints: [
      {
        title: "跨部门数据壁垒",
        desc: "各部门数据格式不一、系统孤立，难以形成城市治理合力。统一数据平台打通跨部门壁垒。",
      },
      {
        title: "安全合规压力",
        desc: "政务数据涉及公民隐私和国家安全，必须满足等保三级、数据不出域等严格合规要求。",
      },
    ],
    architecture: {
      description: "数据不出域 → 授权共享 → 统一运维的三层政务架构",
      steps: [
        "集约化建设：统一数据平台，跨部门安全共享，权限 + 脱敏 + 审计保障安全",
        "降本合规：数据不出域、授权可用，满足等保三级合规要求",
        "统一运维高效保障：集中监控，分钟级定位故障，保障政务服务连续性",
      ],
    },
    advantages: [
      { icon: "Database", title: "集约化建设", desc: "统一数据平台，打破部门壁垒，跨系统数据统一汇聚、清洗、分析" },
      { icon: "Shield", title: "安全合规", desc: "数据不出域 + 授权可用，权限 + 脱敏 + 审计，满足等保三级" },
      { icon: "Server", title: "统一运维", desc: "集中监控，分钟级定位故障，保障政务服务连续性" },
    ],
  },
  education: {
    heroTagline: "算力池化共享，统一数据平台，全托管免运维，保障科研稳定",
    painPoints: [
      {
        title: "算力资源分散",
        desc: "各院系独立采购服务器，资源利用率低，高峰时段算力不足。",
      },
      {
        title: "数据协作困难",
        desc: "科研数据分散存储，跨团队共享效率低，缺乏统一管理平台。",
      },
    ],
    architecture: {
      description: "算力池化 → 数据平台 → 全托管运维",
      steps: [
        "算力池化共享：按需申请使用，弹性调度 GPU/NPU 资源",
        "统一数据平台：便捷协作共享，版本管理与权限控制",
        "全托管免运维：无需自建机房，专业团队保障科研稳定性",
      ],
    },
    advantages: [
      { icon: "Cpu", title: "算力池化共享", desc: "GPU/NPU 资源统一池化，按需申请使用，弹性调度" },
      { icon: "Database", title: "统一数据平台", desc: "科研数据集中存储，便捷协作共享，版本管理与权限控制" },
      { icon: "Wrench", title: "全托管免运维", desc: "无需自建机房，专业团队 7×24 保障科研稳定性" },
    ],
  },
  "security-chain": {
    heroTagline: "视频安全上云，AI 智能分析，集中管控降本增效",
    painPoints: [
      {
        title: "传统监控成本高",
        desc: "自建 NVR/DVR 硬件投入大、维护复杂，录像易丢失难追溯。",
      },
      {
        title: "人工巡检效率低",
        desc: "多门店、多区域依赖人工查看，无法实时发现异常。",
      },
    ],
    architecture: {
      description: "视频上云 → AI 分析 → 集中管控",
      steps: [
        "视频安全上云：无需换摄像头，直上云端，纠删码备份杜绝录像丢失",
        "AI 智能分析：入侵、烟火、离岗实时识别，秒级检索回溯",
        "集中管控：总部统一监管，按需付费，减少硬件与运维投入",
      ],
    },
    advantages: [
      { icon: "Cloud", title: "视频安全上云", desc: "无需换摄像头，直上云端，纠删码备份，杜绝录像丢失" },
      { icon: "Eye", title: "AI 智能分析", desc: "入侵、烟火、离岗实时识别，秒级检索回溯" },
      { icon: "Layout", title: "集中管控降本", desc: "总部统一监管，按需付费，减少硬件与运维投入" },
    ],
  },
  finance: {
    heroTagline: "金融级高可用 + 安全合规，保障交易连续；异构资源统一管理，降低 TCO，满足强监管",
    painPoints: [
      {
        title: "业务连续性要求极高",
        desc: "交易系统中断秒级即造成重大损失，需要金融级高可用架构保障。",
      },
      {
        title: "强监管合规压力",
        desc: "需满足央行、银保监会等监管机构的加密、审计、留存要求。",
      },
    ],
    architecture: {
      description: "同城双活 → 异地灾备 → 全链路审计",
      steps: [
        "金融级高可用：同城双活 / 异地多活，故障秒切，RTO<30 秒，RPO=0",
        "安全合规可审计：加密、防篡改、全链路审计，满足监管留存要求",
        "统一运维与弹性扩容：异构资源集中管理，按需扩容，优化总体成本",
      ],
    },
    advantages: [
      { icon: "Gauge", title: "金融级高可用", desc: "同城双活 / 异地多活，故障秒切，RTO<30 秒，RPO=0" },
      { icon: "ShieldCheck", title: "安全合规可审计", desc: "加密、防篡改、全链路审计，满足监管留存要求" },
      { icon: "BarChart3", title: "统一运维弹性扩容", desc: "异构资源集中管理，按需扩容，优化总体成本" },
    ],
  },
  internet: {
    heroTagline: "弹性架构 + 智能存储，应对流量洪峰与海量数据，保障用户体验，加速业务创新",
    painPoints: [
      {
        title: "流量波动大弹性不足",
        desc: "节假日/大促流量峰值可达日常 10 倍，传统架构难以弹性应对。",
      },
      {
        title: "海量数据存储成本高",
        desc: "日增 TB 级日志和用户数据，传统集中式存储成本指数级增长。",
      },
      {
        title: "延迟卡顿影响留存",
        desc: "每增加 100ms 延迟，用户转化率显著下降，边缘就近服务是关键。",
      },
    ],
    architecture: {
      description: "弹性伸缩 → 冷热分层 → 分布式高可用",
      steps: [
        "弹性伸缩：从容应对波峰波谷，流量高峰自动扩容，回落自动缩容",
        "冷热分层：大幅降低存储成本，热数据高性能、冷数据低成本",
        "分布式高可用：多节点就近服务，故障自动切换，保障体验与口碑",
      ],
    },
    advantages: [
      { icon: "Maximize", title: "弹性伸缩", desc: "从容应对波峰波谷，按需付费，分钟级扩容" },
      { icon: "HardDrive", title: "冷热分层存储", desc: "热数据高性能、冷数据低成本，综合存储成本降低 90%" },
      { icon: "Network", title: "分布式高可用", desc: "多节点就近服务，故障自动切换，保障用户体验" },
    ],
  },
  "smart-city": {
    heroTagline: "AI + 无人机全场景智能监测，替代人工值守，实现全域覆盖",
    painPoints: [
      {
        title: "人工巡查覆盖不足",
        desc: "城市面积大、场景复杂，依赖人工巡查效率低、盲区多。",
      },
      {
        title: "事件响应不及时",
        desc: "交通违法、安全隐患发现滞后，缺乏实时预警机制。",
      },
    ],
    architecture: {
      description: "AI 识别 → 自动抓拍 → 集中管控",
      steps: [
        "全场景智能监测：AI + 无人机自动抓拍交通违法、预警安全隐患",
        "替代人工值守：AI 自动识别异常，大幅减少人力投入，降本增效",
        "集中管控平台：统一管理多区域、多设备数据，赋能科学决策",
      ],
    },
    advantages: [
      { icon: "Eye", title: "AI 全场景监测", desc: "无人机 + AI 自动抓拍交通违法、预警安全隐患" },
      { icon: "Zap", title: "替代人工值守", desc: "AI 自动识别异常，大幅减少人力投入，降本增效" },
      { icon: "Layout", title: "集中管控平台", desc: "统一管理多区域、多设备数据，赋能科学决策" },
    ],
  },
  manufacturing: {
    heroTagline: "通过分布式存储与边缘计算架构，实现工业数据就近处理与统一管理，结合 AI 知识库能力",
    painPoints: [
      {
        title: "数据孤岛严重",
        desc: "工厂数据分散，跨域传输延迟高，难以统一调度。ERP/MES/SCADA 系统数据割裂。",
      },
      {
        title: "知识难以沉淀复用",
        desc: "工艺经验、技术资料分散，查找低效，难以传承。",
      },
    ],
    architecture: {
      description: "存算一体就近处理 → 企业 AI 知识库 → 智能预警维护",
      steps: [
        "存算一体，数据就近处理：边缘节点内置 NPU，产线数据本地处理，分布式存储 PB 级扩展",
        "构建企业 AI 知识库：文档统一汇聚，智能问答快速检索，数据不出域保护核心工艺",
        "智能预警与预测性维护：实时分析设备状态，提前预警故障，减少非计划停机",
      ],
    },
    advantages: [
      { icon: "Cpu", title: "存算一体就近处理", desc: "边缘节点内置 NPU，产线数据本地处理，PB 级扩展" },
      { icon: "Database", title: "企业 AI 知识库", desc: "文档统一汇聚，智能问答快速检索，数据不出域" },
      { icon: "Activity", title: "预测性维护", desc: "实时分析设备状态，提前预警故障，减少非计划停机" },
    ],
  },
  healthcare: {
    heroTagline: "存算一体加速 AI 辅助诊断，4K 影像实时共享，区域影像资源池跨院安全共享",
    painPoints: [
      {
        title: "AI 诊断延迟高",
        desc: "传统云端推理延迟影响诊断效率，需要毫秒级本地推理。",
      },
      {
        title: "影像数据孤岛",
        desc: "各医院影像数据独立存储，跨院调阅困难，重复检查浪费资源。",
      },
    ],
    architecture: {
      description: "存算一体推理 → 分级存储 → 区域共享",
      steps: [
        "存算一体加速 AI 诊断：存储即计算，推理毫秒级返回",
        "4K 影像实时共享：提升远程诊疗体验，冷热数据分层降成本",
        "区域影像资源池：实现跨院安全共享，全链路加密脱敏审计合规",
      ],
    },
    advantages: [
      { icon: "Zap", title: "存算一体 AI 诊断", desc: "存储即计算，推理毫秒级返回，加速辅助诊断" },
      { icon: "Image", title: "区域影像共享", desc: "区域影像资源池实现跨院安全共享，减少重复检查" },
      { icon: "Shield", title: "全链路安全合规", desc: "加密、脱敏、操作审计，满足医疗隐私与监管要求" },
    ],
  },
  "autonomous-driving": {
    heroTagline: "海量低成本存储，存算一体减少数据搬迁，数据不出域保障合规安全",
    painPoints: [
      {
        title: "路采数据存储成本高",
        desc: "单车日采集 TB 级数据，传统存储成本高昂，难以长期留存。",
      },
      {
        title: "数据迭代效率低",
        desc: "数据从采集到训练需多次搬迁，链路长、效率低。",
      },
    ],
    architecture: {
      description: "低成本存储 → 存算一体 → 安全合规",
      steps: [
        "海量低成本存储：弹性扩展，冷热分层，大幅降低单位存储成本",
        "存算一体加速迭代：减少数据搬迁，就近计算，提升模型迭代效率",
        "数据不出域 + 细粒度权限：保障合规安全，满足车企数据安全要求",
      ],
    },
    advantages: [
      { icon: "HardDrive", title: "海量低成本存储", desc: "弹性扩展，冷热分层，大幅降低单位存储成本" },
      { icon: "Cpu", title: "存算一体加速迭代", desc: "减少数据搬迁，就近计算，提升模型迭代效率" },
      { icon: "Shield", title: "数据不出域合规", desc: "细粒度权限管控，满足车企数据安全要求" },
    ],
  },
  "embodied-ai": {
    heroTagline: "边缘节点下沉毫秒级响应，存算一体端云协同构建数据闭环",
    painPoints: [
      {
        title: "实时性要求极高",
        desc: "机器人控制需要毫秒级响应，中心云无法满足实时性要求。",
      },
      {
        title: "多模态数据闭环难",
        desc: "视觉、力觉、语音等多模态数据量大，闭环难打通。",
      },
      {
        title: "场景复杂部署难",
        desc: "工厂、家庭、户外等场景差异大，需多样化边缘节点适配。",
      },
    ],
    architecture: {
      description: "边缘节点下沉 → 存算一体 → 端云协同",
      steps: [
        "边缘节点下沉：实现毫秒级响应，满足机器人实时控制需求",
        "存算一体：端侧处理多模态数据，减少云端传输延迟",
        "端云协同闭环：多规格边缘节点适配多样环境，云端统一训练迭代",
      ],
    },
    advantages: [
      { icon: "Zap", title: "毫秒级响应", desc: "边缘节点下沉，满足机器人实时控制需求" },
      { icon: "Cpu", title: "存算一体闭环", desc: "端侧处理多模态数据，端云协同构建数据闭环" },
      { icon: "Box", title: "多规格适配", desc: "多规格边缘节点，适配工厂、家庭、户外等多样环境" },
    ],
  },
  enterprise: {
    heroTagline: "智能算力调度、统一集群管理、高可用架构，保障业务连续性，提升资源利用效率",
    painPoints: [
      {
        title: "多项目资源争抢",
        desc: "AI 推理、办公等多场景混部，资源分配不合理，利用率低。",
      },
      {
        title: "运维复杂度高",
        desc: "异构设备多，监控排障难度大，运维成本持续攀升。",
      },
    ],
    architecture: {
      description: "智能算力调度 → 统一集群管理 → 高可用架构",
      steps: [
        "智能算力调度：算力池化、按需分配、弹性伸缩，精细化计量与成本分摊",
        "统一集群管理：异构资源统一纳管，可视化监控，全链路日志与根因定位",
        "高可用架构：多节点部署 + 故障自动切换，分布式存储冗余备份 RPO=0",
      ],
    },
    advantages: [
      { icon: "Cpu", title: "智能算力调度", desc: "算力池化、按需分配、弹性伸缩，提升利用率" },
      { icon: "Monitor", title: "统一集群管理", desc: "异构资源统一纳管，可视化监控，全链路日志" },
      { icon: "Shield", title: "高可用业务不间断", desc: "多节点部署 + 故障自动切换，RPO=0" },
    ],
  },
};

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
  // 智慧水务
  { id: "water-level", name: "水位检测", category: "智慧水务", description: "检测和识别道路表面是否存在积水区域，助力城市内涝预警与道路通行安全管理。", tags: ["水文监测与防汛", "轻量型"] },
  { id: "person-falling", name: "人员落水识别", category: "智慧水务", description: "实时检测监控画面中人员意外落水事件，触发预警，提升救援响应速度。", tags: ["安全预警", "轻量型"] },
  { id: "water-segmentation", name: "水体分割", category: "智慧水务", description: "自动识别并标注画面中的水体区域，助力水域范围管理与水环境监测。", tags: ["水域管理与测绘", "轻量型"] },
  { id: "river-pollution", name: "无人机航拍河道污染", category: "智慧水务", description: "通过无人机拍摄识别河道污染物（漂浮物、废弃船等），实现大范围水环境快速监测与治理。", tags: ["水环境监测", "轻量型"] },
  // 智慧城市
  { id: "traffic-accident", name: "交通事故识别", category: "智慧城市", description: "检测道路或监控画面中的车辆碰撞等交通事件，实现交通事故自动识别与告警。", tags: ["道路安全", "轻量型"] },
  { id: "red-light", name: "闯红灯识别", category: "智慧城市", description: "检测车辆在红灯状态下违规通行的行为，助力交通违法行为监测与取证。", tags: ["交通执法", "轻量型"] },
  { id: "fall-detection", name: "跌倒检测", category: "智慧城市", description: "实时检测监控画面中人员跌倒事件，快速触发预警，提升老人/公共场所的安全保障能力。", tags: ["公共安全", "轻量型"] },
  { id: "fatigue-driving", name: "疲劳驾驶检测", category: "智慧城市", description: "通过分析驾驶员面部特征识别疲劳状态，提前预警风险，有效防范道路交通事故。", tags: ["道路安全", "轻量型"] },
  // 智慧医疗
  { id: "skin-disease", name: "白癜风与银屑病识别", category: "智慧医疗", description: "对皮肤图像中的疑似病变区域进行定位，实现白癜风与银屑病病灶区域自动检测。", tags: ["皮肤疾病筛查", "轻量型"] },
  { id: "brain-ct", name: "脑部 CT 肿瘤识别", category: "智慧医疗", description: "辅助识别脑部 CT 图像中的异常区域，为医生诊断提供参考支持，提升筛查效率。", tags: ["医学影像辅助诊断", "标准型"] },
  // 智慧农业
  { id: "drone-animal", name: "无人机航拍动物识别", category: "智慧农业", description: "识别并统计无人机航拍画面中的动物目标，助力农林生态监测与野生动物保护。", tags: ["农林巡检", "标准型"] },
  { id: "farmland-surface", name: "无人机航拍农田地表状态识别", category: "智慧农业", description: "自动识别农田地表状态，辅助农业生产管理和种植情况分析，助力精准农业。", tags: ["农田管理", "标准型"] },
];

export const modelCategories = ["全部", "智慧城市", "智慧水务", "智慧医疗", "智慧农业"];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}

export function getSolutionDetail(id: string): SolutionDetail | undefined {
  return solutionDetails[id];
}
