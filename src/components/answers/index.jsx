import { useContext } from 'react';
import Loader from '../loader/index'
import { CohereResponseContext } from '../../context/cohereResponseContext';
import './style.css';

export default function answers() {
  const context = useContext(CohereResponseContext);
  return (
    <div className="answers">
      <h2>Sugerencia de Titulos</h2>
      {Object.keys(context.newCohereResponse).length === 1 && context.newCohereResponse.isLoading ? <Loader /> : ''}
      <p className='response'>{Object.keys(context.newCohereResponse).length > 1 ? context.newCohereResponse.keywordsTitle.text : ''}</p>
      <h2>Sugerencia de Cuerpos</h2>
      {Object.keys(context.newCohereResponse).length === 1 && context.newCohereResponse.isLoading ? <Loader /> : ''}
      <p className='response'>{Object.keys(context.newCohereResponse).length > 1 ? context.newCohereResponse.keywordsBody.text : ''}</p>
    </div>
  )
}
