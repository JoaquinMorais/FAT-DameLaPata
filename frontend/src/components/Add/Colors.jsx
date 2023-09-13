import React from 'react'
import "./colors.css"

function Colors() {
  return (
    <div id="checklist">
        <input id="01" type="checkbox" name="r" value={1} />
        <label for="01">Negro</label>
        <input id="02" type="checkbox" name="r" value={2} />
        <label for="02">Blanco</label>
        <input id="03" type="checkbox" name="r" value={3} />
        <label for="03">Marron</label>
        <input id="04" type="checkbox" name="r" value={4} />
        <label for="04">Gris</label>
        <input id="05" type="checkbox" name="r" value={5} />
        <label for="05">Amarillo</label>
        <input id="06" type="checkbox" name="r" value={6} />
        <label for="06">Rojo</label>
        <input id="07" type="checkbox" name="r" value={7} />
        <label for="07">Crema</label>
        <input id="08" type="checkbox" name="r" value={8} />
        <label for="08">Tricolor</label>
        <input id="09" type="checkbox" name="r" value={9} />
        <label for="09">Merle</label>
        <input id="10" type="checkbox" name="r" value={10} />
        <label for="10">Azul</label>
        <input id="11" type="checkbox" name="r" value={11} />
        <label for="11">Sable</label>
    </div>
  )
}

export default Colors
