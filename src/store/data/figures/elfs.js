export const elfs = [
  {
    id: 1,
    name: 'Anti-Mage',
    race: ['elf'],
    class: 'demon hunter',
    icon: '/static/images/figures/icons/anti-mage.png',
    avatar: '/static/images/figures/avatars/anti-mage.png',
    cost: 1,
    health: ['500', '1000', '2000'],
    damage: ['45-55', '90-110', '180-220'],
    as: '1.2',
    dps: ['41', '83', '167'],
    armor: ['5', '5', '5'],
    mr: ['10', '20', '30'],
    skill: {
      name: 'Mana Break',
      icon: '/static/images/skills/skill_antimage.png',
      description: `Burns an opponent's mana on each attack. Mana Break deals 50% of the mana burned as damage to the target.`,
      ability: `ABILITY: Passive .
      DAMAGE TYPE: Physical .
      PIERCES SPELL IMMUNITY: No .
      MANA BURNED PER HIT: 30 / 60 / 90`
    }
  },
  {
    id: 2,
    name: 'Luna',
    race: ['elf'],
    class: 'knight',
    icon: '/static/images/figures/icons/luna.png',
    avatar: '/static/images/figures/avatars/luna.png',
    cost: 2,
    health: ['500', '1000', '2000'],
    damage: ['50-60', '100-120', '200-240'],
    as: '1.3',
    dps: ['42', '84', '169'],
    armor: ['5', '5', '5'],
    mr: ['0', '0', '0'],
    skill: {
      name: 'Moon Glaives',
      icon: '/static/images/skills/skill_luna.png',
      description: `Empowers Luna's Glaives, causing her attacks to bounce between enemy units. Deals less damage with each bounce.`,
      ability: `ABILITY: Passive .
      PIERCES SPELL IMMUNITY: Yes .
      BOUNCERADIUS: 500 .
      BOUNCES: 3/5/7 .
      DAMAGE REDUCTION PER BOUNCE: 30%`
    }
  }
];