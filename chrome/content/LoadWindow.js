/*
 * Madhushib : 100056C CS3202
 * 28/08/2013
 * 
 * This contains functionalities which are launched when the "ImageSelector" window (AvailableImages.xul) is loaded
 * 
 */
 
 /*
  * Take the parameters from the call to drow windows, initialize them, 
  * initialize the image grid and options available for user.
  * Define the event listners and reactions for user interactions
  */
  
  
ImageHandler.loadWindow = function(){
window.document.title = window.arguments[0].title;
	
	//*********TO_DO***********	
  // init set window from preferences
       
  //filter images to eliminate irrelevent images such as icons
        
 //create image grid
    //    var gridSize = window.innerWidth - 6;

      //  var thumbnailType = this.settings.getThumbnailType();
      //  var isShowImageSize = this.settings.isShowImageSize();
      //  var isShowImageName = this.settings.isShowImageName();
// var imageGrid = new ImagePickerChrome.ImageGrid("imageContainer", gridSize, thumbnailType, isShowImageSize,isShowImageName);
             

        ImageHandler.SelectAllImages();

        // add event listners
        window.addEventListener("resize", function() {
            //controller resize function
        }, true);
   }
   

/*
 * Take reference from the imagelist passed throug parameter list and retrieve images and call "selectImage" function to put them in Map
 */
ImageHandler.SelectAllImages=function(){
	
	imageList=window.arguments[0].imageList;
        for ( var i = 0; i < imageList.length; i++) {
            var img = imageList[i];
            ImageHandler.selectImage(img.id);
        }
        this.updateStatuBar();
        alert("select all images ");
}

/*
 * Put each image in the HashMap
 */
ImageHandler.selectImage=function(imageID){
	var selectedMap = new ImageHandler.HashMap();
	this.selectedMap.put(imageId, true);
        	
}

	
	
