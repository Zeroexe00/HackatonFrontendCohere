import { useEffect, useContext } from 'react'
import './style.css'
import { useGetCohereResponseMutation } from '../../store/apis/cohereApi';
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CohereResponseContext } from '../../context/cohereResponseContext';

const formSchema = yup.object({
  keywordsTitle: yup.string(),
  keywordsBody: yup.string(),
});

export default function inputs() {
  const context = useContext(CohereResponseContext);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch: watchFormValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'all',
    defaultValues: {
      keywordsBody: '',
      keywordsTitle: '',
    }
  })
  const [ getCohereResponse, {data, isLoading: isCohereLoading } ] = useGetCohereResponseMutation();
  
  const sendData = async ({keywordsTitle, keywordsBody}) => {
    context.setNewCohereResponse({isLoading: true})
    await getCohereResponse({ keywordsTitle, keywordsBody })
  }
  
  useEffect(() => {
    if(!data) return;
    context.setNewCohereResponse({isLoading: false, ...data})
  }, [data])

  return (
    <div className='main'>
      <h1>Haz un blog post con IA en minutos!</h1>
      <p>Basta de pensar tanto, solamente ingresa algunas palabras claves y deja que la IA haga todo el trabajo (actualmente solo funciona en ingles)</p>
      <p>Introduce las palabras claves que tienes en mente para el titulo</p>
      <form className='form-prompts' onSubmit={handleSubmit(sendData)}>
        <Controller
          control={control}
          name="keywordsTitle"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className='inputs'
              placeholder="Palabras claves"
              id="keywords"
              required
            />
          )}
        />
        <p>Introduce el tema del blog</p>
        <Controller
          control={control}
          name="keywordsBody"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className='inputs'
              placeholder="Palabras claves"
              id="keywords"
              required
            />
          )}
        />
        <button className='button-36' type='submit'>Enviar</button>
      </form>
    </div>
  )
}
