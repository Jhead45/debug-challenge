

function urlifyReg(str) {
    let urlifyStr = str.replace(/\S/gi, '%20'); 

    return urlifyStr;
}

console.log(urlifyReg('My name is'));
