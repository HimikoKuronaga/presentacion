import React, {useState, useEffect} from 'react';

const Item=({pregunta, desc, imgs})=>{

	const [imagenes, setImgagenes] = useState(<p className="card-text">cargando...</p>);

	useEffect(()=>{
		if(imgs.length > 0){
			const html = imgs.map((imagen, idx) => {
				if(idx == 0){
					return (<div key={imagen.id} className="carousel-item active"><img src={imagen.url} className="card-img-top"/></div>);
				}else{
					return (<div key={imagen.id} className="carousel-item"><img src={imagen.url} className="card-img-top" /></div>);
				}
			});

			setImgagenes(html);
			
		}
	},[imgs]);

	return (
		<div className="col">
			<div className="card">
				<div id="carouselExampleControls" className="card-img carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						{imagenes}
					</div>
				</div>

				<div className="card-body">
					<h5 className="card-title">{pregunta}</h5>
					<p className="card-text">{desc}</p>
				</div>
			</div>
		</div>
	);
}

export default Item;