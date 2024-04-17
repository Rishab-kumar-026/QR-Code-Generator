let input = document.getElementById("qr-text");
let image = document.getElementById("qr-img");
let image_box = document.querySelector(".image-box");
function generate_QR() {
    if (input.value.length > 0) {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + input.value;
        image_box.classList.add("display-img");
    }
    else {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error")
        }, 1000);

    }
}

