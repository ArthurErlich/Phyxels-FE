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
                if (config == undefined) {
                    let config = {
                        width: phyxels.Config.grid.size,
                        height: phyxels.Config.grid.size
                    };
                }
                else {
                    config.width = phyxels.Config.grid.size;
                    config.height = phyxels.Config.grid.size;
                }
                console.log(config);
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
        constructor(pos) {
            super({
                color: ex.Color.Yellow,
                pos: pos
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
    let elements = new Array();
    for (let i = 0; i < 10; i++) {
        elements[i] = new phyxels.SandElement(ex.vec(phyxels.Config.canvas.width / 2 + i * 10, phyxels.Config.canvas.height / 2 + i * 10));
    }
    elements.forEach(element => {
        phyxels.game.add(element);
    });
    phyxels.game.start();
})(phyxels || (phyxels = {}));
var phyxels;
(function (phyxels) {
    class Loading {
    }
    phyxels.Loading = Loading;
})(phyxels || (phyxels = {}));
//# sourceMappingURL=game.js.map