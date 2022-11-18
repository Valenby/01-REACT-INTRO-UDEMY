import { useCounter, useFetch } from '../Hook';
import { LoadingQuote, Quote} from './';

//componente
export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //destructuramos algo que tenga valor
    const { author, quote } = !!data && data[0];



    return (
    <>
    {/* sitio web  */}
    <h1>THE BREAKING BAD API</h1>
    <hr />

    {
      isLoading
        ? <LoadingQuote />
        : <Quote author={ author } quote={ quote } />
    }


<button 
    className="btn btn-primary"
    disabled={ isLoading }
    onClick={ () => increment() }>
    Next quote
</button>

    </>
  )
}
