import type { ComponentProps } from 'react';

interface IButton extends ComponentProps<'button'> {}

export function Button(props: IButton) {
	return (
		<button
			{...props}
			className='bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400
      disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all'
		></button>
	);
}
