import { useEffect, useState } from 'react';

export function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth); // window.innerWidth pega a largura da tela.

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return width;
}
