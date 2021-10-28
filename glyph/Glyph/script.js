function generate(){
	var canvas = document.getElementById('canvas');
	
	var context = canvas.getContext("2d");

	var width = canvas.width;
	var height = canvas.height;

	// Clear canvas
	context.clearRect(0, 0, width, height);

	// Number of lines (max 5)
	var number_of_lines =  Math.floor(Math.random() * 5) + 1;

	// Draw lines
	for (let i = 0 ; i < number_of_lines ; i++ ) {
		draw_line();
	}

	function draw_line(){
		
		context.beginPath();
		let start_position = [
			Math.floor(Math.random() * width) + 1,
			Math.floor(Math.random() * height) + 1,
		]
		context.moveTo(
			start_position[0], 
			start_position[1]
		);
		let curve_position = [
			Math.floor(Math.random() * width) + 1,
			Math.floor(Math.random() * height) + 1,
			Math.floor(Math.random() * width) + 1,
			Math.floor(Math.random() * height) + 1,
		]
		context.quadraticCurveTo(
			curve_position[0],
			curve_position[1],
			curve_position[2],
			curve_position[3]
		);
		context.strokeStyle = "#777";
		context.stroke();

	}

}