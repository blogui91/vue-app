const STATUS = "temp";

export const BASE_URL = {
	"production": 'https://api.binnacle.mx/',
	"local": 'http://localhost:8000/',
	"dev": 'https://api.demo.binnacle.mx/',
	"temp": 'https://api-tmp.demo.binnacle.mx/'
};

export const DEFAULT_LOCALE = 'en';
export const FALLBACK_LOCALE = 'en';
export const API_URL = BASE_URL[STATUS] + 'api/';
export const BASE_TOKEN = BASE_URL[STATUS];

export default {
	oauth: {
		grant_type: 'password',
		client_id: 'default',
		client_secret: 'secret',
	}
}