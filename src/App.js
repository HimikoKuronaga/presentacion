import React from 'react';
import Preguntas from './components/Preguntas';
const App = () =>{
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <h1 className="text-white">Luis Hugo Hernández Escudero</h1>
      </div>
      	<div className="row">
      		<Preguntas />
      	</div>
    </div>
  );
}

export default App;
