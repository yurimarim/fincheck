import { Navigate, Outlet } from 'react-router-dom';

export interface IAuthGuard {
	isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: IAuthGuard) {
	const signedIn = false;

	if (!signedIn && isPrivate) {
		return <Navigate to='/login' replace />;
	}

	if (signedIn && !isPrivate) {
		return <Navigate to='/' replace />;
	}

	return <Outlet />;
}
