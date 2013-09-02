
var ImageHandler={};

ImageHandler.drawSelectUI = function(event){
	
	alert('work started');	
	ImageHandler.pickTab();
	var mainWindow = window.openDialog("chrome://imagehandler/content/AvailableImages.xul", 'Available-Images');
 	alert('on progress');
 	
 }
 
 ImageHandler.pickTab= function(){
 
 	var currentTab = gBrowser.selectedTab;;
 	//var tabs = [currentTab];
	var currentTabTitle = (gBrowser.selectedBrowser).contentDocument.title;
	alert(currentTabTitle);
	ImageHandler.pickImages(currentTab,currentTabTitle);
}

ImageHandler.getCurrentBrowser= function(){
	return gBrowser.selectedBrowser;
}

ImageHandler.pickImages=function(tab,title){
	var browser = gBrowser.getBrowserForTab(tab);
	//alert('got tab');
	var contentWindow = browser.contentWindow;
    alert('buuu got content window');
	
	var documentList = ImageHandler.getDocumentList(contentWindow);
        alert('got doc list');
        for (var i = 0; i < documentList.length; i++) {
            // handle current document
            var currentDocument = documentList[i];
            var currentImageList = new Array();
            var documentImageList = currentDocument.getElementsByTagName('img');
            
             for (var j = 0; j < documentImageList.length; j++) {
                var image = documentImageList[j];
                if (image.src != null && image.src != "") {
                	alert(image.src);
                    currentImageList.push(image);
                }
            }
        }
        
          //currentImageList should be sorted and duplicates should be eliminated
}

ImageHandler.getDocumentList = function(frame){
    var documentList = new Array();
    documentList.push(frame.document);
    var framesList = frame.frames;
    for (var i = 0; i < framesList.length; i++) {
        if (framesList[i].document != frame.document) {
            documentList.push(framesList[i].document);
        }
    }
    return documentList;
};



 
 


