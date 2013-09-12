/*
 * Madhushib : 100056C CS3202
 * 22/08/2013
 * 
 * This file contains the javascript functions of ihOverlay.xul 
 * It is the defoult browser overlay for the extention which contains the buttons, shortcuts and menu bars.
 */


var ImageHandler={};		//The class ImageHandler contains all main functionalities and contains in several files



/*
 * ImageHandler.drawSelectUI
 * This method is called when
 * 	-toolbar button pressed
 * 	-select to run Image Handler from menu or drop down list appear on right click
 */
ImageHandler.drawSelectUI = function(event){
	
	alert('work started');	
	
	//var currentTabTitle = (gBrowser.selectedBrowser).contentDocument.title;	//need when handling multiple tabs
	//alert(currentTabTitle);
	
	var currentTab=ImageHandler.pickTab();
	var ImageList=ImageHandler.pickImages(currentTab);
	var params = {
        "imageList": ImageList,
        "title": "Select Images You Prefer"
       // "listeners": listeners,
       // "browser": gBrowser.selectedBrowser,
       // "popupNotifications": PopupNotifications
    };
   
    //Call to open the "ImageSelector" user interface
	var mainWindow = window.openDialog("chrome://imagehandler/content/AvailableImages.xul", 'Available-Images-In-tab',"chrome,centerscreen,resizable, dialog=no, modal=no, dependent=no,status=yes", params);
		mainWindow.focus();
	 	alert('on progress');
	 	return true;
 }
 
 
 /*
  * Pick the browser object and tab objects
  * 
  */
 ImageHandler.pickTab= function(){
  	return gBrowser.selectedTab;;
 }
ImageHandler.getCurrentBrowser= function(){
	return gBrowser.selectedBrowser;
}



/*
 * Functions to retreive and process images
 * and to extract information
 * Get the browser tab, Its content document list, and select only images. then put image documents in to imageList
 */
ImageHandler.pickImages=function(tab){
	var browser = gBrowser.getBrowserForTab(tab);
	//alert('got tab');
	var contentWindow = browser.contentWindow;
    alert('got content window');
	
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
        return currentImageList;
          //currentImageList should be sorted and duplicates should be eliminated
}

/*
 * Retrive all the documents in a browser content frame
 */

ImageHandler.getDocumentList = function(frame){	//take all the documents of all web content objects
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


/*
 * **************To-DO***********
 * And a window to set user preferneces and options of the add-on
 */
 
 

