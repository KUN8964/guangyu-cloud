export interface GPUConfig {
  id: string;
  name: string;
  cpu: string;
  gpu: string;
  memory: string;
  storage: string;
  tflops: number;
  available: boolean;
}

export const gpuConfigs: GPUConfig[] = [
  {
    id: "h100-v1",
    name: "H100",
    cpu: "Intel Xeon Platinum 8480+ ×2",
    gpu: "NVIDIA H100 80GB SXM5 ×8",
    memory: "32×64GB DDR5",
    storage: "4×3.84TB NVMe",
    tflops: 1979,
    available: true,
  },
  {
    id: "h100-v2",
    name: "H100",
    cpu: "Intel Xeon Platinum 8468 2.1GHz ×2",
    gpu: "NVIDIA H100 80GB SXM5 ×8",
    memory: "32×64GB DDR5",
    storage: "4×3.84TB U.2 SSD NVMe",
    tflops: 1979,
    available: true,
  },
  {
    id: "h200",
    name: "H200",
    cpu: "Intel Xeon Platinum 8558 2.1G 48C/96T ×2",
    gpu: "NVIDIA HGX H200 8-GPU SXM",
    memory: "32×64GB DDR5",
    storage: "4×3.84TB NVMe SSD",
    tflops: 1979,
    available: true,
  },
  {
    id: "a100",
    name: "A100 80G",
    cpu: "Intel Xeon 6338 ×2",
    gpu: "NVIDIA A100 80GB NVLink 8 GPU",
    memory: "16×64GB DDR4 3200",
    storage: "7.68TB NVMe",
    tflops: 312,
    available: true,
  },
  {
    id: "ascend-910b2",
    name: "昇腾 910B2",
    cpu: "KunPeng 920 48核/2.6GHz ×4",
    gpu: "昇腾 910B2 64GB ×8",
    memory: "2048GB",
    storage: "2×3.84TB NVMe SSD",
    tflops: 376,
    available: true,
  },
  {
    id: "4090-v1",
    name: "RTX 4090",
    cpu: "AMD EPYC 7513 2.6GHz 32C/64T ×2",
    gpu: "RTX 4090 24GB ×8",
    memory: "16×32GB DDR4",
    storage: "768TB NVMe U.2 SSD",
    tflops: 330,
    available: false,
  },
  {
    id: "4090-v2",
    name: "RTX 4090",
    cpu: "Intel XEON GOLD 5418Y 24C/48T ×2",
    gpu: "RTX 4090 24GB ×8",
    memory: "8×64GB DDR5",
    storage: "7.68TB NVMe U.2 SSD",
    tflops: 330,
    available: false,
  },
  {
    id: "4090-v3",
    name: "RTX 4090",
    cpu: "AMD EPYC 7KGZ 48C/96T ×2",
    gpu: "RTX 4090 24GB ×8",
    memory: "8×64GB DDR4",
    storage: "384TB NVMe U.2 SSD",
    tflops: 330,
    available: false,
  },
];

export const gpuUseCases = [
  { title: "大模型训练与微调", desc: "支持千亿参数大模型的分布式训练、LoRA/QLoRA 微调" },
  { title: "AI 推理服务", desc: "高并发模型推理，支持 LLM、文生图、语音识别等场景" },
  { title: "科学计算", desc: "分子动力学模拟、气象预测、基因测序等高性能计算" },
  { title: "渲染与仿真", desc: "影视特效渲染、工业仿真、数字孪生可视化" },
];
