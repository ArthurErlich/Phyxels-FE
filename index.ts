
//To compile the class bevor it is used. Typescript typical compiles in alphabetical order
/// <reference path="src/configs/ScreenConfig.ts"/>
namespace phyxels {

    const game = new ex.Engine({
        height: ScreenConfig.height,
        width: ScreenConfig.width,
        canvasElementId: ScreenConfig.canvas
    });
    const basicActor = new ex.Actor({
        name: "basicActor",
        width: 400,
        height: 400,
        color: ex.Color.Chartreuse,
        pos: ex.vec(800 / 2, 500 / 2)
    });
    game.add(basicActor);
    game.start();
}