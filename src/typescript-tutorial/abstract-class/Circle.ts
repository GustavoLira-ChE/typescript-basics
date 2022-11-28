import ShapeOperations from "./ShapeOperations";

class Circle extends ShapeOperations {
   
    constructor(private _radius: number) {
        super();
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value; 
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
    }
}

export default Circle;