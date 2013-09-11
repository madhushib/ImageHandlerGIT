loadImageTest = TestCase("loadImageTest");
 
loadImageTest.prototype.setUp = function(){
  //initialization - before each test
	
};
 
loadImageTest.prototype.testFirst = function(){
	//alert('testing1');
	var result=ImageHandler.load();
//	assertEquals(expect,true);
	assertEquals(expect,result );
  //the test
};

loadImageTest.prototype.testSecond = function(){
	//alert('testing2');
//	var expect=ImageHandler.ihOverlay.drawSelectUI();
//	assertEquals(expect,true);
	assertEquals("Hello World!", "Hello World!");
  //the test
};
 
//loadImageTest.prototype.testSecond = function(){
//  //the test
//};
// 
loadImageTest.prototype.tearDown = function(){
  //clean up - after each test
};