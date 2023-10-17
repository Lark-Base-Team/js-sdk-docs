const path = window.location.pathname
const base = '/js-sdk-docs/'

if (!['zh', 'en'].some((lang) => path.startsWith(base + lang + '/'))) {
    const lang = window.navigator.language || ''
    window.location.href = base + (/zh/.test(lang) ? 'zh' : 'en') + path.slice(base.length - 1)
}