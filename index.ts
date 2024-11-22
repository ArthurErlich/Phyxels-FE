
//To compile the class bevor it is used. Typescript typical compiles in alphabetical order
/// <reference path="src/configs/Config.ts"/>
/// <reference path="src/actors/SandElement.ts"/>
namespace phyxels {

    //creating new game engine. Global accessible
    export const game = new ex.Engine({
        height: Config.canvas.height,
        width: Config.canvas.width,
        canvasElementId: Config.canvas.name
    });
    //TODO:REMOVE DEBUG
    game.add(new SandElement());
    game.start();

}