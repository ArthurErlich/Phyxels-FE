"use strict";
var phyxels;
(function (phyxels) {
    class Config {
        static canvas = { width: 800, height: 500, name: "game" };
        static grid = { size: 10 };
    }
    phyxels.Config = Config;
})(phyxels || (phyxels = {}));
var phyxels;
(function (phyxels) {
    class Element extends ex.Actor {
        /**
         * onPreUpdate  ():void {}
         * onPostUpdate ():void {}
         */
        constructor(config) {
            {
                // let config: ex.ActorArgs ){
                //     width: Config.grid.size,
                //     height: Config.grid.size
                // }
                // config.width = Config.grid.size,
                // config.height = Config.grid.size,
                super(config);
            }
        }
    }
    phyxels.Element = Element;
})(phyxels || (phyxels = {}));
/// <reference path="Element.ts"/>
var phyxels;
/// <reference path="Element.ts"/>
(function (phyxels) {
    class SandElement extends phyxels.Element {
        /**
         * onPreUpdate  ():void {}
         * onPostUpdate ():void {}
         */
        constructor() {
            super({
                color: ex.Color.Yellow
            });
        }
    }
    phyxels.SandElement = SandElement;
})(phyxels || (phyxels = {}));
//To compile the class bevor it is used. Typescript typical compiles in alphabetical order
/// <reference path="src/configs/Config.ts"/>
/// <reference path="src/actors/SandElement.ts"/>
var phyxels;
//To compile the class bevor it is used. Typescript typical compiles in alphabetical order
/// <reference path="src/configs/Config.ts"/>
/// <reference path="src/actors/SandElement.ts"/>
(function (phyxels) {
    //creating new game engine. Global accessible
    phyxels.game = new ex.Engine({
        height: phyxels.Config.canvas.height,
        width: phyxels.Config.canvas.width,
        canvasElementId: phyxels.Config.canvas.name
    });
    //TODO:REMOVE DEBUG
    phyxels.game.add(new phyxels.SandElement());
    phyxels.game.start();
})(phyxels || (phyxels = {}));
var phyxels;
(function (phyxels) {
    class Loading {
    }
    phyxels.Loading = Loading;
})(phyxels || (phyxels = {}));
//# sourceMappingURL=game.js.map