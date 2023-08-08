const input = document.querySelector("#input");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn-converter");
const message = document.querySelector("#message");

function convert() {
    const fromValue = from.value;
    const toValue = to.value;

    if ( input.value == "" || input.value == "0") {
        message.textContent = "Please! Digit a valid value in Quantity!";
        return;
    }

    if (fromValue == toValue) {
        output.value = input.value
        message.textContent = "You chose the same measure!";
        return;
    };

    let meter;
    switch(fromValue) {
        case "millimeter":
            meter = input.value / 1000;
            break;
        
        case "centimeter":
            meter = input.value / 100;
            break;
        
        case "meter":
            meter = input.value;
            break;

        case "kilometer":
            meter = input.value * 1000;
            break;
    }

    let result;

    switch(toValue) {
        case "millimeter":
            result = meter * 1000;
            break;
        
        case "centimeter":
            result = meter * 100;
            break;
        
        case "meter":
            result = meter;
            break;

        case "kilometer":
            result = meter / 1000;
            break;
    };

    output.value = result;

    const fromLabel = from.options[from.selectedIndex].text;
    const toLabel = to.options[to.selectedIndex].text;

    const msg = `${input.value} ${fromValue}(s) is the same that ${result} ${toValue}(s)`;

    message.textContent = msg;

    console.log(fromLabel, toLabel);
    return;

};


btn.addEventListener("click", convert)