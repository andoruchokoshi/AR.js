const previewImg = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");
const previewDescription = document.getElementById("preview-description");

const previewImg2 = document.getElementById("preview-img2");
const previewTitle2 = document.getElementById("preview-title2");
const previewDescription2 = document.getElementById("preview-description2");

const images = [];

fetch("image_links.json")
    .then(response => response.json())
    .then(data => {
        const images = data.images;
        if (images.length === 0) {
            console.log("No images found.");
        } else {
            setRandomImage(previewImg, previewTitle, previewDescription, images);
            setRandomImage(previewImg2, previewTitle2, previewDescription2, images);
        }
    })
    .catch(error => console.error(error));

// - LOCAL

//fetch("resources/img/")
//    .then(response => response.text())
//    .then(data => {
//        const parser = new DOMParser();
//        const html = parser.parseFromString(data, "text/html");
//        const links = html.querySelectorAll("a");
//        links.forEach(link => {
//            const href = link.getAttribute("href");
//            if (/\.(jpe?g|png|gif)$/i.test(href)) {
//                images.push(href);
//            }
//        });
//        if (images.length === 0) {
//            console.log("No images found.");
//        } else {
//            setRandomImage(previewImg, previewTitle, previewDescription);
//            setRandomImage(previewImg2, previewTitle2, previewDescription2);
//        }
//    })
//    .catch(error => console.error(error));

function setRandomImage(imgElem, titleElem, descElem, images) {
    const imagesCopy = [...images];
    const randomIndex = Math.floor(Math.random() * imagesCopy.length);
    const randomImage = imagesCopy.splice(randomIndex, 1)[0];
    imgElem.src = randomImage;
    const filename = randomImage.split("/").pop();
    const lastDotIndex = filename.lastIndexOf(".");
    const lastSlashIndex = filename.lastIndexOf("\\");
    const title = lastSlashIndex === -1 ? filename.substring(0, lastDotIndex) : filename.substring(lastSlashIndex + 1, lastDotIndex).replace(/\([^()]*\)/, '').trim();
    const description = /\(([^)]+)\)/.exec(filename)[1];
    titleElem.textContent = title;
    descElem.textContent = description;
}

//function setRandomImage(imgElem, titleElem, descElem) {
//    if (images.length === 0) {
//        console.log("No images found.");
//        return;
//    }
//    const randomIndex = Math.floor(Math.random() * images.length);
//    const randomImage = images[randomIndex];
//    images.splice(randomIndex, 1);
//    imgElem.src = randomImage;
//    const filename = randomImage.split("/").pop();
//    const lastDotIndex = filename.lastIndexOf(".");
//    const lastSlashIndex = filename.lastIndexOf("\\");
//    const title = lastSlashIndex === -1 ? filename.substring(0, lastDotIndex) : filename.substring(lastSlashIndex + 1, lastDotIndex).replace(/\([^()]*\)/, '').trim();
//    const description = /\(([^)]+)\)/.exec(filename)[1];
//    titleElem.textContent = title;
//    descElem.textContent = description;
//}
