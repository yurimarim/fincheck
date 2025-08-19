import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

function DropdownMenuRoot({ children }: { children: ReactNode }) {
	return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: { children: ReactNode }) {
	return (
		<RdxDropdownMenu.Trigger className='outline-none' asChild>
			{children}
		</RdxDropdownMenu.Trigger>
	);
}

interface IDropdownMenuContentProps {
	children: ReactNode;
	className?: string;
}

function DropdownMenuContent({ children, className }: IDropdownMenuContentProps) {
	return (
		<RdxDropdownMenu.Portal>
			<RdxDropdownMenu.Content
				className={cn(
					`p-2 rounded-2xl bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-50`,
					'data-[side=bottom]:animate-slide-up-and-fade',
					'data-[side=top]:animate-slide-down-and-fade',
					className
				)}
			>
				{children}
			</RdxDropdownMenu.Content>
		</RdxDropdownMenu.Portal>
	);
}

interface IDropdownMenuItemProps {
	children: ReactNode;
	className?: string;
	onSelect?(): void;
}

function DropdownMenuItem({ children, className, onSelect }: IDropdownMenuItemProps) {
	return (
		<RdxDropdownMenu.Item
			onSelect={onSelect}
			className={cn(
				`outline-none min-h-10 flex items-center px-4 py-2 text-sm text-gray-800 data-[highlighted]:bg-gray-50
        rounded-2xl transition-colors cursor-pointer select-none`,
				className
			)}
		>
			{children}
		</RdxDropdownMenu.Item>
	);
}

export const DropdownMenu = {
	Root: DropdownMenuRoot,
	Trigger: DropdownMenuTrigger,
	Content: DropdownMenuContent,
	Item: DropdownMenuItem
};
