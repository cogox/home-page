export const NPCs = [
  {
    "NPC":"Guide",
    Biome: {
      "Likes":"Forest",
      "Deslikes":"Ocean"
    },
    Neighbor: {
      "Likes":["Clothier", "Zoologist"],
      "Dislikes":["Steampunker"],
      "Hates":["Painter"],
    },
  },{
    "NPC":"Merchant",
    Biome: {
      "Likes":"Forest",
      "Deslikes":"Desert"
    },
    Neighbor: {
      "Likes":["Golfer","Nurse"],
      "Dislikes":["Tax Collector"],
      "Hates":["Angler"]
    }
  },{
    "NPC":"Golfer",
    Biome:{
      "Likes":"Forest",
      "Deslikes":"Caverns"
    },
    Neighbor: {
      "Loves":["Angler"],
      "Likes":["Painter", "Zoologist"],
      "Dislikes":["Pirate"],
      "Hates":["Merchant"],
    }
  },{
    "NPC":"Zoologist",
    Biome:{
      "Likes":"Forest",
      "Deslikes":"Desert",
    },
    Neighbor: {
      "Loves":["Witch Doctor"],
      "Likes":["Golfer"],
      "Dislikes":["Angler"],
      "Hates":["Arms Dealer"],
    }
  },{
    "NPC":"Tax Collector",
    Biome:{
      "Likes":"Snow",
      "Deslikes":"Hallow"
    },
    Neighbor: {
      "Loves":["Merchant"],
      "Likes":["Party Girl"],
      "Dislikes":["Demolitionist","Mechanic"],
      "Hates":["Santa Claus"],
    }
  },{
    "NPC":"Mechanic",
    Biome:{
      "Likes":"Snow",
      "Deslikes":"Caverns"
    },
    Neighbor: {
      "Loves":["Goblin Tinkerer"],
      "Likes":["Cyborg"],
      "Dislikes":["Arms Dealer"],
      "Hates":["Clothier"],
    }
  },{
    "NPC":"Cyborg",
    Biome:{
      "Likes":"Snow",
      "Deslikes":"Jungle"
    },
    Neighbor: {
      "Likes":["Stylist","Pirate","Steampunker"],
      "Dislikes":["Zoologist"],
      "Hates":["Wizard"],
    }
  },{
    "NPC":"Santa Claus",
    Biome:{
      "Loves":"Snow",
      "Hates":"Desert"
    },
    "Hates":["Tax Collector"],
  },{
    "NPC":"Dye Trader",
    Biome:{
      "Likes":"Desert",
      "Deslikes":"Forest"
    },
    Neighbor: {
      "Likes":["Arms Dealer","Painter"],
      "Dislikes":["Steampunker"],
      "Hates":["Pirate"]
    },
  },{
    "NPC":"Arms Dealer",
    Biome:{
      "Likes":"Desert",
      "Deslikes":"Snow"
    },
    Neighbor: {
      "Loves":["Nurse"],
      "Likes":["Steampunker"],
      "Dislikes":["Golfer"],
      "Hates":["Demolitionist"]
    },
  },{
    "NPC":"Steampunker",
    Biome:{
      "Likes":"Desert",
      "Deslikes":"Jungle"
    },
    Neighbor: {
      "Loves":["Cyborg"],
      "Likes":["Painter"],
      "Dislikes":["Party Girl","Wizard","Dryad"]
    },
  },{
    "NPC":"Dryad",
    Biome:{
      "Likes":"Jungle",
      "Deslikes":"Desert"
    },
    Neighbor: {
      "Likes":["Witch Doctor","Truffle"],
      "Dislikes":["Angler"],
      "Hates":["Golfer"]
    },
  },{
    "NPC":"Witch Doctor",
    Biome:{
      "Likes":"Jungle",
      "Deslikes":"Hallow"
    },
    Neighbor: {
      "Likes":["Dryad","Guide"],
      "Dislikes":["Nurse"],
      "Hates":["Truffle"]
    },
  },{
    "NPC":"Painter",
    Biome:{
      "Likes":"Jungle",
      "Deslikes":"Forest"
    },
    Neighbor: {
      "Loves":["Dryad"],
      "Likes":["Party Girl"],
      "Dislikes":["Cyborg","Truffle"]
    },
  },{
    "NPC":"Angler",
    Biome:{
      "Likes":"Ocean",
      "Deslikes":"Desert"
    },
    Neighbor: {
      "Likes":["Party Girl","Demolitionist","Tax Collector"],
      "Hates":["Tavernkeep"]
    },
  },{
    "NPC":"Pirate",
    Biome:{
      "Likes":"Ocean",
      "Deslikes":"Caverns"
    },
    Neighbor: {
      "Loves":["Angler"],
      "Likes":["Tavernkeep"],
      "Dislikes":["Stylist"],
      "Hates":["Guide"]
    },
  },{
    "NPC":"Stylist",
    Biome:{
      "Likes":"Ocean",
      "Deslikes":"Snow"
    },
    Neighbor: {
      "Loves":["Dye Trader"],
      "Likes":["Pirate"],
      "Dislikes":["Tavernkeep"],
      "Hates":["Goblin Tinkerer"]
    },
  },{
    "NPC":"Demolitionist",
    Biome:{
      "Likes":"Caverns",
      "Deslikes":"Ocean",
    },
    Neighbor: {
      "Loves":["Tavernkeep"],
      "Likes":["Mechanic"],
      "Dislikes":["Goblin Tinkerer","Arms Dealer"],
    },
  },{
    "NPC":"Goblin Tinkerer",
    Biome:{
      "Likes":"Caverns",
      "Deslikes":"Jungle",
    },
    Neighbor: {
      "Loves":["Mechanic"],
      "Likes":["Dye Trader"],
      "Dislikes":["Clothier"],
      "Hates":["Stylist"]
    },
  },{
    "NPC":"Clothier",
    Biome:{
      "Likes":"Caverns",
      "Deslikes":"Hallow",
    },
    Neighbor: {
      "Loves":["Truffle"],
      "Likes":["Tax Collector"],
      "Dislikes":["Nurse"],
      "Hates":["Mechanic"]
    },
  },{
    "NPC":"Wizard",
    Biome:{
      "Likes":"Hallow",
      "Deslikes":"Ocean"
    },
    Neighbor: {
      "Loves":["Golfer"],
      "Likes":["Merchant"],
      "Dislikes":["Witch Doctor"],
      "Hates":["Cyborg"]
    },
  },{
    "NPC":"Nurse",
    Biome:{
      "Likes":"Hallow",
      "Deslikes":"Snow"
    },
    Neighbor: {
      "Loves":["Arms Dealer"],
      "Likes":["Wizard"],
      "Dislikes":["Party Girl","Dryad"],
      "Hates":["Zoologist"]
    },
  },{
    "NPC":"Party Girl",
    Biome:{
      "Likes":"Hallow",
      "Deslikes":"Caverns"
    },
    Neighbor: {
      "Loves":["Wizard","Zoologist"],
      "Likes":["Stylist"],
      "Dislikes":["Merchant"],
      "Hates":["Tax Collector"]
    },
  },{
    "NPC":"Tavernkeep",
    Biome:{
      "Likes":"Hallow",
      "Deslikes":"Snow"
    },
    Neighbor: {
      "Loves":["Demolitionist"],
      "Likes":["Goblin Tinkerer"],
      "Dislikes":["Guide"],
      "Hates":["Dye Trader"]
    },
  },{
    "NPC":"Truffle",
    Biome:{
      "Likes":"Mushroom"
    },
    Neighbor: {
      "Loves":["Guide"],
      "Likes":["Dryad"],
      "Dislikes":["Clothier"],
      "Hates":["Witch Doctor"]
    },
  },{
    "NPC":"Princess",
    Biome:{
    },
    Neighbor: {
    }
  }
]
export const Biomes = [
  "Forest",
  "Caverns",
  "Snow",
  "Desert",
  "Ocean",
  "Jungle",
  "Mushroom",
  "Hallow",
]
