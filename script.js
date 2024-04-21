let input = document.getElementById("qr-text");
let image = document.getElementById("qr-img");
let image_box = document.querySelector(".image-box");
let input_box = document.querySelector(".input-box");
let span = document.createElement("span");

function generate_QR() {
    if (input.value.length > 0) {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + input.value;
        image_box.classList.add("display-img");

        span.innerHTML = "\u00d7";
        input_box.appendChild(span);
        span.addEventListener("click", remove_qr);
    }
    else {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error")
        }, 1000);

    }
}

function remove_qr() {
    image.src = '';
    input.value = '';
    image_box.classList.remove("display-img");
    span.innerHTML = '';
}

