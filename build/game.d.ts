declare namespace phyxels {
    export class Config {
        static canvas: Canvas;
        static grid: Grid;
    }
    interface Canvas {
        width: number;
        height: number;
        name: string;
    }
    interface Grid {
        size: number;
    }
    export {};
}
declare namespace phyxels {
    abstract class Element extends ex.Actor {
        /**
         * onPreUpdate  ():void {}
         * onPostUpdate ():void {}
         */
        constructor(config?: ex.ActorArgs);
    }
}
declare namespace phyxels {
    class SandElement extends Element {
        /**
         * onPreUpdate  ():void {}
         * onPostUpdate ():void {}
         */
        constructor(pos: ex.Vector);
    }
}
declare namespace phyxels {
    const game: ex.Engine<any>;
}
declare namespace phyxels {
    class Loading {
    }
}
