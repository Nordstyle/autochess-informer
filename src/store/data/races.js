export const races = [
  {
    id: 1,
    name: 'beast',
    description: 'Beasts are ferocious animals. They prey on the weak, drawing power from the size of their ever-growing pack.',
    icon: '/static/images/race/beast.png',
    effect: {
      name: 'Power of the Wild',
      description: `Active when you have at least (N) different beast pieces on board %
      (2) Beasts: All allies have +10% attack damage, including summoned units %
      (4) Beasts: All allies have +20% attack damage, including summoned units %`
    }
  },
  {
    id: 2,
    name: 'demon',
    description: 'Chaotic beings that emerged from a dimensional fissure.',
    icon: '/static/images/race/demon.png',
    effect: {
      name: 'Fel Power',
      description: `Active when you control only one demon on the chessboard. %
      Deal 50% extra pure damage to the target.`
    }
  },
  {
    id: 3,
    name: 'dragon',
    description: 'Dragons were among the first creatures to exist on this ancient land. They possess unimaginable powers, deep within, which they like to show off when they commune together.',
    icon: '/static/images/race/dragon.png',
    effect: {
      name: 'Attunement',
      description: `Active when there are at least (N) different dragon chess pieces on the chessboard. %
      (3) Dragons: All friendly dragons have 100 mana when battle starts.`
    }
  },
  {
    id: 4,
    name: 'dwarf',
    description: 'Dwarves are a bold and courageous species of humanoids that excel in creating and refining weapons and gadgets, allowing them to slay their foes from afar.',
    icon: '/static/images/race/dwarf.png',
    effect: {
      name: 'Take Aim',
      description: `Attack range increased by 300.`
    }
  },
  {
    id: 5,
    name: 'elemental',
    description: 'Elementals are unstable beings that radiate mysterious energy when attacked. This gives them a chance to turn their melee aggressors to stone.',
    icon: '/static/images/race/elemental.png',
    effect: {
      name: 'Elemental Essence',
      description: `Active when there are at least (N) different elemental chess pieces on the chessboard. % 
      (2) Elementals: All friendly elementals have 30% chance to turn the attacker into stone for 4s when attacked by melee chesses. %
      (4) Elementals: All friendly chesses have 30% chance to turn the attacker into stone for 4s when attacked by melee chesses.`
    }
  },
  {
    id: 6,
    name: 'elf',
    description: 'Elves are nimble-footed fighters who rely on their refined reflexes to dodge deadly attacks.',
    icon: '/static/images/race/elf.png',
    effect: {
      name: 'Evasion',
      description: `Active when you have at least (N) different elf pieces on board. %
      (3) Elfs: All friendly elves have +20% evasion.%
      (6) Elfs: All friendly elves have additional +25% evasion.%
      (9) Elfs: All friendly elves have additional +30% evasion. `
    }
  },
  {
    id: 7,
    name: 'goblin',
    description: 'Goblins are a cunning species with a love for money, explosives, and less-than-reliable technology. Their drive to invent fuels them, giving the brightest among them a boost in stamina and fortitude.',
    icon: '/static/images/race/goblin.png',
    effect: {
      name: 'Nanobots',
      description: `Active when you have at least (N) different goblin pieces on board. %
      (3) Goblins: Grants a random ally +15 armor and +10 HP regeneration. %
      (6) Goblins: Grants all allies with +15 armor and +10 HP regeneration.`
    }
  },
  {
    id: 8,
    name: 'human',
    description: 'Humans are an intelligent species that values kindness and cooperation, and silences any who they deem unworthy.',
    icon: '/static/images/race/human.png',
    effect: {
      name: 'Silencer',
      description: `Active when there are at least (N) different human chess pieces on the chessboard. %
      (2) Humans: All friendly humans have 20% chance to silence target for 4s when attacking. %
      (4) Humans: All friendly humans have 25% chance to silence target for 4s when attacking. %
      (6) Humans: All friendly humans have 30% chance to silence target for 4s when attacking.`
    }
  },
  {
    id: 9,
    name: 'ogre',
    description: 'Ogres have two heads, or was it three? More heads mean more health for me!',
    icon: '/static/images/race/ogr.png',
    effect: {
      name: 'Two Heads',
      description: `+5% max HP for all allies.`
    }
  },
  {
    id: 10,
    name: 'orc',
    description: 'Orcs are large, muscular, and slightly stupid fighters, making them excellent at tolerating pain and injury.',
    icon: '/static/images/race/orc.png',
    effect: {
      name: 'Battle Hardened',
      description: `Active when you have at least (N) different orc pieces on board. %
      (2) Orcs: All friendly orcs have +250 max HP. %
      (4) Orcs: All friendly orcs have an additional +350 max HP.`
    }
  },
  {
    id: 11,
    name: 'naga',
    description: 'Nagas are cursed sea-dwellers that haunt the ocean floor. Their hardened, scaly skin acts as an effective defense against spells.',
    icon: '/static/images/race/naga.png',
    effect: {
      name: 'Scale Armor',
      description: `Active when you have at least (N) different naga pieces on board. %
      (2) Nagas: All allies have +35% magic resistance.`
    }
  },
  {
    id: 12,
    name: 'troll',
    description: 'Trolls are loyal followers of the Wild Gods, empowered with voodoo magic. This allowing them to become frenzied throughout their battles, attacking with relentless fervor.',
    icon: '/static/images/race/troll.png',
    effect: {
      name: 'Voodoo Frenzy',
      description: `Active when you have at least (N) different troll pieces on board. %
      (2) Trolls: All friendly trolls have +35 attack speed. %
      (4) Trolls: All allies have +30 attack speed.`
    }
  },
  {
    id: 13,
    name: 'undead',
    description: 'The Undead are horrifying apparitions that instill fear in their enemies, revealing their weaknesses.',
    icon: '/static/images/race/undead.png',
    effect: {
      name: 'Horror',
      description: `Active when you have at least (N) different undead pieces on board. %
      (2) Undeads: All enemies have -4 armor. %
      (4) Undeads: All enemies have -6 armor.`
    }
  },
  {
    id: 14,
    name: 'god',
    description: 'The highly worshipped Gods are considered as the creators of Drodo Island. Being both arrogant and prideful, the loyal beliefs from their creations the have forged the supreme powers that Gods possess, granting them the most significant potential among all creatures which can completely change the outcome of a battle.',
    icon: '/static/images/race/god.png',
    effect: {
      name: 'Overwhelming Superiority',
      description: `Active when you have at least (N) different god pieces on board. %
      Active when all other species traits are inactive. %
      (1) God: All allies cooldown gets reduced by 50%. %
      (2) God: All allies cooldown gets reduced by 50%.`
    }
  }
];