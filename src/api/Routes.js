import {
	BASE_TOKEN,
	API_URL,
} from './env'


export default {
	TOKEN_URL: BASE_TOKEN + 'oauth/access_token',
	endpoints: {
		USERS_URL: API_URL + "users"
	}
}