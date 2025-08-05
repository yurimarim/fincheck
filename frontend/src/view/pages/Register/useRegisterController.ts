import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';
import { useAuth } from '../../../app/hooks/useAuth';
import AuthService, { type ISignupParams } from '../../../app/services/AuthService';

interface IFormData {
	name: string;
	email: string;
	password: string;
}

const schema = z.object({
	name: z.string('Informe o nome').nonempty('Nome é obrigatório'),
	email: z.email('Informe e-mail válido').nonempty('E-mail é obrigatório'),
	password: z
		.string('Informe senha válida')
		.nonempty('Senha é obrigatória')
		.min(8, 'Senha deve conter pelo menos 8 dígitos')
});

export function useRegisterController() {
	const form = useForm<IFormData>({
		defaultValues: {
			name: '',
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
		mutationFn: async (data: ISignupParams) => {
			return await AuthService.signup(data);
		}
	});

	const { signin } = useAuth();

	const handleSubmit = hookFormSubmit(async (data) => {
		try {
			const { accessToken } = await mutateAsync(data);

			signin(accessToken);
		} catch {
			toast.error('Ocorreu um erro ao criar sua conta!');
		}
	});

	return { form, handleSubmit, errors, isPending };
}
