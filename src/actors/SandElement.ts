/// <reference path="Element.ts"/>
namespace phyxels {
    export class SandElement extends Element {
        /**
         * onPreUpdate  ():void {}
         * onPostUpdate ():void {}
         */

        constructor(pos:ex.Vector) {
            super({
                color: ex.Color.Yellow,
                pos: pos
            });
        }
    }
}