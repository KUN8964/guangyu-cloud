export interface PromotionDetail {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  tagColor: string;
  bgTag: string;
  endDate: string;
  heroImage?: string;
  body: string; // markdown
}

export const promotions: PromotionDetail[] = [
  {
    id: "summer-gpu",
    title: "夏日算力狂欢季",
    subtitle: "GPU 算力限时 5 折",
    desc: "H100 / A100 / 昇腾 910B2 全线产品限时优惠，新用户首月 5 折，老用户续费 7 折。",
    tag: "限时优惠",
    tagColor: "text-syntax-keyword",
    bgTag: "bg-syntax-keyword/10 border-syntax-keyword/30",
    endDate: "2026.08.31",
    body: `## 活动详情

光宇云夏日算力狂欢季正式开启！全线 GPU 算力产品限时特惠，助力您的 AI 训练与推理业务。

### 优惠力度

| 产品 | 原价 | 活动价 | 折扣 |
|------|------|--------|------|
| H100 80GB SXM5 ×8 | ¥28,000/月 | ¥14,000/月 | **5折** |
| H200 141GB SXM5 ×8 | ¥35,000/月 | ¥17,500/月 | **5折** |
| A100 80GB NVLink ×8 | ¥18,000/月 | ¥9,000/月 | **5折** |
| 昇腾 910B2 ×8 | ¥12,000/月 | ¥8,400/月 | **7折** |
| RTX 4090 ×8 | ¥8,000/月 | ¥5,600/月 | **7折** |

> 💡 **新用户专享**：首月 5 折，再送 ¥500 体验金

### 活动规则

1. 活动时间：即日起至 2026 年 8 月 31 日
2. 新用户定义：2026 年 6 月 1 日后注册的用户
3. 每个用户限购 2 台，超出部分按标准价格计费
4. 优惠不可与其他活动叠加使用

### 适用场景

- 🧠 **大模型训练** — H100/H200 集群，千亿参数模型分布式训练
- 🚀 **AI 推理服务** — 高并发低延迟，支持 LLM / 文生图 / 语音识别
- 🔬 **科学计算** — 分子动力学模拟、气象预测、基因测序
- 🎬 **渲染与仿真** — 影视特效渲染、工业仿真、数字孪生

### 如何参与

1. 注册光宇云账号并完成实名认证
2. 进入控制台 → 算力集群 → 选择配置
3. 结算时自动应用折扣
4. 有疑问？联系客服：support@guangyu-cloud.com

![算力集群](/images/promo-gpu-cluster.png)
`,
  },
  {
    id: "new-user-gift",
    title: "新用户注册礼包",
    subtitle: "注册即送 ¥500 体验金",
    desc: "完成注册 + 实名认证，即获 ¥500 体验金 + 50GB 免费存储空间，无需绑定信用卡。",
    tag: "长期活动",
    tagColor: "text-success",
    bgTag: "bg-success/10 border-success/30",
    endDate: "长期有效",
    body: `## 活动详情

欢迎加入光宇云！新用户注册即享丰厚礼包，零门槛体验全系产品。

### 礼包内容

| 权益 | 额度 | 说明 |
|------|------|------|
| 体验金 | ¥500 | 可用于所有产品消费 |
| 免费存储 | 50GB | 分布式云存储，AES-256 加密 |
| API 调用 | 10 万次 | 覆盖所有模型 API |
| 技术支持 | 7×24h | 社区支持 + 工单 |

### 领取条件

1. 在光宇云官网完成注册
2. 完成手机号验证
3. 完成实名认证（企业用户需完成企业认证）
4. 礼包自动发放至账户，无需手动领取

### 体验金使用说明

- 体验金有效期为领取后 **90 天**
- 可用于购买算力、存储、模型服务等任意产品
- 不可提现、不可转让
- 消费时优先抵扣体验金余额

### 免费存储说明

- 50GB 永久免费，超出部分按 ¥0.15/GB/月计费
- 支持 S3 兼容 API、WebDAV、NFS 协议
- 数据自动分片加密，四重冗余保障

> 🎁 **邀请好友奖励**：每成功邀请一位好友注册并完成首单，双方各获 ¥200 代金券，上不封顶！

### 快速开始

\`\`\`bash
# 注册账号
$ curl -X POST https://api.guangyu-cloud.com/v1/register \\
  -d '{"phone": "138xxxx8888", "code": "123456"}'

# 领取礼包（自动发放）
$ curl https://api.guangyu-cloud.com/v1/account/gift \\
  -H "Authorization: Bearer $TOKEN"

# 查看余额
$ curl https://api.guangyu-cloud.com/v1/account/balance \\
  -H "Authorization: Bearer $TOKEN"
\`\`\`
`,
  },
  {
    id: "model-free-trial",
    title: "AI 模型免费试用",
    subtitle: "12 款行业模型 0 元体验",
    desc: "智慧水务、智慧医疗、智慧农业等 12 款边缘 AI 模型免费试用 30 天，不限调用次数。",
    tag: "限时优惠",
    tagColor: "text-syntax-keyword",
    bgTag: "bg-syntax-keyword/10 border-syntax-keyword/30",
    endDate: "2026.09.30",
    body: `## 活动详情

光宇云联合生态伙伴，开放 12 款行业 AI 模型免费试用。零成本接入，即刻体验边缘 AI 能力。

### 试用模型清单

#### 🌊 智慧水务（4 款）

| 模型 | 精度 | 延迟 | 适用场景 |
|------|------|------|----------|
| 水位检测 | mAP 92% | <30ms | 城市内涝预警 |
| 人员落水识别 | 召回率 98% | <30ms | 水域安全监控 |
| 水体分割 | mIoU 89% | <40ms | 水环境监测 |
| 河道污染识别 | mAP 87% | <50ms | 无人机巡检 |

#### 🏙️ 智慧城市（4 款）

| 模型 | 精度 | 延迟 | 适用场景 |
|------|------|------|----------|
| 交通事故识别 | mAP 91% | <30ms | 道路安全监控 |
| 闯红灯识别 | 准确率 96% | <25ms | 交通执法 |
| 跌倒检测 | 召回率 95% | <30ms | 公共安全保障 |
| 疲劳驾驶检测 | 准确率 93% | <50ms | 道路安全 |

#### 🏥 智慧医疗（2 款）

| 模型 | 精度 | 延迟 | 适用场景 |
|------|------|------|----------|
| 白癜风/银屑病识别 | AUC 0.94 | <80ms | 皮肤疾病筛查 |
| 脑部 CT 肿瘤识别 | 灵敏度 91% | <120ms | 医学影像辅助诊断 |

#### 🌾 智慧农业（2 款）

| 模型 | 精度 | 延迟 | 适用场景 |
|------|------|------|----------|
| 航拍动物识别 | mAP 88% | <60ms | 农林生态监测 |
| 农田地表状态识别 | mIoU 85% | <60ms | 精准农业 |

### 试用规则

- 试用期 **30 天**，自部署之日起计算
- 不限 API 调用次数
- 支持 REST / gRPC / WebSocket 三种协议
- 试用结束后可无缝升级至付费版本

### 部署方式

\`\`\`bash
# 通过 CLI 一键部署模型到边缘节点
$ ssh edge-node-01 --deploy-model \\
  --model water-level-detect \\
  --trial

# 调用推理
$ curl -X POST https://edge-node-01/api/infer \\
  -F "image=@scene.jpg" \\
  -F "model=water-level-detect"
\`\`\`

> 📞 **技术支持**：部署遇到问题？7×24 小时工单支持，或联系 tech@guangyu-cloud.com
`,
  },
  {
    id: "partner-referral",
    title: "推荐有礼 · 双向返佣",
    subtitle: "推荐朋友各得 ¥200 代金券",
    desc: "邀请好友注册并完成首单，双方各获 ¥200 代金券。上不封顶，多推多得。",
    tag: "长期活动",
    tagColor: "text-success",
    bgTag: "bg-success/10 border-success/30",
    endDate: "长期有效",
    body: `## 活动详情

邀请好友使用光宇云，双方都能获得奖励！推荐越多，奖励越多，上不封顶。

### 奖励规则

| 邀请人数 | 单人奖励 | 累计奖励 |
|----------|----------|----------|
| 第 1-5 人 | ¥200/人 | 最高 ¥1,000 |
| 第 6-20 人 | ¥250/人 | 最高 ¥3,750 |
| 第 21-50 人 | ¥300/人 | 最高 ¥9,000 |
| 50 人以上 | ¥350/人 | **上不封顶** |

> 💰 被邀请人同样获得 ¥200 代金券，双方受益！

### 参与流程

1. **获取邀请链接** — 登录控制台 → 推荐有礼 → 复制专属邀请链接
2. **分享给好友** — 通过微信、邮件、二维码等方式分享
3. **好友注册** — 好友通过你的链接注册并完成实名认证
4. **好友完成首单** — 好友完成任意金额的首笔消费（最低 ¥1）
5. **双方获奖** — 代金券自动发放至双方账户

### 奖励说明

- 代金券有效期 **180 天**
- 可用于抵扣任意产品消费
- 不可提现、不可转让
- 奖励在好友完成首单后 **24 小时内** 到账

### 邀请排行榜（月度）

| 排名 | 用户 | 邀请人数 | 获得奖励 |
|------|------|----------|----------|
| 🥇 | 张** | 47 人 | ¥14,100 |
| 🥈 | 李** | 32 人 | ¥9,600 |
| 🥉 | 王** | 28 人 | ¥8,400 |

### 推广素材

我们为你准备了全套推广素材：

- 📱 朋友圈海报模板
- 💬 微信群话术模板  
- 📧 邮件邀请模板
- 🔗 专属落地页（自动生成）

登录控制台 → 推荐有礼 → 推广素材 即可下载。

\`\`\`bash
# 获取专属邀请链接
$ curl https://api.guangyu-cloud.com/v1/referral/link \\
  -H "Authorization: Bearer $TOKEN"

# 查看邀请记录
$ curl https://api.guangyu-cloud.com/v1/referral/history \\
  -H "Authorization: Bearer $TOKEN"

# 查看累计奖励
$ curl https://api.guangyu-cloud.com/v1/referral/rewards \\
  -H "Authorization: Bearer $TOKEN"
\`\`\`
`,
  },
];

export function getPromotionById(id: string): PromotionDetail | undefined {
  return promotions.find((p) => p.id === id);
}
