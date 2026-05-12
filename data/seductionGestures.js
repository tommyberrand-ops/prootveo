// data/seductionGestures.js
// VERSION VEO 3.1 - NEUTRALISÉE

const seductionGestures = {
    facial: [
        "Regards expressifs et engageants vers l'objectif",
        "Sourires légers, chaleureux et naturels",
        "Clins d'œil lents et discrets",
        "Lèvre inférieure légèrement relâchée",
        "Regard fixe et confiant",
        "Battements de cils naturels et réguliers"
    ],
    
    body: [
        "Mains qui suivent le rythme de la danse, mouvements amples",
        "Jeux avec les cheveux - doigts qui glissent naturellement",
        "Ajustements discrets et élégants de la tenue",
        "Respiration calme et régulière",
        "Posture droite et assurée",
        "Épaules détendues et mobiles"
    ],
    
    camera: [
        "Gestes de la main vers l'objectif, ouverture lente des doigts",
        "Invitation du regard, mouvement doux de la main",
        "Regard qui parcourt l'écran avec bienveillance",
        "Paumes ouvertes offertes à la caméra"
    ],
    
    microExpressions: [
        "Paupière qui cligne naturellement",
        "Pulsation sanguine subtile visible aux tempes",
        "Légère variation pupillaire",
        "Peau qui s'étire naturellement avec les expressions",
        "Respiration visible de la cage thoracique",
        "Épaules qui bougent imperceptiblement"
    ],
    
    lips: [
        "Lèvres aux contours naturels",
        "Peau des lèvres fine et délicate",
        "Texture légèrement granuleuse",
        "Reflets discrets de lumière",
        "Léger brillant aux commissures"
    ],
    
    teeth: [
        "Dents naturelles au ton subtilement chaud",
        "Petites variations naturelles dans l'alignement",
        "Transparence légère sur les bords",
        "Gencives aux tons naturels"
    ],
    
    hands: [
        "Veines légèrement apparentes sur le dos des mains",
        "Tendons mobiles lors des mouvements",
        "Plis articulaires marqués",
        "Petites variations naturelles de la peau",
        "Texture de peau distincte de celle du visage"
    ]
};

if (typeof window !== 'undefined') {
    window.seductionGestures = seductionGestures;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = seductionGestures;
}
