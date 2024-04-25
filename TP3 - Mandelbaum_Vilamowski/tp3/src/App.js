import './App.css';
import Titulo from './components/Titulo/titulo';
import Subtitulo from './components/Subtitulo/subtitulo';
import Form from './components/Form/form';
import Citas from './components/Citas/citas';
import Cita from './components/Cita/cita';

  function App() {
    

    const titulos = [
      {
        texto: 'ADMINISTRADOR DE PACIENTES',
      },
    ]

    const subtitulos = [
      {
        texto: 'CREAR MI CITA',
      },
      {
        texto: 'ADMINISTRA TUS CITAS',
      },
    ]
    const form = [
      {
        input: 'Nombre Mascota: ',
        input: 'Nombre Dueño:',
        input: 'Fecha:',
        input: 'Hora:',
        input: 'Sintomas:',
        button: 'AGREGAR CITA',
      },
    ]
    const cita = [
      {

      },
      {
        li: 'Mascota: Sifon',
        li: 'Dueño: Flecha',
        li: 'Fecha: 2023-08-05',
        li: 'Hora: 09:24',
        li: 'Sintomas: Duerme mucho',
        button: 'ELIMINAR',
      },
      {
        li: 'Mascota: Floki',
        li: 'Dueño: Ari',
        li: 'Fecha: 2023-08-05',
        li: 'Hora: 16:15',
        li: 'Sintomas: No está comiendo',
        button: 'ELIMINAR',
      },
    ]
  



return (
  <>
    { titulos.map(t =>  <Titulo clase={t.clase} texto={t.texto}  />)}
    { subtitulos.map(t =>  <Subtitulo clase={t.clase} texto={t.texto}  />)}
    { form.map(f => <Form clase={f.clase} input = {f.input}/>)}
    { cita.map(c => <Cita clase={c.clase} li = {c.li}/>)}

  </>
);
}

export default App;
