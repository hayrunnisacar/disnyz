// On attend que le DOM soit complètement chargé pour afficher la page
document.addEventListener("DOMContentLoaded", function() {

// ----------------Animation page d'accueil----------------
//Je sélectionnne ici les eléments de mon HTML afin de les manipuler en javascript pour l'animation
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
        intro.style.display = "none";
        
    main.style.opacity = 1;
}, 5000); 

// Du coup ici je crée une fonction qui s’exécute à chaque fois que l’utilisateur scroll pour cacher l’intro avec opacity = 0 et pointer-events = none et afficher le contenu principal avec main.style.opacity = 1.
window.addEventListener("scroll", () => {
    intro.style.opacity = 0;
    intro.style.pointerEvents = "none";
    main.style.opacity = 1;
});


// ----------------Curseur Gradient----------------
// code curseur gradient => https://codepen.io/Iseyaaaaa/pen/qBMNEGN
// Je récupère .blob, le gradient. 
var cursor = document.querySelector('.blob');

// J'ajoute un écouteur d'évènements pour suivre les mouvements de la souris
document.addEventListener('mousemove', function(e){
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    // le translate3D permet de modifier l'élément dans les 3 dimensions, X(horizontal), Y(vertical) et Z(profondeur)
});



// ----------------GRAPHIQUE 1 - MICKEY----------------
// https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
//document.addEventListener("DOMContentLoaded", function() {

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    return d;       
}

// Ces 2 lignes sont maintenant remplacé par l'appel de la nouvelle fonction drawArc :
// document.querySelector("path").setAttribute('d', describeArc(100, 100, 100, 0, 150))
// document.querySelector("#green").setAttribute('d', describeArc(100, 100, 78, 0, 350))

// % x 3,6 = angle en °
// n x (n+l) > produit en croix avec le rayon

function drawArc(x, y, radius, startPercent, endPercent, id){
    // Créer le path avec id toto
    // selectionner svg document.querySelector et créer une balise path dedans avec id toto (avec un attribut d vide)
    // Repositionner le path avec les bonnes coordonnées 

    // Je modifie la fonction pour qu'elle s'applique à tous les path qui ont un id en remplaçant ("#toto") par ("#" + id)
    document.querySelector("#" + id).setAttribute('d', describeArc(x, y, radius, startPercent*3.6, endPercent*3.6))       
}

// J'appelle la fonction drawArc avec les id de chaque path vide. Je modifie simplement le rayon et le pourcentage de tour du cercle :)
drawArc(352, 439, 200, 0, 75, "arc1");
drawArc(352, 439, 188, 0, 56.745, "arc2");
drawArc(352, 439, 176, 0, 56.527, "arc3");
drawArc(352, 439, 164, 0, 45.854, "arc4");
drawArc(352, 439, 152, 0, 41.815, "arc5");
drawArc(352, 439, 140, 0, 38.509, "arc6");
drawArc(352, 439, 128, 0, 36.929, "arc7");
drawArc(352, 439, 116, 0, 36.821, "arc8");
drawArc(352, 439, 104, 0, 36.502, "arc9");
drawArc(352, 439, 92, 0, 34.768, "arc10");
drawArc(352, 439, 80, 0, 33.522, "arc11");
drawArc(352, 439, 68, 0, 31.791, "arc12");
drawArc(352, 439, 56, 0, 31.175, "arc13");
drawArc(352, 439, 44, 0, 29.529, "arc14");
drawArc(352, 439, 32, 0, 29.425, "arc15");
// Espacement de 12 entre chaque cercle

// Graphique 2
drawArc(352, 439, 200, 0, 46.889, "arc16");
drawArc(352, 439, 188, 0, 40.064, "arc17");
drawArc(352, 439, 176, 0, 35.044, "arc18");
drawArc(352, 439, 164, 0, 34.300, "arc19");
drawArc(352, 439, 152, 0, 29.563, "arc20");
drawArc(352, 439, 140, 0, 29.500, "arc21");
drawArc(352, 439, 128, 0, 29.231, "arc22");
drawArc(352, 439, 116, 0, 28.289, "arc23");
drawArc(352, 439, 104, 0, 28.110, "arc24");
drawArc(352, 439, 92, 0, 27.278, "arc25");
drawArc(352, 439, 80, 0, 25.835, "arc26");
drawArc(352, 439, 68, 0, 23.417, "arc27");
drawArc(352, 439, 56, 0, 21.980, "arc28");
drawArc(352, 439, 44, 0, 20.519, "arc29");
drawArc(352, 439, 32, 0, 20.188, "arc30");


// // Animation pour faire apparaitre les arcs progressivement au moment où on arrive au niveau des graphiques---------
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".container-mickey",
  start: "top 80%",
  onEnter: () => {
    const allArcs = document.querySelectorAll(".container-mickey path");
    allArcs.forEach((arc, i) => {
      setTimeout(() => {
        // Fais apparaître l'arc
        arc.classList.add("arc-visible");

        // Fais apparaître le texte associé
        if (arc._label) {
          arc._label.classList.add("text-visible");
        }
      }, i * 150);
    });
  },
  once: true
});


// INFOBULLE/ POPUP AU SURVOLE DE L'ARC ----------------

//Je crée une variable popupMickey1 qui sélectionne la div (indépendante du SVG) avec la classe .popup-mickey1
//Je crée une variable paths qui sélectionne les arcs de cercle path du graphique
const popupMickey1 = document.querySelector(".popup-mickey1");
if (!popupMickey1) {
  console.error("Erreur : popup-mickey1 introuvable dans le DOM");
}
const paths = document.querySelectorAll(".container-mickey path");

//Je récupère les données du fichier json
fetch('data.json').then(function(response) {
    response.json().then(function(data){
    // console.log(data);
    //Je met dans un tableau les films qui m'intéressent
    const filmsMickey = [
        1, 2, 3, 5, 6, 8, 9, 10, 11, 13, 15, 16, 17, 19, 21,   
        // Graphique mickey 2
        4, 7, 12, 14, 18, 20, 22, 28, 29, 30, 34, 38, 40, 45, 46
    ];

// Je fais une correspondance rayon / fin d’angle pour placer le popup vers la fin de l'arc.
  const arcsInfo = [
    {id: "arc1", r: 200, end: 75},
    {id: "arc2", r: 188, end: 56.745},
    {id: "arc3", r: 176, end: 56.527},
    {id: "arc4", r: 164, end: 45.854},
    {id: "arc5", r: 152, end: 41.815},
    {id: "arc6",  r: 140, end: 38.509},
    {id: "arc7",  r: 128, end: 36.929},
    {id: "arc8",  r: 116, end: 36.821},
    {id: "arc9",  r: 104, end: 36.502},
    {id: "arc10",  r: 92,  end: 34.768},
    {id: "arc11",  r: 80,  end: 33.522},
    {id: "arc12",  r: 68,  end: 31.791},
    {id: "arc13",  r: 56,  end: 31.175},
    {id: "arc14",  r: 44,  end: 29.529},
    {id: "arc15", r: 32,  end: 29.425},
// Graphique mickey 2 :
    {id: "arc16", r: 200, end: 75},
    {id: "arc17", r: 188, end: 64.088},
    {id: "arc18", r: 176, end: 56.057},
    {id: "arc19", r: 164, end: 54.867},
    {id: "arc20", r: 152, end: 47.290},
    {id: "arc21",  r: 140, end: 47.189},
    {id: "arc22",  r: 128, end: 46.758},
    {id: "arc23",  r: 116, end: 45.252},
    {id: "arc24",  r: 104, end: 44.966},
    {id: "arc25",  r: 92, end: 43.635},
    {id: "arc26",  r: 80,  end: 41.327},
    {id: "arc27",  r: 68,  end: 37.458},
    {id: "arc28",  r: 56,  end: 35.159},
    {id: "arc29",  r: 44,  end: 32.822},
    {id: "arc30", r: 32,  end: 32.293}
  ];

  // Je cible également le centre des arcs que j'ai défini en appelant la fonction drawArc plus haut.
  const centerX = 352, centerY = 439;
  paths.forEach((arc, i) => {
    // Je vérifie s’il y a bien un film associé
    if (!filmsMickey[i]) return;

    // Je récupère les infos du film correspondant.Je cherche dans ce tableau l’objet film dont l’ID correspond à filmsMickey[i]
    const filmData = data.find(f => f.id == filmsMickey[i]);
    if (!filmData) return;

    // Je récupère les infos de l’arc pour trouver le bout : arcsInfo contient pour chaque arc: son rayon r et la fin de l’angle end
    const info = arcsInfo[i];
    if (!info) return;
// -----------------------

// AFFICHER LE NOM DES FILMS À CÔTE DES ARCS ----------------

// Calcule la position du début de l’arc ---
const startAngle = (info.start || 0) * 3.6;  // en degrés
const labelRadius = info.r;
const startPoint = polarToCartesian(centerX, centerY, labelRadius, startAngle);

// Crée un élément <text> SVG pour le nom du film ---
const svgNS = "http://www.w3.org/2000/svg";
const label = document.createElementNS(svgNS, "text");
label.classList.add("text-film");

// Définit le contenu et les coordonnées du texte ---
label.textContent = filmData.film;
label.setAttribute("x", startPoint.x - 8);
label.setAttribute("y", startPoint.y);
label.setAttribute("font-size", "11");
label.setAttribute("fill", "white");
label.setAttribute("dominant-baseline", "middle");
// label.setAttribute("font-familly", "roboto");
label.setAttribute("text-anchor", "end");

// Ajoute le texte dans le même SVG que l’arc ---
arc.ownerSVGElement.appendChild(label);

// Je stocke le label dans l'arc pour y accéder ensuite dans le Sroll Trigger qui fait s'activer l'animation des arcs et du texte au moment où j'arrive au niveau des graphiques mickey.
arc._label = label;

// ----------------

// INFOBULLE/ POPUP AU SURVOLE DE L'ARC SUITE ----------------

// Quand la souris entre sur l’arc, j'écoute l’événement mouseenter, qui se déclenche quand la souris survole le path.
// console.log(popupMickey1);
    arc.addEventListener("mouseenter", () => {
      arc.classList.add("arc-hover");
      // Je calcule la position du bout de l’arc
      // En appliquant le même principe que pour la fonction drawArc, on a info.end * 3.6 qui convertit le pourcentage de cercle en degrés
      //Et polarToCartesian transforme les coordonnées polaires (rayon + angle) en coordonnées cartésiennes (x, y).
      const endAngle = info.end * 3.6; 
      const endPoint = polarToCartesian(centerX, centerY, info.r, endAngle);

      // Place le popup près du bout de l’arc
      //  arc.ownerSVGElement récupère le <svg> parent du path / getBoundingClientRect() donne la position du SVG dans la page
      const svgRect = arc.ownerSVGElement.getBoundingClientRect();
const popupX = window.scrollX + svgRect.left + endPoint.x + 10;
const popupY = window.scrollY + svgRect.top + endPoint.y - 40;

      // On a donc la position horizontale et verticale du popup

      // Avec le innerHTML j'affiche les info que je veux dans le popup
      popupMickey1.innerHTML = `
       <div class="popup-content">
         <img src="${filmData.image}" alt="${filmData.film}">
         <div class="popup-text">
            <p><strong>${filmData.film}</strong></p>
            <p>Year : ${filmData.publication}</p>
            <p>Revenue : ${filmData.recettes}</p>
         </div>
       </div>
       `;
      popupMickey1.style.left = popupX + "px";
      popupMickey1.style.top = popupY + "px";
      popupMickey1.classList.add("popup-mickey-visible");
      console.log(popupMickey1)
    });


    // Quand la souris n'est plus sur l'arc, la popup redeviens invisible.
    arc.addEventListener("mouseleave", () => {
      popupMickey1.classList.remove("popup-mickey-visible");
      arc.classList.remove("arc-hover");
    });
  });
});

});
// });


// ----------------GRAPHIQUE 2 - FRISE CHRONOLOGIQUE----------------
//Je me suis aidé du site officiel de gsap pour tous les plugins utilisés
//J'enregistre les plugin MotionPathPlugin et ScrollTrigger
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

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
        162, 255, 257, 122, 543, 201, 141, 81, 71, 30, 114, 224, 59, 12, 50
    ];

    //Je construis mon popup
    let templatePopup =
            "<img src='{{image}}' alt='Affiche du film {{film}}' class='images-fc'/>" +
            "<div class='contenu-popup-fc'>" +
            "<p class='titre-film-fc'>{{film}}</p>" +
            "<p class='annee-film-fc'>Year : {{publication}}</p>" +
            '<a href="https://www.allocine.fr/film/fichefilm_gen_cfilm={{idAlloCine}}.html" alt="Lien vers Allociné du film" class="lien-film-fc">AlloCiné</a>'
            "</div>";
    
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


 // ---------------- ANIMATION DU COMPTEUR ----------------
// J'utilise la bibliothèque GSAP et le pluggin ScrollTrigger.
    // Je sélectionne les éléments de l'année et la valeur (la valeur donc du compteur)
    let anneeLabel = document.querySelector(".counter .annee");
    let valeurCompteur = document.querySelector(".counter .valeur");
    let anneesDonnees = null;

    // je charge le fichier JSON DÈS le chargement du DOM pour qu'il soit prêt avant le scroll.
    fetch('compteur.json')
        .then(reponse => reponse.json())
        .then(donnees => {
            // je garde juste les lignes complétées et stocke les données
            anneesDonnees = donnees.filter(ligne => ligne.Released !== "");
        })
        // .catch(erreur => {
        //     console.error("Erreur lors du chargement du fichier JSON :", erreur);
        // });


    // Je défini la l'animation pour qu'elle puisse s'activer avec e scroll trigger
    function demarrerCompteur() {

        //J'initialise toutes mes valeurs à 0 pour le début du compteur
        let sommeTotale = 0;
        let position = 0;
        
        // J'utilise les données déjà chargées
        const annees = anneesDonnees; 

        // Objet pour GSAP (pour animer la valeur)
        const obj = { valeur: 0 };
                
        // j'initialise l'année de départ pour qu'elle soit affichée au début de mon animation
        anneeLabel.textContent = annees[position].Released;

        // je crée ma fonction setinterval pour que toutes les 100ms (0.1 seconde), on change l'année et la somme
        let interval = setInterval(function() {

         // Si on arrive à la dernière ligne, j'arrête l'intervalle
            if (position >= annees.length) {
                clearInterval(interval); // fonction pour arrêter setInterval
                            
                // une fois que la dernière ligne est passée, j'affiche la somme totale finale
                const derniereAnnee = annees[annees.length - 1].Released;
                anneeLabel.textContent = derniereAnnee;
                valeurCompteur.textContent = Math.floor(sommeTotale).toLocaleString('fr-FR');
                            
                return; 
            }

            // je récupère l'année et la valeur de l'année actuelle (la dernière)
            let annee = annees[position].Released;
            let valeurAnnee = Number(annees[position]["SUM de"]);

            // j'ajoute à la somme cumulée de l'année précédente
            sommeTotale += valeurAnnee;

            // Mise à jour de l'année 
            anneeLabel.textContent = annee; 

            // À partir de là, je choisis les réglages de mon animation.
            // Je dis à GSAP de manipuler l'objet quqe j'ai déclaré plus haut.
            gsap.to(obj, {
            // Valeur finale : somme de la colonne recette.
                valeur: sommeTotale, 
                duration: 0.1, // elle dure 100ms, comme dans l'intervalle
                ease: "linear", 
                onUpdate: function() {
                // J'arrondis le résultat final avec la fonction Math.floor pour que pendant l'animation, le compteur affiche pas les nombres à virgule.
                    valeurCompteur.textContent = Math.floor(obj.valeur).toLocaleString('fr-FR');
                }
            });

            // Je passe à l'année suivante donc à la ligne d'après
            position++;

        }, 100); // Intervalle de 100ms
    }

    // J'ajoute la fonction ScrollTrigger pour que l'animation ne commence que quand on arrive pile au niveau de la page avec le ocmpteur au milieu. 
    ScrollTrigger.create({
        trigger: ".compteur", 
        start: "top center",   
        once: true,     
        onEnter: () => { 
            demarrerCompteur();
            gsap.to(".courbe-masque", { 
                width: "100%", 
                duration: 8, 
                ease: "power2.out" 
            });
        }
    });

    //Je fais la popup
    const buttonCourbe = document.querySelector(".button-courbe"); 
    const popupCounter = document.querySelector(".popup-courbe");
    const closeButton = document.querySelector(".popup-fermer");

    buttonCourbe.addEventListener("click", function(){
        //J'affiche la popup
        popupCounter.classList.add("popup-visible");
        popupCounter.classList.remove("popup-invisible");
    });

    // On écoute le clic sur le bouton "x"
    closeButton.addEventListener("click", function(){
        //Je cache la popup
        popupCounter.classList.add("popup-invisible");
        popupCounter.classList.remove("popup-visible");
    });
});