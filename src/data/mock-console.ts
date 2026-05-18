export interface ConsoleStats {
  /** 在线节点数 */
  onlineNodes: number;
  /** 总节点数 */
  totalNodes: number;
  /** 已用存储 (GB) */
  storageUsed: number;
  /** 总存储配额 (GB) */
  storageQuota: number;
  /** 本月算力消耗 (TFLOPS·h) */
  computeUsed: number;
  /** 本月算力配额 */
  computeQuota: number;
  /** 活跃任务数 */
  activeJobs: number;
  /** 30天用量趋势（每天一个点） */
  usageHistory: { day: string; storage: number; compute: number }[];
  /** 最近事件 */
  recentEvents: ConsoleEvent[];
}

export interface ConsoleEvent {
  id: string;
  type: "deploy" | "storage" | "compute" | "alert" | "billing";
  message: string;
  time: string;
}

/** 模拟仪表板数据 */
export const mockConsoleStats: ConsoleStats = {
  onlineNodes: 128,
  totalNodes: 150,
  storageUsed: 426.8,
  storageQuota: 1024,
  computeUsed: 182.3,
  computeQuota: 500,
  activeJobs: 12,
  usageHistory: generateUsageHistory(),
  recentEvents: [
    {
      id: "e1",
      type: "deploy",
      message: "模型 llama-3-8b 已部署至 edge-node-047",
      time: "3 分钟前",
    },
    {
      id: "e2",
      type: "storage",
      message: "分片备份完成 — 节点集群 AP-Southeast",
      time: "12 分钟前",
    },
    {
      id: "e3",
      type: "compute",
      message: "推理任务 #2847 完成，耗时 2.3s，Token 消耗 1,024",
      time: "28 分钟前",
    },
    {
      id: "e4",
      type: "alert",
      message: "节点 edge-node-103 延迟升高至 180ms，已自动降级",
      time: "1 小时前",
    },
    {
      id: "e5",
      type: "billing",
      message: "本月账单已生成 — 存储 ¥1,280 + 算力 ¥3,640",
      time: "3 小时前",
    },
  ],
};

function generateUsageHistory() {
  const days = 30;
  const history: { day: string; storage: number; compute: number }[] = [];
  let storage = 200;
  let compute = 80;
  for (let i = days; i >= 1; i--) {
    storage += Math.random() * 8 + 2;
    compute += Math.random() * 5 + 1;
    history.push({
      day: `${i} 天前`,
      storage: Math.round(storage * 10) / 10,
      compute: Math.round(compute * 10) / 10,
    });
  }
  return history;
}
