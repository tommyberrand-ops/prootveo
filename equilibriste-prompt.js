// equilibriste-prompt.js - Version VEO 3.1
// Transition préservée - vocabulaire neutralisé

function getGesturesText(userData) {
    let gesturesText = '';
    if (userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses\n';
    if (userData.gestures.sourires) gesturesText += '- Sourires chaleureux et engageants\n';
    if (userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
    if (userData.gestures.levres) gesturesText += '- Lèvre inférieure légèrement relâchée\n';
    if (userData.gestures.mains) gesturesText += '- Ses mains effleurent son visage et ses épaules avec grâce\n';
    if (userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
    if (userData.gestures.bisous) {
        gesturesText += `- Elle porte la main à ses lèvres puis l'ouvre vers la caméra (${userData.gestures.bisousCount} fois)\n`;
    }
    if (userData.gestures.viens) {
        gesturesText += `- Elle fait le geste d'inviter avec son index (${userData.gestures.viensCount} fois)\n`;
    }
    return gesturesText;
}

function getBaseEffectsText() {
    const baseEffects = [];
    if (document.getElementById('effectConfettis')?.checked) baseEffects.push('confettis');
    if (document.getElementById('effectPoudre')?.checked) baseEffects.push('poudre scintillante');
    if (document.getElementById('effectPétales')?.checked) baseEffects.push('pluie de pétales');
    if (document.getElementById('effectFumee')?.checked) baseEffects.push('fumée légère');
    if (document.getElementById('effectLumières')?.checked) baseEffects.push('lumières colorées');
    if (document.getElementById('effectPaillettes')?.checked) baseEffects.push('paillettes');
    return baseEffects.length > 0 ? baseEffects.join(', ') : 'poudre scintillante';
}

function getAdvancedEffectsText() {
    const effects = [];
    if (document.getElementById('effectExplosion')?.checked) effects.push('explosion de couleurs');
    if (document.getElementById('effectTeleportation')?.checked) effects.push('effet de téléportation');
    if (document.getElementById('effectMirror')?.checked) effects.push('effet miroir');
    if (document.getElementById('effectTimeLapse')?.checked) effects.push('ralenti au moment clé');
    if (document.getElementById('effectHologram')?.checked) effects.push('hologrammes flottants');
    if (document.getElementById('effectClone')?.checked) effects.push('duplication en plusieurs copies');
    if (document.getElementById('effectFeu')?.checked) effects.push('flammes tourbillonnantes');
    if (document.getElementById('effectEau')?.checked) effects.push('vagues d\'eau cristalline');
    if (document.getElementById('effectGlace')?.checked) effects.push('cristaux de glace');
    if (document.getElementById('effectEclairs')?.checked) effects.push('éclairs lumineux');
    if (document.getElementById('effectPapillons')?.checked) effects.push('papillons colorés');
    if (document.getElementById('effectPlumes')?.checked) effects.push('plumes légères');
    if (document.getElementById('effectLaser')?.checked) effects.push('lasers colorés');
    if (document.getElementById('effectBulles')?.checked) effects.push('bulles scintillantes');
    if (effects.length === 0) return '';
    const surpriseLevel = document.getElementById('surpriseLevel')?.value || 7;
    const surpriseText = surpriseLevel <= 3 ? 'effet subtil' : surpriseLevel <= 6 ? 'effet marqué' : surpriseLevel <= 8 ? 'effet spectaculaire' : 'expérience visuelle intense';
    return `\nEFFETS VISUELS AVANCÉS (${surpriseText}) : ${effects.join(', ')}.`;
}

function getFloatingWords(partie) {
    if (!document.getElementById('enableMagicTexts')?.checked) return '';
    const words = [];
    if (document.getElementById('textFollow')?.checked) words.push('"Follow Me"');
    if (document.getElementById('textLike')?.checked) words.push('"Like Me"');
    if (document.getElementById('textSubscribe')?.checked) words.push('"Subscribe"');
    if (document.getElementById('textLove')?.checked) words.push('"Love"');
    if (document.getElementById('textWatch')?.checked) words.push('"Watch Me"');
    if (document.getElementById('textLuna')?.checked) words.push('"@luna_wells"');
    if (document.getElementById('textHeart')?.checked) words.push('❤️');
    if (document.getElementById('textStar')?.checked) words.push('✨');
    const customText = document.getElementById('customText')?.value;
    if (customText) words.push(`"${customText}"`);
    if (words.length === 0) return '';
    const effect = document.getElementById('textEffect')?.value || 'neon';
    const movement = document.getElementById('textMovement')?.value || 'float';
    const color = document.getElementById('textColor')?.value || '#ff6b6b';
    const color2 = document.getElementById('textColor2')?.value || '#4ecdc4';
    const size = document.getElementById('textSize')?.value || 'medium';
    const quantity = document.getElementById('textQuantity')?.value || 'medium';
    const sizeText = { small: 'petits', medium: 'moyens', large: 'grands', xlarge: 'très grands' }[size] || 'moyens';
    const quantityText = { few: '3-4', medium: '5-7', many: '8-10' }[quantity] || '5-7';
    const specialEffects = [];
    if (document.getElementById('effectSparkle')?.checked) specialEffects.push('scintillement');
    if (document.getElementById('effectPulse')?.checked) specialEffects.push('pulsation');
    if (document.getElementById('effectFade')?.checked) specialEffects.push('apparition progressive');
    if (document.getElementById('effectTrail')?.checked) specialEffects.push('traînée lumineuse');
    if (document.getElementById('effectShadow')?.checked) specialEffects.push('ombre portée');
    if (document.getElementById('effect3d')?.checked) specialEffects.push('effet de profondeur');
    const timing = document.getElementById('textTiming')?.value || 'whole';
    if (timing === 'part2' && partie === 'part1') return '';
    if (timing === 'transition' && partie !== 'part2') return '';
    return `
✨ TEXTES FLOTTANTS ${partie === 'part1' ? 'PREMIÈRE PARTIE' : 'DEUXIÈME PARTIE'} ✨
- Textes ${words.join(', ')} apparaissent et flottent dans l'air
- Style : ${effect}
- Mouvement : ${movement}
- Tailles : ${sizeText}
- Quantité : ${quantityText} textes
- Effets : ${specialEffects.join(', ')}`;
}

function generateEquilibristePart1(objet, userData, floatingTexts) {
    const objetDesc = objet.trim() || "un chapeau élégant";
    const gesturesText = getGesturesText(userData);
    return `🎪 SÉQUENCE ÉQUILIBRISTE - PARTIE 1 :

Elle entre en scène, ${objetDesc} parfaitement équilibré sur sa tête.

MOUVEMENTS D'ÉQUILIBRE :
- Elle avance lentement, chaque pas calculé avec précision
- Ses bras s'ouvrent gracieusement en balancier
- Son regard alterne entre l'objet et la caméra
- Elle exécute des rotations lentes, l'objet restant immobile
- Des poses sur une jambe défient la gravité
- Son sourire est confiant

JEUX DE REGARDS :
- Elle lève les yeux vers l'objet sans bouger la tête
- Puis plonge son regard dans la caméra, complice

GESTES ET MOUVEMENTS :
${gesturesText}

${floatingTexts}

AMBIANCE :
- Spot unique éclaire la scène
- Ombre portée au sol
- Public silencieux, retenant son souffle

TRANSITION :
Au moment le plus intense, elle rapproche ses mains de l'objectif dans un geste théâtral, les plaquant contre la caméra pour masquer entièrement l'image. Pendant ce court instant, elle se change complètement.`;
}

function generateEquilibristePart2(objet, options, userData, floatingTexts, baseEffects, advancedEffects, specialFeatures) {
    const objetDesc = objet.trim() || "un chapeau élégant";
    const regardObjet = options.regardObjet ? "Elle lève fréquemment les yeux vers l'objet" : "";
    const suspense = options.suspense ? "Les mouvements ralentissent, la tension monte" : "";
    const rattrape = options.rattrape ? "elle le rattrape avec grâce" : "il tombe au sol";
    const chuteMoment = options.chuteMoment || "fin";
    const gesturesText = getGesturesText(userData);
    let chuteDesc = "";
    if (chuteMoment === "fin") {
        chuteDesc = "À la toute dernière seconde, alors qu'elle esquisse un dernier mouvement victorieux, l'objet bascule...";
    } else if (chuteMoment === "avant-derniere") {
        chuteDesc = "À l'avant-dernière seconde, l'objet commence à vaciller... Elle tente de le stabiliser...";
    } else {
        chuteDesc = "Au ralenti, l'objet se met à tanguer de plus en plus avant de chuter...";
    }
    return `🎪 SÉQUENCE ÉQUILIBRISTE - PARTIE 2 - FINALE :

${objetDesc} toujours en équilibre parfait sur sa tête.

${specialFeatures}

MOUVEMENTS PLUS AUDACIEUX :
- Ses mouvements deviennent plus fluides, plus amples
- Elle ose des déhanchés, des cambrures
- Ses mains suivent le rythme de son corps
- Elle tourne, virevolte, l'objet suivant ses mouvements
${regardObjet ? "- " + regardObjet : ""}

GESTES ET MOUVEMENTS :
${gesturesText}

${floatingTexts}

${suspense}

EFFETS VISUELS :
Au moment où ses mains révèlent la transition, ${baseEffects}

${advancedEffects}

🎯 MOMENT CRITIQUE - CHUTE :
${chuteDesc}
L'objet tombe dans les airs...

👐 RÉACTION :
Avec une rapidité incroyable, elle tend les bras vers le ciel et ${rattrape}.

⏱️ DERNIER INSTANT :
Ses doigts se referment sur l'objet, un sourire éclaire son visage...

🌑 FIN :
L'image se coupe NET au moment précis où ses doigts touchent l'objet.

SUSPENSE ABSOLU.`;
}

function enhancePromptGenerator() {
    if (window.PromptGenerator) {
        const originalGeneratePart1 = PromptGenerator.prototype.generatePart1;
        const originalGeneratePart2 = PromptGenerator.prototype.generatePart2;
        
        PromptGenerator.prototype.generatePart1 = function() {
            const equilibristeActive = document.getElementById('enableEquilibriste')?.checked || false;
            const selectedCard = document.querySelector('.character-card.selected');
            const isEquilibriste = selectedCard && selectedCard.textContent.includes('Équilibriste');
            if (equilibristeActive && isEquilibriste) {
                const objet = document.getElementById('equilibreObjet')?.value || 'un chapeau élégant';
                const floatingTexts = this.generateFloatingWords ? this.generateFloatingWords('part1') : '';
                return generateEquilibristePart1(objet, this.userData, floatingTexts);
            }
            return originalGeneratePart1.call(this);
        };
        
        PromptGenerator.prototype.generatePart2 = function() {
            const equilibristeActive = document.getElementById('enableEquilibriste')?.checked || false;
            const selectedCard = document.querySelector('.character-card.selected');
            const isEquilibriste = selectedCard && selectedCard.textContent.includes('Équilibriste');
            if (equilibristeActive && isEquilibriste) {
                const objet = document.getElementById('equilibreObjet')?.value || 'un chapeau élégant';
                const options = {
                    regardObjet: document.getElementById('equilibreRegardObjet')?.checked || false,
                    suspense: document.getElementById('equilibreSuspense')?.checked || false,
                    rattrape: document.getElementById('equilibreRatrappe')?.checked || false,
                    chuteMoment: document.getElementById('equilibreChuteMoment')?.value || 'fin'
                };
                const floatingTexts = this.generateFloatingWords ? this.generateFloatingWords('part2') : '';
                const baseEffects = getBaseEffectsText();
                const advancedEffects = getAdvancedEffectsText();
                const specialFeatures = this.generateSpecialFeatures ? this.generateSpecialFeatures() : '';
                return generateEquilibristePart2(objet, options, this.userData, floatingTexts, baseEffects, advancedEffects, specialFeatures);
            }
            return originalGeneratePart2.call(this);
        };
        console.log("🎪 equilibriste-prompt.js chargé - Version Veo compatible");
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhancePromptGenerator);
} else {
    enhancePromptGenerator();
}
