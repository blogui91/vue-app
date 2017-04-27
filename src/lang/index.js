import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
	DEFAULT_LOCALE,
	FALLBACK_LOCALE
} from 'api/env'

Vue.use(VueI18n)

import messages from 'lang/global_strings'

let data = {
	locale: DEFAULT_LOCALE,
	fallbackLocale: FALLBACK_LOCALE,
	messages
}

export let i18n = new VueI18n(data)