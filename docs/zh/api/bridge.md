# Bridge 模块

`Bridge` 模块主要是涉及到插件应用层面的 API，例如（存取持久化数据/获取当前多维表格主题信息等),
获取方式为：
```typescript
const bridge = bitable.bridge;
```


## onThemeChange
```typescript
onThemeChange(callback: (ev: IEventCbCtx<ThemeModeCtx>) => void): () => void;
```
监听主题变化

## getPersonalBaseToken
```typescript
getPersonalBaseToken: () => Promise<string>;
```
获取 `PersonalBaseToken`

## getData
```typescript
getData(): Promise<unknown>;
```
读取持久化数据

## setData
```typescript
setData(data: Record<string, unknown>): Promise<void>;
```
写入持久化数据，需要以对象 `key`:`value` 的形式写入

## getBitableUrl
```typescript
getBitableUrl(options: GetBitableUrlOptions): Promise<string>;
```
生成多维表格链接，其中 `GetBitableUrlOptions` 的类型参数定义为：
```typescript
type GetBitableUrlOptions = {
  tableId: string,
  viewId: string,
  // recordId 为空时打开表格，不为空时打开卡片
  recordId?: string,
  fieldId?: string,
}
```

## getUserId
```typescript
getUserId(): Promise<string>;
```
获取当前用户 ID

## getTheme
```typescript
getTheme(): Promise<ThemeModeType>;
```
获取当前主题，其中 ThemeModeType 类型定义如下：
```typescript
declare enum ThemeModeType {
  LIGHT = "LIGHT",
  DARK = "DARK"
}
```

## getLocale
```typescript
getLocale(): Promise<Locale>;
```
获取 `Locale` 信息，其中 `Local` 的类型定义如下:
```typescript
type Locale = 'zh-CN' | 'zh-TW' | 'zh-HK' | 'en-US' | 'ja-JP' | 'fr-FR' | 'hi-IN' | 'id-ID' | 'it-IT' | 'ko-KR' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'vi-VN' | 'de-DE' | 'es-ES';
```

## getLanguage
```typescript
getLanguage(): Promise<Language>;
```
获取当前的语言信息，其中 `Language` 的类型定义如下
```typescript
type Language = 'zh' | 'zh-TW' | 'zh-HK' | 'en' | 'ja' | 'fr' | 'hi' | 'id' | 'it' | 'ko' | 'pt' | 'ru' | 'th' | 'vi' | 'de' | 'es';
```

## getTenantKey
```typescript
getTenantKey(): Promise<string>;
```
获取当前租户的 `Id`

## getEnv
```typescript
getEnv(): Promise<Env>;
```
获取当前的环境信息，其中 Env 的类型定义如下：
```typescript
type Product = 'lark' | 'feishu';
interface Env {
  product: Product;
}
```

## getInstanceId
```typescript
getInstanceId(): Promise<string>;
```
获取当前的插件实例 `Id`