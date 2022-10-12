function extractFile(path) {
    let splitPath = path.split('\\')
    let filePath = splitPath.pop()
    let lastDotIndex = filePath.lastIndexOf('.');
    let fileExtension = filePath.substring(lastDotIndex)
    let fileName = filePath.substring(0,lastDotIndex)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension.substring(1)}`);
    }
    
    extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')