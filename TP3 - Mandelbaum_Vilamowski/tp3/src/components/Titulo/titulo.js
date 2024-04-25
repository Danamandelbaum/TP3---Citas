import Subtitulo from '../Subtitulo/subtitulo';
import './titulo.css';

const Titulo = (
    { 
        texto = 'Este es un texto por default porque no me llegó nada en la prop texto',
        clase = 'rojo',
    }
) => {

    return (
        <>
            <h1  className={clase}>{ texto }</h1>
            {
                Subtitulo ? <Subtitulo texto = {Subtitulo} /> : <></>
            }
        </>
    );
}

export default Titulo;