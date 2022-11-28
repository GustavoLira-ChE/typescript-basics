import Shape from "./Shape";

class Circle extends Shape {

    constructor(private _radius: number, x: number, y: number) {
        super(x,y);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value; 
    }

    getInfo(): string {
        return super.getInfo() + `, radius = ${this._radius}`;
    }
}

export default Circle;