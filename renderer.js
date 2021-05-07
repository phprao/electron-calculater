// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var inputs;
var method = "";
var methods = ["+", "-", "×", "/"];
var result;
var inputsId = "#inputs";
var resultId = "#result";

$('.buttons td').on('click', function () {
    // 当前按键
    var b = $(this).text();
    render(b);
})

function render(char) {
    inputs = $(inputsId).text();

    switch (char) {
        case "←":
            back();
            break;
        case "C":
            clear();
            break;
        case "CE":
            clear();
            break;
        case "√":
            sqrt();
            break;
        case "1/x":
            bottom();
            break;
        case "±":
            reverse();
            break;
        case "=":
            equal();
            break;
        case "%":
            break;
        case "MC":
            break;
        case "MR":
            break;
        case "MS":
            break;
        case "M+":
            break;
        case "M-":
            break;
        default:
            if (methods.indexOf(char) != -1) {
                method = char;
                inputs = "";
            } else {
                inputs = inputs + char;
            }

            $(inputsId).append(char);
    }
}

function showResult() {
    $(resultId).text(result);
}

function defaultFunc() {

}

// +, - 翻转
function reverse() {
    if (!myIsNaN(result)) {
        result = -parseFloat(result);
        showResult();
    }
    return;
}

// = 计算结果
function equal() {
    calculateData();
    showResult();
}

function calculateData() {
    if (inputsArr.length == 0) {
        return;
    }
    var inputArrS = [];
    var total = 0;
    var chr = "";
    var m = ["+", "-", "×", "/"];
    inputsArr.forEach(function (element, index, array) {
        if (m.indexOf(element) != -1) {
            if (chr != "") {
                inputArrS.push(chr);
                chr = "";
            }
            inputArrS.push(element);
        } else {
            chr = chr + element;
        }
    })

    console.log(inputArrS);

    tmp = "";
    inputArrS.forEach(function (element, index, array) {
        if (m.indexOf(element) != -1) {

        }
    })
}

// 回退输入
function back() {
    $(resultId).text("");
    inputs = $(inputsId).text();
    inputs = inputs.substr(0, inputs.length - 1);
    $(inputsId).text(inputs);
}

// 清除屏幕
function clear() {
    $(inputsId).text("");
    $(resultId).text("");
}

// 开平方根
function sqrt() {
    inputs = parseFloat($(inputsId).text());
    if (inputs == 0) {
        result = 0;
    } else {
        result = Math.sqrt(inputs);
    }

    showResult();
}

// 倒数
function bottom() {
    inputs = parseFloat($(inputsId).text());
    if (inputs == 0) {
        result = 0;
    } else {
        result = 1 / inputs;
    }

    showResult();
}

function myIsNaN(value) {
    if (typeof value === undefined) {
        return true
    }
    if (isNaN(value)) {
        return true
    }

    if (value === "") {
        return true
    }

    return false;
}