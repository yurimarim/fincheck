import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './app/contexts/AuthContext';
import { Router } from './router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false
		}
	}
});

declare global {
	interface Window {
		__TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient;
	}
}
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />

				<Toaster />
			</AuthProvider>
		</QueryClientProvider>
	);
}
