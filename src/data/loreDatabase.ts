import type {LoreDatabase} from '@/types/lore';

export const loreDatabase: LoreDatabase = {
    planets: {
        mercury: {
            id: 'mercury',
            name: 'Mercury',
            designation: 'SOL-I',
            category: 'Inner Planets',
            image: '/images/planets/mercury.png',
            stats: [
                {label: 'Gravity', value: '0.38 g'},
                {label: 'Atmosphere', value: 'extremely thin exosphere: O, Na, H, He, K'},
                {label: 'Surface Temp (Min)', value: '-180 °C'},
                {label: 'Surface Temp (Max)', value: '+430 °C'},
                {label: 'Surface Temp (Avg)', value: '+167 °C'},
                {label: 'Escape Velocity', value: '4.25 km/s (0.38x Earth)'},
                {label: 'Relativistic Travelling Speed', value: 'FORBIDDEN', warning: true},
            ],
            sidebarAssets: [],
            sections: [],
            moons: [],
        },
        venus: {
            id: 'venus',
            name: 'Venus',
            designation: 'SOL-II',
            category: 'Inner Planets',
            image: '/images/planets/venus.png',
            stats: [
                {label: 'Gravity', value: '0.91 g'},
                {label: 'Atmosphere', value: 'very dense: CO2, N2; sulfuric acid clouds'},
                {label: 'Surface Temp (Min)', value: '+437 °C'},
                {label: 'Surface Temp (Max)', value: '+497 °C'},
                {label: 'Surface Temp (Avg)', value: '+464 °C'},
                {label: 'Escape Velocity', value: '10.36 km/s (0.93x Earth)'},
                {label: 'Relativistic Travelling Speed', value: 'FORBIDDEN', warning: true},

            ],
            sidebarAssets: [],
            sections: [],
            moons: [],
        },
        earth: {
            id: 'terra',
            name: 'Terra',
            designation: 'SOL-III',
            category: 'Inner Planets',
            image: '/images/planets/terra.png',
            stats: [
                {label: 'Gravity', value: '1.00 g'},
                {label: 'Atmosphere', value: 'N2, O2, Ar, CO2'},
                {label: 'Surface Temp (Min)', value: '-89 °C'},
                {label: 'Surface Temp (Max)', value: '+56.7 °C'},
                {label: 'Surface Temp (Avg)', value: '+15 °C'},
                {label: 'Escape Velocity', value: '11.19 km/s (1.00x Earth)'},
                {label: 'Relativistic Travelling Speed', value: 'FORBIDDEN', warning: true},
            ],
            sidebarAssets: [
                {label: 'Space Elevators', value: '0'},
                {label: 'Defense Platforms', value: '128'},
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
                        {label: 'Gravity', value: '0.166 g'},
                        {label: 'Surface Temp (Avg)', value: '-53 °C'},
                        {label: 'Primary Role', value: 'Shipyards / Command'},
                    ],
                    sidebarAssets: [
                        {label: 'Drydocks', value: '45'},
                        {label: 'Fleet Command', value: 'Active'},
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
        mars: {
            id: 'mars',
            name: 'Mars',
            designation: 'SOL-IV',
            category: 'Inner Planets',
            image: '/images/planets/mars.png',
            stats: [
                {label: 'Gravity', value: '0.38 g'},
                {label: 'Atmosphere', value: 'thin: CO2, N2, Ar'},
                {label: 'Surface Temp (Min)', value: '-153 °C'},
                {label: 'Surface Temp (Max)', value: '+20 °C'},
                {label: 'Surface Temp (Avg)', value: '-65 °C'},
                {label: 'Escape Velocity', value: '5.03 km/s (0.45x Earth)'},
                {label: 'Relativistic Travelling Speed', value: 'FORBIDDEN', warning: true},
            ],
            sidebarAssets: [
                {label: 'Space Elevators', value: '0'},
                {label: 'Refueling Stations', value: '4'},
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
                        {label: 'Gravity', value: '0.0005 g'},
                        {label: 'Status', value: 'MILITARIZED'},
                        {label: 'Primary Role', value: 'Orbital Gun Battery'},
                    ],
                    sidebarAssets: [
                        {label: 'Macro-Railguns', value: '12'},
                        {label: 'Garrison', value: '15,000'},
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
        jupiter: {
            id: 'jupiter',
            name: 'Jupiter',
            designation: 'SOL-V',
            category: 'Outer Planets',
            image: '/images/planets/jupiter.png',
            stats: [
                {label: 'Gravity', value: '2.36 g'},
                {label: 'Atmosphere', value: 'H2, He; traces CH4, NH3, H2O'},
                {label: 'Surface Temp (Min)', value: 'N/A'},
                {label: 'Surface Temp (Max)', value: 'N/A'},
                {label: 'Surface Temp (Avg)', value: '-110 °C'},
                {label: 'Escape Velocity', value: '59.5 km/s (5.32x Earth)'},
                {label: 'Relativistic Travelling Speed', value: 'FORBIDDEN', warning: true},
            ],
            sidebarAssets: [
                {label: 'Gas Miners', value: '8,402'},
                {label: 'Jovian Stations', value: '45'},
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
                        'images/moons/europa.png',
                    stats: [
                        {label: 'Gravity', value: '0.134 g'},
                        {label: 'Surface', value: 'Ice Shell'},
                        {label: 'Subsurface', value: 'Liquid Ocean'},
                    ],
                    sidebarAssets: [
                        {label: 'Ice Boreholes', value: '12'},
                        {label: 'Sub-Cities', value: '4'},
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
                    image: '/images/moons/callisto.png',
                    stats: [
                        {label: 'Gravity', value: '0.126 g'},
                        {label: 'Status', value: 'QUARANTINED', warning: true},
                    ],
                    sidebarAssets: [
                        {label: 'Known Survivors', value: 'UNKNOWN'},
                        {label: 'Last Broadcast', value: '400 Days Ago'},
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
        saturn: {
            id: 'saturn',
            name: 'Saturn',
            designation: 'SOL-VI',
            category: 'Outer Planets',
            image: '/images/planets/saturn.png',
            stats: [
                {label: 'Gravity', value: '0.92 g'},
                {label: 'Atmosphere', value: 'H2, He; traces CH4, NH3, and others'},
                {label: 'Surface Temp (Min)', value: 'N/A'},
                {label: 'Surface Temp (Max)', value: 'N/A'},
                {label: 'Surface Temp (Avg)', value: '-140 °C'},
                {label: 'Escape Velocity', value: '35.5 km/s (3.17x Earth)'},
            ],
            sidebarAssets: [],
            sections: [],
            moons: [],
        },
        uranus: {
            id: 'uranus',
            name: 'Uranus',
            designation: 'SOL-VII',
            category: 'Outer Planets',
            image: '/images/planets/uranus.png',
            stats: [
                {label: 'Gravity', value: '0.89 g'},
                {label: 'Atmosphere', value: 'H2, He, CH4'},
                {label: 'Surface Temp (Min)', value: 'N/A'},
                {label: 'Surface Temp (Max)', value: 'N/A'},
                {label: 'Surface Temp (Avg)', value: '-195 °C'},
                {label: 'Escape Velocity', value: '21.3 km/s (1.90x Earth)'},
            ],
            sidebarAssets: [],
            sections: [],
            moons: [],
        },
        neptune: {
            id: 'neptune',
            name: 'Neptune',
            designation: 'SOL-VIII',
            category: 'Outer Planets',
            image: '/images/planets/neptune.png',
            stats: [
                {label: 'Gravity', value: '1.12 g'},
                {label: 'Atmosphere', value: 'H2, He, CH4'},
                {label: 'Surface Temp (Min)', value: 'N/A'},
                {label: 'Surface Temp (Max)', value: 'N/A'},
                {label: 'Surface Temp (Avg)', value: '-200 °C'},
                {label: 'Escape Velocity', value: '23.5 km/s (2.10x Earth)'},
            ],
            sidebarAssets: [],
            sections: [],
            moons: [],
        },
        pluto: {
            id: 'pluto',
            name: 'Pluto',
            designation: 'SOL-IX',
            category: 'Outer Planets',
            image: '/images/planets/pluto.png',
            stats: [],
            sidebarAssets: [],
            sections: [],
            moons: [],
        },
    },
};
