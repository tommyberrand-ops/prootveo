// data/animalBabyMode.js
// MODE BÉBÉ ANIMAL CÂLIN - Version Veo

const animalBabyData = {
    types: {
        chiot: {
            name: "🐶 Chiot",
            description: "bébé chien mignon, joueur et affectueux",
            behaviors: [
                "remue la queue",
                "lèche son visage",
                "se blottit contre elle",
                "lui mordille les doigts délicatement"
            ]
        },
        chaton: {
            name: "🐱 Chaton",
            description: "bébé chat tout doux, câlin et espiègle",
            behaviors: [
                "ronronne",
                "frotte sa tête contre son cou",
                "se love dans ses bras",
                "lèche ses mains"
            ]
        }
    },
    positions: [
        "dans ses bras, tenu contre sa poitrine, face à la caméra",
        "blotti contre son cou",
        "dans une main, elle lui gratouille le ventre",
        "contre elle, elle le serre tendrement"
    ],
    interactions: [
        "lui fait des gestes tendres",
        "frotte son nez contre le sien",
        "le serre contre elle",
        "le montre à la caméra"
    ],
    expressions: [
        "sourire tendre",
        "yeux brillants",
        "regard doux",
        "expression de bonheur"
    ]
};

if (typeof window !== 'undefined') {
    window.animalBabyData = animalBabyData;
    console.log("✅ animalBabyMode.js chargé");
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = animalBabyData;
}
