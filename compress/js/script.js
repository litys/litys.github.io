function init(){
	change_quality();
	change_size();
}
init();


function convert(){

	document.getElementById('result').innerHTML = '';
	document.getElementById('canvas_box').innerHTML = '';
	
	var input = document.getElementById('input');
	var img = [];
	var loaded_files = 0;

	for( let i=0; i<input.files.length; i++ ){
		
		img[i] = new Image;
		img[i].src = URL.createObjectURL(input.files[i]);
		img[i].title = input.files[i].name;

		
		img[i].onload = function() {
			loaded_files++;
			if(loaded_files == input.files.length){
				for( let x=0; x<input.files.length; x++ ){
					process_single_img(img[x],x);
				}
			}
		}

	}
}

function process_single_img(img,i){

	var scale = document.getElementById('scale').value / 100;
	var img_width = img.width * scale,
			img_height = img.height * scale;

	var canvas = document.createElement('canvas');
	canvas.id = "canvas_"+i;
	canvas.width = img_width;
	canvas.height = img_height;

	var canvas_box = document.getElementById("canvas_box");
	canvas_box.appendChild(canvas);
	
	ctx = document.getElementById(canvas.id).getContext('2d');
	
	// Fill background in white (prepare for alpha channel)
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0,0,img_width,img_height);

	ctx.drawImage(img, 0, 0, img_width, img_height);


	//========== Generate IMG from Canvas
	canvas = document.getElementById(canvas.id);

	var quality = document.getElementById('quality').value;
	quality = parseInt(quality) / 100;

	var img_element = document.createElement('img');
	var image = canvas.toDataURL("image/jpeg", quality)
	img_element.id = "image_"+i;
	img_element.src = image;

	var div_container = document.createElement('div');
	div_container.classList.add('image_container');
	div_container.appendChild(img_element);
	
	var img_download = document.createElement('a');
	img_download.href = image;
	var img_jpg_name = img.title.split(".");
	img_jpg_name = img_jpg_name[0]+'.jpg'
	img_download.title = img_jpg_name;
	img_download.download = img_jpg_name; 
	var img_download_text = document.createTextNode(img_jpg_name);
	
	img_download.appendChild(img_download_text); 
	div_container.appendChild(img_download);
	
	var result = document.getElementById("result");
	result.appendChild(div_container);

}


function change_quality(){
	var quality = document.getElementById('quality').value;
	quality = parseInt(quality) / 100;
	document.getElementById('quality_value').innerHTML = quality.toFixed(2);
}

function change_size() {
	var scale = document.getElementById('scale').value / 100;
	document.getElementById('scale_value').innerHTML = scale.toFixed(2);
}