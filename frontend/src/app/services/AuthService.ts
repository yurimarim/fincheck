import { httpClient } from './utils/httpClient';

export interface ISignupParams {
	name: string;
	email: string;
	password: string;
}

export interface ISigninParams {
	email: string;
	password: string;
}

interface ISignupResponse {
	accessToken: string;
}

interface ISigninResponse {
	accessToken: string;
}

class AuthService {
	async signup(params: ISignupParams) {
		const { data } = await httpClient.post<ISignupResponse>('auth/signup', params);

		return data;
	}

	async signin(params: ISigninParams) {
		const { data } = await httpClient.post<ISigninResponse>('auth/signin', params);

		return data;
	}
}

export default new AuthService();
