import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/Input';
import { useRegisterController } from './useRegisterController';

export function Register() {
	const { form, handleSubmit, errors, isPending } = useRegisterController();

	return (
		<>
			<header className='flex flex-col items-center gap-4 text-center'>
				<h1 className='text-2xl font-bold text-gray-900 tracking-[-1px]'>Crie sua conta</h1>

				<p className='space-x-2'>
					<span className='text-gray-700 tracking-[-0.5px]'>Já possui uma conta?</span>
					<Link to='/login' className='tracking-[-0.5px] text-teal-900 font-medium'>
						Fazer Login
					</Link>
				</p>
			</header>

			<form onSubmit={handleSubmit} className='mt-[60px] flex flex-col gap-4'>
				<ControlledInput
					control={form.control}
					name='name'
					placeholder='Nome'
					error={errors.name?.message}
				/>

				<ControlledInput
					control={form.control}
					type='email'
					name='email'
					placeholder='E-mail'
					error={errors.email?.message}
				/>

				<ControlledInput
					control={form.control}
					type='password'
					name='password'
					placeholder='Senha'
					error={errors.password?.message}
				/>

				<Button type='submit' className='mt-2' isLoading={isPending}>
					Criar conta
				</Button>
			</form>
		</>
	);
}
