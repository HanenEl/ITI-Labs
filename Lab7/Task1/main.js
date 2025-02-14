var crt_img = 2;
var sum_imgs = 5; 
var Interval =0;
function updateImage(){
    document.getElementById("MyImage").src = "Photos/" + crt_img + ".jpg";
}
function nextImage(){
    crt_img++;
    if(crt_img > sum_imgs){
        crt_img = 1; 
    }
    updateImage();
}

function prevImage(){
    crt_img --;
    if(crt_img < 1) {
        crt_img = sum_imgs; 
    }
    updateImage();
}

function startSlideshow(){
    stopSlideshow(); 
    Interval = setInterval(nextImage, 2000); 
}

function stopSlideshow(){
    clearInterval(Interval);
    updateImage();
}














