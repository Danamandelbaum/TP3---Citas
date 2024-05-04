import './form.css';
import React from 'react';

function Form() {
  return (
    <div class = "one-half.column">
     
      <div class = "onn">
      <h2>Crear mi Cita</h2>
      <form class="u-full-width">
        <label className="u-full-width"><b>Nombre Mascota</b></label>
        <input type="text"  className="u-full-width" placeholder="Nombre Mascota" value="" />
        <label className="u-full-width"><b>Nombre Dueño</b></label>
        <input type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
        <label className="u-full-width"><b>Fecha</b></label>
        <input type="date"  className="u-full-width" value="" />
        <label className="u-full-width"><b>Hora</b></label>
        <input type="time"  className="u-full-width" value="" />
        <label className="u-full-width"><b>Sintomas</b></label>
        <textarea  className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">AGREGAR CITA</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
