// --------Animation page d'accueil--------
//Je sélectionnne ici les élements de mon HTML afin de les manipuler en javascript pour l'animation
const chateau = document.querySelector(".chateau");
const intro = document.getElementById("intro");
const main = document.querySelector("main");

// Je lui donne la class "apparaît" et ça lance l’animation du château au chargement de la page en le faisant apparaître et descendre doucement à sa position. 
chateau.classList.add("apparait");

//Après 5 secondes, l'intro est cachée et laisse le reste du contenu de la page apparaître. (si on scroll pas)
setTimeout(() => {
    intro.style.opacity = 0;
    //intro.style.pointerEvents = "none"; nous permet de scroller,il permet d'arrier au contenu derrière l'intro donc le main. 
    intro.style.pointerEvents = "none";
    main.style.opacity = 1;
}, 5000); 

// Du coup ici je crée une fonction qui s’exécute à chaque fois que l’utilisateur scroll pour cacher l’intro avec opacity = 0 et pointer-events = none et afficher le contenu principal avec main.style.opacity = 1.
window.addEventListener("scroll", () => {
    intro.style.opacity = 0;
    intro.style.pointerEvents = "none";
    main.style.opacity = 1;
});


// --------Curseur Gradient--------
// code curseur gradient => https://codepen.io/Iseyaaaaa/pen/qBMNEGN
// Je récupère .blob, le gradient. 
var cursor = document.querySelector('.blob');

// J'ajoute un écouteur d'évènements pour suivre les mouvements de la souris
document.addEventListener('mousemove', function(e){
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    // le translate3D permet de modifier l'élément dans les 3 dimensions, X(horizontal), Y(vertical) et Z(profondeur)
});


// --------GRAPHIQUE 1 - MICKEY--------
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


// --------GRAPHIQUE 2 - FRISE CHRONOLOGIQUE--------
//Je me suis aidé du site officiel de gsap pour tous les plugins utilisés
//J'enregistre les plugin MotionPathPlugin et ScrollTrigger
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// Je place un par un tout les boutons popup
// gsap.set("#fcBtn1", { 
//     motionPath: {
//         path: "#pathFrise",
//         align: "#pathFrise",
//         alignOrigin: [0.5, 0.5],
//         end: 0.048
//     }
// });

//J'insère les postions des boutons popup pour optimiser mon code dans un tableau
const positionBouton = [
    0.048, 0.112, 0.176, 0.240, 0.303, 0.367, 0.431, 0.496,
    0.560, 0.624, 0.688, 0.751, 0.816, 0.880, 0.945
]

//J'insère également tous les boutons dans une variable boutons
const boutons = document.querySelectorAll(".bouton-frise");

//Je place tous les boutons en fonction de leur position end grâce au gsap.set qui les place instantanément. Je fais ceci dans une fonction pour ne pas à avoir répété 15 fois le même code
boutons.forEach(function(bouton, nombre){
    gsap.set(bouton, {
        motionPath: {
            path : "#pathFrise",
            align: "#pathFrise",
            alignOrigin: [0.5, 0.5],
            end: positionBouton[nombre]
        }
    });
});

//Sur l'élément ayant l'id "carrosse", je fais une animation
gsap.to("#carrosse", {
   //#carrosse va suivre pathFrise
   //Au moment du scroll
    scrollTrigger: {
        trigger: "#pathFrise",
        //Quand le haut de #pathFrise atteint la moitié de la fenêtre alors, la carrosse commence à bouger
        start: "top center",
        //La carrosse cesse de fonctionner quand le bas de #pathfrise atteint la moitié de la feneêtre
        end: "bottom center",
        //La carrosse est plus doux au départ et à l'arrivée
        scrub: 0.5,
        //Pour moi, afin de voir les points de départ et d'arrivée
        // markers: true,
    },

    //Suivi
    motionPath: {
        //La carrosse suit la frise #pathFrise
        path: "#pathFrise",
        //J'aligne #carrosse sur le path
        align: "#pathFrise",
        //Je dis que c'est le centre de l'image qui doit suivre pathFrise
        alignOrigin: [0.5, 0.5],
        //Carrosse en haut de la courbe de 50px
        offsetY : -50,
    },
    //L'animation suit un mouvement linéaire
    ease: "none",
});

//Je fais les popup pour chaque bouton---
//J'insère le popup dans la variable popupFc
const popupFc = document.querySelector(".popup-fc");


//Je récupère les données du fichier json
fetch('data.json').then(function(response) {
    response.json().then(function(data){
    // console.log(data);

    //Je met dans un tableau les films qui m'intéressent
    const filmsFrise = [
        162, 255, 257, 65, 224, 543, 201, 141, 81, 71, 30, 114, 59, 12, 50
    ];

    //Je construis mon popup
    let templatePopup =
            "<p>{{film}}</p>" +
            "<p>Année : {{publication}}</p>" +
            "<p>Lien AlloCiné: {{idAlloCine}}</p>";
    
    //Je fais le popup pour chaque bouton
    boutons.forEach(function(bouton, nombre){
        //Quand ma souris entre le bouton, alors
        bouton.addEventListener("mouseenter", function(){
            //Je crée une variable filmData pour stocker les films que je souhaitent dedans
            let filmData;
            //Pour chaque film de data, je vérifié si l'id correspond bien au film
            data.forEach(function(film){
                if (film.id == filmsFrise[nombre]){
                    //L'id correspond, alors on met dans filmData
                    filmData = film;
                }
            })
            //Je remplis templatePopup
            var contenuRempli = templatePopup
                .replace("{{film}}", filmData.film)
                .replace("{{publication}}", filmData.publication)
                .replace("{{idAlloCine}}", filmData.idAlloCine);
            //Je l'affiche en html
            popupFc.innerHTML = contenuRempli;

            //Le popup devient l'enfant du bouton au survol pour styliser facilement en css
            bouton.appendChild(popupFc);
            //J'affiche le popup au survol
            popupFc.classList.add("popup-visible");
            //Je retire le popup-invisible au survol
            popupFc.classList.remove("popup-invisible");
        });
        //Je cache le popup quand mon curseur sort de la div popup
        bouton.addEventListener("mouseleave", function(){
            //Je cache en faisant l'inverse du code précédent
            popupFc.classList.add("popup-invisible");
            popupFc.classList.remove("popup-visible");
        });
    });

    }); 
});