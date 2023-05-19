enum Elements {
    Water = 'Water',
    Fire = 'Fire',
    Earth = 'Earth',
    Air = 'Air'
  }

abstract class Melon {
    
    weight:number;
    melonSort: string ;
    element: Elements;

    constructor(weight, melonSort) {
        this.weight = weight
        this.melonSort = melonSort
        this.element = Elements.Water
    }
    
    elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: ${this.element}
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex()}`
    }

}

class Watermelon extends Melon {
    constructor(weight:number, melonSort:string) {
        super(weight,melonSort)
        this.element = Elements.Water
    }
}

class Firemelon extends Melon {
    constructor(weight:number, melonSort:string) {
        super(weight,melonSort)
        this.element = Elements.Fire
    }
}

class Earthmelon extends Melon {
    constructor(weight:number, melonSort:string) {
        super(weight,melonSort)
        this.element = Elements.Earth
    }
}

class Airmelon extends Melon {
    constructor(weight:number, melonSort:string) {
        super(weight,melonSort)
        this.element = Elements.Air
    }
}

class Melolemonmelon extends Melon {
     currentElement: Elements = Elements.Water

    constructor(weight:number, melonSort:string) {
        super(weight,melonSort)
    }

    morph(): Elements {
    const elementsArray: Elements[] = [Elements.Water,Elements.Fire,Elements.Earth,Elements.Air]
    const currentIndex = elementsArray.indexOf(this.currentElement)
    const nextIndex = (currentIndex+1) % elementsArray.length;
    this.element = elementsArray[nextIndex]
    this.currentElement = elementsArray[nextIndex]
    return this.element
    }

}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let uniqueMelon: Melolemonmelon = new Melolemonmelon(15,"standard")
console.log(uniqueMelon.morph())
console.log(uniqueMelon.morph())
console.log(uniqueMelon.toString())

let airmelon: Airmelon = new Airmelon(20, 'small')
console.log(airmelon.toString());
