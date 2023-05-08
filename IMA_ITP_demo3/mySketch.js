let imgs = new Array(12);
let pic = 0;
let imgObj = new Array(12);
let totalImgs = new Array(12);

let dog = "woof";


//let img_h = height/6;
let img_w;
let img_h;
let valsX = [];
let valsY = [];



function preload(){

	for(let i = 0; i < imgs.length; i++){
		let s = 'data/' + i + '.jpg';
		imgs[i] = loadImage(s);
	}
	/*
	imgs[0] = loadImage('1.jpg');
	imgs[1] = loadImage('2.jpg');
	imgs[2] = loadImage('3.jpg');
	imgs[3] = loadImage('4.jpg');
	*/
	
	
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	//frameRate(5);
	img_w = width/6;
	img_h = height/6;


	//getCoords();
	//checkCoords();
	let x = 30;
	let y = 30;

	for(let i = 0; i < imgs.length; i++){
		imgObj[i] = new myImage(imgs[i], x, y, img_w, img_h);
		x = x + img_w + random(30, 100);
		if(x > (width-img_w)){
			x = 0;
			y = y + img_h + random(30, 100);
		} else {
			y = y + random(-10, 30);
		}
		/* if(i <= 3){
			imgObj[i].display();
		} else {*/
			imgObj[i].display();
			//console.log("yes");
		//}
	}

/*
	for(let i = 0; i < imgs.length; i++){
		imgs[i].resize(width/6, height/6);
	}
*/	

   
}

function draw() {
	//background(58);
	//for(let i = 0; i < imgs.length; i++){
		
		//image(imgs[pic], random(0, width), random(0, height));
	//}
	/*
	  pic++;

	  if(pic > imgs.length - 1){
	  	pic = 0;
	  }
	  */
	/*
	
	if(frameCount < imgObj.length){
		for(let i = 0; i < imgObj.length; i++){
			imgObj[i].display();
		}
		//image(imgObj[rand], random(0, width), random(0, height));
	} else {
		*/
 

// fade alpha/opacity of another for range of frames:



	
	//imgObj[rand_alpha].display();
		//turn down opacity  //decrease but not re-draw bckgnd

// opacity and shift image one by one: 

      //image(imgObj[rand].fracture());
	let rand = floor(random(imgObj.length));
	//console.log(rand);

	if(rand > 3){
		if(frameCount % 2 == 0){
			//background(52);
			let temp = imgObj[rand];
			temp.alpha(true);
			
		}
			
	 }


	 // this is getting everyone to fracture?! vv


		//imgObj[rand].fracture();
	 	if(rand <= 3 ){
			// have this occuring randomly:  every few frames
		//fracturing:
	 		
			let theX = imgObj[rand].x;
			let theWidth = theX + width/6;
			let x1 = floor(random(theX, theX+theWidth));
			let y1 = 50;
			let x2 = round(x1 + random(-7, 7));
			let y2 = round(y1 + random(-5, 5));
			let w = floor(random(10, 40));
			let h = height - 130;
			set(x2, y2, get(x1, y1, w, h));

			updatePixels();

		
		
 		}

	//}
}

function getCoords(){
	// get 4 random coords that do not over lap with each other, image-wise
	
	
	
	//let r_h = floor(random(0, img_h));
	//let v = createVector(r_w, r_h);

	//let vals = [];
	// get random values within the sketch window:
	for(let i = 0; i < 4; i++){
		valsX[i] = random(0, (width - img_w));
	}

	// put in order to make checking easier:
	let out, inner, swapper;
    for (out = 0 ; out < vals.length; out++) { // outer loop
   	 for (inner = out; inner < vals.length; inner++)  { // inner loop
      	if ( valsX[inner] > valsX[inner + 1] ) { // out of order?
       	 // swap them:
       	 	swapper = valsX[inner];
        	valsX[inner] = valsX[inner + 1];
       	 	valsX[inner + 1] = swapper;
      } //if
    } // inner
  } // outer

}


function checkCoords(){

	// then check vector array:
	for(let i = 0; i < valsX.length; i++){
		//check the x value
		if(valsX[i + 1] < (valsX[i] + img_w)){
			// then check the y value:

			// if also returns true:

			//pick new x coordinate:

			// then check again:

		}// if
	} // for-loop


	/*
	for(let i = 0; i < vals.length; i++){
		let over_w = false;
		let over_h = false;

		// if overlapping the x coordinate:
		if((vals[i + 1] < vals[i] + img_w ) && (vals[i + 1] > vals[i] )){
			over_w = true;
		} else {
			over_w = false;
		}
		// if overlapping the y coordinate:
		if((vals[i + 1] < vals[i] + img_h) && (vals[i] + 1 > vals[i]) ){
			over_h = true;
		} else { 
			over_h = false;
		}
		
		//if both are overlapping
		if(over_w == true && over_h == true){
			// get a new coordinate (needs to be tested):
			vals[i] = floor(random(0, width));
			break;
		}

	}
	// if both true test new coordinate:
	if(over_w == true && over_h == true){
		checkCoords();
	}
	*/



}


function keyPressed(){
	if(key == ' '){
		let fileName = '';
		fileName += year() + ':';
		fileName += month() + ':';
		fileName += day() + ':';
		fileName += hour() + ':';
		fileName += minute() + ':';
		fileName += second();
		//console.log(fileName);
		saveCanvas(fileName, 'jpg');

	}

	if(key == 'k'){
		let f = imgs[0]; //new p5.File(imgs[0]);
		console.log(f.data);
	}
}


