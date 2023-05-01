import { Biomes, NPCs } from "./db.js";

$(document).ready(function() {
  let opcoes = ""
  for (let i = 1; i <= 5; i++) {
    opcoes = opcoes + `
    <div class="row ${i===5 ? '' : 'mb-2'}">
    <div class="col- ml-2">
      <label>${i}</label>
    </div>
    <div class="col">
      <select class="form-control" id="morador${i}">`
    opcoes = opcoes + NPCs.map(NPC => `<option value="1">${NPC.NPC}</option>`)
    opcoes = opcoes + `</select></div><div class="col- mr-2"><span id="feliz${i}">0</span></div></div>`
  }
  Biomes.forEach(bioma => {
    $('#vilas').append(`
    <div class="col-md-3">
      <div class="card mb-3" id="card-${bioma}">
        <div class="card-header">${bioma}</div>
        <div class="card-body">
          <div class="form-group" id="form-${bioma}">
            ${opcoes}
          </div>
        </div>
      </div>
    </div>
    `);
  })

});