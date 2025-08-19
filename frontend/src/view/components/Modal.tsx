import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface IModalProps {
	open: boolean;
	title: string;
	children: ReactNode;
	rightAction?: ReactNode;
	onClose?(): void;
}

export function Modal({ open, title, children, rightAction, onClose }: IModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={onClose}>
			<Dialog.Portal>
				{/* inset-0 = left-0 right-0 top-0 bottom-0 */}
				<Dialog.Overlay
					className={cn(
						'fixed inset-0 bg-black/80 backdrop-blur-sm z-50',
						'data-[state=open]:animate-overlay-show'
					)}
				/>

				<Dialog.Content
					className={cn(
						'w-full max-w-[400px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] outline-none',
						'data-[state=open]:animate-content-show'
					)}
					aria-describedby={undefined}
				>
					<Dialog.Title>
						<header className='h-12 flex items-center justify-between text-gray-800'>
							<button
								onClick={onClose}
								className='w-12 h-12 flex items-center justify-center outline-none'
								type='button'
							>
								<Cross2Icon className='w-6 h-6' />
							</button>

							<span className='text-lg font-bold tracking-[-1px]'>{title}</span>

							<div className='w-12 h-12 flex items-center justify-center'>
								{rightAction}
							</div>
						</header>
					</Dialog.Title>

					<div>{children}</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
