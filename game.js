"use strict";
/// <reference path="node_modules/excalibur/build/dist/excalibur.d.ts" />
var game = new ex.Engine({
    width: 300,
    height: 300,
    canvasElementId: 'game'
});
var basicActor = new ex.Actor({
    name: "basicActor",
    width: 50,
    height: 30,
    color: ex.Color.Chartreuse
});
basicActor.actions.repeatForever((function (builder) {
    builder.moveBy(ex.vec(100, 100), 10);
    builder.moveBy(ex.vec(-100, -100), 10);
}));
game.add(basicActor);
game.start();
