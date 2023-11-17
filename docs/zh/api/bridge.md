# Bridge 模块

`Bridge` 模块主要提供了一些通用能力的 API，例如（获取当前语言信息/获取当前多维表格主题信息等),
获取方式为：
```typescript
const bridge = bitable.bridge;
```

## getBitableUrl
生成多维表格链接。

```typescript
getBitableUrl(options: GetBitableUrlOptions): Promise<string>;
```

其中 `GetBitableUrlOptions` 的类型参数定义为：
```typescript
type GetBitableUrlOptions = {
  tableId: string,
  viewId: string,
  // recordId 为空时打开表格，不为空时打开卡片
  recordId?: string,
  fieldId?: string,
}
```

#### 示例
```typescript
const res = await bitable.bridge.getBitableUrl({
  tableId: 'tblkrAjKK1wEP4Nf',
  viewId: 'vewboZNrq3',
  fieldId: 'fldfd2ITyJ',
});
// 'https://bytedance.feishu.cn/base/QtTUxxxx?field=fldfd2ITyJ&table=tblkrAjKK1wEP4Nf&view=vewboZNrq3'
```

## getUserId
获取当前用户 ID。

```typescript
getUserId(): Promise<string>;
```

#### 示例
```typescript
const res = await bitable.bridge.getUserId();
```

## getTheme
获取当前主题。

```typescript
getTheme(): Promise<ThemeModeType>;
```

其中 `ThemeModeType` 类型定义如下：
```typescript
enum ThemeModeType {
  LIGHT = "LIGHT",
  DARK = "DARK"
}
```

#### 示例
```typescript
const theme = await bitable.bridge.getTheme();
// 'LIGHT'
```

## onThemeChange
监听主题变化。

```typescript
onThemeChange(callback: (ev: IEventCbCtx<ThemeModeCtx>) => void): () => void;
```

#### 示例
```typescript
const theme = await bitable.bridge.onThemeChange((event) => {
  console.log('theme change', event.data.theme);
});
```

## getLocale
获取地区设置。

```typescript
getLocale(): Promise<Locale>;
```

其中 `Local` 的类型定义如下:
```typescript
type Locale = 'zh-CN' | 'zh-TW' | 'zh-HK' | 'en-US' | 'ja-JP' | 'fr-FR' | 'hi-IN' | 'id-ID' | 'it-IT' | 'ko-KR' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'vi-VN' | 'de-DE' | 'es-ES';
```

#### 示例
```typescript
const locale = await bitable.bridge.getLocale();
// 'zh-CN'
```

## getLanguage
获取当前的语言信息。

```typescript
getLanguage(): Promise<Language>;
```

其中 `Language` 的类型定义如下：
```typescript
type Language = 'zh' | 'zh-TW' | 'zh-HK' | 'en' | 'ja' | 'fr' | 'hi' | 'id' | 'it' | 'ko' | 'pt' | 'ru' | 'th' | 'vi' | 'de' | 'es';
```

#### 示例
```typescript
const language = await bitable.bridge.getLanguage();
// 'zh'
```

## getTenantKey
获取当前租户 `Id`。

```typescript
getTenantKey(): Promise<string>;
```

#### 示例
```typescript
await bitable.bridge.getTenantKey();
```

## getEnv
获取当前的环境信息。

```typescript
getEnv(): Promise<Env>;
```

其中 Env 的类型定义如下：
```typescript
type Product = 'lark' | 'feishu';
interface Env {
  product: Product;
}
```

#### 示例
```typescript
const env = await bitable.bridge.getEnv();
// { product: 'feishu' }
```

## getInstanceId
获取当前的插件的实例 `id`，每个插件的实例 `id` 全局唯一。

```typescript
getInstanceId(): Promise<string>;
```

#### 示例
```typescript
const instanceId = await bitable.bridge.getInstanceId();
```