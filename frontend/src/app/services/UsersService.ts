import { sleep } from '../utils/sleep';
import { httpClient } from './utils/httpClient';

interface IMeResponse {
	name: string;
	email: string;
}

class UsersService {
	async me() {
		const { data } = await httpClient.get<IMeResponse>('/users/me');
		await sleep();

		return data;
	}
}

export default new UsersService();
