import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'

import messages from 'src/i18n'

export type Locale = 'fr-FR' | 'en-GB'

const i18n = createI18n({
  locale: 'fr-FR',
  fallbackLocale: 'en-GB',
  messages,
  globalInjection: true,
  legacy: false
})

export default boot(({ app }) => {
  app.use(i18n)
})

export { i18n }

export function useI18n() {
  const { tm, t, te, d, n, ...globalApi } = i18n.global

  return {
    tm: tm.bind(i18n),
    t: t.bind(i18n),
    te: te.bind(i18n),
    d: d.bind(i18n),
    n: n.bind(i18n),
    ...globalApi
  }
}