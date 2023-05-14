//random image preview

const previewImg = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");
const previewDescription = document.getElementById("preview-description");

const previewImg2 = document.getElementById("preview-img2");
const previewTitle2 = document.getElementById("preview-title2");
const previewDescription2 = document.getElementById("preview-description2");

const images = [
"/resources/img/3D%20blueprint%20arcade%20machine%20panel%20(2020).webp",
"/resources/img/Album%20cover%20-%20Earon%20Fox%20(2022).webp",
"/resources/img/Baby%20Yoda%20and%20Dart%20Wader%20in%20Simpson%20universe%20(2020).webp",
"/resources/img/Banner%202GIS%20(2022).webp",
"/resources/img/Banner%20RVN%20group%20(2020).webp",
"/resources/img/Banner%20for%20iBig%20(2023).webp",
"/resources/img/Box%20for%20battaries%202GIS%20(2023).webp",
"/resources/img/Calendar%202GIS%20(2022).webp",
"/resources/img/Concept%20interier%20Hoco%20shop%20(2020).webp",
"/resources/img/Concept%20“New”%20Sprite%201960%20(2020).webp",
"/resources/img/Conveyor%20-%203d%20(2019).webp",
"/resources/img/Diploma%202GIS%20(2023).webp",
"/resources/img/Dipper%20and%20Mable%20in%20Simpson%20universe%20(2020).webp",
"/resources/img/Dragon%20art%20(2019).webp",
"/resources/img/Fish%20art%20(2019).webp",
"/resources/img/Harry%20Potter%20in%20Simpson%20universe%20(2020).webp",
"/resources/img/Japan%20fish%20art%20(2019).webp",
"/resources/img/Lego%20car%20-%203d%20model%20(2020).webp",
"/resources/img/Morty%20fail%20(2020).webp",
"/resources/img/Night%20japan%20street%20(2020).webp",
"/resources/img/Note%202GIS%20(2023).webp",
"/resources/img/Nothing%20but%20Thieves%20in%20Simpson%20universe%20(2020).webp",
"/resources/img/Poster%20for%20iBig%20(2020).webp",
"/resources/img/Rick%20and%20Morty%20in%20Simpson%20universe%20(2020).webp",
"/resources/img/Rick%20and%20Morty%20run%20(2020).webp",
"/resources/img/Snakes%20and%20Ladders%20game%20(2021).webp",
"/resources/img/Stickers%202GIS%20(2022).webp",
"/resources/img/Super%20BOMZH%20in%20Simpson%20universe%20(2020).webp",
"/resources/img/Watch%202GIS%20(2020).webp"
];

if (images.length === 0) {
console.log("No images found.");
} else {
setRandomImage(previewImg, previewTitle, previewDescription);
setRandomImage(previewImg2, previewTitle2, previewDescription2);
}

function setRandomImage(imgElem, titleElem, descElem) {
if (images.length === 0) {
console.log("No images found.");
return;
}
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
images.splice(randomIndex, 1);
imgElem.src = randomImage;
const filename = randomImage.split("/").pop();
const lastDotIndex = filename.lastIndexOf(".");
const lastSlashIndex = filename.lastIndexOf("\\");
const title = decodeURIComponent(filename.substring(lastSlashIndex + 1, lastDotIndex).replace(/\([^()]*\)/, '').trim());
const description = /\(([^)]+)\)/.exec(filename)[1];
titleElem.textContent = title;
descElem.textContent = description;
}