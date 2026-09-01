function UploadImage(imagename,cb) {
    console.log("Uploading image...");
    setTimeout(() => {
        let imageUrl = "temp/" + imageName;
        cb(imageUrl,SaveToGallery)
    }, 2000);
}

function ApplyFilter(imageUrl,cb) {
    console.log("Applying filter...");
    setTimeout(() => {
        let filteredImage = imageUrl.replace('.jpg', '_filtered.jpg');
        cb(filteredImage)
    }, 1500);
}

function SaveToGallery(filteredImage) {
    console.log("Saving to gallery...");
    setTimeout(() => {
        let finalPath = "gallery/" + filteredImage.split('/').pop();
        console.log("Saved at:", finalPath);
    }, 1000);
}
UploadImage("photo.jpeg",ApplyFilter);
// pass the required paramaeter in function and write the calling of functions such that it will run synchronously