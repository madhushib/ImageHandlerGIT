browserTest = TestCase("browserTest");
 
browserTest.prototype.setUp = function(){
  //initialization - before each test
	
};
 
browserTest.prototype.testFirst = function(){
	//alert('testing1');
	var result=ImageHandler.pickTab();
//	assertEquals(expect,true);
	assertEquals(expect,result );
  //the test
};

browserTest.prototype.testSecond = function(){
	//alert('testing2');
//	var expect=ImageHandler.ihOverlay.drawSelectUI();
//	assertEquals(expect,true);
	assertEquals("Hello World!", "Hello World!");
  //the test
};
 
//browserTest.prototype.testSecond = function(){
//  //the test
//};
// 
browserTest.prototype.tearDown = function(){
  //clean up - after each test
};