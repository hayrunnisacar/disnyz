//Mettez vos codes ici, comme ca on garde l'ordre
//Animation page d'accueil 
//Je récupère tous mes éléments du HTML pour les manipuler
const castle = document.getElementById('castle');
const intro = document.getElementById('intro-animation');
const main = document.getElementById('main');

//je lance mon délai, comme dans mon css, mon chateau a une opacité de 0, pour le faire apparaître progressivement je mets ici l'opacité à 1. 
setTimeout(() => {
castle.style.opacity = '1';
castle.style.transform = 'translateY(0)';
}, 500);

//une fois l'animation terminée, je cache l'animation avec mon chateau pour faire apparaître le contenu de ma page. 
setTimeout(() => {
intro.style.display = 'none';
document.body.style.background = 'none';
main.style.opacity = '1';
}, 8500);


// GRAPHIQUE 1 - MICKEY


// Highcharts.chart('container', { >>> crée un graphique dans l’élément HTML ayant l’ID container.Tout ce qui est entre les { } représente la configuration du graphique
Highcharts.chart('container', {
    colors: ['#4c00ffff', '#c300ffff', '#e972f9ff'],
    // chart = Type de graphique
    chart: {
        // type: 'column' = graphique en colonnes verticales
        type: 'column',
        // inverted: true = inverse les axes pour que les colonnes deviennent horizontales
        inverted: true,
        // polar: true = transforme le graphique en diagramme polaire (circulaire)
        polar: true
    },
    title: {
        text: "Les plus grosses recettes des films d'animation Disney"
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table"' +
            // target="_blank" permet d'ouvrir le lien dans un nouvel onglet
            'target="_blank">Wikipedia</a>'
    },
    tooltip: {
        // Affiche la tooltip (bulle d’information) en dehors du graphique (plutôt qu’au centre)
        outside: true
    },
    // Pane : zone du diagramme polaire
    pane: {
        size: '85%',
        // innerSize permet de crée un trou au centre (effet donut)
        innerSize: '10%',
        // endAngle fait tourner le graphique pour qu’il ne soit pas un cercle complet (ici, ¾ de cercle) soit 270 sur 360°
        endAngle: 270
    },
    // Axe X => catégories = pays (dans l'exemple : à remplacer par les films)
    xAxis: {
        tickInterval: 1,
        // labels personnalise les étiquettes (infobulle je crois) : taille, alignement, etc
        labels: {
            align: 'right',
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
                fontSize: '13px'
            }
        },
        // lineWidth et gridLineWidth à 0 permettent de supprimer les lignes de grille
        lineWidth: 0,
        gridLineWidth: 0,
        categories: [
            // Chaque pays affiche aussi un petit drapeau via du HTML (<span class="flag xx">)
            'Norway <span class="f16"><span id="flag" class="flag no">' +
            '</span></span>',
            'United States <span class="f16"><span id="flag" class="flag us">' +
            '</span></span>',
            'Germany <span class="f16"><span id="flag" class="flag de">' +
            '</span></span>',
            'Austria <span class="f16"><span id="flag" class="flag at">' +
            '</span></span>',
            'Canada <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'France <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'Gana <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'Guadeloupe <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'Blanche Neige <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'Les souris vertes <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'Raiponse <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            
        ]
    },
    // yAxis définit les valeurs numériques (le nombre de médailles dnas le code de base, à remplacer par les recettes)
    yAxis: {
        lineWidth: 0,
        //tickInterval: 25 = intervalle entre les graduations >> Voir pour supprimer
        tickInterval: 25,
        // reversedStacks: false permet d'empiler les colonnes dans l’ordre normal >> VOir ce que ça signifit
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true,
        // gridLineWidth: 0 permet de supprimer les lignes de grille
        gridLineWidth: 0
    },
    // plotOptions permet de définir les options d’affichage des colonnes
    plotOptions: {
        column: {
            // stacking: 'normal' = empile les séries (or, argent, bronze) les unes sur les autres >> À supprimer 
            stacking: 'normal',
            // borderWidth: 0 = pas de contour autour des colonnes
            borderWidth: 0,
            // pointPadding et groupPadding définissent l'espace entre les colonnes
            pointPadding: 0,
            groupPadding: 0.12,
            // borderRadius = arrondit les bords des colonnes (ici en forme circulaire, grâce à '50%')
            borderRadius: {
                radius: '30%',
                where: 'all'
            }
        }
    },
    // Chaque tableau contient les valeurs pour les 5 pays (dans le même ordre que categories) pour les médailles d'or, d'argent et de bronze. Pour ajouter des pays ou film, il faut ajouter des valeurs dans le tableau
    series: [{
        name: 'Gold medals',
        data: [148, 113, 104, 71, 77, 67, 42, 30, 34, 28, 33]
    }, {
        name: 'Silver medals',
        data: [113, 122, 98, 88, 72, 69, 51, 21, 30, 7, 49]
    }, {
        name: 'Bronze medals',
        data: [124, 95, 65, 91, 76, 60, 44, 22, 41, 54, 36]
    }]
});


// GRAPHIQUE 2 - FRISE

















//J'enregistre le plugin MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);
//Sur l'élément ayant l'id "pied", je fais une animation
gsap.to("#pieds", {
    //#pieds va suivre pathFrise et va s'incliner en focntion de la courbe
    motionPath: {
        path: "#pathFrise",
        autoRotate: true,
        //J'aligne #pieds sur le path
        align: "#pathFrise",
        alignOrigin: [0.5, 0.5],
    },
    //L'animation dure 5secondes
    duration: 5,
    //Animation plus douce
    ease: "power1.inOut",
});
// //J'affiche le tracé de la courbe pour modifier et lui donner la forme que je veux
// MotionPathHelper.create("#pieds");