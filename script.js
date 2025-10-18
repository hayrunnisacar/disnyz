//Mettez vos codes ici, comme ca on garde l'ordre



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