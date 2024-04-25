import './form.css';

const Form = () => {
    return (
      <form>
        <label>Nombre Mascota:
          <input type="text" />
        </label>
        <label>Nombre Dueño:
          <input type="text" />
        </label>
        <label>Fecha:
          <input type="date" />
        </label>
        <label>Hora:
          <input type="time" />
        </label>
        <label>Sintomas:
          <input type="text" />
        </label>
        <label>AGREGAR CITA
          <button type="submit" />
        </label>
      </form>
    )
  }
export default Form;
