export const classes = [
  {
    id: 1,
    name: 'assassin',
    description: 'Assassins are skilled executioners that leap into enemy backlines. Together, they gain a keen eye for weaknesses in enemy armor, gaining the ability to deliver devastating critical hits.',
    icon: '/static/images/class/assassin.png',
    effect: {
      name: 'Coup de Grace',
      description: `Active when you have at least (N) different assassin pieces on board.
      (3) Assassins: All friendly assassins have 15&#37; chance to critical hit for 350&#37; damage.%
      (6) Assassins: All friendly assassins have 15&#37; chance to critical hit for 450&#37; damage.%`
    }
  },
  {
    id: 2,
    name: 'demon hunter',
    description: 'Exiled warriors who’ve learned to control fel energies.',
    icon: '/static/images/class/demon-hunter.png',
    effect: {
      name: 'Shuttered soul',
      description: `Active when there are at least (N) different demon hunter chess pieces on the chessboard. %
      (1) Demon Hunter: Negate enemy demon power. %
      (2) Demon Hunter: All friendly demons retain their Fel Power.`
    }
  },
  {
    id: 3,
    name: 'druid',
    description: 'Shapeshifters and healers that have harnessed the ancient powers of nature, sharing exceptionally profound knowledge among each other.',
    icon: '/static/images/class/druid.png',
    effect: {
      name: 'Synergy',
      description: `Active when there are at least (N) different druid chess pieces on the chessboard. %
      (2) Druid: two Druid★ can upgrade to a Druid★★. %
      (4) Druid: two Druid★★ can upgrade to a Druid★★★.`
    }
  },
  {
    id: 4,
    name: 'knight',
    description: 'Knights are holy defenders of the realm. As they engage in battle, the Omniscience may bless them with a divine shield.',
    icon: '/static/images/class/knight.png',
    effect: {
      name: 'Divine Protection',
      description: `Active when you have at least (N) different knight pieces on board. %
      Shield gives 80&#37; magic resistance and 35 armor for 3 seconds %
      (3) Knights: All friendly knights have 40&#37; chance to proc a damage-reducing shield. %
      (6) Knights: All allies have 40&#37; chance to proc a damage-reducing shield.`
    }
  },
  {
    id: 5,
    name: 'hunter',
    description: 'Hunters are experienced survivors of the primal world outside of civilization. Their refined weapon techniques allow them to attack more effectively than others would think possible, and strike through the enemies\' evasive techniques.',
    icon: '/static/images/class/hunter.png',
    effect: {
      name: 'Aimed Shot',
      description: `Active when you have at least (N) different hunter pieces on board. %
      (3) Hunters: All friendly hunters have +30 base attack damage and +30&#37; chance to pierce through evasion. %
      (6) Hunters: All friendly hunters have an additional +40 base attack damage and +40&#37; chance to pierce through evasion.`
    }
  },
  {
    id: 6,
    name: 'priest',
    description: 'Priests are blessed invokers of light and darkness, who express their determined spirits through dedicated service to the people. For numerous battles, with the mastery of light and shadow energies they have weaved the most reliable life-saving protections for their allies.',
    icon: '/static/images/class/priest.png',
    effect: {
      name: 'Barrier',
      description: `Active when you have at least (N) different priest pieces on board. %
      (1) Priest: Reduce damage to your courier by 20&#37;.`
    }
  },
  {
    id: 7,
    name: 'mage',
    description: 'Mages are keen intellectuals who have spent years studying arcane knowledge. This allows them to make their victims more vulnerable to magic damage.',
    icon: '/static/images/class/mage.png',
    effect: {
      name: 'Magic Vulnerability',
      description: `Active when you have at least (N) different mage pieces on board. %
      (3) Mages: All enemies have their magic resistance reduced by 35&#37;. %
      (6) Mages: All enemies have their magic resistance reduced by an additional 45&#37;.`
    }
  },
  {
    id: 8,
    name: 'mech',
    description: 'Mechs are equipped with unique contraptions to quickly recover from any kind of damage on the battlefield.',
    icon: '/static/images/class/mech.png',
    effect: {
      name: 'Self Repair',
      description: `Active when you have at least (N) different mech pieces on board. %
      (2) Mechs: All friendly mechs have +15 HP regeneration. %
      (4) Mechs: All friendly mechs have an additional +25 HP regeneration.`
    }
  },
  {
    id: 9,
    name: 'shaman',
    description: 'Mortal mediators of the ancient elements.',
    icon: '/static/images/class/shaman.png',
    effect: {
      name: 'Self Repair',
      description: `Active when there are at least (N) different shaman chess pieces on the chessboard. %
      (2) Shaman: Hexes a random enemy for 6s when battle starts.`
    }
  },
  {
    id: 10,
    name: 'warlock',
    description: 'Warlocks are cursed sorcerers who use demonic power to drain the life force from their enemies, restoring themselves to continue their cursed battle.',
    icon: '/static/images/class/warlock.png',
    effect: {
      name: 'Siphon Soul',
      description: `Active when you have at least (N) different warlock pieces on board. %
      (3) Warlocks: All allies have +15&#37; lifesteal and spell lifesteal. %
      (6) Warlocks: All allies have an additional +25&#37; lifesteal and spell lifesteal.`
    }
  },
  {
    id: 11,
    name: 'warrior',
    description: 'Warriors are fearless brawlers who possess a vast knowledge of arms and armor. They use this knowledge to fortify their defenses.',
    icon: '/static/images/class/warrior.png',
    effect: {
      name: 'Fortified Armor',
      description: `Active when you have at least (N) different warrior pieces on board. %
      (3) Warriors: All friendly warriors have +5 armor. %
      (6) Warriors: All friendly warriors have an additional +7 armor. %
      (9) Warriors: All friendly warriors have an additional +9 armor.`
    }
  }
];