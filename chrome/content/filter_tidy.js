/*
 * Madhushib : 100056C CS3202
 * 05/09/2013
 * 
 * The web contents contain multiple types of images, banners error mesage icons etc.
 * But user is intrest in the images appear as the main contents of the web pages;
 * This file contains methods to filter the misseleneous images and to sort them in an order
 */

ImageHandler.sortAndTidyImage = function(htmlImageList){

    // Filter image by url
    var tidiedHtmlImageList = ImageHandler.filterDuplicateImage(htmlImageList);
    ImageHandler.alert("imageList.length  = " + htmlImageList.length + ", tidiedHtmlImageList.length  = " +
    tidiedHtmlImageList.length);

    // Convert to ImageHandler.ImageInfo
    var imageInfoList = new Array();
    var guid = (new Date()).getTime();
    for (var j = 0; j < tidiedHtmlImageList.length; j++) {
        var tImg = tidiedHtmlImageList[j];

        ImageHandler.Logger.info("image" + j + " = " + tImg.src);

        var image = new ImageHandler.ImageInfo(guid++, tImg, ImageHandler.getImageTop(tImg));

        ImageHandler.ImageUtils.updateFileExtensionByMIME(image);
        ImageHandler.ImageUtils.updateFileSizeFromCache(image);
        ImageHandler.ImageUtils.updateFileNameFromCache(image);

        imageInfoList.push(image);
    }

    // Sort by the image top
    imageInfoList.sort(ImageHandler.sortImagesByTop);

    return imageInfoList;
};

/**
 * Filter duplicate image by image URL
 *
 * @param {Array[HTMLElement]}
 *            imageList
 * @return {Array[HTMLElement]}
 */
ImageHandler.filterDuplicateImage = function(imageList){

    var results = new Array();

    imageList.sort(ImageHandler.sortImagesBySrc);

    for (var i = 0; i < imageList.length; i++) {
        if ((i + 1 < imageList.length) && (imageList[i].src == imageList[i + 1].src)) {
            continue;
        }

        results.push(imageList[i]);
    }

    return results;
};

/**
 * Sort image by image src
 *
 * @param {HTMLElement}
 *            imageOne
 * @param {HTMLElement}
 *            imageTwo
 */
ImageHandler.sortImagesBySrc = function(imageOne, imageTwo){
    var imageOneSrc = imageOne.src;
    var imageTwoSrc = imageTwo.src;

    var sortValue = 1;

    if (imageOneSrc == imageTwoSrc) {
        sortValue = 0;
    } else if (imageOneSrc < imageTwoSrc) {
        sortValue = -1;
    }

    return sortValue;
};

/**
 * Sort image by image top
 *
 * @param {ImageHandler.ImageInfo}
 *            imageOne
 * @param {ImageHandler.ImageInfo}
 *            imageTwo
 */
ImageHandler.sortImagesByTop = function(imageOne, imageTwo){
    var imageOneTop = imageOne.top;
    var imageTwoTop = imageTwo.top;

    var sortValue = 1;

    if (imageOneTop == imageTwoTop) {
        sortValue = 0;
    } else if (imageOneTop < imageTwoTop) {
        sortValue = -1;
    }

    return sortValue;
};
