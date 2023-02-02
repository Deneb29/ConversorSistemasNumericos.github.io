function convertir() {
    let input = document.getElementById("inputArea").value;
    let output;
    let num = parseInt(input);
    let sisInput = document.getElementById("sisFuente").value;
    let sisRes = document.getElementById("sisRes").value;
    let dec;

    if (sisInput === "Decimal") {
        if (/^-?[0-9]*\s*$/.test(input) === true) {
            if (/^-?[0-9]*\s*$/.test(input) === true) {
                if (sisRes === "Decimal") {
                    output = input;
                }
                if (sisRes === "Binario") {
                    num = parseInt(input);
                    output = num.toString(2);
                }
                if (sisRes === "Octal") {
                    num = parseInt(input);
                    output = num.toString(8);
                }
                if (sisRes === "Hexadecimal") {
                    num = parseInt(input);
                    output = num.toString(16);
                }
            }
        }
        else {
            output = "El número ingresado no es decimal.";
        }

    }
    if (sisInput === "Binario") {
        if (/^-?[0-1]*\s*$/.test(input) === true) {
            if (/^-?[0-1]*\s*$/.test(input) === true) {
                if (sisRes === "Binario") {
                    output = input;
                }
                if (sisRes === "Decimal") {
                    output = parseInt(input, 2);
                }
                if (sisRes === "Octal") {
                    num = parseInt(input, 2);
                    output = num.toString(8);
                }
                if (sisRes === "Hexadecimal") {
                    num = parseInt(input, 2);
                    output = num.toString(16);
                }
            }
        }
        else {
            output = "El número ingresado no es binario.";
        }

    }
    if (sisInput === "Octal") {
        if (/^-?[0-7]*\s*$/.test(input) === true) {
            if (/^-?[0-7]*\s*$/.test(input) === true) {
                if (sisRes === "Octal") {
                    output = input;
                }
                if (sisRes === "Binario") {
                    num = parseInt(input, 8);
                    output = num.toString(2);
                }
                if (sisRes === "Decimal") {
                    output = parseInt(input, 8);
                }
                if (sisRes === "Hexadecimal") {
                    num = parseInt(input, 8);
                    output = num.toString(16);
                }
            }
        }
        else {
            output = "El número ingresado no es octal.";
        }

    }
    if (sisInput === "Hexadecimal") {
        if (/^-?[0-9]|[A-F]|[a-f]*\s*$/.test(input) === true) {
            if (/^-?[0-9]|[A-F]|[a-f]*\s*$/.test(input) === true) {
                if (sisRes === "Hexadecimal") {
                    output = input;
                }
                if (sisRes === "Binario") {
                    num = parseInt(input, 16);
                    output = num.toString(2);
                }
                if (sisRes === "Octal") {
                    num = parseInt(input, 16);
                    output = num.toString(8);
                }
                if (sisRes === "Decimal") {
                    output = parseInt(input, 16);
                }
            }
        }
        else {
            output = "El número ingresado no es hexadecimal.";
        }

    }

    document.getElementById("outputArea").innerHTML = output;
}