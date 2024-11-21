"use strict";
namespace = "CONFIGS";
{
    var width = 800;
    var height = 500;
    var canvas = "game";
}
/// <reference path="node_modules/excalibur/build/dist/excalibur.d.ts" />
/// <reference path="configs/screenConfig.ts" />
var game = new ex.Engine({
    height: 500,
    width: 800,
    canvasElementId: 'game'
});
var basicActor = new ex.Actor({
    name: "basicActor",
    width: 400,
    height: 400,
    color: ex.Color.Chartreuse,
    pos: ex.vec(800 / 2, 500 / 2)
});
game.add(basicActor);
game.start();
