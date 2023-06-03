'use client';

import { PuffLoader } from 'react-spinners';

const Loader = () => {
	return (
		<div
			className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center
      bg-slate-900
    '
		>
			<PuffLoader
				size={100}
				color='text-light-gold'
			/>
		</div>
	);
};

export default Loader;
