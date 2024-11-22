
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
    let elements: Element[] = new Array();

    for (let i: number = 0; i < 10; i++) {
        elements[i] = new SandElement(ex.vec(Config.canvas.width / 2 + i * 10, Config.canvas.height / 2 + i * 10));
    }
    elements.forEach(element => {
        game.add(element);
    });
    
    game.start();

}