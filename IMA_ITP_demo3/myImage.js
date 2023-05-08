class myImage{


 constructor(img_, x_, y_){
 		this.img = img_;
 		this.img.resize(width/6, height/6);
 		this.x = x_;
 		this.y = y_;
 		this.op = 255; //opacity
 		this.strips = [];

 }

 display(){
 	//this.fracture();
 	image(this.img, this.x, this.y);  // should this be in the draw loop?
 	if(frameCount > 2){
 		/*
 	this.x1 = floor(random(0, this.img.width));

	this.y1 = 50; //this.img.height;

	this.x2 = round(this.x1 + random(-7, 7));
	this.y2 = round(this.y1 + random(-5, 5));

	this.w = floor(random(10, 40));
	this.h = this.img.height - 100;
	set(this.x2, this.y2, get(this.x1, this.y1, this.w, this.h));
	this.img.updatePixels();
	*/
 	}


 }

 alpha(later_){
 	if(later_ == true){
 		this.op = this.op - 50;
 		if(this.op <= 0){
 			this.op = 0;
 		}
 		tint(255, this.op);
 	}
 }



 fracture(){
 	// load the pixels of the image:

 ///*
    this.x1 = floor(random(0, this.img.width));

	this.y1 = 50; //this.img.height;

	this.x2 = round(this.x1 + random(-7, 7));
	this.y2 = round(this.y1 + random(-5, 5));

	this.w = floor(random(10, 40));
	this.h = this.img.height - 100;
	//console.log("yup");
	//*/


	set(this.x2, this.y2, get(this.x1, this.y1, this.w, this.h));
	updatePixels();
 }






}