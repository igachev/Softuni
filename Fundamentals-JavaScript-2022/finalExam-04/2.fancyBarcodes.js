function fancyBarcodes(input) {
let countOfBarcodes = Number(input.shift())
let barcodePattern = /@#+(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g

for(let i = 0; i < countOfBarcodes; i++) {
    let validBarcode = input[i].match(barcodePattern)
    
    if(validBarcode == null) {
        console.log('Invalid barcode');
    }
    else {
        let digitsPattern = /\d+/g
        let productCode = validBarcode[0].match(digitsPattern)
        if(productCode == null) {
            console.log('Product group: 00');
        }
        else {
            console.log(`Product group: ${productCode.join('')}`);
        }
    }
}

}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])