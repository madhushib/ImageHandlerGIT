ImageHandler.pickAllTabs = function(event){

    event.stopPropagation();

    // Collect tabs
    var tabs = [];
    for(var i=0; i<gBrowser.tabContainer.childNodes.length; i++){
        tabs.push(gBrowser.tabContainer.childNodes[i])
    }

    // Get document title
    var currentTabTitle = ImageHandler.getCurrentBrowser().contentDocument.title;

    // Pick image
    ImageHandler.pickImagesFromAllTabs(tabs, currentTabTitle);
};

ImageHandler.pickImagesFromAllTabs = function(tabs, title){

    // init cache session can be used to increase efficiency of image loading
   

    // Get images from all given tabs
    var imageInfoList = new Array();
    tabs.forEach(function(tab){
       alert("handling tab = " + tab);
        var browser = gBrowser.getBrowserForTab(tab);
        var contentWindow = browser.contentWindow;

        var documentList = ImageHanler.getDocumentList(contentWindow);
        for (var i = 0; i < documentList.length; i++) {
            // handle current document
            var currentDocument = documentList[i];
            var currentImageList = new Array();
            var documentImageList = currentDocument.getElementsByTagName('img');
            for (var j = 0; j < documentImageList.length; j++) {
                var image = documentImageList[j];
                if (image.src != null && image.src != "") {
                    currentImageList.push(image);
                }
            }
            ImageHandler.Logger.info("document = " + currentDocument.title + ", images = " + currentImageList.length);

            imageInfoList = imageInfoList.concat(ImageHandler.convertAndTidyImage(currentImageList));
        }// end for each document
    });