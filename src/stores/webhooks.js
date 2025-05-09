import { writable } from 'svelte/store';

// 初始示例数据
export const webhooks = writable([
  {
    id: '1',
    name: '新用户注册',
    enabled: true,
    urls: ['http://api.example.com/users?event={event}&user={userId}']
  },
  {
    id: '2',
    name: '支付处理',
    enabled: false,
    urls: ['http://api.example.com/payments?status={status}&amount={amount}']
  },
  {
    id: '3',
    name: '支付处理',
    enabled: false,
    urls: ['http://api.example.com/payments?status={status}&amount={amount}']
  },
  {
    id: '4',
    name: '支付处理',
    enabled: false,
    urls: ['http://api.example.com/payments?status={status}&amount={amount}']
  },
  {
    id: '5',
    name: '支付处理',
    enabled: false,
    urls: ['http://api.example.com/payments?status={status}&amount={amount}']
  }
]);

// 添加新webhook
export const addWebhook = (webhook) => {
  webhooks.update(whs => [...whs, { ...webhook, id: Date.now().toString() }]);
};

// 更新webhook
export const updateWebhook = (id, updatedWebhook) => {
  webhooks.update(whs => whs.map(wh => wh.id === id ? { ...wh, ...updatedWebhook } : wh));
};

// 删除webhook
export const deleteWebhook = (id) => {
  webhooks.update(whs => whs.filter(wh => wh.id !== id));
};