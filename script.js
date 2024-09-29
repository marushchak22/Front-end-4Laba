let change = false;

function changeColorCountry() {
    const element = document.getElementById("country");
    if (change == false) {
        element.style.color = "red";
        element.style.backgroundColor = "green";
    } else {
        element.style.color = "black";
        element.style.backgroundColor = "white";
    }
    change = !change;
}

let changeSchool = false;

function ChangeColorSchool() {
    const element = document.querySelector(".school");
    if (changeSchool == false) {
        element.style.color = "blue";
        element.style.backgroundColor = "pink";
    } else {
        element.style.color = "black";
        element.style.backgroundColor = "white";
    }
    changeSchool = !changeSchool;
}


let imgElement = null;

function addImage() {
    const imageContainer = document.getElementById("imageContainer");
    
    if (!imgElement) {
        imgElement = document.createElement("img");
        imgElement.id = "image";
        imgElement.src = "https://lh6.googleusercontent.com/proxy/N8AqJa86AYzgTpLLWJQrBNzoR6iGu-gFm3xKzpQGNiiJyYzy1PhlLyH34RgxD5lx0FQ5CErnS3tItsT2dIzL6F9Ub0Nf8-vUjlS6-HEmF5fjgFwqcgJbE7eoJS_5llIe_9Vg9S8";
        imgElement.alt = "Зображення";
        imgElement.style.width = "512px";
        imageContainer.appendChild(imgElement);
    }
}

function removeImage() {
    if (imgElement) {
        imgElement.remove();
        imgElement = null;
    }
}

function increaseSize() {
    if (imgElement) {
        let currentWidth = parseInt(imgElement.style.width);
        imgElement.style.width = (currentWidth + 20) + "px";
    }
}

function decreaseSize() {
    if (imgElement) {
        let currentWidth = parseInt(imgElement.style.width);
        imgElement.style.width = (currentWidth - 20) + "px";
        
    }
}
