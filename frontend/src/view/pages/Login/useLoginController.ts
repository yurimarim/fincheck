import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

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

	const handleSubmit = hookFormSubmit((data) => {
		console.log(data);
	});

	return {
		form,
		errors,
		handleSubmit
	};
}
