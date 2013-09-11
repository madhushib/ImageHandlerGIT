magePickerChrome.convertAndTidyImage = function(htmlImageList){

    // Filter image by url
    var tidiedHtmlImageList = ImagePickerChrome.filterDuplicateImage(htmlImageList);
    ImagePicker.Logger.info("imageList.length  = " + htmlImageList.length + ", tidiedHtmlImageList.length  = " +
    tidiedHtmlImageList.length);

    // Convert to ImagePicker.ImageInfo
    var imageInfoList = new Array();
    var guid = (new Date()).getTime();
    for (var j = 0; j < tidiedHtmlImageList.length; j++) {
        var tImg = tidiedHtmlImageList[j];

        ImagePicker.Logger.info("image" + j + " = " + tImg.src);

        var image = new ImagePicker.ImageInfo(guid++, tImg, ImagePickerChrome.getImageTop(tImg));

        ImagePickerChrome.ImageUtils.updateFileExtensionByMIME(image);
        ImagePickerChrome.ImageUtils.updateFileSizeFromCache(image);
        ImagePickerChrome.ImageUtils.updateFileNameFromCache(image);

        imageInfoList.push(image);
    }

    // Sort by the image top
    imageInfoList.sort(ImagePickerChrome.sortImagesByTop);

    return imageInfoList;
};

/**
 * Filter duplicate image by image URL
 *
 * @param {Array[HTMLElement]}
 *            imageList
 * @return {Array[HTMLElement]}
 */
ImagePickerChrome.filterDuplicateImage = function(imageList){

    var results = new Array();

    imageList.sort(ImagePickerChrome.sortImagesBySrc);

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
ImagePickerChrome.sortImagesBySrc = function(imageOne, imageTwo){
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
 * @param {ImagePicker.ImageInfo}
 *            imageOne
 * @param {ImagePicker.ImageInfo}
 *            imageTwo
 */
ImagePickerChrome.sortImagesByTop = function(imageOne, imageTwo){
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
