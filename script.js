// script.js - Version ULTIME FUSIONNÉE - ADAPTÉE POUR VEO
// CONTIENT : Tous les détails ultra-réalistes (pores, micro-expressions, yeux 8K, etc.)
// CONTIENT : Mode selfie simplifié
// CONTIENT : Dialogue avec guillemets automatiques
// CONTIENT : Mode miroir avec règle absolue
// CONTIENT : Mode alien complet
// CONTIENT : Mode avatar avec garder visage
// CONTIENT : Mode animal complet
// CONTIENT : Mode bébé animal câlin
// CONTIENT : Modes fantastiques (vampire, loup-garou, etc.)
// CORRIGÉ : Annulation des gestes mains en mode selfie (mains occupées)
// CORRIGÉ : Annulation des gestes mains en mode miroir (règle absolue)
// CORRIGÉ : Bouton traduction fonctionnel
// MODIFIÉ : Mots sensibles remplacés pour Veo
// MODIFIÉ : Couleurs des paumes supprimées (mains naturelles)

console.log("🚀 Chargement de script.js - Version Veo...");

// Exposer les fonctions de actions.js
if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
    console.log("✅ actions.js exposé globalement");
}

// ==================== DONNÉES DES DANSES SELFIE ====================
const selfieDances = {
    'sensuelle': {
        name: 'Danse Gracieuse',
        description: 'ondulations lentes, hanches, cambrures, regards intenses'
    },
    'sexy': {
        name: 'Danse Élégante',
        description: 'mouvements de bassin, jeu avec les épaules, clins d\'œil'
    },
    'charme': {
        name: 'Danse Enjouée',
        description: 'mouvements fluides, sourires en coin, regards complices'
    },
    'energetique': {
        name: 'Danse Énergétique',
        description: 'mouvements vifs, jeux avec le corps, dynamique'
    },
    'lente': {
        name: 'Danse Lente',
        description: 'mouvements très lents, élégants, presque hypnotiques'
    },
    'naturelle': {
        name: 'Danse Naturelle',
        description: 'mouvements naturels, décontractés, authentiques'
    }
};

// ==================== CLASSE PRINCIPALE ====================
class PromptGenerator {
    constructor() {
        this.userData = {};
        this.typeMapping = {
            'default': 'pirate',
            'fairy': 'fairy',
            'vampire': 'vampire',
            'elf': 'elf',
            'superman': 'superman',
            'cowgirl': 'cowgirl',
            'pirate': 'pirate',
            'princess': 'princess',
            'siren': 'siren',
            'cavewoman': 'cavewoman',
            'athena': 'athena',
            'avatar': 'avatar',
            'avatarwarrior': 'avatarwarrior',
            'avatarchief': 'avatarchief'
        };
    }

    getActionType(personnageKey) {
        if (!countries || !countries[personnageKey]) return 'default';
        let type = countries[personnageKey].type || personnageKey;
        const actions = window.personnageActions || {};
        if (actions[type]) return type;
        if (this.typeMapping[type]) return this.typeMapping[type];
        return 'default';
    }

    getRandomDecor(personnageKey) {
        if (typeof window.getRandomDecor === 'function') return window.getRandomDecor(personnageKey);
        return "dans un studio de danse professionnel";
    }

    getRandomAction(personnageKey) {
        if (typeof window.getRandomAction === 'function') return window.getRandomAction(personnageKey);
        return "elle danse gracieusement face caméra";
    }

    // ===== DÉCOR UNIFIÉ =====
    getUnifiedDecor() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return "studio professionnel";
        const countryKey = selected.dataset.country;
        const country = countries[countryKey];
        const customEnabled = document.getElementById('enableCustomDecor')?.checked || false;
        const customText = document.getElementById('customDecorText')?.value || '';
        if (customEnabled && customText.trim() !== '') return customText.trim();
        const actionType = this.getActionType(countryKey);
        const randomDecor = this.getRandomDecor(actionType);
        if (randomDecor && randomDecor !== "studio professionnel") return randomDecor;
        if (country && country.background) return country.background;
        return "dans un studio de danse professionnel avec éclairages tamisés";
    }

    // ===== FINALE SPECTACULAIRE =====
    getFinaleGesture() {
        const animalBabyModeEnabled = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const animalNom = animalType === 'chiot' ? 'son chiot' : 'son chaton';
        
        if (animalBabyModeEnabled) {
            return `FINALE SPÉCIALE MODE CÂLIN (dernière seconde) :
À LA SECONDE 5 EXACTEMENT (dernière seconde de la vidéo) :
- Elle serre ${animalNom} TRÈS FORT contre elle dans un dernier CÂLIN intense
- Elle pose sa joue sur sa tête, FERME LES YEUX avec un sourire de pur bonheur
- Puis elle OUVRE LENTEMENT LES YEUX vers la CAMÉRA, regard expressif et complice
- Elle lui fait un dernier GESTE TENDRE sur le front tout en fixant le spectateur
- Elle le PRÉSENTE fièrement à la caméra au niveau de la poitrine
- Son expression alterne entre AMOUR pour l'animal et GRACE pour le spectateur
- FREEZE sur cette image de BONHEUR PARTAGÉ entre elle, l'animal et le spectateur`;
        }
        
        const finaleGestures = [];
        if (document.getElementById('finalBisou')?.checked) finaleGestures.push('elle porte la main à ses lèvres puis l\'ouvre lentement vers la caméra');
        if (document.getElementById('finalCiao')?.checked) finaleGestures.push('elle fait un geste élégant de la main');
        if (document.getElementById('finalMasque')?.checked) finaleGestures.push('elle RAPPROCHE SES MAINS DE L\'OBJECTIF pour masquer l\'écran');
        if (document.getElementById('finalCoeur')?.checked) finaleGestures.push('elle forme un CŒUR AVEC SES MAINS au-dessus de sa tête');
        if (document.getElementById('finalClignement')?.checked) finaleGestures.push('elle fait un LONG CLIN D\'ŒIL APPUYÉ');
        if (document.getElementById('finalCascade')?.checked) finaleGestures.push('elle envoie une CASCADE DE GESTES du bout des doigts');
        if (document.getElementById('finalRevelation')?.checked) finaleGestures.push('elle ÉCARTE LES BRAS dans un geste théâtral de révélation');
        if (document.getElementById('finalSalut')?.checked) finaleGestures.push('elle exécute une RÉVÉRENCE GRACIEUSE');
        if (document.getElementById('finalRegard')?.checked) finaleGestures.push('elle FIXE LA CAMÉRA INTENSÉMENT pendant 2 secondes');
        if (document.getElementById('finalViens')?.checked) finaleGestures.push('elle fait un DERNIER GESTE D\'INVITATION avec l\'index');
        if (document.getElementById('finalSouffle')?.checked) finaleGestures.push('elle ENVOIE UN SOUFFLE vers la caméra');
        if (document.getElementById('finalEpaule')?.checked) finaleGestures.push('elle DÉCOUVRE LENTEMENT SON ÉPAULE en faisant glisser le tissu');
        if (document.getElementById('finalCheveux')?.checked) finaleGestures.push('elle REJETTE SES CHEVEUX EN ARRIÈRE d\'un geste lent');
        
        if (finaleGestures.length === 0) return 'elle fait un geste élégant du bout des doigts, suivi d\'un clin d\'œil complice';
        if (finaleGestures.length === 1) return finaleGestures[0];
        const lastGesture = finaleGestures.pop();
        if (finaleGestures.length === 1) return finaleGestures[0] + ' puis ' + lastGesture;
        return finaleGestures.join(', ') + ', puis enfin ' + lastGesture;
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const duree = document.getElementById('finalMaintien')?.value || '2';
        const emotion = document.getElementById('finalEmotion')?.value || 'satisfaite';
        const options = {
            'freeze': `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire ${emotion} aux lèvres, pendant ${duree} secondes`,
            'fondu': `un FONDU AU NOIR PROGRESSIF enveloppe l'image pendant ${duree} secondes`,
            'fonduBlanc': `un FONDU AU BLANC LUMINEUX l'illumine pendant ${duree} secondes`,
            'zoom': `un ZOOM LENT ET DOUX sur son visage pendant ${duree} secondes`,
            'flou': `un FLOU ARTISTIQUE PROGRESSIF pendant ${duree} secondes`
        };
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        const interactions = {
            'regard': 'elle plonge son regard DROIT DANS LES YEUX DU SPECTATEUR',
            'sourire': 'elle offre un SOURIRE ÉCLATANT ET PERSONNEL',
            'clin': 'elle fait un CLIN D\'ŒIL COMPLICE',
            'main': 'elle TEND LA MAIN vers l\'écran',
            'tous': 'elle ALTERNATE REGARD, SOURIRE ET CLIN D\'ŒIL'
        };
        return interactions[interaction] || interactions['regard'];
    }

    // ===== SCRIPT DU PERSONNAGE =====
    generateScript() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        const part1 = document.getElementById('scriptPart1')?.checked ? `En partie 1, elle dit: "${scriptText}"` : '';
        const part2 = document.getElementById('scriptPart2')?.checked ? `En partie 2, elle dit: "${scriptText}"` : '';
        const final = document.getElementById('scriptFinal')?.checked ? `À la fin, elle dit: "${scriptText}"` : '';
        const scripts = [part1, part2, final].filter(s => s).join(' ');
        return `\n\n🎤 SCRIPT DU PERSONNAGE :\n${scripts}`;
    }

    // ===== GÉNÉRATION DU DIALOGUE POUR PARTIE 2 =====
    generateDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        const part2 = document.getElementById('scriptPart2')?.checked;
        const final = document.getElementById('scriptFinal')?.checked;
        let dialogueText = '';
        if (part2) dialogueText += `
🗣️ DIALOGUE - PARTIE 2 (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
AVEC SYNCHRONISATION LABIALE PARFAITE - ses lèvres bougent en même temps que sa voix.
`;
        if (final) dialogueText += `
🗣️ DIALOGUE - FINALE (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
`;
        return dialogueText;
    }

    // ===== GÉNÉRATION DU DIALOGUE POUR PARTIE 1 (selfie uniquement) =====
    generateSelfieDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        const scriptPart1 = document.getElementById('scriptPart1')?.checked;
        if (!scriptText || !scriptPart1) return '';
        return ` "${scriptText}"`;
    }

    // ===== TEXTES MAGIQUES FLOTTANTS =====
    generateFloatingWords(partie) {
        if (!document.getElementById('enableMagicTexts')?.checked) return '';
        const words = [];
        if (document.getElementById('textFollow')?.checked) words.push('"Follow Me"');
        if (document.getElementById('textLike')?.checked) words.push('"Like Me"');
        if (document.getElementById('textLuna')?.checked) words.push('"@luna_wells"');
        if (document.getElementById('textSubscribe')?.checked) words.push('"Subscribe"');
        if (document.getElementById('textLove')?.checked) words.push('"Love Me"');
        if (document.getElementById('textWatch')?.checked) words.push('"Watch Me"');
        if (document.getElementById('textHeart')?.checked) words.push('❤️ (cœurs)');
        if (document.getElementById('textStar')?.checked) words.push('✨ (étoiles)');
        const customText = document.getElementById('customText')?.value;
        if (customText) words.push(`"${customText}"`);
        if (words.length === 0) return '';
        
        const effect = document.getElementById('textEffect')?.value || 'neon';
        const movement = document.getElementById('textMovement')?.value || 'float';
        const color = document.getElementById('textColor')?.value || '#ff6b6b';
        const color2 = document.getElementById('textColor2')?.value || '#4ecdc4';
        const size = document.getElementById('textSize')?.value || 'medium';
        const quantity = document.getElementById('textQuantity')?.value || 'medium';
        const position = document.getElementById('textPosition')?.value || 'around';
        const sizeText = { small: 'petits', medium: 'moyens', large: 'grands', xlarge: 'très grands' }[size] || 'moyens';
        const quantityText = { few: '3-4', medium: '5-7', many: '8-10' }[quantity] || '5-7';
        const specialEffects = [];
        if (document.getElementById('effectSparkle')?.checked) specialEffects.push('scintillement');
        if (document.getElementById('effectPulse')?.checked) specialEffects.push('pulsation');
        if (document.getElementById('effectFade')?.checked) specialEffects.push('apparition/disparition progressive');
        if (document.getElementById('effectTrail')?.checked) specialEffects.push('traînée lumineuse');
        if (document.getElementById('effectShadow')?.checked) specialEffects.push('ombre portée');
        if (document.getElementById('effect3d')?.checked) specialEffects.push('effet 3D');
        const timing = document.getElementById('textTiming')?.value || 'whole';
        if (timing === 'part2' && partie === 'part1') return '';
        if (timing === 'transition' && partie !== 'part2') return '';
        
        return `
✨ EFFETS TEXTES MAGIQUES ${partie === 'part1' ? 'PENDANT LA PREMIÈRE PARTIE' : 'PENDANT LA DEUXIÈME PARTIE'} ✨
- Des textes ${words.join(', ')} apparaissent et flottent dans l'air autour d'elle
- Style d'affichage : ${effect}
- Mouvement : ${movement}
- Couleurs : ${color} (principal) et ${color2} (secondaire)
- Taille : ${sizeText}
- Quantité : ${quantityText} textes
- Position : ${position}
- Effets supplémentaires : ${specialEffects.join(', ')}`;
    }

    // ===== MODE ALIEN =====
    generateAlienTransformations() {
        if (!document.getElementById('enableAlienMode')?.checked) return '';
        let alienText = '\n\n👽 TRANSFORMATIONS EXTRA-TERRESTRES (DÉJÀ ACCOMPLIES) :\n';
        let hasFeatures = false;
        if (document.getElementById('alienSkin')?.checked) {
            const color = document.getElementById('alienSkinColor')?.value || 'argent';
            alienText += `- Peau transformée : texture ${color} irisée, effet métal liquide (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienEyes')?.checked) {
            const color = document.getElementById('alienEyesColor')?.value || 'rouge';
            alienText += `- Yeux : devenus lumineux, couleur ${color} (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienAntenna')?.checked) {
            const style = document.getElementById('antennaStyle')?.value || 'antennes';
            const styleText = { 'antennes': 'Antennes fines', 'cornes': 'Cornes stylisées', 'couronne': 'Couronne lumineuse', 'halo': 'Halo de lumière', 'tentacules': 'Tentacules' }[style] || 'Antennes';
            alienText += `- ${styleText} sur la tête (DÉJÀ PRÉSENTES)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienGlow')?.checked) {
            const color = document.getElementById('glowColor')?.value || 'bleu';
            alienText += `- Corps phosphorescent : lueur ${color} (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienTattoos')?.checked) {
            const style = document.getElementById('tattooStyle')?.value || 'symboles';
            alienText += `- Tatouages lumineux : motifs ${style} (DÉJÀ PRÉSENTS)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienHolograms')?.checked) {
            const type = document.getElementById('hologramType')?.value || 'etoiles';
            const typeText = { 'etoiles': 'étoiles filantes', 'planetes': 'planètes miniatures', 'symboles': 'symboles mystiques', 'energie': 'sphères d\'énergie', 'animaux': 'créatures holographiques' }[type] || 'hologrammes';
            alienText += `- Hologrammes flottants : des ${typeText} (DÉJÀ PRÉSENTS)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienVoice')?.checked) alienText += `- Voix modulée\n`;
        if (document.getElementById('alienGravity')?.checked) alienText += `- Effet apesanteur\n`;
        if (document.getElementById('alienTeleportation')?.checked) alienText += `- Effet téléportation\n`;
        return hasFeatures ? alienText : '';
    }

    // ===== MODE AVATAR =====
    generateAvatarTransformations() {
        if (!document.getElementById('enableAvatarMode')?.checked) return '';
        let avatarText = '\n\n🔵 TRANSFORMATIONS AVATAR (NA\'VI) - DÉJÀ ACCOMPLIES :\n';
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        if (keepFace) avatarText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence. Seul le corps est transformé en Na'vi.\n`;
        if (document.getElementById('avatarFullBody')?.checked) {
            const skinTone = document.getElementById('avatarSkinTone')?.value || 'bleu nuit';
            avatarText += `- Corps Na'vi complet : peau ${skinTone}\n`;
        }
        if (document.getElementById('avatarEars')?.checked) avatarText += `- Oreilles pointues\n`;
        if (document.getElementById('avatarTail')?.checked) {
            const tailStyle = document.getElementById('avatarTailStyle')?.value || 'fine';
            avatarText += `- Queue ${tailStyle} et expressive\n`;
        }
        if (document.getElementById('avatarStripes')?.checked) {
            const stripeStyle = document.getElementById('avatarStripesStyle')?.value || 'fines';
            const stripeColor = document.getElementById('avatarStripesColor')?.value || 'blanc';
            avatarText += `- Rayures lumineuses ${stripeStyle} de couleur ${stripeColor}\n`;
        }
        if (document.getElementById('avatarBioluminescence')?.checked) avatarText += `- Points bioluminescents\n`;
        if (document.getElementById('avatarTattoos')?.checked) avatarText += `- Peintures tribales Na'vi\n`;
        return avatarText;
    }

    // ===== MODE ANIMAL =====
    generateAnimalTransformations() {
        if (typeof window.animalData === 'undefined') return '';
        if (!document.getElementById('enableAnimalMode')?.checked) return '';
        const type = document.getElementById('animalType')?.value || 'chatte';
        const color = document.getElementById('animalColor')?.value || '';
        const keepFace = document.getElementById('animalKeepFace')?.checked || false;
        const ears = document.getElementById('animalEars')?.checked || false;
        const tail = document.getElementById('animalTail')?.checked || false;
        const fur = document.getElementById('animalFur')?.checked || false;
        const eyes = document.getElementById('animalEyes')?.checked || false;
        const claws = document.getElementById('animalClaws')?.checked || false;
        const animal = window.animalData?.[type];
        if (!animal) return '';
        let animalText = '\n\n🐾 TRANSFORMATION ANIMALE - DÉJÀ ACCOMPLIE :\n';
        if (keepFace) animalText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence\n`;
        else animalText += `- Transformation COMPLÈTE en ${animal.name}\n`;
        if (ears) animalText += `- ${animal.traits.oreilles}\n`;
        if (tail) animalText += `- ${animal.traits.queue}\n`;
        if (fur) animalText += `- ${animal.traits.fourrure || 'Fourrure texturée'}\n`;
        if (eyes) animalText += `- ${animal.traits.yeux}\n`;
        if (claws) animalText += `- ${animal.traits.griffes || 'Griffes'}\n`;
        if (color) animalText += `- Robe/couleur : ${color}\n`;
        return animalText;
    }

    // ===== MODE BÉBÉ ANIMAL CÂLIN =====
    generateAnimalBabyMode() {
        if (!document.getElementById('enableAnimalBabyMode')?.checked) return '';
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const intensity = document.getElementById('animalBabyIntensity')?.value || 'tendre';
        const positions = document.getElementById('animalBabyPositions')?.value || 'variees';
        const animal = window.animalBabyData?.types[animalType] || window.animalBabyData?.types.chiot;
        
        let babyText = '\n\n🐶 MODE BÉBÉ ANIMAL CÂLIN - INTERACTION ULTRA-RÉALISTE 🐱\n';
        babyText += `\n👶 ANIMAL PRÉSENT : ${animal ? animal.name : (animalType === 'chiot' ? '🐶 Chiot' : '🐱 Chaton')}\n`;
        babyText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INSTRUCTION PRIORITAIRE - INTÉGRATION DE L'IMAGE ANIMALE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- L'image du bébé animal est INTÉGRÉE PHYSIQUEMENT dans la scène
- Elle le tient DANS SES MAINS, contre son corps
- L'animal est RÉEL : volume, poids, textures

🖼️ PLAN CADRAGE : PLAN MOYEN RAPPROCHÉ
- L'animal est tenu DROIT DEVANT ELLE, au niveau de la poitrine
- VISIBLE FACE CAMÉRA : elle et l'animal regardent le spectateur

💞 INTERACTIONS :
- Câlins, gestes tendres, gratouilles
- Alternance regards TENDRES (animal) / EXPRESSIFS (caméra)

🐾 COMPORTEMENT DE L'ANIMAL :
${animalType === 'chiot' ? 
  `- remue la queue frénétiquement
- lèche son visage avec sa petite langue
- se blottit contre sa poitrine` : 
  `- ronronne fort contre elle
- frotte sa tête contre son cou
- se love dans le creux de ses bras`}

⏱️ CHRONOLOGIE (6 secondes) :
- 0-1s : Révélation - elle tient DÉJÀ l'animal
- 1-2s : Présentation face caméra
- 2-3s : Câlins, joue contre sa tête
- 3-4s : Danse DOUCE avec lui
- 4-5s : Gestes tendres et jeux
- 5-6s : FINALE - dernier câlin, regard caméra, FREEZE

${intensity === 'tendre' ? '🎯 INTENSITÉ : TENDRE' : intensity === 'joueur' ? '🎯 INTENSITÉ : JOUEUR' : '🎯 INTENSITÉ : MIXTE'}
${positions === 'variees' ? '📍 POSITIONS : VARIÉES' : positions === 'fixe' ? '📍 POSITIONS : FIXE' : '📍 POSITIONS : DYNAMIQUES'}
`;
        return babyText;
    }

    // ===== MODE MIROIR =====
    generateMirrorMode() {
        if (!document.getElementById('enableMirrorMode')?.checked) return '';
        const mirrorType = document.getElementById('mirrorType')?.value || 'classique';
        const duoStyle = document.getElementById('mirrorDuoStyle')?.value || 'synchronise';
        const poseFinale = document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote';
        const mirrorData = window.mirrorModeData || {};
        const type = mirrorData.types?.[mirrorType] || { name: "Clone identique", description: "" };
        const duo = mirrorData.duo_styles?.[duoStyle] || { name: "Synchronisé", description: "" };
        
        let mirrorText = '\n\n🪞 MODE MIROIR - DOUBLE GRÂCE 🪞\n';
        mirrorText += `\n🎭 TYPE DE CLONE : ${type.name}\n`;
        
        if (mirrorData.regle_absolue) {
            mirrorText += `
🚫 RÈGLE ABSOLUE - AUCUN CONTACT FACIAL ENTRE LES CLONES 🚫
${mirrorData.regle_absolue.consigne}
✅ CONTACTS AUTORISÉS : ${mirrorData.regle_absolue.contacts_autorises.join(', ')}
`;
        }
        
        mirrorText += `
✨ PARTIE 2 - LE DUO FACE CAMÉRA (6 secondes) :

SECONDE 0-1 : Les DEUX femmes côte à côte, FACE CAMÉRA
SECONDE 1-2 : PRÉSENTATION - se regardent, sourient, se prennent la main
SECONDE 2-4 : DANSE À DEUX - style ${duo.name}
SECONDE 4-5 : MONTÉE DE TENSION - se rapprochent
SECONDE 5-6 : FINALE - ${poseFinale === 'cote_a_cote' ? 'côte à côte, main dans la main' : 'pose choisie'}

💡 RAPPELS : Les DEUX femmes sont IDENTIQUES, transition pendant le flash blanc
`;
        return mirrorText;
    }

    // ===== MODES FANTASTIQUES =====
    generateFantasyTransformations() {
        if (typeof window.generateFantasyTransformations === 'function') {
            return window.generateFantasyTransformations();
        }
        return '';
    }

    // ===== OPTIONS SPÉCIALES =====
    generateSpecialFeatures() {
        let specialText = '';
        let hasFeatures = false;
        if (document.getElementById('enable-eyes')?.checked) {
            const eyeLeft = document.getElementById('eye-left-select')?.value || 'bleu';
            const eyeRight = document.getElementById('eye-right-select')?.value || 'marron';
            specialText += `\n👁️ YEUX ULTRA-RÉALISTES 8K (HÉTÉROCHROMIE) :\n- Œil GAUCHE : ${eyeLeft}\n- Œil DROIT : ${eyeRight}\n- Vaisseaux sanguins visibles, reflets multiples, film lacrymal\n`;
            hasFeatures = true;
        }
        if (document.getElementById('enable-skin')?.checked) {
            const skinColor = document.getElementById('skin-color-select')?.value || 'blanc';
            specialText += `\n🎨 TACHES DE NAISSANCE / VITILIGO :\n- ${skinColor} skin patches\n- Contours naturels, texture de peau préservée\n`;
            hasFeatures = true;
        }
        return hasFeatures ? specialText : '';
    }

    // ===== EFFETS AVANCÉS =====
    generateAdvancedEffects() {
        const effects = [];
        if (document.getElementById('effectExplosion')?.checked) effects.push('explosion de couleurs');
        if (document.getElementById('effectTeleportation')?.checked) effects.push('téléportation');
        if (document.getElementById('effectMirror')?.checked) effects.push('effet miroir');
        if (document.getElementById('effectTimeLapse')?.checked) effects.push('accéléré puis ralenti');
        if (document.getElementById('effectHologram')?.checked) effects.push('hologrammes');
        if (document.getElementById('effectClone')?.checked) effects.push('clones');
        if (document.getElementById('effectFeu')?.checked) effects.push('flammes');
        if (document.getElementById('effectEau')?.checked) effects.push('vagues');
        if (document.getElementById('effectGlace')?.checked) effects.push('cristaux de glace');
        if (document.getElementById('effectEclairs')?.checked) effects.push('éclairs');
        if (document.getElementById('effectPapillons')?.checked) effects.push('papillons');
        if (document.getElementById('effectPlumes')?.checked) effects.push('plumes');
        if (document.getElementById('effectLaser')?.checked) effects.push('lasers');
        if (document.getElementById('effectBulles')?.checked) effects.push('bulles');
        if (effects.length === 0) return '';
        const surpriseLevel = document.getElementById('surpriseLevel')?.value || 7;
        const surpriseText = surpriseLevel <= 3 ? 'surprise subtile' : surpriseLevel <= 6 ? 'effet marqué' : surpriseLevel <= 8 ? 'effet spectaculaire' : 'EXPÉRIENCE VISUELLE INTENSE';
        return `\nEFFETS SPECTACULAIRES AVANCÉS (${surpriseText}) : ${effects.join(', ')}.`;
    }

    // ===== MODE SELFIE - VERSION AMÉLIORÉE AVEC BOUCHAGE OBJECTIF =====
    generateSelfieMode() {
        if (!document.getElementById('enableSelfieMode')?.checked) return '';
        
        const dialoguePart = this.generateSelfieDialogue();
        const danceStyle = document.getElementById('selfieDanceStyle')?.value || 'sensuelle';
        const danceDesc = selfieDances[danceStyle]?.description || 'ondulations élégantes';

        return `c'est un selfie son bras reste tendue${dialoguePart ? ` elle dit${dialoguePart}` : ''} en dansant (${danceDesc}).

🎬 INSTRUCTION SPÉCIALE - FINALE SELFIE (dernière seconde) :
À LA SECONDE 5 EXACTEMENT :
- Elle rapproche son visage TRÈS LENTEMENT de l'objectif
- Ses lèvres s'approchent jusqu'à TOUCHER l'objectif
- Les lèvres viennent COLLER à l'objectif
- ON VOIT LES DÉTAILS ULTRA-MACRO DES LÈVRES : ridules, brillant, humidité, texture de la peau
- Les lèvres BOUCHENT COMPLÈTEMENT L'OBJECTIF (plus aucune image visible)
- L'écran devient NOIR (pas de flash)
- FIN DE LA PARTIE 1

IMPORTANT - TRANSITION VERS LA PARTIE 2 :
- Pendant cet écran noir, elle pose son téléphone
- La PARTIE 2 commencera avec un angle de caméra FIXE (téléphone posé)
- Ses deux mains sont LIBRES pour danser`;
    }

    // ===== COLLECTE DES DONNÉES =====
    collectUserData() {
        const selectedCard = document.querySelector('.character-card.selected');
        const countryKey = selectedCard ? selectedCard.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo')?.checked || false,
            fluoColor: document.getElementById('fluoColor')?.value || 'rose fluo',
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            finale: {
                bisou: document.getElementById('finalBisou')?.checked || false,
                ciao: document.getElementById('finalCiao')?.checked || false,
                masque: document.getElementById('finalMasque')?.checked || false,
                coeur: document.getElementById('finalCoeur')?.checked || false,
                clignement: document.getElementById('finalClignement')?.checked || false,
                cascade: document.getElementById('finalCascade')?.checked || false,
                revelation: document.getElementById('finalRevelation')?.checked || false,
                salut: document.getElementById('finalSalut')?.checked || false,
                regard: document.getElementById('finalRegard')?.checked || false,
                viens: document.getElementById('finalViens')?.checked || false,
                souffle: document.getElementById('finalSouffle')?.checked || false,
                epaule: document.getElementById('finalEpaule')?.checked || false,
                cheveux: document.getElementById('finalCheveux')?.checked || false,
                option: document.getElementById('finalOption')?.value || 'freeze',
                maintien: document.getElementById('finalMaintien')?.value || '2',
                emotion: document.getElementById('finalEmotion')?.value || 'satisfaite',
                interaction: document.getElementById('finalInteraction')?.value || 'regard'
            },
            animalBabyMode: {
                enabled: document.getElementById('enableAnimalBabyMode')?.checked || false,
                type: document.getElementById('animalBabyType')?.value || 'chiot',
                intensity: document.getElementById('animalBabyIntensity')?.value || 'tendre',
                positions: document.getElementById('animalBabyPositions')?.value || 'variees'
            },
            mirrorMode: {
                enabled: document.getElementById('enableMirrorMode')?.checked || false,
                type: document.getElementById('mirrorType')?.value || 'classique',
                transition: document.getElementById('mirrorTransition')?.value || 'main_tendue',
                duoStyle: document.getElementById('mirrorDuoStyle')?.value || 'synchronise',
                poseFinale: document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote'
            },
            selfieMode: {
                enabled: document.getElementById('enableSelfieMode')?.checked || false
            },
            selfieDance: document.getElementById('selfieDanceStyle')?.value || 'sensuelle',
            rapperStyle: document.getElementById('rapperStyle')?.value || 'tenue1',
            rapperluxeStyle: document.getElementById('rapperluxeStyle')?.value || 'tenue1'
        };
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'discrète, élégante';
        if (level <= 6) return 'charmante, expressive';
        return 'magnétique, captivante';
    }

    // ===== PARTIE 1 =====
    generatePart1() {
        const isSelfie = this.userData.selfieMode.enabled;
        const isMirror = this.userData.mirrorMode.enabled;
        
        if (isSelfie) {
            return this.generateSelfieMode();
        }
        
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (isMirror) {
            gesturesText = `
⚠️ MODE MIROIR - RÈGLE :
- PAS DE GESTES DES MAINS
- La grâce vient des regards, des sourires, des mouvements de corps
`;
        } else {
            if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires chaleureux et engageants\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
            if (this.userData.gestures.levres) gesturesText += '- Lèvre inférieure légèrement relâchée\n';
            if (this.userData.gestures.mains) gesturesText += '- Ses mains effleurent son visage et ses épaules\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux\n';
            if (this.userData.gestures.bisous) {
                gesturesText += `- Elle porte la main à ses lèvres puis l'ouvre (${this.userData.gestures.bisousCount} fois)\n`;
            }
            if (this.userData.gestures.viens) {
                gesturesText += `- Elle fait le geste d'inviter (${this.userData.gestures.viensCount} fois)\n`;
            }
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part1) ? 
            danceMoves[this.userData.country].part1.join('\n    - ') : 'mouvements gracieux';

        const floatingTexts = this.generateFloatingWords('part1');

        let part1Text = `Une transition de danse synchronisée en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence

👇 INSTRUCTIONS POUR UN VISAGE ULTRA-RÉALISTE 👇

TEXTURE DE PEAU :
- Rendu hyper réaliste style photo professionnelle
- Pores visibles, relief cutané
- Micro-expressions involontaires

YEUX ULTRA-RÉALISTES 8K :
- Iris hyper détaillés
- Film lacrymal humide
- Vaisseaux sanguins visibles
- Cils individuels

RESPIRATION ET VIE :
- Léger mouvement de la cage thoracique
- Épaules qui bougent imperceptiblement

Expression ${seductionPhrase}

TENUE DE DÉPART :
- ${this.userData.startingOutfit.top}
- ${this.userData.startingOutfit.bottom}
- ${this.userData.startingOutfit.details}
- Cheveux : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION :
Danse ${country.dance} ${seductionPhrase} :
    - ${danceMovesText}

GESTES :
${gesturesText}

${floatingTexts}`;

        if (this.userData.mirrorMode.enabled) {
            part1Text += `

🪞 TRANSITION MIROIR (dernière seconde) :
FLASH DE LUMIÈRE BLANCHE - FIN PARTIE 1`;
        } else {
            part1Text += `

TRANSITION :
Elle plaque ses mains contre la caméra pour masquer l'image.
Pendant ce flash, elle se change COMPLÈTEMENT.`;
        }

        return part1Text;
    }

    // ===== PARTIE 2 =====
    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';
        
        const isSelfie = this.userData.selfieMode.enabled;
        const isMirror = this.userData.mirrorMode.enabled;
        
        let gesturesText = '';
        if (isSelfie) {
            gesturesText = `⚠️ MODE SELFIE : téléphone posé, deux mains libres\n`;
            if (this.userData.gestures.regards) gesturesText += '- Regards intenses\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires chaleureux\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil\n';
            if (this.userData.gestures.mains) gesturesText += '- Gestes amples\n';
            if (this.userData.gestures.bisous) gesturesText += `- Gestes vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        } else if (isMirror) {
            gesturesText = `⚠️ MODE MIROIR : pas de gestes des mains\n`;
        } else {
            if (this.userData.gestures.regards) gesturesText += '- Regards intenses\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires chaleureux\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil\n';
            if (this.userData.gestures.mains) gesturesText += '- Gestes amples\n';
            if (this.userData.gestures.bisous) gesturesText += `- Gestes vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part2) ? 
            danceMoves[this.userData.country].part2.join('\n    - ') : 'mouvements intenses';
        const decorText = this.getUnifiedDecor();
        const finale = this.getFinaleGesture();
        const floatingTexts = this.generateFloatingWords('part2');
        
        const alienTransformations = this.generateAlienTransformations();
        const avatarTransformations = this.generateAvatarTransformations();
        const animalTransformations = this.generateAnimalTransformations();
        const animalBabyMode = this.generateAnimalBabyMode();
        const mirrorMode = this.generateMirrorMode();
        const fantasyModes = this.generateFantasyTransformations();
        const specialFeatures = this.generateSpecialFeatures();
        const advancedEffects = this.generateAdvancedEffects();
        let script = this.generateScript();
        
        let dialogueText = '';
        if (!isSelfie) {
            dialogueText = this.generateDialogue();
        }
        
        let finalScript = script;
        if (isSelfie) {
            dialogueText = '';
            finalScript = '';
        }

        const baseEffects = [];
        if (document.getElementById('effectConfettis')?.checked) baseEffects.push('confettis');
        if (document.getElementById('effectPoudre')?.checked) baseEffects.push('poudre scintillante');
        if (document.getElementById('effectPétales')?.checked) baseEffects.push('pétales');
        if (document.getElementById('effectFumee')?.checked) baseEffects.push('fumée');
        if (document.getElementById('effectLumières')?.checked) baseEffects.push('lumières');
        const baseEffectsText = baseEffects.length > 0 ? baseEffects.join(', ') : 'poudre scintillante';

        let outfitText = this.userData.finalOutfit;

        return `Suite - DEUXIÈME PARTIE (6 secondes).

CONTINUITÉ PARFAITE - MÊME VISAGE

⚠️ TRANSITION : Pendant le flash, elle s'est CHANGÉE
Résultat FINAL déjà visible

${finalScript}

NOUVELLE TENUE : ${outfitText}

CHEVEUX : ${this.userData.enableFluo ? this.userData.fluoColor + ' ' + fluoIntensityText : this.userData.naturalHair}

${alienTransformations}
${avatarTransformations}
${animalTransformations}
${animalBabyMode}
${mirrorMode}
${fantasyModes}
${specialFeatures}

DANSE : ${country.dance}
    - ${danceMovesText}

GESTES : ${gesturesText}

${floatingTexts}

DÉCOR : ${decorText}

${advancedEffects}

EFFETS : ${baseEffectsText}

🎬 FINALE : ${finale}`;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        return `CONSIGNES :
1. VISAGE IDENTIQUE PARTIE 1 ET 2
2. TRANSFORMATION HORS CAMÉRA
3. ULTRA-RÉALISME
4. SILENCE (sauf script)
5. PERSONNAGE : ${country.name} - ${country.dance}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        return {
            part1: this.generatePart1(),
            part2: this.generatePart2(),
            consignes: this.generateConsignes(),
            full: this.generatePart1() + '\n\n' + this.generatePart2() + '\n\n' + this.generateConsignes()
        };
    }
}

// ==================== FONCTIONS D'INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) { console.error("❌ Grille non trouvée!"); return; }
    if (typeof countries === 'undefined') { grid.innerHTML = '<div style="color: red;">Erreur: Personnages non chargés</div>'; return; }
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    console.log(`✅ ${Object.keys(countries).length} personnages chargés`);
    
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const selectedSpan = document.querySelector('#selectedCountry span');
        if (selectedSpan) selectedSpan.textContent = countries[firstCard.dataset.country].name;
    }
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const selectedSpan = document.querySelector('#selectedCountry span');
            if (selectedSpan) selectedSpan.textContent = countries[this.dataset.country].name;
        });
    });
    
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const search = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(search) ? 'block' : 'none';
            });
        });
    }
}

function initImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeBtn = document.getElementById('removeImage');
    if (!uploadArea || !imageInput || !imagePreview || !previewImg || !removeBtn) return;
    
    uploadArea.addEventListener('click', () => imageInput.click());
    uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.style.borderColor = '#00f3ff'; });
    uploadArea.addEventListener('dragleave', () => { uploadArea.style.borderColor = ''; });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleImage(file);
    });
    imageInput.addEventListener('change', (e) => { if (e.target.files[0]) handleImage(e.target.files[0]); });
    removeBtn.addEventListener('click', () => {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'flex';
        imageInput.value = '';
        previewImg.src = '#';
    });
    
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    let text = '';
    switch(tabId) {
        case 'tabFull': text = prompts.full || ''; break;
        case 'tabPart1': text = prompts.part1 || ''; break;
        case 'tabPart2': text = prompts.part2 || ''; break;
        case 'tabConsignes': text = prompts.consignes || ''; break;
    }
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    const country = countries[selected.dataset.country];
    const recap = `🌍 Personnage : ${country.name}\n💃 Danse : ${country.dance}`;
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}

function setupConditionalOptions() {
    const alienSkin = document.getElementById('alienSkin');
    const alienEyes = document.getElementById('alienEyes');
    const alienAntenna = document.getElementById('alienAntenna');
    const alienGlow = document.getElementById('alienGlow');
    const alienTattoos = document.getElementById('alienTattoos');
    const alienHolograms = document.getElementById('alienHolograms');
    if (alienSkin) alienSkin.addEventListener('change', function() { document.getElementById('alienSkinOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienEyes) alienEyes.addEventListener('change', function() { document.getElementById('alienEyesOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienAntenna) alienAntenna.addEventListener('change', function() { document.getElementById('alienAntennaOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienGlow) alienGlow.addEventListener('change', function() { document.getElementById('alienGlowOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienTattoos) alienTattoos.addEventListener('change', function() { document.getElementById('alienTattoosOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienHolograms) alienHolograms.addEventListener('change', function() { document.getElementById('alienHologramsOptions').style.display = this.checked ? 'block' : 'none'; });
    
    const avatarTail = document.getElementById('avatarTail');
    const avatarStripes = document.getElementById('avatarStripes');
    if (avatarTail) avatarTail.addEventListener('change', function() { document.getElementById('avatarTailOptions').style.display = this.checked ? 'block' : 'none'; });
    if (avatarStripes) avatarStripes.addEventListener('change', function() { document.getElementById('avatarStripesOptions').style.display = this.checked ? 'block' : 'none'; });
    
    document.getElementById('enableAnimalMode')?.addEventListener('change', updateAnimalColors);
    document.getElementById('animalType')?.addEventListener('change', updateAnimalColors);
    document.getElementById('enable-eyes')?.addEventListener('change', function() { document.getElementById('eye-controls').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enable-skin')?.addEventListener('change', function() { document.getElementById('skin-controls').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
}

function updateAnimalColors() {
    const type = document.getElementById('animalType')?.value;
    const colorSelect = document.getElementById('animalColor');
    if (!colorSelect || !type || !window.animalData) return;
    const animal = window.animalData[type];
    if (!animal) return;
    colorSelect.innerHTML = '';
    animal.couleursDisponibles.forEach(couleur => {
        const option = document.createElement('option');
        option.value = couleur;
        option.textContent = couleur.charAt(0).toUpperCase() + couleur.slice(1);
        colorSelect.appendChild(option);
    });
}

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt')?.addEventListener('click', function() {
        console.log("🎬 Génération du prompt...");
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) displayPrompt(prompts, activeTab.id);
        updateRecap();
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Prompt copié!'));
    });
    document.getElementById('exportPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    document.getElementById('translatePrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        if (text && text.trim() !== '') {
            window.open(`https://translate.google.com/?sl=fr&tl=en&text=${encodeURIComponent(text)}&op=translate`, '_blank');
        } else {
            alert('Aucun prompt à traduire. Générez d\'abord un prompt.');
        }
    });
    
    document.getElementById('clearPrompt')?.addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    document.getElementById('suggestColors')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) { alert('Sélectionnez d\'abord un personnage'); return; }
        const country = countries[selected.dataset.country];
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    document.getElementById('generateOutfit')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) { alert('Sélectionnez d\'abord un personnage'); return; }
        const country = countries[selected.dataset.country];
        let outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}. Éléments : ${country.finalOutfit.elements.join(', ')}. Accessoires : ${country.finalOutfit.accessories.join(', ')}.`;
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() { document.getElementById('magicTextsOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() { document.getElementById('customDecorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAlienMode')?.addEventListener('change', function() { document.getElementById('alienOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAvatarMode')?.addEventListener('change', function() { document.getElementById('avatarOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() { document.getElementById('animalOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalBabyMode')?.addEventListener('change', function() { document.getElementById('animalBabyOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableMirrorMode')?.addEventListener('change', function() { document.getElementById('mirrorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
    if (typeof initFantasyConfig === 'function') initFantasyConfig();
    document.getElementById('enableScript')?.addEventListener('change', function() { document.getElementById('scriptOptions').style.display = this.checked ? 'block' : 'none'; });
    
    setupConditionalOptions();
    
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) {
        fluoIntensity.addEventListener('input', function() {
            const val = parseInt(this.value);
            const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
            document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
        });
    }
    
    const seductionLevel = document.getElementById('seductionLevel');
    const seductionValue = document.getElementById('seductionValue');
    if (seductionLevel && seductionValue) {
        seductionLevel.addEventListener('input', function() { seductionValue.textContent = this.value + '/10'; });
    }
    
    const bisousCheckbox = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisousCheckbox && bisousCount) {
        bisousCount.disabled = !bisousCheckbox.checked;
        bisousCheckbox.addEventListener('change', function() { bisousCount.disabled = !this.checked; });
    }
    
    const viensCheckbox = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viensCheckbox && viensCount) {
        viensCount.disabled = !viensCheckbox.checked;
        viensCheckbox.addEventListener('change', function() { viensCount.disabled = !this.checked; });
    }
}

function populateSpecialSelects() {
    const eyeLeft = document.getElementById('eye-left-select');
    const eyeRight = document.getElementById('eye-right-select');
    if (eyeLeft && eyeRight && typeof eyeColorsData !== 'undefined') {
        eyeLeft.innerHTML = '';
        eyeRight.innerHTML = '';
        eyeColorsData.forEach(color => {
            const option1 = document.createElement('option');
            option1.value = color.label.toLowerCase();
            option1.textContent = color.label;
            eyeLeft.appendChild(option1);
            const option2 = document.createElement('option');
            option2.value = color.label.toLowerCase();
            option2.textContent = color.label;
            eyeRight.appendChild(option2);
        });
    }
    const skinSelect = document.getElementById('skin-color-select');
    if (skinSelect && typeof skinColorsData !== 'undefined') {
        skinSelect.innerHTML = '';
        skinColorsData.forEach(color => {
            const option = document.createElement('option');
            option.value = color.label.toLowerCase();
            option.textContent = color.label;
            skinSelect.appendChild(option);
        });
    }
}

function startApp() {
    console.log("🚀 Démarrage de l'application...");
    populateSpecialSelects();
    setTimeout(updateAnimalColors, 500);
    initCharacters();
    initImageUpload();
    attachEvents();
    console.log("✅ Application prête - Version Veo!");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

window.PromptGenerator = PromptGenerator;
window.initCharacters = initCharacters;
window.displayPrompt = displayPrompt;
window.updateRecap = updateRecap;

console.log("📦 script.js chargé - VERSION VEO : Mots sensibles remplacés, couleurs paumes supprimées");
