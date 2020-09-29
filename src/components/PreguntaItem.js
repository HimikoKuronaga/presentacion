import React from 'react';
import Item from './Item';
import { useFetchGif } from './../hooks/useFetchGif';


const PreguntaItem =({pregunta, desc, category} )=>{
	
	const {data: imgs} = useFetchGif(category);
	const info = {pregunta, desc, imgs};

	return (
		<>
			<Item  {...info}/>
		</>		
	);
}

export default PreguntaItem;