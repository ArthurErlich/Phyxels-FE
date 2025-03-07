import { Color } from '../Color';
import { Loadable } from '../Interfaces/Loadable';
import { Vector } from '../Math/vector';
import { EventEmitter } from '../EventEmitter';
import { DefaultLoader, DefaultLoaderOptions } from './DefaultLoader';
import { Engine } from '../Engine';
import { Screen } from '../Screen';
import { Future } from '../Util/Future';
export interface LoaderOptions extends DefaultLoaderOptions {
    /**
     * Go fullscreen after loading and clicking play
     */
    fullscreenAfterLoad?: boolean;
    /**
     * Fullscreen container element or id
     */
    fullscreenContainer?: HTMLElement | string;
}
/**
 * Pre-loading assets
 *
 * The loader provides a mechanism to preload multiple resources at
 * one time. The loader must be passed to the engine in order to
 * trigger the loading progress bar.
 *
 * The {@apilink Loader} itself implements {@apilink Loadable} so you can load loaders.
 *
 * ## Example: Pre-loading resources for a game
 *
 * ```js
 * // create a loader
 * var loader = new ex.Loader();
 *
 * // create a resource dictionary (best practice is to keep a separate file)
 * var resources = {
 *   TextureGround: new ex.Texture("/images/textures/ground.png"),
 *   SoundDeath: new ex.Sound("/sound/death.wav", "/sound/death.mp3")
 * };
 *
 * // loop through dictionary and add to loader
 * for (var loadable in resources) {
 *   if (resources.hasOwnProperty(loadable)) {
 *     loader.addResource(resources[loadable]);
 *   }
 * }
 *
 * // start game
 * game.start(loader).then(function () {
 *   console.log("Game started!");
 * });
 * ```
 *
 * ## Customize the Loader
 *
 * The loader can be customized to show different, text, logo, background color, and button.
 *
 * ```typescript
 * const loader = new ex.Loader([playerTexture]);
 *
 * // The loaders button text can simply modified using this
 * loader.playButtonText = 'Start the best game ever';
 *
 * // The logo can be changed by inserting a base64 image string here
 *
 * loader.logo = 'data:image/png;base64,iVBORw...';
 * loader.logoWidth = 15;
 * loader.logoHeight = 14;
 *
 * // The background color can be changed like so by supplying a valid CSS color string
 *
 * loader.backgroundColor = 'red'
 * loader.backgroundColor = '#176BAA'
 *
 * // To build a completely new button
 * loader.startButtonFactory = () => {
 *     let myButton = document.createElement('button');
 *     myButton.textContent = 'The best button';
 *     return myButton;
 * };
 *
 * engine.start(loader).then(() => {});
 * ```
 */
export declare class Loader extends DefaultLoader {
    private _logger;
    private static _DEFAULT_LOADER_OPTIONS;
    private _originalOptions;
    events: EventEmitter<any>;
    screen: Screen;
    private _playButtonShown;
    logo: string;
    logoWidth: number;
    logoHeight: number;
    /**
     * Positions the top left corner of the logo image
     * If not set, the loader automatically positions the logo
     */
    logoPosition: Vector | null;
    /**
     * Positions the top left corner of the play button.
     * If not set, the loader automatically positions the play button
     */
    playButtonPosition: Vector | null;
    /**
     * Positions the top left corner of the loading bar
     * If not set, the loader automatically positions the loading bar
     */
    loadingBarPosition: Vector | null;
    /**
     * Gets or sets the color of the loading bar, default is {@apilink Color.White}
     */
    loadingBarColor: Color;
    /**
     * Gets or sets the background color of the loader as a hex string
     */
    backgroundColor: string;
    protected _imageElement: HTMLImageElement;
    protected _imageLoaded: Future<void>;
    protected get _image(): HTMLImageElement;
    suppressPlayButton: boolean;
    get playButtonRootElement(): HTMLElement | null;
    get playButtonElement(): HTMLButtonElement | null;
    protected _playButtonRootElement: HTMLElement;
    protected _playButtonElement: HTMLButtonElement;
    protected _styleBlock: HTMLStyleElement;
    /** Loads the css from Loader.css */
    protected _playButtonStyles: string;
    protected get _playButton(): HTMLButtonElement;
    /**
     * Get/set play button text
     */
    playButtonText: string;
    /**
     * Return a html button element for excalibur to use as a play button
     */
    startButtonFactory: () => HTMLButtonElement;
    /**
     * @param options Optionally provide options to loader
     */
    constructor(options?: LoaderOptions);
    /**
     * @param loadables  Optionally provide the list of resources you want to load at constructor time
     */
    constructor(loadables?: Loadable<any>[]);
    onInitialize(engine: Engine): void;
    /**
     * Shows the play button and returns a promise that resolves when clicked
     */
    showPlayButton(): Promise<void>;
    hidePlayButton(): void;
    /**
     * Clean up generated elements for the loader
     */
    dispose(): void;
    data: Loadable<any>[];
    onUserAction(): Promise<void>;
    onBeforeLoad(): Promise<void>;
    onAfterLoad(): Promise<void>;
    private _positionPlayButton;
    /**
     * Loader draw function. Draws the default Excalibur loading screen.
     * Override `logo`, `logoWidth`, `logoHeight` and `backgroundColor` properties
     * to customize the drawing, or just override entire method.
     */
    onDraw(ctx: CanvasRenderingContext2D): void;
}
