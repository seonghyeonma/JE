# JE Labs SEO 优化计划

> 网站：<https://www.jelabs.top/>
> 建立日期：2026-07-27
> 当前阶段：规划完成，尚未开始修改网站代码
> 维护方式：任务完成并通过验收后，将 `- [ ]` 改为 `- [x]`

## 1. 优化目标

本计划不以 Lighthouse SEO 100 分作为最终目标，而是围绕以下四个结果推进：

1. 统一正式域名信号，避免搜索引擎把 Vercel 临时域名识别为主版本。
2. 建立可被搜索引擎分别收录的服务、案例和内容页面。
3. 提升移动端页面体验和 Core Web Vitals。
4. 通过 Google Search Console 持续追踪收录、关键词、点击和转化。

### 目标指标

| 指标 | 当前基线 | 第一阶段目标 | 长期目标 |
| --- | ---: | ---: | ---: |
| 正确 canonical 覆盖率 | 待修复 | 100% | 100% |
| sitemap 中正式域名占比 | 0% | 100% | 100% |
| 可索引站内页面数 | 1 | 8–12 | 20+ |
| 移动端 Lighthouse Performance | 60（单次实验室测试） | 80+ | 90+ |
| 移动端 LCP | 13.5 秒（单次实验室测试） | < 4 秒 | Core Web Vitals 达到 Good |
| 非品牌自然搜索曝光 | 待从 GSC 获取 | 建立基线 | 持续增长 |
| 自然搜索咨询转化 | 尚未追踪 | 建立追踪 | 按月增长 |

> Lighthouse 数值会随网络和测试环境波动。正式判断以 Search Console 的真实用户数据、收录状态和搜索表现为准。

## 2. 已完成的基线审计

- [x] 检查首页 HTTP 状态、HTTPS 和主域名跳转
- [x] 检查首页 title、description、H1 和基础语义结构
- [x] 检查 `robots.txt`
- [x] 检查 `sitemap.xml`
- [x] 检查 canonical、Open Graph 和 JSON-LD 中的域名
- [x] 检查正式域名、Vercel 域名和 `/index.html` 的重复访问情况
- [x] 检查图片 alt、图片体积和尺寸属性
- [x] 检查站内链接与当前可索引页面数量
- [x] 补测移动端 Lighthouse
- [x] 检查公开搜索是否能够发现正式域名首页
- [x] 确认当前网站尚未接入 GA4
- [ ] 获取 Google Search Console 的完整数据基线
- [ ] 获取当前自然搜索咨询/转化基线

## 3. 当前主要问题

### P0：正式域名信号冲突

当前 canonical、`og:url`、JSON-LD、`robots.txt`、`sitemap.xml` 和 `llms.txt` 中仍存在 `https://je-kohl.vercel.app/`。Vercel 临时域名和 `/index.html` 也可以直接返回与正式首页相同的内容。

风险：

- 搜索引擎可能选择错误的 canonical。
- 正式域名和临时域名的权重可能无法稳定合并。
- sitemap、结构化数据与页面声明互相冲突。
- 后续新增页面时可能扩大重复内容问题。

### P1：网站只有一个可索引页面

服务、案例和 Insights 都位于首页锚点中。当前 sitemap 只有一个 URL，Insights 内容还直接跳转到 X。

风险：

- 无法用独立页面匹配不同搜索意图。
- 服务关键词、地区关键词和案例关键词都集中在首页。
- 缺少可持续获得长尾搜索流量的内容资产。
- 内部链接和主题权威度难以建立。

### P1：移动端性能不足

一次移动端 Lighthouse 测试结果为 Performance 60、FCP 4.8 秒、LCP 13.5 秒。初始页面资源约 2.65 MiB，主要浪费来自尺寸过大的团队头像和阻塞渲染的字体。

风险：

- 移动端访问体验较慢。
- Core Web Vitals 可能不理想。
- 较慢的加载会影响跳出率、咨询转化和搜索表现。

### P0：移动端和平板端 Header 菜单无法打开

当前移动端和平板端的 Header 菜单按钮无法正常打开导航。该问题会阻断用户访问服务、案例、Insights、FAQ 和联系入口，需要在继续扩展页面前优先解决。

风险：

- 移动端和平板端用户无法使用主要导航。
- 重要页面和 CTA 的发现率与转化率下降。
- 导航组件可能存在 JavaScript、层级、点击区域或响应式状态错误。
- 无障碍键盘操作和屏幕阅读器状态可能不正确。

### P2：搜索结果与品牌展示信息不完整

- 首页 H1 是品牌口号，没有直接表达核心业务类别。
- meta description 较长，搜索结果中可能被截断或改写。
- 缺少 favicon。
- 缺少 `og:image` 和 `twitter:image`。
- 缺少 `WebSite` 结构化数据。
- Organization `sameAs` 中存在返回 404 的 `/home.html`。
- `llms.txt` 中存在临时域名和失效 URL。
- 部分服务内容被永久设置为不可见。

## 4. 第一阶段：修复域名与索引信号（P0）

目标：所有技术信号统一指向 `https://www.jelabs.top/`。

### 实施任务

- [ ] 将首页 canonical 改为 `https://www.jelabs.top/`
- [ ] 将首页 `og:url` 改为 `https://www.jelabs.top/`
- [ ] 将 Organization JSON-LD 的 `@id` 和 `url` 改为正式域名
- [ ] 将 ProfessionalService JSON-LD 的 `@id` 和 `provider.@id` 改为正式域名
- [ ] 将 FAQPage JSON-LD 的 `@id` 改为正式域名
- [ ] 将 `robots.txt` 中的 Sitemap 地址改为正式域名
- [ ] 将 `sitemap.xml` 中的 URL 改为正式域名
- [ ] 将 sitemap 的 `lastmod` 更新为真实页面更新时间
- [ ] 将 `llms.txt` 中的临时域名改为正式域名
- [ ] 删除或替换 `llms.txt` 中失效的 `/home.html`
- [ ] 删除或替换 Organization `sameAs` 中失效的 `/home.html`
- [ ] 将 LinkedIn 公司主页加入 Organization `sameAs`
- [ ] 配置 `https://je-kohl.vercel.app/*` 到正式域名对应页面的永久重定向
- [ ] 配置 `/index.html` 到 `/` 的永久重定向
- [ ] 确认 HTTP、HTTPS、www、非 www 最终只保留一个正式 URL

### 验收标准

- [ ] `https://www.jelabs.top/` 返回 200
- [ ] 首页源代码中的 canonical 与当前正式 URL 完全一致
- [ ] `https://jelabs.top/` 永久跳转到 `https://www.jelabs.top/`
- [ ] `http://jelabs.top/` 最终跳转到 `https://www.jelabs.top/`
- [ ] `https://www.jelabs.top/index.html` 永久跳转到首页
- [ ] Vercel 临时域名不再返回可独立索引的重复页面
- [ ] `robots.txt` 只声明正式域名 sitemap
- [ ] sitemap 中只包含正式、可访问、可索引且 canonical 正确的 URL
- [ ] Search Console URL Inspection 显示用户声明 canonical 为正式域名
- [ ] Search Console URL Inspection 显示 Google 选择 canonical 为正式域名
- [ ] Search Console 中重新提交 sitemap 并显示读取成功

## 5. 第二阶段：完善首页 On-page SEO（P1）

### 页面定位

首页建议聚焦一个核心主题：

> Strategic Growth and AI Marketing Partner for Frontier Tech Companies

品牌口号可以保留，但不应承担唯一 H1 的搜索语义。

### 实施任务

- [ ] 确认首页唯一的核心关键词与搜索意图
- [ ] 重写首页 H1，使其同时表达业务类别、目标客户和差异化
- [ ] 将品牌口号保留为副标题或视觉文案
- [ ] 检查 title 是否自然包含核心业务关键词
- [ ] 将 meta description 改成简洁、可读、有行动意图的搜索摘要
- [ ] 避免在 title、H1 和正文中过度重复关键词
- [ ] 确保首屏可快速说明“是谁、服务谁、解决什么问题”
- [ ] 将被永久隐藏的核心服务内容恢复为用户可访问内容，或移动到独立服务页
- [ ] 给主要服务区、案例区和 Insights 区增加到独立页面的内部链接
- [ ] 检查所有链接锚文本是否能描述目标页面

### 建议首页元数据方向

以下仅作为内容方向，正式实施前需结合目标关键词确认：

- Title：`AI Marketing & Global Growth for Frontier Tech | JE Labs`
- H1：`Strategic Growth and AI Marketing for Frontier Tech Companies`
- Description：说明 AI/frontier tech、global GTM、KOL、developer ecosystem、15+ markets，并加入明确咨询意图。

### 验收标准

- [ ] 首页只有一个 H1
- [ ] H1 能直接说明 JE Labs 的核心业务
- [ ] title、H1、description 各自自然，不是机械堆砌关键词
- [ ] description 在移动端搜索结果中仍能传达完整价值
- [ ] 首页核心服务内容对用户和搜索引擎均可见
- [ ] 首页至少链接到核心服务页、案例页和 Insights 页

## 6. 第三阶段：建立可索引页面架构（P1）

目标：从单页展示网站升级为具备清晰主题结构的搜索型网站。

### 第一批建议页面

| 优先级 | 建议 URL | 页面主题 | 主要搜索意图 | 状态 |
| --- | --- | --- | --- | --- |
| P1 | `/services/ai-marketing/` | AI Marketing | 寻找 AI 营销服务商 | [ ] |
| P1 | `/services/global-gtm/` | Global GTM Strategy | AI/科技公司全球市场进入 | [ ] |
| P1 | `/services/developer-relations/` | Developer Relations | 开发者生态与 DevRel 服务 | [ ] |
| P1 | `/services/kol-marketing/` | Global KOL Marketing | 全球 KOL 与技术影响力营销 | [ ] |
| P1 | `/case-studies/surf-ai/` | SURF AI 案例 | AI 用户增长案例 | [ ] |
| P1 | `/case-studies/publicai/` | PublicAI 案例 | 全球市场扩张案例 | [ ] |
| P1 | `/case-studies/moss-ai/` | MOSS AI 案例 | 开发者营销案例 | [ ] |
| P1 | `/insights/ai-marketing-apac/` | APAC AI Marketing | 亚太 AI 市场进入策略 | [ ] |
| P2 | `/insights/geo-for-ai-brands/` | GEO Strategy | AI 品牌的 GEO 策略 | [ ] |
| P2 | `/about/` | JE Labs 与团队 | 品牌、团队和专业背景 | [ ] |

> URL 在实施前需要最终确认。确认后应保持稳定，避免频繁改名和重定向。

### 每个服务页的标准结构

- [ ] 唯一且清晰的 title
- [ ] 唯一 meta description
- [ ] 一个明确 H1
- [ ] 目标客户和典型问题
- [ ] 服务范围和交付物
- [ ] JE Labs 的方法与差异化
- [ ] 真实案例、过程或结果证据
- [ ] 常见问题
- [ ] 明确 CTA
- [ ] 指向相关案例、Insights 和其他服务的内部链接
- [ ] 正确 canonical
- [ ] Breadcrumb 及对应结构化数据

### 每个案例页的标准结构

- [ ] 客户背景与市场环境
- [ ] 具体挑战
- [ ] JE Labs 的判断和策略
- [ ] 执行过程
- [ ] 可验证结果及统计口径
- [ ] 客户或第三方证据链接
- [ ] 服务分类与地区信息
- [ ] 相关服务页内部链接
- [ ] 明确咨询 CTA
- [ ] 适合分享的封面图和 Open Graph 信息

### 每篇 Insights 的标准结构

- [ ] 明确作者和作者背景
- [ ] 发布日期和实质更新日期
- [ ] 原创分析、数据、案例或方法论
- [ ] 回答一个清晰搜索问题
- [ ] 避免只复制或改写 X 内容
- [ ] 链接到相关服务和案例
- [ ] 引用可靠来源
- [ ] 提供明确的下一步行动
- [ ] 配置 Article 或 BlogPosting 结构化数据
- [ ] 提供独立 canonical、title、description 和分享图片

## 7. 第四阶段：移动端性能优化（P1）

### 图片

- [ ] 将团队头像缩放到合理的源文件尺寸
- [ ] 将团队头像转换为 WebP 或 AVIF
- [ ] 为头像提供适合高分屏的响应式图片
- [ ] 为非首屏头像添加懒加载
- [ ] 为所有图片添加明确 `width` 和 `height`
- [ ] 优化首页 Logo 的实际尺寸
- [ ] 压缩案例和活动照片
- [ ] 检查首屏是否加载了不需要的图片

### 字体与渲染

- [ ] 删除未使用的字体家族和字重
- [ ] 评估是否需要整套 Noto Sans KR
- [ ] 对字体进行子集化或本地托管
- [ ] 降低 Google Fonts 对首屏渲染的阻塞
- [ ] 检查首屏 reveal 动画是否延迟主要内容显示
- [ ] 确保禁用 JavaScript 时仍能读取主要内容
- [ ] 减少不必要的主线程动画计算

### 验收标准

- [ ] 移动端 Lighthouse Performance 达到 80+
- [ ] 移动端 LCP 进入 4 秒以内
- [ ] CLS 保持在 Good 范围
- [ ] 首页首次加载资源明显下降
- [ ] Search Console Core Web Vitals 不出现 Poor URL
- [ ] 移动端正文、导航、CTA 和 FAQ 均可正常使用

## 8. 移动端与平板端 Header 菜单修复（P0）

目标：确保 Header 导航在手机和平板的常见宽度、浏览器和横竖屏状态下均可稳定打开、操作和关闭。

### 问题定位

- [ ] 在当前线上版本复现手机端菜单无法打开的问题
- [ ] 在当前线上版本复现平板端菜单无法打开的问题
- [ ] 记录问题发生的 viewport、浏览器和设备方向
- [ ] 检查菜单按钮是否绑定正确的点击事件
- [ ] 检查初始化脚本是否在菜单 DOM 创建后执行
- [ ] 检查菜单按钮或导航是否被其他元素遮挡
- [ ] 检查 `z-index`、`pointer-events`、`opacity` 和 `visibility`
- [ ] 检查移动端媒体查询是否错误隐藏导航
- [ ] 检查打开状态 class、attribute 与 CSS 选择器是否一致
- [ ] 检查页面中是否存在重复 ID 或重复事件绑定
- [ ] 检查 JavaScript 控制台是否存在阻止菜单初始化的错误
- [ ] 检查从手机宽度切换到平板或桌面宽度时是否遗留错误状态

### 菜单交互修复

- [ ] 确保点击菜单按钮一次即可打开导航
- [ ] 确保再次点击菜单按钮可以关闭导航
- [ ] 确保点击导航链接后菜单关闭并跳转到正确位置或页面
- [ ] 确保点击菜单外部区域可以关闭导航
- [ ] 确保按下 `Escape` 可以关闭导航
- [ ] 如果菜单覆盖整个页面，打开时锁定背景滚动
- [ ] 菜单关闭后恢复页面滚动位置和滚动能力
- [ ] 屏幕尺寸跨越响应式断点时正确重置菜单状态
- [ ] 横竖屏切换后菜单保持可用，不出现残留遮罩
- [ ] 菜单展开时不产生水平滚动条
- [ ] 菜单不得遮挡关闭按钮和主要导航项
- [ ] 菜单动画不得延迟链接的可点击状态

### 无障碍与语义要求

- [ ] 菜单触发元素使用可操作的 `button`
- [ ] 菜单按钮包含清晰的 accessible name
- [ ] 使用 `aria-expanded` 正确同步打开和关闭状态
- [ ] 使用 `aria-controls` 指向对应导航容器
- [ ] 菜单打开后焦点进入导航或首个可操作元素
- [ ] 菜单关闭后焦点返回菜单按钮
- [ ] 全屏菜单按合理顺序管理键盘焦点
- [ ] 所有导航项均使用真实、可抓取的 `<a href="...">`
- [ ] 键盘用户可以访问所有菜单链接
- [ ] 屏幕阅读器能够识别导航区域和菜单状态
- [ ] 在 `prefers-reduced-motion` 下减少不必要的菜单动画

### 响应式测试矩阵

| 场景 | 建议宽度/设备 | 核心检查 | 状态 |
| --- | --- | --- | --- |
| 小屏手机 | 320px | 按钮、菜单宽度、文字换行、关闭行为 | [ ] |
| 常见手机 | 375px / 390px | 打开、关闭、滚动锁定、CTA | [ ] |
| 大屏手机 | 430px | 菜单布局、点击区域、横竖屏 | [ ] |
| 小型平板 | 768px | 响应式断点、菜单定位、导航完整性 | [ ] |
| 常见平板 | 820px | 竖屏/横屏切换、遮罩和滚动恢复 | [ ] |
| 大型平板 | 1024px | 平板菜单与桌面导航切换 | [ ] |
| 桌面临界宽度 | Header 断点上下各 1px | 状态重置、无闪烁、无重复导航 | [ ] |
| iOS Safari | 真实设备或可靠模拟 | 触摸、viewport 高度、背景滚动 | [ ] |
| Android Chrome | 真实设备或可靠模拟 | 触摸、返回操作、滚动和链接跳转 | [ ] |

### 验收标准

- [ ] 手机和平板端菜单可以稳定打开和关闭
- [ ] 所有导航链接均可点击并到达正确目标
- [ ] Contact/Start a Conversation CTA 可以正常访问
- [ ] 连续快速点击不会造成菜单状态错乱
- [ ] 横竖屏切换不会遗留遮罩、滚动锁定或隐藏导航
- [ ] Header 响应式断点上下均通过测试
- [ ] iOS Safari 和 Android Chrome 均通过测试
- [ ] 键盘、`Escape` 和焦点返回行为正确
- [ ] `aria-expanded` 与实际菜单状态一致
- [ ] 修复后没有新增控制台错误
- [ ] 修复后没有明显 CLS 或性能回退

## 9. 第五阶段：结构化数据与品牌展示（P2）

- [ ] 新增 `WebSite` JSON-LD
- [ ] `WebSite.name` 设置为 `JE Labs`
- [ ] `WebSite.url` 设置为正式首页
- [ ] 为 Organization 添加正式 Logo URL
- [ ] 清理 Organization `sameAs`
- [ ] 确保 `sameAs` 只包含真实组织资料页
- [ ] 检查 Organization 员工数量、创始时间等信息是否准确
- [ ] 确保 JSON-LD 中的业务声明与页面可见内容一致
- [ ] 为服务页规划 Service 结构化数据
- [ ] 为案例或文章页规划 BreadcrumbList
- [ ] 为 Insights 规划 Article/BlogPosting
- [ ] 使用 Schema Markup Validator 验证
- [ ] 使用 Google Rich Results Test 验证支持的类型
- [ ] 不将 FAQPage 富摘要作为商业网站的核心增长目标

## 10. 第六阶段：SERP、社交分享与品牌一致性（P2）

- [ ] 添加符合 Google 要求的 favicon
- [ ] 添加 Apple Touch Icon
- [ ] 设计默认 Open Graph 分享图片
- [ ] 添加 `og:image`
- [ ] 添加 `twitter:image`
- [ ] 检查 `og:title`、`og:description` 和 `og:url`
- [ ] 检查 LinkedIn、X、Telegram、BusinessWire 等外部资料中的正式网址
- [ ] 确保公司名称统一使用 `JE Labs`
- [ ] 检查邮箱大小写和联系方式表达是否一致
- [ ] 检查首页、LinkedIn 和媒体资料中的团队规模、成立时间、案例数字是否一致
- [ ] 更新 `llms.txt` 中的品牌信息和正式页面链接

## 11. 第七阶段：国际化与地区搜索（可选）

只有在 JE Labs 确定要获取对应语言的自然搜索流量时再实施，不应只为了 SEO 机械翻译。

- [ ] 确认主要目标市场和语言优先级
- [ ] 确认是否需要中文、韩文或日文页面
- [ ] 为每种语言制定独立关键词研究
- [ ] 由熟悉当地市场的人完成内容本地化
- [ ] 为语言版本配置独立 URL
- [ ] 配置双向 hreflang
- [ ] 保证不同语言 canonical 指向各自语言版本
- [ ] sitemap 中纳入正式语言页面
- [ ] 检查移动端不同语言的排版和字体性能

## 12. Google Search Console 配置与验证

### 上线前

- [ ] 确认 `jelabs.top` Domain Property 已验证
- [ ] 导出当前三个月的查询、页面、国家和设备数据
- [ ] 记录首页当前 Google-selected canonical
- [ ] 记录当前已收录页面数
- [ ] 记录当前品牌词和非品牌词曝光
- [ ] 记录当前移动端 Core Web Vitals

### P0 修复上线后

- [ ] 提交正式 sitemap
- [ ] 对首页执行 URL Inspection
- [ ] 请求重新抓取首页
- [ ] 检查临时域名是否逐步退出索引
- [ ] 检查 `/index.html` 是否被识别为首页重定向
- [ ] 检查 canonical 冲突警告

### 新页面上线后

- [ ] 将新页面加入 sitemap
- [ ] 检查每页 HTTP 状态与 canonical
- [ ] 检查页面是否允许索引
- [ ] 检查渲染后的正文是否完整
- [ ] 检查内部链接能否发现新页面
- [ ] 请求抓取首批核心页面
- [ ] 每周记录收录、曝光、点击和平均排名

## 13. Google Analytics 4（GA4）与转化追踪

目标：区分“获得自然搜索流量”和“自然搜索带来有效咨询”，建立可以长期比较的 SEO 转化基线。

> GA4 不会直接提高搜索排名。它用于衡量访客来源、落地页表现、用户路径和咨询转化。`page_view`、`session_start`、`first_visit` 等事件通常由 GA4 自动采集，不应重复发送。

### GA4 账号与数据流

- [ ] 确认使用现有 GA4 Property，还是为 JE Labs 新建独立 Property
- [ ] 为 `https://www.jelabs.top/` 创建 Web Data Stream
- [ ] 确认 Property 时区与业务汇报时区一致
- [ ] 确认 Property 货币设置
- [ ] 记录 Measurement ID 和配置负责人
- [ ] 选择一种主要安装方式：Google Tag Manager 或直接使用 Google tag
- [ ] 避免同时通过多种方式重复安装 GA4
- [ ] 在所有正式页面安装相同的 GA4 数据流
- [ ] 启用并检查 Enhanced Measurement
- [ ] 配置内部团队流量过滤规则
- [ ] 根据实际引荐来源配置不需要的 referral

### 建议事件模型

| 事件名称 | 触发条件 | 建议参数 | 是否设为 Key Event | 状态 |
| --- | --- | --- | --- | --- |
| `page_view` | 页面加载或 History 状态改变 | GA4 自动参数 | 否 | [ ] |
| `cta_click` | 点击主要 CTA | `cta_name`、`cta_location`、`page_type` | 否 | [ ] |
| `contact_click` | 点击邮箱或 Telegram | `contact_method`、`cta_location` | 否 | [ ] |
| `service_click` | 点击进入具体服务页 | `service_name`、`link_location` | 否 | [ ] |
| `case_study_click` | 点击进入案例页 | `case_study_name`、`link_location` | 否 | [ ] |
| `insight_click` | 点击进入 Insights | `insight_name`、`link_location` | 否 | [ ] |
| `form_start` | 用户开始填写咨询表单 | `form_id`、`page_type` | 否 | [ ] |
| `generate_lead` | 表单成功提交或预约确认 | `lead_source`、`form_id` | 是 | [ ] |

### 事件实施规则

- [ ] 优先使用 GA4 推荐事件；没有适合的推荐事件时再创建自定义事件
- [ ] 所有自定义事件使用小写英文和下划线命名
- [ ] 不重复发送 GA4 已自动采集的 `page_view`
- [ ] 只有确认提交成功或预约成功时才触发 `generate_lead`
- [ ] 邮箱和 Telegram 点击只作为中间转化，不直接视为有效线索
- [ ] 为 CTA、联系方式和页面类型使用一致的参数值
- [ ] 不在事件名称、参数或 URL 中发送姓名、邮箱、电话等个人身份信息
- [ ] 为需要进入标准报告的自定义参数创建 Custom Dimensions
- [ ] 将 `generate_lead` 标记为 GA4 Key Event
- [ ] 记录事件名称、触发条件、参数和负责人，避免后续重复定义

### GA4 与 Search Console 关联

- [ ] 确认 GA4 Web Data Stream 与 Search Console Property 覆盖同一正式域名
- [ ] 在 GA4 中关联 `jelabs.top` Search Console Domain Property
- [ ] 发布 Search Console 报告集合
- [ ] 检查 Google Organic Search Queries 报告
- [ ] 检查 Google Organic Search Traffic 报告
- [ ] 确认可以按 Landing Page、Country 和 Device 查看自然搜索表现
- [ ] 建立“自然搜索落地页 → CTA → 有效咨询”的分析路径

### 隐私与合规

- [ ] 确认目标市场对分析 Cookie 和用户同意的要求
- [ ] 如适用，配置 Cookie Consent Banner
- [ ] 如适用，配置 Google Consent Mode
- [ ] 在隐私政策中说明 GA4 的数据收集目的
- [ ] 确认 GA4 数据保留周期
- [ ] 确认不会通过事件参数收集个人身份信息
- [ ] 在用户拒绝非必要 Cookie 时验证 GA4 行为符合设定

### GA4 验收标准

- [ ] 使用 Tag Assistant 确认 Google tag 只加载一次
- [ ] GA4 Realtime 能看到测试访问
- [ ] GA4 DebugView 能看到测试事件和参数
- [ ] 每次页面访问只产生一次预期 `page_view`
- [ ] CTA、邮箱和 Telegram 点击事件触发正确
- [ ] 测试表单成功后只产生一次 `generate_lead`
- [ ] Key Event 配置正确
- [ ] 自然搜索访问的 Source/Medium 归因正常
- [ ] GA4 与 Search Console 的关联状态正常
- [ ] Search Console 报告开始产生数据
- [ ] GA4 安装没有明显降低页面性能
- [ ] 事件参数中没有个人身份信息

## 14. 数据追踪与汇报

### 建议追踪事件

- [ ] 邮箱点击
- [ ] Telegram 点击
- [ ] Start a Conversation CTA 点击
- [ ] 服务页到联系区的转化
- [ ] 案例页到服务页的点击
- [ ] Insights 到服务页的点击
- [ ] 自然搜索带来的有效咨询

### 每月 SEO 汇报

- [ ] 自然搜索点击
- [ ] 自然搜索曝光
- [ ] 品牌词与非品牌词占比
- [ ] 排名前 3、前 10、前 20 的关键词数
- [ ] 获得曝光的页面数
- [ ] 已收录页面数
- [ ] 点击率变化
- [ ] Core Web Vitals
- [ ] 自然搜索咨询数
- [ ] 自然搜索有效商机数

## 15. 推荐执行顺序

### 第 1 周：先解决错误信号

- [ ] 完成所有 P0 域名、canonical、sitemap 和重定向修复
- [ ] 修复移动端与平板端 Header 菜单无法打开的问题
- [ ] 完成 Header 菜单响应式、无障碍和多浏览器验收
- [ ] 完成 Search Console 验证
- [ ] 创建或确认 GA4 Property 与 Web Data Stream
- [ ] 安装 GA4 并完成 Realtime/DebugView 基础验收
- [ ] 关联 GA4 与 Search Console
- [ ] 记录 GA4 与 Search Console 初始数据基线
- [ ] 完成 favicon、Open Graph 和基础结构化数据清理

### 第 2 周：修复首页与移动性能

- [ ] 完成首页定位、H1 和 description 调整
- [ ] 完成图片优化
- [ ] 完成字体和首屏渲染优化
- [ ] 完成 CTA、联系方式和 `generate_lead` 事件追踪
- [ ] 完成 GA4 Key Event 配置
- [ ] 完成移动端复测
- [ ] 确认性能优化没有破坏 Header 菜单交互

### 第 3–4 周：建设高价值页面

- [ ] 发布 3–4 个核心服务页
- [ ] 发布 3 个完整案例页
- [ ] 建立清晰的首页和服务页内部链接

### 第 2 个月：建设内容主题集群

- [ ] 发布首批 3–5 篇原创 Insights
- [ ] 将 X 内容升级为完整站内文章
- [ ] 建立服务页、案例页和 Insights 之间的主题链接

### 第 3 个月：根据数据迭代

- [ ] 根据 GSC 查询数据优化标题和页面内容
- [ ] 合并或调整没有明确搜索意图的页面
- [ ] 扩展表现最好的服务和地区主题
- [ ] 评估是否启动多语言页面

## 16. 发布前统一验收清单

- [ ] 页面返回预期 HTTP 状态
- [ ] 页面可被 robots 抓取
- [ ] 页面没有意外 `noindex`
- [ ] canonical 指向正式 URL
- [ ] title 唯一且描述准确
- [ ] description 唯一且自然
- [ ] 只有一个主要 H1
- [ ] 正文对用户可见
- [ ] 图片有合适 alt、尺寸和压缩
- [ ] 页面至少有一个站内入口链接
- [ ] 页面包含指向相关内容的内部链接
- [ ] 页面包含明确 CTA
- [ ] Open Graph 信息完整
- [ ] 结构化数据与可见内容一致
- [ ] 页面已加入 sitemap
- [ ] 桌面端和移动端均通过人工检查
- [ ] 移动端与平板端 Header 菜单可以正常打开、关闭和跳转
- [ ] Header 菜单通过键盘、焦点和 `aria-expanded` 验收
- [ ] Header 菜单通过断点、横竖屏、iOS Safari 和 Android Chrome 验收
- [ ] Lighthouse 没有新增严重问题
- [ ] Search Console 可以正常抓取
- [ ] GA4 已覆盖新页面且没有重复加载
- [ ] GA4 Realtime/DebugView 中事件触发正确
- [ ] 页面 CTA 与咨询转化可以归因到 Landing Page
- [ ] 页面没有向 GA4 发送个人身份信息

## 17. 进度记录

| 日期 | 阶段 | 完成内容 | 验收结果 | 负责人 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 2026-07-27 | 基线审计 | 完成技术、内容架构和移动端初步审计 | 已完成 | Codex | 尚未修改代码 |
|  |  |  |  |  |  |

## 18. 完成定义

只有同时满足以下条件，SEO 第一轮优化才算完成：

- [ ] P0 域名和 canonical 问题全部修复并通过线上验证
- [ ] 移动端与平板端 Header 菜单问题已修复并通过完整测试矩阵
- [ ] Search Console 显示正式域名为 Google-selected canonical
- [ ] 至少发布 4 个核心服务页和 3 个案例页
- [ ] 至少发布 3 篇完整站内 Insights
- [ ] sitemap 只包含正式且可索引的页面
- [ ] 移动端性能达到阶段目标
- [ ] GA4 已完成安装、去重和 Realtime/DebugView 验收
- [ ] GA4 已与 Search Console 正确关联
- [ ] `generate_lead` 已设置为 Key Event 并完成测试
- [ ] 已建立自然搜索咨询转化追踪
- [ ] 已形成至少一个月的 SEO 数据记录
- [ ] 所有已完成任务均在本文档中打勾并记录验收结果
