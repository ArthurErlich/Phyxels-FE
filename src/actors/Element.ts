namespace phyxels {
    export abstract class Element extends ex.Actor {
        /**
         * onPreUpdate  ():void {}
         * onPostUpdate ():void {}
         */

        constructor(config?: ex.ActorArgs) {
            {
                if (config == undefined) {
                    let config: ex.ActorArgs = {
                        width: Config.grid.size,
                        height: Config.grid.size
                    };
                } else {
                    config.width = Config.grid.size;
                    config.height = Config.grid.size;
                }
                console.log(config);
                super(config);
            }
        }
    }
}