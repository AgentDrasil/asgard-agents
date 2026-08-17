/**
 * Sample Markdown documents with various Mermaid diagram types
 */
const EXAMPLES = {
  'all-in-one': `# 🚀 Mermaid Markdown Studio 综合演示

这是一个支持 Markdown 与 **Mermaid 图表渲染** 的现代化交互式工作台。

## ✨ 核心特性
- 📐 **完整 Mermaid 生态**：流程图、时序图、架构图、甘特图、类图、思维导图等
- 🔍 **图表独立缩放与拖拽**：每个图表均支持滑轮放大缩小、鼠标拖拽漫游
- 📺 **沉浸式全屏模式**：一键全屏展开图表，支持高清 SVG / PNG 导出
- 🌓 **深浅色主题适配**：图表颜色与背景自动联动切换

---

## 1. 业务流程与架构流转 (Flowchart)

\`\`\`mermaid
flowchart TD
    Start([用户发起请求]) --> Auth{身份鉴权}
    Auth -- 失败 --> Reject[返回 401 Unauthorized]
    Auth -- 成功 --> Route{路由分发}

    subgraph 微服务集群
        Route --> ServiceA[订单服务]
        Route --> ServiceB[支付中心]
        Route --> ServiceC[库存计算引擎]
        ServiceA --> DB[(PostgreSQL 数据库)]
        ServiceB --> Cache[(Redis 缓存集群)]
        ServiceC --> Queue>Kafka 消息总线]
    end

    Queue --> Worker[异步消费任务]
    Worker --> EndNode([处理完成并推送通知])

    classDef highlight fill:#1f6feb,stroke:#388bfd,stroke-width:2px,color:#fff;
    class Start,EndNode highlight;
\`\`\`

---

## 2. API 调用时序图 (Sequence Diagram)

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor Client as 客户端 (Web / App)
    participant Gateway as API 网关
    participant Auth as OAuth2 认证服务
    participant Backend as 业务后端
    participant DB as 数据库

    Client->>Gateway: POST /api/v1/order/create
    activate Gateway
    Gateway->>Auth: 校验 Token 有效性
    activate Auth
    Auth-->>Gateway: Token 验证通过 (User: 10086)
    deactivate Auth

    Gateway->>Backend: 转发请求并附加用户信息
    activate Backend
    Backend->>DB: 开启事务写入订单数据
    activate DB
    DB-->>Backend: 写入成功 (Tx Committed)
    deactivate DB
    Backend-->>Gateway: 返回订单创建结果
    deactivate Backend

    Gateway-->>Client: 200 OK (OrderID: ORD_9982)
    deactivate Gateway
\`\`\`

---

## 3. 代码示例与数据表格

以下展示标准 Markdown 的代码高亮与表格渲染：

\`\`\`javascript
// 初始化 Mermaid 渲染引擎
mermaid.initialize({
  startOnLoad: false,
  theme: isDark ? 'dark' : 'default',
  securityLevel: 'loose',
  fontFamily: 'Inter, sans-serif'
});
\`\`\`

| 功能模块 | 状态 | 缩放支持 | 全屏支持 | 主题跟随 |
| :--- | :---: | :---: | :---: | :---: |
| 流程图 Flowchart | ✅ 已就绪 | ✅ 支持 | ✅ 支持 | ✅ 自动跟随 |
| 时序图 Sequence | ✅ 已就绪 | ✅ 支持 | ✅ 支持 | ✅ 自动跟随 |
| 状态机 State | ✅ 已就绪 | ✅ 支持 | ✅ 支持 | ✅ 自动跟随 |
| 甘特图 Gantt | ✅ 已就绪 | ✅ 支持 | ✅ 支持 | ✅ 自动跟随 |
`,

  'flowchart': `# 📊 流程图与子图示例 (Flowchart)

\`\`\`mermaid
graph TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
\`\`\`

### 复杂决策树与多路径分支

\`\`\`mermaid
flowchart LR
    A[开始需求分析] --> B(技术选型方案)
    B --> C{是否满足高性能要求?}
    C -- 是 --> D[采用分布式微服务]
    C -- 否 --> E[采用轻量单体架构]
    D --> F[灰度发布测试]
    E --> F
    F --> G([正式上线运营])
\`\`\`
`,

  'sequence': `# 🔄 时序交互图 (Sequence Diagram)

\`\`\`mermaid
sequenceDiagram
    actor Alice
    actor Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`\`\`
`,

  'architecture': `# 🏗️ 系统服务架构图

\`\`\`mermaid
flowchart TD
    subgraph 接入层 [接入与流量调度层]
        DNS[全局 DNS 解析] --> CDN[静态加速 CDN]
        CDN --> WAF[云防火墙 WAF]
        WAF --> SLB[负载均衡 SLB / Nginx]
    end

    subgraph 网关层 [API Gateway]
        SLB --> Gateway[Kong API Gateway]
        Gateway --> RateLimit[限流中间件]
        Gateway --> AuthFilter[鉴权中心]
    end

    subgraph 核心服务集群 [Core Microservices]
        Gateway --> UserSvc[用户服务 User-Service]
        Gateway --> OrderSvc[订单服务 Order-Service]
        Gateway --> PaySvc[支付服务 Pay-Service]
        Gateway --> PushSvc[通知服务 Push-Service]
    end

    subgraph 存储与消息 [Storage & Middleware]
        UserSvc --> MySQL_Master[(MySQL 主库)]
        UserSvc --> MySQL_Slave[(MySQL 从库)]
        OrderSvc --> Redis_Cluster[(Redis 缓存集群)]
        PaySvc --> RocketMQ[RocketMQ 消息队列]
        PushSvc --> RocketMQ
    end
\`\`\`
`,

  'class': `# 🧩 类图与面向对象设计 (Class Diagram)

\`\`\`mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
\`\`\`
`,

  'state': `# ⚡ 状态机模型图 (State Diagram)

\`\`\`mermaid
stateDiagram-v2
    [*] --> 待支付: 提交订单
    待支付 --> 支付中: 唤起支付网关
    支付中 --> 已支付: 支付成功回调
    支付中 --> 待支付: 用户取消支付
    待支付 --> 已取消: 超过30分钟未支付
    
    state 已支付 {
        [*] --> 备货中
        备货中 --> 出库中: 仓库打包
        出库中 --> 配送中: 顺丰速运揽件
        配送中 --> [*]: 用户签收
    }
    
    已支付 --> 退款售后: 发起退款申请
    退款售后 --> 已退款: 商家审核通过
    已支付 --> 订单完成: 确认收货
    已取消 --> [*]
    已退款 --> [*]
    订单完成 --> [*]
\`\`\`
`,

  'git': `# 🌿 Git 分支流向图 (Git Graph)

\`\`\`mermaid
gitGraph
    commit id: "Initial Commit"
    commit id: "feat: setup project"
    branch develop
    checkout develop
    commit id: "feat: add markdown parser"
    commit id: "feat: add mermaid engine"
    branch feature/panzoom
    checkout feature/panzoom
    commit id: "feat: add pan and zoom"
    commit id: "feat: add fullscreen modal"
    checkout develop
    merge feature/panzoom
    checkout main
    merge develop tag: "v1.0.0"
    commit id: "docs: update readme"
\`\`\`
`,

  'gantt': `# 📅 项目甘特图 (Gantt Chart)

\`\`\`mermaid
gantt
    title Markdown Mermaid Studio 研发排期
    dateFormat  YYYY-MM-DD
    section 需求与架构
    需求调研与竞品分析       :done,    des1, 2026-08-01,2026-08-03
    UI / UX 原型设计          :done,    des2, 2026-08-03, 3d
    技术方案选型与验证       :done,    des3, after des2, 2d
    section 核心研发
    Markdown 渲染与代码高亮   :active,  dev1, 2026-08-08, 4d
    Mermaid 图表适配与渲染    :active,  dev2, after dev1, 4d
    图表平移缩放与全屏组件   :crit, active, dev3, after dev2, 5d
    深浅色背景动态跟随       :crit, active, dev4, 2026-08-16, 4d
    section 测试与交付
    兼容性与边界测试         :         test1, after dev3, 3d
    发布上线与交付           :         rel1, after test1, 2d
\`\`\`
`,

  'mindmap': `# 🧠 思维导图 (Mindmap)

\`\`\`mermaid
mindmap
  root((Markdown Mermaid Studio))
    Markdown 解析
      Marked.js
      GFM 规范支持
      代码块高亮
      表格与引用
    Mermaid 渲染
      流程图
      时序图
      类图/状态图
      甘特图/Git图
      思维导图
    交互能力
      鼠标滚轮缩放
      自由拖拽平移
      双击快速重置
      全屏沉浸视口
      SVG / PNG 导出
    主题设计
      深色模式 (Dark)
      浅色模式 (Light)
      图表背景色跟随
      CSS 变量响应
\`\`\`
`
};
