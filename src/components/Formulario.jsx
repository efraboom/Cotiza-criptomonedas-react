import {useState ,useEffect} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const ImputSubmit = styled.input `
    background-color: #7497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer; 
    }
`


const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ moneda ,SelectMonedas ] = useSelectMonedas('Elige Tu Moneda ',monedas)
    const [ criptomoneda ,SelectCriptomonedas ] = useSelectMonedas('Elige Tu Criptomoneda ',criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            //Consultado
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            //Manipulacion del arreglo

            const arrayCriptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, []);
//----------Validando el formulario-----------
const handleSubmit = e => {
    e.preventDefault()
    if ([moneda, criptomoneda].includes('')) {
        setError(true)
        return
    }
    setError(false)
    setMonedas({
        moneda,
        criptomoneda
    })
    
}
    SelectMonedas()
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
                >
                <SelectMonedas/>
                <SelectCriptomonedas/>
                

                <ImputSubmit 
                    type="submit" 
                    value="Cotizar" 
                    />
            </form>
        </>
    )
}

export default Formulario