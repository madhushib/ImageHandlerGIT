//Components.utils.import("resource://imagepicker/hashMap.js");

ImageHandler.load = function() {
		
 		// init window title
        window.document.title = window.arguments[0].title;
		
        // set window from preferences
        
        //
        var imageList=window.arguments[0].imageList;
        alert("Got to load function");
        ImageHandler.showAllImages(imageList);
                

        // add event
        window.addEventListener("resize", function() {
            ImagePHandler.Controller.onResize();
        }, true);
        
        
    }
    

ImageHandler.showAllImages=function(imageList){
	//filter images by size to avoid loading icons etc.
	
	var imageContainer=document.getElementById("imageContainer");
        for ( var i = 0; i < 10; i++) {
            var img = imageList[i];
            if( img.src != null && img.src!=""){
            	var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
				var imgElem = document.createElementNS(XUL_NS, "image");
    			imgElem.setAttribute("id", img.id);
    			imgElem.setAttribute("src", img.src );
    
    			imageContainer.appendChild(imgElem);
            }
            
            
        }
        //updateStatuBar
        alert("select all images ");
  }
    
ImageHandler.selectImage= function(imageId){
       
		var selectedMap = new ImagePicker.HashMap();
        selectedMap.put(imageId, true);
        var checkbox = document.getElementById(imageId + "-CheckBox");
        if (checkbox) {
            checkbox.setAttribute("checked", true);
        }
        var imageCell = document.getElementById(imageId + "-CellBox");
        if(imageCell){
            ImagePicker.XulUtils.addClass(imageCell,"image-cell-selected");
        }
}

 


    
    