var canvas = new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL (get_image, function(Img)   
	{
	block_image_object = Img; 

 	block_Image_Object.scaleToWidth(block_image_width);
	block_Image_Object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	});
	canvas.add(block_Image_Object);
	});	
}



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') 
	{
		new_image('rr1.png'); 
		console.log("r")
	}
	if(keyPressed == '86')
	{
		new_image('gr.png')
		console.log("v")
		blockX = 200;
	
	}
	
	if(keyPressed == '65')
	{
		new_image('yr.png')
		console.log("a")
		blockX =350;
		
	}
	if(keyPressed == '82')
		new_image('pr.png')
		console.log("p")
		blockX = 600;
		
	
	if(keyPressed == '73')
	{
		new_image("br.png")
		console.log("b")
		blockX = 700;
	
	}
	
}


