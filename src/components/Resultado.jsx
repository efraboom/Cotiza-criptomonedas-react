import styled from "@emotion/styled"
const Contenedor = styled.div`
    margin-top: 36px;
    color: #FFF;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
` 
const Imagen = styled.img`
    display: block;
    width: 120px;

`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
` 
const Precio = styled.span`
    font-size: 24px;
    span {
        font-weight: 700;
    }
` 

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <Contenedor>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Criptomoneda Imagen" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 Horas: <span>{CHANGEPCT24HOUR}%</span></Texto>
                <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado