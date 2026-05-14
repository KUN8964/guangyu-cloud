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
