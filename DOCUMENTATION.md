# Webhook Management App 技术文档

## 架构设计

采用组件化架构与集中式状态管理：
App (Root)
├── WebhookList (容器组件)
│ ├── WebhookCard (展示组件)
│ ├── WebhookForm
│ └── TriggerModal
└── ThemeToggle

## 状态管理

使用两个 Svelte store 管理应用状态：

1. `webhooks.js` - 管理所有 Webhook 数据及操作
2. `theme.js` - 处理主题偏好设置

## 组件接口规范

### Webhook 表单组件

属性：

- `webhook`: 对象 (可选) - 待编辑的 Webhook 数据
- `onClose`: 函数 - 关闭表单的回调

### 触发模态框组件

属性：

- `onClose`: 函数 - 关闭模态框的回调

## 数据结构

Webhook 对象包含：

- `id`: 字符串
- `name`: 字符串
- `enabled`: 布尔值
- `urls`: 字符串数组
