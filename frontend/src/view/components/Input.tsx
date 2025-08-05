import { CrossCircledIcon } from '@radix-ui/react-icons';
import type { ComponentProps } from 'react';
import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form';
import { cn } from '../../app/utils/cn';

interface IControlledInputProps<T extends FieldValues> extends ComponentProps<'input'> {
	control?: Control<T>;
	name: FieldPath<T>;
	error?: string;
}

export function ControlledInput<T extends FieldValues>({
	placeholder,
	id,
	name,
	control,
	error,
	className,
	...props
}: IControlledInputProps<T>) {
	const inputId = id ?? name;

	const { field } = useController({
		name,
		control
	});

	return (
		<div className='relative'>
			<input
				{...field}
				id={inputId}
				name={name}
				className={cn(
					`bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]
             text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none`,
					error && '!border-red-900',
					className
				)}
				placeholder=' '
				{...props}
			/>

			<label
				htmlFor={inputId}
				className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700
        peer-placeholder-shown:text-base top peer-placeholder-shown:top-3.5 transition-all'
			>
				{placeholder}
			</label>

			{error && (
				<div className='flex items-center gap-2 mt-2 text-red-900'>
					<CrossCircledIcon />
					<span className='text-xs'>{error}</span>
				</div>
			)}
		</div>
	);
}
