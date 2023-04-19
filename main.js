var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_Image_Width = 350;
block_Image_Height = 430;

var block_Image_Object= "";

function new_image(get_image)
{
	fabric.Image.fromURL (get_image, function(Img)   
	{
	block_Image_Object = Img; 

 	block_Image_Object.scaleToWidth(block_Image_Width);
	block_Image_Object.scaleToHeight(block_Image_Height);
	block_Image_Object.set({
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
		console.log("e")
	}			
	if(keyPressed == '86')
	{
		new_image('gr.png')
		console.log("v")
		block_x = 200;
	
	}
	
	if(keyPressed == '65')
	{
		new_image('yr.png')
		console.log("a")
		block_x =350;
		
	}
	if(keyPressed == '82'){
		new_image('pr.png')
		console.log("r")
		block_x = 600;
	}
	
	if(keyPressed == '73')
	{
		new_image("br.png")
		console.log("i")
		block_x = 700;
	
	}
	
}


