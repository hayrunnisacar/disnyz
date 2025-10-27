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
        162, 255, 257, 122, 224, 543, 201, 141, 81, 71, 30, 114, 59, 12, 50
    ];

    //Je construis mon popup
    let templatePopup =
            "<img src='{{image}}' alt='Affiche du film {{film}}' class='images-fc'/>" +
            "<p>{{film}}</p>" +
            "<p>Année : {{publication}}</p>" +
            '<a href="https://www.allocine.fr/film/fichefilm_gen_cfilm={{idAlloCine}}.html" alt="Lien vers Allociné du film">AlloCiné</a>' +
    
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
                .replace("{{image}}",filmData.image)
                .replace("{{film}}", filmData.film)
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

