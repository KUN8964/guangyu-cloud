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
    heroTagline: "数据永不丢失，安全无处不在",
    features: [
      { icon: "Lock", title: "AES-256 分片加密", desc: "文件在客户端完成分片和加密，服务端仅存储加密碎片，零知识架构确保数据隐私" },
      { icon: "HardDrive", title: "四重冗余保障", desc: "每个数据分片自动复制 4 份，分布在不同地理节点，单节点故障数据无损" },
      { icon: "MapPin", title: "数据不出域", desc: "支持按地域、行业合规要求指定数据存储范围，满足 GDPR / 等保三级等合规需求" },
      { icon: "TrendingDown", title: "降低 90% 带宽成本", desc: "智能缓存 + 就近访问 + 增量同步，相比传统中心化存储大幅降低带宽消耗" },
    ],
    specs: [
      { label: "加密标准", value: "AES-256-GCM + 客户端密钥管理" },
      { label: "冗余策略", value: "4 副本 + Reed-Solomon 纠删码" },
      { label: "单文件上限", value: "5TB" },
      { label: "总存储容量", value: "弹性扩展，PB 级" },
      { label: "访问协议", value: "S3 兼容 API / WebDAV / NFS" },
      { label: "SLA", value: "99.99% 数据持久性" },
    ],
    useCases: ["企业档案长期归档", "视频监控数据存储", "大数据分析数据湖", "跨地域协同办公"],
  },
  "distributed-compute": {
    heroTagline: "让 AI 算力像电力一样即插即用",
    features: [
      { icon: "Cpu", title: "边缘实时推理", desc: "模型自动分发到最近边缘节点，消除中心化瓶颈，支持数千 QPS 并发推理" },
      { icon: "Layers", title: "模型预缓存", desc: "高频模型智能预加载到边缘节点，首次推理零冷启动，模型版本一键切换" },
      { icon: "BarChart3", title: "统一调度监控", desc: "可视化算力资源大盘，实时监控 GPU 利用率、推理延迟、QPS，智能弹性伸缩" },
      { icon: "Gauge", title: "低时延高并发", desc: "P99 延迟 < 50ms，支持万级并发，自动负载均衡与故障转移" },
    ],
    specs: [
      { label: "调度引擎", value: "自研分布式调度器 + K8s 编排" },
      { label: "支持框架", value: "ONNX Runtime / TensorRT / OpenVINO" },
      { label: "推理延迟", value: "P50 < 15ms, P99 < 50ms" },
      { label: "并发能力", value: "单集群 10,000+ QPS" },
      { label: "GPU 支持", value: "NVIDIA H100/H200/A100 + 昇腾 910B2" },
      { label: "API 协议", value: "REST / gRPC / WebSocket 流式推理" },
    ],
    useCases: ["大模型推理服务", "实时推荐系统", "AI 内容审核", "自动驾驶感知推理"],
  },
  "ai-knowledge": {
    heroTagline: "企业自己的私有 ChatGPT，数据不出门",
    features: [
      { icon: "Database", title: "存算一体架构", desc: "存储与计算深度融合，避免数据搬运开销，检索速度提升 10 倍" },
      { icon: "Maximize", title: "PB 级灵活扩展", desc: "从 TB 到 PB 无缝扩展，无需迁移数据或架构改造，按需付费" },
      { icon: "Home", title: "本地化部署", desc: "支持私有云、混合云部署，数据完全自主可控，满足金融/政务合规要求" },
      { icon: "Users", title: "多租户安全", desc: "RBAC 权限模型 + 数据隔离 + 操作审计，支持集团多子公司共享一套系统" },
    ],
    specs: [
      { label: "检索引擎", value: "自研向量检索引擎 + 倒排索引混合" },
      { label: "文档格式", value: "PDF / Word / Excel / PPT / Markdown / 图片 OCR" },
      { label: "Embedding 模型", value: "BGE / M3E / text2vec 系列" },
      { label: "LLM 集成", value: "支持 通义千问 / 文心 / GLM / Llama 等本地部署" },
      { label: "最小部署", value: "1 台边缘服务器即可起步" },
      { label: "检索延迟", value: "< 200ms (百万级文档)" },
    ],
    useCases: ["企业制度问答", "产品技术文档查询", "合同条款检索", "客服知识库"],
  },
  "enterprise-drive": {
    heroTagline: "企业文件管理，安全与效率兼得",
    features: [
      { icon: "Cloud", title: "自研云底座", desc: "非开源魔改，从协议层到存储引擎完全自研，无第三方依赖风险" },
      { icon: "ShieldCheck", title: "双重加密传输存储", desc: "TLS 1.3 传输加密 + AES-256 存储加密，文件在服务器端以密文形态存在" },
      { icon: "FileKey", title: "精细化权限管控", desc: "支持按部门/角色/用户/文件粒度设置权限，操作日志完整可追溯" },
      { icon: "ArrowUpDown", title: "弹性扩容", desc: "按需扩展存储节点，分钟级生效，支持混合云部署架构" },
    ],
    specs: [
      { label: "云底座", value: "光宇自研 GuangyuFS 文件系统" },
      { label: "加密方案", value: "TLS 1.3 + AES-256-GCM" },
      { label: "文件版本", value: "无限版本历史，智能回收站" },
      { label: "同步方式", value: "增量同步 + 断点续传 + 冲突自动处理" },
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
