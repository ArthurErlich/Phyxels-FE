/**
 * The current Excalibur version string
 * @description `process.env.__EX_VERSION` gets replaced by Webpack on build
 */
export declare const EX_VERSION: string;
export * from './Flags';
export * from './Id';
export * from './Engine';
export * from './GarbageCollector';
export * from './Screen';
export * from './Actor';
export * from './Math/index';
export * from './Camera';
export * from './Debug/index';
export * from './EventEmitter';
export * from './Events/MediaEvents';
export * from './Events';
export * from './Label';
export { FontStyle, FontUnit, TextAlign, BaseAlign } from './Graphics/FontCommon';
export * from './Particles/index';
export * from './Scene';
export * from './TileMap/index';
export * from './Timer';
export * from './Trigger';
export * from './ScreenElement';
export * from './Actions/index';
export * from './Collision/Index';
export * from './Interfaces/Index';
export * from './Resources/Index';
export * from './EntityComponentSystem/index';
export * from './Director/index';
export * from './Color';
export * from './Graphics/index';
import * as events from './Events';
export { events as Events };
export { WheelEvent } from './Input/WheelEvent';
export { PointerEvent } from './Input/PointerEvent';
export { WheelDeltaMode } from './Input/WheelDeltaMode';
export { PointerButton } from './Input/PointerButton';
export { NativePointerButton } from './Input/NativePointerButton';
export { CapturePointerConfig } from './Input/CapturePointerConfig';
export { NativePointerEvent, NativeMouseEvent, NativeTouchEvent, NativeWheelEvent, PointerInitOptions, PointerEventReceiver } from './Input/PointerEventReceiver';
export { PointerAbstraction } from './Input/PointerAbstraction';
export { PointerComponent } from './Input/PointerComponent';
export { PointerSystem } from './Input/PointerSystem';
export { PointerType } from './Input/PointerType';
export { PointerScope } from './Input/PointerScope';
export { Gamepads, Gamepad, Buttons, Axes, NavigatorGamepads, NavigatorGamepad, NavigatorGamepadButton, NavigatorGamepadEvent, GamepadConfiguration } from './Input/Gamepad';
export { Keys, KeyEvent, KeyboardInitOptions, Keyboard } from './Input/Keyboard';
export * from './Input/InputHost';
export * from './Input/InputMapper';
import * as util from './Util/Index';
export { util as Util };
export * from './Util/Browser';
export * from './Util/Decorators';
export * from './Util/Detector';
export * from './Util/EasingFunctions';
export * from './Util/Observable';
export * from './Util/Log';
export * from './Util/Pool';
export * from './Util/Fps';
export * from './Util/Clock';
export * from './Util/WebAudio';
export * from './Util/Toaster';
export * from './Util/StateMachine';
export * from './Util/Future';
export * from './Util/Semaphore';
export * from './Util/Coroutine';
export * from './Util/Assert';
