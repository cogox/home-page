export const NPCs = [
  {
    "NPC":"Guide",
    Biome: {
      "Likes":"Forest",
      "Dislikes":"Ocean"
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
      "Dislikes":"Desert"
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
      "Dislikes":"Caverns"
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
      "Dislikes":"Desert",
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
      "Dislikes":"Hallow"
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
      "Dislikes":"Caverns"
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
      "Dislikes":"Jungle"
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
      "Dislikes":"Forest"
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
      "Dislikes":"Snow"
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
      "Dislikes":"Jungle"
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
      "Dislikes":"Desert"
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
      "Dislikes":"Hallow"
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
      "Dislikes":"Forest"
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
      "Dislikes":"Desert"
    },
    Neighbor: {
      "Likes":["Party Girl","Demolitionist","Tax Collector"],
      "Hates":["Tavernkeep"]
    },
  },{
    "NPC":"Pirate",
    Biome:{
      "Likes":"Ocean",
      "Dislikes":"Caverns"
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
      "Dislikes":"Snow"
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
      "Dislikes":"Ocean",
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
      "Dislikes":"Jungle",
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
      "Dislikes":"Hallow",
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
      "Dislikes":"Ocean"
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
      "Dislikes":"Snow"
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
      "Dislikes":"Caverns"
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
      "Dislikes":"Snow"
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
