import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

interface IFormData {
	name: string;
	email: string;
	password: string;
}

const schema = z.object({
	name: z.string().nonempty(),
	email: z.email().nonempty(),
	password: z.string().nonempty().min(8)
});

export function useRegisterController() {
	const form = useForm<IFormData>({
		defaultValues: {
			name: '',
			email: '',
			password: ''
		},
		resolver: zodResolver(schema)
	});

	return { form };
}
