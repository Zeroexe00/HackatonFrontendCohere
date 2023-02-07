import { useContext } from 'react';
import { CohereResponseContext } from '../../context/cohereResponseContext';
import './style.css';

export default function answers() {
  const context = useContext(CohereResponseContext);
  return (
    <div className="answers">
      <h2>Sugerencia de Titulos</h2>
      <p className='response'>{Object.keys(context.newCohereResponse).length > 0 ? context.newCohereResponse.keywordsTitle.text : ''}</p>
      <h2>Sugerencia de Cuerpos</h2>
      <p className='response'>{Object.keys(context.newCohereResponse).length > 0 ? context.newCohereResponse.keywordsBody.text : ''}</p>
    </div>
  )
}
