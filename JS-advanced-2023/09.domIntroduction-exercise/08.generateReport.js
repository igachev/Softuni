function generateReport() {
    //TODO
    let output = document.getElementById('output')
    let result = []
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    let columnNames = Array.from(document.querySelectorAll('input[type=checkbox]'))
    
    for(let i = 1; i < tableRows.length; i++) {
        let obj = {}
        for(let j = 0; j < columnNames.length; j++) {
            if(columnNames[j].checked) {
                
                let columnName = columnNames[j].name
                let cellInfo = tableRows[i].children[j].textContent
                obj[columnName] = cellInfo
                
            }
        }
      
        result.push(obj);
    }

    let json = JSON.stringify(result)
    output.value = json;
}