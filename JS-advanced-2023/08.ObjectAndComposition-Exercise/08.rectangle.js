function rectangle(width,height,color) {
            class Rect {
            constructor() {
            this.width = width
            this.height = height
            this.color = color[0].toUpperCase() + color.substring(1);
                }

            calcArea() {
                let area = this.width * this.height
                return area
            }
            }
           
        return new Rect
}

let rect =  rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());