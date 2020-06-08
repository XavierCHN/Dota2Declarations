type Vector = number & IVector & any;

declare interface IVector {
    x: number;
    y: number;
    z: number;
    Dot(other: Vector): number;
    Cross(other: Vector): Vector;
    Length(): number;
    Length2D(): number;
    Normalized(): Vector;
}

declare function Vector(this: void, x?: number, y?: number, z?: number): Vector;