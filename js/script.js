var input = document.getElementById("input");

function numFunc(value) {

    input.value += value;

    if(value == "=") {

        var inputFullValue = input.value.split(" ");

        //firstNum
        var firstPart = parseFloat(inputFullValue[0]);

        // operations
        var btw = inputFullValue[1];

        //secondNum
        var secondPart = parseFloat(inputFullValue[2]);

        if (secondPart == 0) {
            input.value = " ";
        }

        switch(btw) {
            case '+':
                result = firstPart + secondPart;
                console.log(result);
                input.value = result;
                console.log(input.value);
                break;
            case '-':
                result = firstPart - secondPart;
                console.log(result);
                input.value = result;
                console.log(input.value);
                break;
            case '*':
                result = firstPart * secondPart;
                console.log(result);
                input.value = result;
                console.log(input.value);
                break;
            case '/':
                result = firstPart / secondPart;
                console.log(result);
                input.value = result;
                console.log(input.value);            
        }

    }

    console.log("clicked");
    console.log(value);
    console.log("input.value:" + input.value);
    console.log("firstPart:" + firstPart);
    console.log("btw:" + btw);
    console.log("secondPart:" + secondPart);

}

//clear input field
function clrFunc() {
    input.value = "";
}

//square function
function sqrFunc() {
    var sqrInp = Math.sqrt(input.value);
    console.log(sqrInp);
    input.value = sqrInp;
}

//pow function
function powFunc() {
    var powInp = Math.pow(input.value, 2);
    console.log(powInp);
    input.value = powInp;
}

//round number function
function rndFunc() {
    var rndInp = Math.round(input.value);
    console.log(rndInp);
    input.value = rndInp;
}

//log function
function logFunc() {
    var logInp = Math.log(input.value);
    console.log(logInp);
    input.value = logInp;
}

//unary prefix
function unaryFunc() {
    var unaryInp = -input.value;
    console.log(unaryInp);
    input.value = unaryInp;
}

function trigFunc(value) {
    switch(value) {
        case "sin":
            var sinInp = Math.sin(input.value);
            input.value = sinInp;
            console.log("sin:" + sinInp);
            break;
        case "cos":
            var cosInp = Math.cos(input.value);
            input.value = cosInp;
            console.log("cos:" + cosInp);
            break;  
        case "tan":
            var tagInp = Math.tan(input.value);
            input.value = tagInp;
            console.log("tag:" + tagInp);
            break;   
        case "ctg":
            var ctgInp = 1/Math.tan(input.value);
            input.value = ctgInp;
            console.log("ctg:" + ctgInp);
            break;         
    }
}