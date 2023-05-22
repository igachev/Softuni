class Box<T> {

    private _boxes: T[] = []

    add(element: T): void {
        this._boxes.push(element)
    }

    remove(): void {
        this._boxes.pop()
    }

    get count(): number {
       return  this._boxes.length;
    }

}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);