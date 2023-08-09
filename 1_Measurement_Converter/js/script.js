const input = document.querySelector("#input");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn-converter");
const message = document.querySelector("#message");

function convert() {
    const fromValue = from.value;
    const toValue = to.value;
    const inputValue = input.value;

    if ( inputValue == "" || inputValue == "0") {
        message.textContent = "Please! Digit a valid value in Quantity!";
        return;
    }

    if (fromValue == toValue) {
        output.value = inputValue;
        message.textContent = "You chose the same measure!";
        return;
    };
// Do with 3 parameters and try again here! But just return meter!
    let meter;
    switch(fromValue) {
        case "millimeter":
            meter = inputValue / 1000;
            break;
        
        case "centimeter":
            meter = inputValue / 100;
            break;
        
        case "meter":
            meter = inputValue;
            break;

        case "kilometer":
            meter = inputValue * 1000;
            break;
    };

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

    const msg = `${inputValue} ${fromValue}(s) is(are) the same that ${result} ${toValue}(s)`;

    message.textContent = msg;

    console.log(fromLabel, toLabel);

    return;

};

btn.addEventListener("click", convert);