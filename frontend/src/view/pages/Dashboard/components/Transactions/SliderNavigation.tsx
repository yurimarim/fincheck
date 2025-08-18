import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
	const swiper = useSwiper();

	return (
		<>
			<button
				type='button'
				className='w-12 h-12 z-10 absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-gradient-to-r from-gray-100 to'
				onClick={() => swiper.slidePrev()}
			>
				<ChevronLeftIcon className='text-gray-800 w-6 h-6' />
			</button>

			<button
				type='button'
				className='w-12 h-12 z-10 absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-gradient-to-l from-gray-100 to-transparent'
				onClick={() => swiper.slideNext()}
			>
				<ChevronRightIcon className='text-gray-800 w-6 h-6' />
			</button>
		</>
	);
}
