import { Color } from '../../../Color';
import { Vector } from '../../../Math/vector';
import { ExcaliburGraphicsContextWebGL } from '../ExcaliburGraphicsContextWebGL';
import { RendererPlugin } from '../renderer';
export declare class RectangleRenderer implements RendererPlugin {
    readonly type = "ex.rectangle";
    priority: number;
    private _maxRectangles;
    private _shader;
    private _gl;
    private _context;
    private _buffer;
    private _layout;
    private _quads;
    private _rectangleCount;
    private _vertexIndex;
    initialize(gl: WebGL2RenderingContext, context: ExcaliburGraphicsContextWebGL): void;
    dispose(): void;
    private _isFull;
    draw(...args: any[]): void;
    private _transparent;
    private _scratch1;
    private _scratch2;
    private _scratch3;
    private _scratch4;
    drawLine(start: Vector, end: Vector, color: Color, thickness?: number): void;
    drawRectangle(pos: Vector, width: number, height: number, color: Color, stroke?: Color, strokeThickness?: number): void;
    hasPendingDraws(): boolean;
    flush(): void;
}
