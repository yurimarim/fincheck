import { useQuery } from '@tanstack/react-query';
import {
	createContext,
	type ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useState
} from 'react';
import toast from 'react-hot-toast';
import { LaunchScreen } from '../../view/components/LaunchScreen';
import { storageKeys } from '../config/storageKeys';
import UsersService from '../services/UsersService';
import { httpClient } from '../services/utils/httpClient';

interface IAuthContextValue {
	signedIn: boolean;
	signin(accessToken: string): void;
	signout(): void;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [signedIn, setSignedIn] = useState<boolean>(() => {
		return !!localStorage.getItem(storageKeys.ACCESS_TOKEN);
	});

	useLayoutEffect(() => {
		const interceptorId = httpClient.interceptors.request.use((config) => {
			const accessToken = localStorage.getItem(storageKeys.ACCESS_TOKEN);

			if (accessToken) {
				config.headers.set('Authorization', `Bearer ${accessToken}`);
			}

			return config;
		});

		return () => {
			httpClient.interceptors.request.eject(interceptorId);
		};
	}, []);

	// Controla se houve algum erro na requst.
	const { isError, isFetching, isSuccess } = useQuery({
		queryKey: ['users', 'me'],
		queryFn: () => UsersService.me(),
		enabled: signedIn, // boolean. Habilita ou não a request.
		staleTime: Infinity
	});

	const signin = useCallback((accessToken: string) => {
		localStorage.setItem(storageKeys.ACCESS_TOKEN, accessToken);
		setSignedIn(true);
	}, []);

	const signout = useCallback(() => {
		localStorage.removeItem(storageKeys.ACCESS_TOKEN);

		setSignedIn(false);
	}, []);

	useEffect(() => {
		if (isError) {
			toast.error('Sua sessão expirou!');
			signout();
		}
	}, [isError, signout]);

	return (
		<AuthContext.Provider
			value={{
				signedIn: isSuccess && signedIn,
				signin,
				signout
			}}
		>
			<LaunchScreen isLoading={isFetching} />

			{!isFetching && children}
		</AuthContext.Provider>
	);
}
