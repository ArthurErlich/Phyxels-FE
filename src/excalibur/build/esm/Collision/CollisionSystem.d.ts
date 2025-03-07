import { ComponentCtor, Query, World } from '../EntityComponentSystem';
import { MotionComponent } from '../EntityComponentSystem/Components/MotionComponent';
import { TransformComponent } from '../EntityComponentSystem/Components/TransformComponent';
import { System, SystemType } from '../EntityComponentSystem/System';
import { CollisionSolver } from './Solver/Solver';
import { ColliderComponent } from './ColliderComponent';
import { ExcaliburGraphicsContext } from '../Graphics/Context/ExcaliburGraphicsContext';
import { Scene } from '../Scene';
import { PhysicsWorld } from './PhysicsWorld';
export declare class CollisionSystem extends System {
    private _physics;
    static priority: -5;
    systemType: SystemType;
    query: Query<ComponentCtor<TransformComponent> | ComponentCtor<MotionComponent> | ComponentCtor<ColliderComponent>>;
    private _engine;
    private _configDirty;
    private _realisticSolver;
    private _arcadeSolver;
    private _lastFrameContacts;
    private _currentFrameContacts;
    private _motionSystem;
    private get _processor();
    private _trackCollider;
    private _untrackCollider;
    constructor(world: World, _physics: PhysicsWorld);
    initialize(world: World, scene: Scene): void;
    update(elapsed: number): void;
    postupdate(): void;
    getSolver(): CollisionSolver;
    debug(ex: ExcaliburGraphicsContext): void;
    runContactStartEnd(): void;
}
