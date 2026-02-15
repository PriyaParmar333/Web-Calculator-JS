const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function ac() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function per() {
    if (display.value !== "") {
        display.value = eval(display.value) / 100;
    }
}

function result() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}


document.addEventListener("keydown", function (event) {
    const key = event.key;

    // numbers 0–9
    if (key >= "0" && key <= "9") {
        append(key);
    }

    // operators
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        append(key);
    }

    // enter = result
    else if (key === "Enter") {
        result();
    }

    // backspace = delete
    else if (key === "Backspace") {
        del();
    }

    // escape = clear
    else if (key === "Escape") {
        ac();
    }
});
