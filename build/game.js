"use strict";
var phyxels;
(function (phyxels) {
    class ScreenConfig {
        static width = 800;
        static height = 500;
        static canvas = "game";
    }
    phyxels.ScreenConfig = ScreenConfig;
})(phyxels || (phyxels = {}));
//To compile the class bevor it is used. Typescript typical compiles in alphabetical order
/// <reference path="configs/ScreenConfig.ts"/>
var phyxels;
//To compile the class bevor it is used. Typescript typical compiles in alphabetical order
/// <reference path="configs/ScreenConfig.ts"/>
(function (phyxels) {
    const game = new ex.Engine({
        height: phyxels.ScreenConfig.height,
        width: phyxels.ScreenConfig.width,
        canvasElementId: phyxels.ScreenConfig.canvas
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
})(phyxels || (phyxels = {}));
var phyxels;
(function (phyxels) {
    class Element extends ex.Actor {
    }
    phyxels.Element = Element;
})(phyxels || (phyxels = {}));
var phyxels;
(function (phyxels) {
    class GameConfig {
        static gridSize = 10;
    }
    phyxels.GameConfig = GameConfig;
})(phyxels || (phyxels = {}));
var phyxels;
(function (phyxels) {
    class Loading {
    }
    phyxels.Loading = Loading;
})(phyxels || (phyxels = {}));
//# sourceMappingURL=game.js.map