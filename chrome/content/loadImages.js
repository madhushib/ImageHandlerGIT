//Components.utils.import("resource://imagepicker/hashMap.js");

ImageHandler.load = function() {
		
        alert("Got to load function");
 		// init window title
        window.document.title = window.arguments[0].title;
		
        // set window from preferences
        
        //
        var imageList=window.argument[0].imageList;
        ImageHandler.selectAllImages(imageList);
                

        // add event
        window.addEventListener("resize", function() {
            ImagePHandler.Controller.onResize();
        }, true);
    }
    

ImageHandler.selectAllImages=function(){
	//filter images by size to avoid loading icons etc.
	
	var selectedMap = new ImagePicker.HashMap();
        for ( var i = 0; i < this.imageList.length; i++) {
            var img = this.imageList[i];
           // ImageHandler.selectImage(img.id);
            document.appendChild(img);
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

 


    
    