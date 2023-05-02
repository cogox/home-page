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
      <select class="form-control bioma-select" id="morador${i}">`
    opcoes = opcoes + '<option value="">vazio</option>'
    NPCs.forEach(NPC => opcoes = opcoes + `<option value="${NPC.NPC}">${NPC.NPC}</option>`)
    opcoes = opcoes + `</select></div><div class="col- mr-2"><span id="felicidade${i}">0</span></div></div>`
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
  $('.bioma-select').change(function() {
    var valor = $(this).val(); // Obtém o valor selecionado no select
    let vila = $(this).closest('.form-group')
    let bioma = vila.attr('id').split("-")[1]
    for (let num = 1; num <= 5; num++) {
      const NPCPreferences = NPCs.find(npc => npc.NPC === vila.find(`#morador${num}`).val())
      if (!NPCPreferences) return vila.find(`#felicidade${num}`).text(0)
      let NPCHappiness = 0
      if (NPCPreferences.Biome.Hates === bioma) NPCHappiness = NPCHappiness -12
      if (NPCPreferences.Biome.Dislikes === bioma) NPCHappiness = NPCHappiness - 6
      if (NPCPreferences.Biome.Likes === bioma) NPCHappiness = NPCHappiness + 6
      if (NPCPreferences.Biome.Loves === bioma) NPCHappiness = NPCHappiness + 12
      for (let num = 1; num <= 5; num++) {
        NPCPreferences.Neighbor.Loves?.forEach(Loved => {if(Loved === vila.find(`#morador${num}`).val()) NPCHappiness = NPCHappiness + 12 })
        NPCPreferences.Neighbor.Likes?.forEach(Liked => {if(Liked === vila.find(`#morador${num}`).val()) NPCHappiness = NPCHappiness + 6 })
        NPCPreferences.Neighbor.Dislikes?.forEach(Disliked => {if(Disliked === vila.find(`#morador${num}`).val()) NPCHappiness = NPCHappiness - 6 })
        NPCPreferences.Neighbor.Hates?.forEach(Hated => {if(Hated === vila.find(`#morador${num}`).val()) NPCHappiness = NPCHappiness - 12 })
      }
      vila.find(`#felicidade${num}`).text(100 + NPCHappiness)
    }
  });

});