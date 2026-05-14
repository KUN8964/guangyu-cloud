# 光宇云 - 子页面补齐计划

## Phase 1: 产品详情页 `/products/[id]`
5个产品，共用路由 `src/app/products/[id]/page.tsx`（generateStaticParams）

每个产品页结构：
- Hero Banner（产品名 + 副标题 + 霓虹背景）
- 核心能力（3-4 个要点，图标 + 说明）
- 技术规格表
- 适用场景
- CTA Strip
- 相关产品（底部导航）

## Phase 2: 方案详情页 `/solutions/[id]`
4个行业，共用路由 `src/app/solutions/[id]/page.tsx`

每个方案页结构：
- Hero Banner（行业名 + 标语）
- 行业痛点（2-3 个卡片）
- 方案架构（文字描述 + 流程图）
- 核心优势
- CTA Strip

## Phase 3: 合作伙伴页 `/partners`
独立页面 `src/app/partners/page.tsx`

结构：
- Hero（合作伙伴标题）
- Logo 网格（增强版，hover 效果）
- 合作模式（4种模式）
- 加入我们 CTA

## 设计原则
- 复用现有 globals.css 的设计 token 和工具类
- 保持 Mosaic Retro / Synthwave 风格一致
- 所有数据静态，从 src/data/ 读取
- 移动端响应式
- framer-motion 动画沿用现有模式
