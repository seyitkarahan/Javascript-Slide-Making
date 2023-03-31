let i = 0;
let images = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300',
'https://picsum.photos/200/300'];

let duration = 1000;

function slideImg() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    }

    else {
        i = 0;
    }

    setTimeout("slideImg()", duration);
}

window.onload = slideImg;