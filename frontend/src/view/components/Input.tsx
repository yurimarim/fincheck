import type { ComponentProps } from 'react';
import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form';

interface IControlledInputProps<T extends FieldValues> extends ComponentProps<'input'> {
	control?: Control<T>;
	name: FieldPath<T>;
}

export function ControlledInput<T extends FieldValues>({
	placeholder,
	id,
	name,
	control,
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
				className='bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]
        text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none'
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
		</div>
	);
}
