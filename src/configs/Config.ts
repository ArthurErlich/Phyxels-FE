namespace phyxels {
   export class Config {
      public static canvas: Canvas = { width: 800, height: 500, name: "game" };
      public static grid: Grid = { size: 10 };
   }
   interface Canvas {
      width: number;
      height: number;
      name: string;
   }
   interface Grid {
      size: number;
   }
}