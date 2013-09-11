
ImageHandler.loadWindow = function(){
window.document.title = window.arguments[0].title;
	
		
        // init set window from preferences
        
        //filter images to eliminate irrelevent images such as icons
        
        //create image grid
    //    var gridSize = window.innerWidth - 6;

      //  var thumbnailType = this.settings.getThumbnailType();
      //  var isShowImageSize = this.settings.isShowImageSize();
      //  var isShowImageName = this.settings.isShowImageName();
// var imageGrid = new ImagePickerChrome.ImageGrid("imageContainer", gridSize, thumbnailType, isShowImageSize,isShowImageName);
             

        ImageHandler.SelectAllImages();

        // add event
        window.addEventListener("resize", function() {
            //controller resize function
        }, true);
   }
   
   
ImageHandler.SelectAllImages=function(){
	
	imageList=window.arguments[0].imageList;
        for ( var i = 0; i < imageList.length; i++) {
            var img = imageList[i];
            ImageHandler.selectImage(img.id);
        }
        this.updateStatuBar();
        alert("select all images ");
}

ImageHandler.selectImage=function(imageID){
	var selectedMap = new ImageHandler.HashMap();
	this.selectedMap.put(imageId, true);
        	
}

	
	
