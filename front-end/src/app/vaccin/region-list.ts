
export interface Region {
    name: string;
    departments: string[];
}

export const REGIONS: Region[] = [
    {
        name: 'AUVERGNE-RHONE-ALPES',
        departments: ['Ain (01)', 'Allier (03)', 'Ardèche (07)', 'Cantal (15)', 'Drôme (26)', 'Isère (38)',
            'Loire (42)', 'Haute-Loire (43)', 'Puy-De-Dôme (63)', 'Rhône (69)', 'Savoie (73)', 'Haute-Savoie (74)']
    },
    {
        name: 'BOURGOGNE-FRANCHE-COMTE',
        departments: ['Côte-D\'Or (21)', 'Doubs (25)', 'Jura (39)', 'Nièvre (58)', 'Haute-Saône (70)',
            'Saône-Et-Loire (71)', 'Yonne (89)', 'Territoire De Belfort (90)']
    },
    {
        name: 'BRETAGNE',
        departments: ['Côtes-D\'Armor (22)', 'Finistère (29)', 'Ille-Et-Vilaine (35)', 'Morbihan (56)']
    },
    {
        name: 'CENTRE-VAL DE LOIRE',
        departments: ['Cher (18)', 'Eure-Et-Loir (28)', 'Indre (36)', 'Indre-Et-Loire (37)', 'Loir-Et-Cher (41)',
            'Loiret (45)']
    },
    {
        name: 'CORSE',
        departments: ['Corse-Du-Sud (2A)', 'Haute-Corse (2B)']
    },
    {
        name: 'GRAND EST',
        departments: ['Ardennes (08)', 'Aube (10)', 'Marne (51)', 'Haute-Marne (52)', 'Meurthe-Et-Moselle (54)',
            'Meuse (55)', 'Moselle (57)', 'Bas-Rhin (67)', 'Haut-Rhin (68)', 'Vosges (88)']
    },
    {
        name: 'HAUTS-DE-FRANCE',
        departments: ['Aisne (02)', 'Nord (59)', 'Somme (80)', 'Nord (59)', 'Pas-De-Calais (62)']
    },
    {
        name: 'ILE DE FRANCE',
        departments: ['Paris (75)', 'Seine-Et-Marne (77)', 'Yvelines (78)', 'Essonne (91)', 'Hauts-De-Seine (92)',
            'Seine-Saint-Denis (93)', 'Val-De-Marne (94)', 'Val-D\'Oise (95)']
    },
    {
        name: 'NORMANDIE',
        departments: ['Calvados (14)', 'Eure (27)', 'Manche (50)', 'Orne (61)', 'Seine-Maritime (76)']
    },
    {
        name: 'NOUVELLE-AQUITAINE',
        departments: ['Charente (16)', 'Charente-Maritime (17)', 'Corrèze (19)', 'Creuse (23)', 'Dordogne (24)',
            'Gironde (33)', 'Landes (40)', 'Lot-Et-Garonne (47)', 'Pyrénées-Atlantiques (64)', 'Deux-Sèvres (79)', 'Vienne (86)',
            'Haute-Vienne (87)']
    },
    {
        name: 'OCCITANIE',
        departments: ['Ariège (09)', 'Aude (11)', 'Aveyron (12)', 'Gard (30)', 'Haute-Garonne (31)', 'Gers (32)',
            'Hérault (34)', 'Lot (46)', 'Lozère (48)', 'Hautes-Pyrénées (65)', 'Pyrénées-Orientales (66)', 'Tarn (81)',
            'Tarn-Et-Garonne (82)']
    },
    {
        name: 'PAYS DE LOIRE',
        departments: ['Loire-Atlantique (44)', 'Maine-Et-Loire (49)', 'Mayenne (53)', 'Sarthe (72)', 'Vendée (85)']
    },
    {
        name: 'PROVENCE ALPES COTE D\'AZUR',
        departments: ['Alpes-De-Haute-Provence (04)', 'Hautes-Alpes (05)', 'Alpes-Maritimes (06)',
            'Bouches-Du-Rhône (13)', 'Var (83)', 'Vaucluse (84)']
    }
];