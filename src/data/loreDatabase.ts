import type { LoreDatabase } from '@/types/lore';

export const loreDatabase: LoreDatabase = {
  planets: {
    mars: {
      id: 'mars',
      name: 'Mars',
      designation: 'SOL-IV',
      category: 'Inner Planets',
      image:
        'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2574&auto=format&fit=crop',
      stats: [
        { label: 'Gravity', value: '0.379 g' },
        { label: 'Surface Temp (Avg)', value: '-63 °C' },
        { label: 'Atmos. Pressure', value: '0.006 atm' },
        { label: 'Escape Velocity', value: '5.03 km/s' },
        { label: 'Dark Matter Drive', value: 'DISABLED', warning: true },
      ],
      sidebarAssets: [
        { label: 'Space Elevators', value: '0' },
        { label: 'Refueling Stations', value: '4' },
      ],
      sections: [
        {
          title: '[01] Historical Context',
          content:
            "The first true beachhead. Before the Antigods woke, Mars was humanity's pride-a testament to raw engineering. Now, it is heavily fortified, its canyons lined with macro-railguns aimed at the void.",
        },
        {
          title: '[02] Infrastructure & Settlements',
          content:
            'Surface structures are minimal, existing only to serve the massive strip-mining operations and orbital defense grids. The civilian population resides deep within the Valles Marineris trench network.',
          placeholder: '+ [ ATTACH SCHEMATIC_RENDER: TRENCH_CITY ] +',
        },
      ],
      moons: [
        {
          id: 'phobos',
          name: 'Phobos',
          designation: 'SOL-IVa',
          category: 'Martian Satellite',
          image:
            'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2500&auto=format&fit=crop',
          stats: [
            { label: 'Gravity', value: '0.0005 g' },
            { label: 'Status', value: 'MILITARIZED' },
            { label: 'Primary Role', value: 'Orbital Gun Battery' },
          ],
          sidebarAssets: [
            { label: 'Macro-Railguns', value: '12' },
            { label: 'Garrison', value: '15,000' },
          ],
          sections: [
            {
              title: '[01] The Gun Rock',
              content:
                'Phobos is no longer a natural satellite. It has been hollowed out and converted into a massive rotating gun platform, covering the Martian orbital approaches from Antigod incursions.',
            },
          ],
        },
      ],
    },
    earth: {
      id: 'earth',
      name: 'Terra',
      designation: 'SOL-III',
      category: 'Inner Planets',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2574&auto=format&fit=crop',
      stats: [
        { label: 'Gravity', value: '1.000 g' },
        { label: 'Surface Temp (Avg)', value: '14 °C' },
        { label: 'Atmos. Pressure', value: '1.000 atm' },
        { label: 'Dark Matter Drive', value: 'ENABLED' },
      ],
      sidebarAssets: [
        { label: 'Space Elevators', value: '3' },
        { label: 'Defense Platforms', value: '128' },
      ],
      sections: [
        {
          title: '[01] The Cradle',
          content:
            'The ancestral homeworld. Heavily urbanized and suffering from severe ecological scarring. Since the realization of the Antigod threat, Earth has been transformed into a singular, interconnected fortress.',
        },
        {
          title: '[02] The Aegis Ring',
          content:
            'Earth is encircled by an artificial ring of orbital habitats, shipyards, and kinetic bombardment platforms collectively known as The Aegis. It filters all incoming traffic.',
        },
      ],
      moons: [
        {
          id: 'luna',
          name: 'Luna',
          designation: 'SOL-IIIa',
          category: 'Terran Satellite',
          image:
            'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=2573&auto=format&fit=crop',
          stats: [
            { label: 'Gravity', value: '0.166 g' },
            { label: 'Surface Temp (Avg)', value: '-53 °C' },
            { label: 'Primary Role', value: 'Shipyards / Command' },
          ],
          sidebarAssets: [
            { label: 'Drydocks', value: '45' },
            { label: 'Fleet Command', value: 'Active' },
          ],
          sections: [
            {
              title: '[01] Fleet Command',
              content:
                'The dark side of Luna hosts the High Command of the United Fleet. It is the most heavily shielded location in the solar system, utilizing natural lunar rock and synthetic diamonoid plating.',
            },
          ],
        },
      ],
    },
    jupiter: {
      id: 'jupiter',
      name: 'Jupiter',
      designation: 'SOL-V',
      category: 'Outer Planets',
      image:
        'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=2574&auto=format&fit=crop',
      stats: [
        { label: 'Gravity', value: '2.528 g' },
        { label: 'Surface Temp', value: '-110 °C' },
        { label: 'Dark Matter Drive', value: 'DISABLED', warning: true },
      ],
      sidebarAssets: [
        { label: 'Gas Miners', value: '8,402' },
        { label: 'Jovian Stations', value: '45' },
      ],
      sections: [
        {
          title: '[01] The Gas Giant Economy',
          content:
            "The heart of the outer system's energy production. Massive atmospheric scoops dive into the upper layers to harvest Helium-3, powering the fusion drives of the fleet.",
        },
      ],
      moons: [
        {
          id: 'europa',
          name: 'Europa',
          designation: 'SOL-Va',
          category: 'Jovian Satellite',
          image:
            'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=2500&auto=format&fit=crop',
          stats: [
            { label: 'Gravity', value: '0.134 g' },
            { label: 'Surface', value: 'Ice Shell' },
            { label: 'Subsurface', value: 'Liquid Ocean' },
          ],
          sidebarAssets: [
            { label: 'Ice Boreholes', value: '12' },
            { label: 'Sub-Cities', value: '4' },
          ],
          sections: [
            {
              title: '[01] The Deep Cities',
              content:
                'Beneath kilometers of ice lies the Europan ocean. The cities here are suspended in the dark waters, heated by hydrothermal vents and nuclear reactors. They remain highly paranoid of bio-contamination.',
            },
          ],
        },
        {
          id: 'callisto',
          name: 'Callisto',
          designation: 'SOL-Vd',
          category: 'Jovian Satellite',
          image:
            'https://images.unsplash.com/photo-1632395627727-3b9afcfeb6cb?q=80&w=2500&auto=format&fit=crop',
          stats: [
            { label: 'Gravity', value: '0.126 g' },
            { label: 'Status', value: 'QUARANTINED', warning: true },
          ],
          sidebarAssets: [
            { label: 'Known Survivors', value: 'UNKNOWN' },
            { label: 'Last Broadcast', value: '400 Days Ago' },
          ],
          sections: [
            {
              title: '[01] The Silence',
              content:
                'Following suspected Antigod contamination, Callisto has been operating under complete radio silence. Orbital blockades prevent any ships from landing or taking off. Whatever is happening down there is trapped.',
              placeholder: '+ [ DECRYPT LAST_TRANSMISSION ] +',
            },
          ],
        },
      ],
    },
  },
};
