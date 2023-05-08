import { Biomes, NPCs } from "./db.js";

$(document).ready(function() {
  let opcoes = ""
  for (let i = 1; i <= 5; i++) {
    opcoes = opcoes + `
    <div class="row ${i===5 ? '' : 'mb-2'}">
    <div class="col-auto ml-2">
      <label>${i}</label>
    </div>
    <div class="col">
      <select class="form-select bioma-select" id="morador-${i}">`
    opcoes = opcoes + '<option value="">vazio</option>'
    NPCs.forEach(NPC => opcoes = opcoes + `<option value="${NPC.NPC}">${NPC.NPC}</option>`)
    opcoes = opcoes + `</select></div><div class="col-2 mr-2 text-center"><span id="felicidade-${i}">0</span></div></div>`
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
    let moradorSelecionado = $(this).attr('id').split("-")[1]; // Obtém o valor selecionado no select
    let vila = $(this).closest('.form-group')
    let biome = vila.attr('id').split("-")[1]
    // console.log(moradorSelecionado, biome)
    for (let numHouse = 1; numHouse <= 5; numHouse++) {
      let NPCHappiness = 0 // Happiness NPC Calculate
      const NPCPreferences = NPCs.find(npc => npc.NPC === vila.find(`#morador-${numHouse}`).val()) // Find NPC and her preferences
      if (!NPCPreferences) { // Skip blank select imput
        vila.find(`#felicidade-${numHouse}`).text(0) // Reset happiness
        vila.find(`#felicidade-${numHouse}`).removeClass("text-warning text-danger text-success");
        continue
      }
      if (NPCPreferences.Biome.Hates === biome) NPCHappiness = NPCHappiness -12
      if (NPCPreferences.Biome.Dislikes === biome) NPCHappiness = NPCHappiness - 6
      if (NPCPreferences.Biome.Likes === biome) NPCHappiness = NPCHappiness + 6
      if (NPCPreferences.Biome.Loves === biome) NPCHappiness = NPCHappiness + 12
      for (let numNeighbor = 1; numNeighbor <= 5; numNeighbor++) {
        let morador = vila.find(`#morador-${numNeighbor}`).val()
        if (!morador || numHouse === numNeighbor) continue // Skip invalid calc
        
        NPCPreferences.Neighbor.Loves?.forEach(Loved => { if(Loved === morador) NPCHappiness = NPCHappiness + 12 })
        NPCPreferences.Neighbor.Likes?.forEach(Liked => { if(Liked === morador) NPCHappiness = NPCHappiness + 6 })
        NPCPreferences.Neighbor.Dislikes?.forEach(Disliked => { if(Disliked === morador) NPCHappiness = NPCHappiness - 6 })
        NPCPreferences.Neighbor.Hates?.forEach(Hated => { if(Hated === morador) NPCHappiness = NPCHappiness - 12 })
        
        // Verify Princess
        if (morador === "Princess" || NPCPreferences.NPC === "Princess") NPCHappiness = NPCHappiness + 6
      }
      vila.find(`#felicidade-${numHouse}`).text(100 + NPCHappiness) // Insert Happiness NPC Calculated
      if (NPCHappiness > 0) {
        vila.find(`#felicidade-${numHouse}`).removeClass("text-warning text-danger").addClass("text-success");
      } else if (NPCHappiness == 0) {
        vila.find(`#felicidade-${numHouse}`).removeClass("text-success text-danger").addClass("text-warning");
      } else {
        vila.find(`#felicidade-${numHouse}`).removeClass("text-success text-warning").addClass("text-danger");
      }
    }
  });
  NPCs.forEach(NPC => {
    let tableData = `
      <tr><td>${NPC.NPC}</td>
      ${NPC.Biome.Loves ?  `<td>${NPC.Biome.Loves}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Biome.Likes ? `<td>${NPC.Biome.Likes}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Biome.Dislikes ? `<td>${NPC.Biome.Dislikes}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Biome.Hates ? `<td>${NPC.Biome.Hates}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Neighbor?.Loves ?  `<td>${NPC.Neighbor.Loves.join(", ")}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Neighbor?.Likes ? `<td>${NPC.Neighbor.Likes.join(", ")}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Neighbor?.Dislikes ? `<td>${NPC.Neighbor.Dislikes.join(", ")}</td>` : "<td class='text-center'> - </td>"}
      ${NPC.Neighbor?.Hates ? `<td>${NPC.Neighbor.Hates.join(", ")}</td>` : "<td class='text-center'> - </td>"}
      </tr>
    `
    $("#living-preferences").append(tableData)
  })
});