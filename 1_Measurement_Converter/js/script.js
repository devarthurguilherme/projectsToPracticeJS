const input = document.querySelector("#input");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn-converter");
const message = document.querySelector("#message");

function convert() {
    const fromValue = from.value;
    const toValue = to.value;

    console.log(fromValue, toValue);
};

btn.addEventListener("click", convert)