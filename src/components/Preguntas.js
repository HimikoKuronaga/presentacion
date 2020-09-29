import React from 'react';
import PreguntaItem from './PreguntaItem';

const Preguntas=()=>{
	const data = [
			{
				pregunta: '¿Quién soy?',
				desc: 'Soy un joven que esta interesado en las TI, me gusta aprender cosas nuevas y aplicar mis conocimientos a la solucion de problemas.. ',
				category: 'technology'
			},
			{
				pregunta: '¿Qué me representa?',
				desc: 'Para entender el presente y el fururo hay que entender el pasado.',
				category: 'hobbies'
			},
			{
				pregunta: '¿De dónde vengo?',
				desc: '',
				category: 'where'
			},
			{
				pregunta: '¿Hacia dónde voy?',
				desc: 'Quiero tener una vida en donde me encuentre cerca de las personas que amo y haciendo lo que me gusta.',
				category:'on my way'
			}
	];

	return (
		<>
			{data.map(d => <PreguntaItem key={d.pregunta} {...d} />)}
		</>		
	);
}

export default Preguntas;