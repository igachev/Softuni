function fromJSONtoHTML(input) {
    let arr = JSON.parse(input)
    //console.log(arr);
    let outputArr = ['<table>']
    outputArr.push(makeKeyRow(arr))
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)))
    outputArr.push('</table>')

    function makeKeyRow(arr) {
        let result = ''
        let keys = Object.keys(arr[0])
       for(let key of keys) {
        result += `<th>${key}</th>`
       }
       return `<tr>${result}</tr>`
    }

    function makeValueRow(obj) {
        let result = ''
        let values = Object.values(obj)
        let keys = Object.keys(obj)
        let counter = 0;
        let res = ''
        
        for(let val of values) {
            result += `<td>${escape(val)}</td>`
            counter++
            if(counter % keys.length === 0) {
                res += `<tr>${result}</tr>`
            }
        }
        return res
    }

    function escape(value) {
        return value.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    console.log(outputArr.join('\n'));
   // return outputArr
}

fromJSONtoHTML(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`)