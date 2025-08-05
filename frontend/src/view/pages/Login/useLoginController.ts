import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';
import { useAuth } from '../../../app/hooks/useAuth';
import type { ISigninParams } from '../../../app/services/AuthService';
import AuthService from '../../../app/services/AuthService';

interface IFormData {
	email: string;
	password: string;
}

const schema = z.object({
	email: z.email('Informe e-mail válido').nonempty('E-mail é obrigatório'),
	password: z
		.string('Informe senha válida')
		.nonempty('Senha é obrigatória')
		.min(8, 'Senha deve conter pelo menos 8 dígitos')
});
// type IFormData = z.infer<typeof schema>

export function useLoginController() {
	const form = useForm<IFormData>({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: zodResolver(schema),
		mode: 'all'
	});

	const {
		handleSubmit: hookFormSubmit,
		formState: { errors }
	} = form;

	const { isPending, mutateAsync } = useMutation({
		mutationFn: async (data: ISigninParams) => {
			return await AuthService.signin(data);
		}
	});

	const { signin } = useAuth();

	const handleSubmit = hookFormSubmit(async (data) => {
		try {
			const { accessToken } = await mutateAsync(data);

			signin(accessToken);
		} catch {
			toast.error('Credenciais inválidas!');
		}
	});

	return {
		form,
		errors,
		handleSubmit,
		isPending
	};
}
