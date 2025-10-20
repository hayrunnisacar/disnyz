//Mettez vos codes ici, comme ca on garde l'ordre
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
//J'affiche le tracé de la courbe pour modifier et lui donner la forme que je veux
// MotionPathHelper.create("#pieds");