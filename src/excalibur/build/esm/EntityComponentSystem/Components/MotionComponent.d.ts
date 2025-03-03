import { Vector } from '../../Math/vector';
import { Component } from '../Component';
export interface Motion {
    /**
     * The velocity of an entity in pixels per second
     */
    vel: Vector;
    /**
     * The acceleration of entity in pixels per second^2
     */
    acc: Vector;
    /**
     * The scale rate of change in scale units per second
     */
    scaleFactor: Vector;
    /**
     * The angular velocity which is how quickly the entity is rotating in radians per second
     */
    angularVelocity: number;
    /**
     * The amount of torque applied to the entity, angular acceleration is torque * inertia
     */
    torque: number;
    /**
     * Inertia can be thought of as the resistance to motion
     */
    inertia: number;
}
export declare class MotionComponent extends Component {
    /**
     * The velocity of an entity in pixels per second
     */
    vel: Vector;
    /**
     * The acceleration of entity in pixels per second^2
     */
    acc: Vector;
    /**
     * The scale rate of change in scale units per second
     */
    scaleFactor: Vector;
    /**
     * The angular velocity which is how quickly the entity is rotating in radians per second
     */
    angularVelocity: number;
    /**
     * The amount of torque applied to the entity, angular acceleration is torque * inertia
     */
    torque: number;
    /**
     * Inertia can be thought of as the resistance to motion
     */
    inertia: number;
}
