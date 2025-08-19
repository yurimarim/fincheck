import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../../../app/utils/cn';
import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';
import { useFiltersModal } from './useFiltersModal';

interface IFiltersModalProps {
	open: boolean;
	onClose(): void;
}

const mockedAccounts = [
	{
		id: '12',
		name: 'Nubank'
	},
	{
		id: '34',
		name: 'XP Investimentos'
	},
	{
		id: '56',
		name: 'Dinheiro'
	}
];

export function FiltersModal({ open, onClose }: IFiltersModalProps) {
	const {
		selectedBankAccountId,
		handleSelectBankAccount,
		selectedYear,
		handleChangeYear
	} = useFiltersModal();

	return (
		<Modal open={open} title='Filtros' onClose={onClose}>
			<div>
				<span className='text-lg font-bold tracking-[-1px] text-gray-800'>Conta</span>

				<div className='space-y-2 mt-2'>
					{mockedAccounts.map((account) => (
						<button
							key={account.id}
							onClick={() => handleSelectBankAccount(account.id)}
							className={cn(
								'w-full text-left p-2 rounded-2xl text-gray-800 hover:bg-gray-50 transition-colors outline-none',
								account.id === selectedBankAccountId && '!bg-gray-200'
							)}
							type='button'
						>
							{account.name}
						</button>
					))}
				</div>
			</div>

			<div className='mt-10'>
				<span className='text-lg font-bold tracking-[-1px] text-gray-800'>Ano</span>

				<div className='w-52 mt-2 text-gray-800 flex items-center justify-between'>
					<button
						onClick={() => handleChangeYear(-1)}
						className='w-12 h-12 flex items-center justify-center'
						type='button'
					>
						<ChevronLeftIcon className='w-6 h-6' />
					</button>

					<div className='flex-1 text-center'>
						<span className='text-sm font-medium tracking-[-0.5px]'>{selectedYear}</span>
					</div>

					<button
						onClick={() => handleChangeYear(1)}
						className='w-12 h-12 flex items-center justify-center'
						type='button'
					>
						<ChevronRightIcon className='w-6 h-6' />
					</button>
				</div>
			</div>

			<Button className='w-full mt-10'>Aplicar Filtros</Button>
		</Modal>
	);
}
