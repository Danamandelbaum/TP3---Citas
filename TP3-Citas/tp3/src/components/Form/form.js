import './form.css';
import React from 'react';

function Form() {
  return (
    <div class = "one-half.column">
      <h2>Crear mi Cita</h2>
      <form class="u-full-width">
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="" />
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" value="" />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" value="" />
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Form;
