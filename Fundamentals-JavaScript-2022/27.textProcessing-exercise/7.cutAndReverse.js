function cutAndReverse(str) {
    let strLength = str.length;
    let middlePoint = strLength / 2;
    let firstHalf = str.substring(0,middlePoint)
    let secondHalf = str.substring(middlePoint,strLength)
    reverseText(firstHalf)
    reverseText(secondHalf)
    
    function reverseText(text) {
        let result = ''
        for(let i = text.length-1; i >= 0; i --) {
            result += text[i]
        }
        console.log(result);
    }
    }
    
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')