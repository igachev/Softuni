function extensibleObject() {
    let parentObj = {}
    let childObj = Object.create(parentObj)

    childObj.extend = function(template) {
       
        let entries = Object.entries(template)
       for(let [key,value] of entries) {
        if(typeof value === 'function') {
            parentObj[key] = value
        }
        else {
            childObj[key] = value;
        }
       }
    }
    return childObj
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: "someString",
};
myObj.extend(template);
console.log(Object.getPrototypeOf(myObj));
console.log(myObj);