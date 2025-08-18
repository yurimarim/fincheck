import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
	const { sliderState, setSliderState, windowWidth } = useAccountsController();

	return (
		<div className='bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col'>
			<div>
				<span className='tracking-[-0.5px] text-white block'>Saldo total</span>

				<div className='flex items-center gap-2'>
					<strong className='text-2xl text-white tracking-[-1px]'>R$ 1000,00</strong>

					<button type='button' className='w-8 h-8 flex items-center justify-center'>
						<EyeIcon open />
					</button>
				</div>
			</div>

			<div className='flex-1 flex flex-col justify-end mt-10 md:mt-0'>
				<div>
					<Swiper
						spaceBetween={16}
						slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
						onSlideChange={(swiper) => {
							setSliderState({
								isBeginning: swiper.isBeginning,
								isEnd: swiper.isEnd
							});
						}}
					>
						<div className='flex items-center justify-between mb-4' slot='container-start'>
							<strong className='tracking-[-1px] text-white text-lg'>Minhas Contas</strong>

							<SliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
						</div>

						<SwiperSlide>
							<AccountCard name='Nubank' color='#7950F2' balance={1000.23} type='CASH' />
						</SwiperSlide>

						<SwiperSlide>
							<AccountCard name='XP' color='#333' balance={1000.23} type='INVESTMENT' />
						</SwiperSlide>

						<SwiperSlide>
							<AccountCard name='Carteira' color='#0f0' balance={1000.23} type='CASH' />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}
