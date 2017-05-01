import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
	DEFAULT_LOCALE,
	FALLBACK_LOCALE
} from 'config/env'

Vue.use(VueI18n)

import messages from 'resources/lang/strings'

let data = {
	locale: DEFAULT_LOCALE,
	fallbackLocale: FALLBACK_LOCALE,
	messages
}

export let i18n = new VueI18n(data)