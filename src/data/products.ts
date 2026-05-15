export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  href: string;
}

export const products: Product[] = [
  {
    id: "edge-server",
    name: "智能边缘服务器",
    subtitle: "Smart Edge Server",
    description: "搭载 RK3588 NPU 的分布式边缘节点，提供低时延、高并发的近场 AI 推理算力。",
    highlights: ["RK3588 NPU 加速", "推理延迟 < 50ms", "数千节点高可用", "数据本地处理"],
    href: "/products/edge-server",
  },
  {
    id: "cloud-storage",
    name: "分布式云存储",
    subtitle: "Distributed Cloud Storage",
    description: "基于大规模分布式节点的分片加密存储，AES-256 加密，四重冗余，数据永不丢失。",
    highlights: ["AES-256 分片加密", "四重冗余保障", "数据不出域", "降低 90% 带宽成本"],
    href: "/products/cloud-storage",
  },
  {
    id: "distributed-compute",
    name: "分布式算力",
    subtitle: "Distributed Computing",
    description: "边缘 AI 推理平台，支持模型预缓存与快速部署，统一调度与实时监控。",
    highlights: ["边缘实时推理", "模型预缓存", "统一调度监控", "低时延高并发"],
    href: "/products/distributed-compute",
  },
  {
    id: "ai-knowledge",
    name: "AI 知识库",
    subtitle: "AI Knowledge Base",
    description: "基于存算一体架构的企业级 AI 知识库，本地化部署，PB 级灵活扩展。",
    highlights: ["存算一体架构", "PB 级扩展", "本地化部署", "多租户安全"],
    href: "/products/ai-knowledge",
  },
  {
    id: "enterprise-drive",
    name: "企业云盘",
    subtitle: "Enterprise Cloud Drive",
    description: "自研云底座，传输存储双重加密，权限管控加操作可追溯，弹性扩容。",
    highlights: ["自研云底座", "双重加密", "权限管控", "弹性扩容"],
    href: "/products/enterprise-drive",
  },
];

/* ═══════════════════════════════════════════
   产品详情页补充数据
   ═══════════════════════════════════════════ */

export interface ProductFeature {
  icon: string;   // lucide icon name
  title: string;
  desc: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetail {
  heroTagline: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  useCases: string[];
}

export const productDetails: Record<string, ProductDetail> = {
  "edge-server": {
    heroTagline: "将 AI 推理推向边缘，让每一毫秒都算数",
    features: [
      { icon: "Cpu", title: "RK3588 NPU 加速", desc: "内置 6 TOPS NPU，支持 INT8/INT16/FP16 混合精度推理，单节点可同时承载 3-5 个轻量模型" },
      { icon: "Zap", title: "超低延迟推理", desc: "数据就近处理，端到端延迟 < 50ms，满足工业质检、自动驾驶等实时场景需求" },
      { icon: "Network", title: "大规模分布式组网", desc: "支持数千节点灵活组网，自动发现、健康检查、故障转移，可用性 99.99%" },
      { icon: "Shield", title: "数据本地处理", desc: "原始数据不出厂区/园区，满足数据合规要求，降低网络传输成本" },
    ],
    specs: [
      { label: "处理器", value: "Rockchip RK3588 (4×Cortex-A76 + 4×Cortex-A55)" },
      { label: "NPU 算力", value: "6 TOPS (INT8)" },
      { label: "内存", value: "8GB / 16GB LPDDR4x" },
      { label: "存储", value: "64GB eMMC + M.2 NVMe 扩展" },
      { label: "网络", value: "双千兆以太网 + Wi-Fi 6 + 4G/5G 可选" },
      { label: "功耗", value: "< 15W（典型负载）" },
    ],
    useCases: ["工业视觉质检", "智慧工地安全监测", "零售客流分析", "农业无人机识别"],
  },
  "cloud-storage": {
    heroTagline: "分布式分片加密云存储，基于大规模分布式节点架构，提供高安全、高可用、低成本的企业级数据存储服务",
    features: [
      { icon: "Lock", title: "文件自动分片，AES-256 加密", desc: "文件自动分片，AES‑256 加密，无单点泄露" },
      { icon: "HardDrive", title: "四重冗余保障", desc: "四重冗余保障，数据永不丢失" },
      { icon: "MapPin", title: "数据不出域", desc: "数据不出域，满足合规要求" },
      { icon: "TrendingDown", title: "弹性扩展", desc: "弹性扩展，降低 90% 带宽成本" },
    ],
    specs: [
      { label: "核心功能", value: "动态分片加密存储｜多副本冗余自愈｜数据本地留存｜海量文件高效管理｜全链路加密校验" },
      { label: "产品定位", value: "数据本地留存、合规可控" },
      { label: "访问协议", value: "S3 兼容 API / WebDAV / NFS" },
      { label: "SLA", value: "99.99% 数据持久性" },
    ],
    useCases: ["企业数据备份与长期归档", "AI 模型与核心数据安全托管", "物联网设备海量数据存储", "智慧城市视频监控存储"],
  },
  "distributed-compute": {
    heroTagline: "基于分布式边缘 AI 平台，提供低时延、高并发、就近部署的 AI 推理算力服务",
    features: [
      { icon: "Zap", title: "推理延迟降低 70%+", desc: "推理延迟降低 70%+，响应 < 50ms" },
      { icon: "Cpu", title: "RK3588 NPU 硬件加速", desc: "RK3588 NPU 硬件加速，算力独享" },
      { icon: "Network", title: "数千节点分布式高可用", desc: "数千节点分布式高可用" },
      { icon: "Shield", title: "数据不上云", desc: "数据不上云，隐私更安全" },
    ],
    specs: [
      { label: "核心功能", value: "边缘实时 AI 推理｜模型预缓存与快速部署｜实时视频智能分析｜统一调度与监控｜低时延高并发处理" },
      { label: "GPU 支持", value: "NVIDIA H100/H200/A100 + 昇腾 910B2" },
      { label: "推理延迟", value: "P50 < 15ms, P99 < 50ms" },
      { label: "API 协议", value: "REST / gRPC / WebSocket 流式推理" },
    ],
    useCases: ["智慧交通与城市安防", "智慧水务与水环境治理", "工业物联网与智能制造", "智慧园区与楼宇管理"],
  },
  "ai-knowledge": {
    heroTagline: "基于分布式存算一体架构，为企业提供安全、高效、本地化部署的 AI 知识库解决方案",
    features: [
      { icon: "Database", title: "分布式存储底座", desc: "依托分布式存储，支持 PB 级灵活扩展，数据实时同步与就地计算，避免跨网传输" },
      { icon: "Cpu", title: "边缘节点下沉", desc: "边缘节点内置 NPU，为 AI 模型提供高能效算力，在工厂、园区等现场灵活部署" },
      { icon: "Shield", title: "安全可信的存算环境", desc: "支持数据不出域、本地化处理，海量数据就近存储，天然具备异地容灾能力" },
    ],
    specs: [
      { label: "核心功能", value: "高效数据协同：助力员工高效获取数据 / 低门槛 AI 构建：快速构建企业专属 AI 智能体 / 多租户安全管理：保障共用场景稳定运行" },
      { label: "文档格式", value: "PDF / Word / Excel / PPT / Markdown / 图片 OCR" },
      { label: "Embedding 模型", value: "BGE / M3E / text2vec 系列" },
      { label: "LLM 集成", value: "支持 通义千问 / 文心 / GLM / Llama 等本地部署" },
    ],
    useCases: ["企业制度问答", "产品技术文档查询", "合同条款检索", "客服知识库"],
  },
  "enterprise-drive": {
    heroTagline: "自研云底座，企业级安全，灵活可扩展",
    features: [
      { icon: "Cloud", title: "自研云底座", desc: "基于自有云产品研发，兼容性强、稳定性拉满" },
      { icon: "ShieldCheck", title: "企业级安全", desc: "传输存储双重加密，权限管控 + 操作可追溯" },
      { icon: "ArrowUpDown", title: "灵活可扩展", desc: "随企业规模弹性扩容，贴合业务成长需求" },
    ],
    specs: [
      { label: "核心功能", value: "自研 GuangyuFS 文件系统｜TLS 1.3 + AES-256-GCM 加密｜无限版本历史｜增量同步 + 断点续传" },
      { label: "权限模型", value: "RBAC + ABAC 混合权限" },
      { label: "客户端", value: "Web / Windows / macOS / iOS / Android" },
    ],
    useCases: ["设计文件协作", "合同集中管理", "项目资料归档", "跨部门文件共享"],
  },
};

/* ═══════════════════════════════════════════
   辅助：根据 ID 获取产品 + 详情
   ═══════════════════════════════════════════ */

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails[id];
}
