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
    id: "h100-1",
    name: "H100",
    cpu: "Intel Xeon Platinum 8480+ ×2",
    gpu: "NVIDIA H100 80GB SXM5 ×8",
    memory: "32×64GB DDR5",
    storage: "4×3.84TB NVMe",
    tflops: 1979,
    available: true,
  },
  {
    id: "h200-1",
    name: "H200",
    cpu: "Intel Xeon Platinum 8558 2.1G ×2",
    gpu: "NVIDIA HGX H200 8-GPU SXM",
    memory: "32×64GB DDR5",
    storage: "4×3.84TB NVMe SSD",
    tflops: 1979,
    available: true,
  },
  {
    id: "a100-1",
    name: "A100 80G",
    cpu: "Intel Xeon 6338 ×2",
    gpu: "NVIDIA A100 80GB NVLink ×8",
    memory: "16×64GB DDR4 3200",
    storage: "7.68TB NVMe",
    tflops: 312,
    available: true,
  },
  {
    id: "ascend-1",
    name: "昇腾 910B2",
    cpu: "KunPeng 920 48核 ×4",
    gpu: "昇腾 910B2 64GB ×8",
    memory: "2048GB",
    storage: "2×3.84TB NVMe SSD",
    tflops: 376,
    available: true,
  },
  {
    id: "4090-1",
    name: "RTX 4090",
    cpu: "AMD EPYC 7513 32C/64T ×2",
    gpu: "RTX 4090 24GB ×8",
    memory: "16×32GB DDR4",
    storage: "768TB NVMe U.2 SSD",
    tflops: 330,
    available: false,
  },
];

export const gpuComparison = gpuConfigs.map((g) => ({
  name: g.name,
  tflops: g.tflops,
}));
