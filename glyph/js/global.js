//============= Draw glyph
function runScript(){
	let timeStart = Date.now(),
			timeEnd = undefined;
	// Get options
	const how_many_glyphs = document.getElementById('option_glyphs').value,
				curve_probability = document.getElementById('option_curve').value;

	// clear sandbox
	document.getElementById('content').innerHTML = '';

	// Glyph options
	const width = document.getElementById('option_size_width').value,
				height = document.getElementById('option_size_height').value;

	// Draw Glyphs
	for( let i=0; i<how_many_glyphs; i++ ){
		
		var canvas = document.createElement('canvas');
		
		canvas.id = "glyph_"+i;
		canvas.width = width;
		canvas.height = height;

		var ctx = canvas.getContext("2d");

		// How much lines in one glyph
		if ( document.getElementById('random_lines').checked )
			var how_many_lines = randomNumber(5);
		else 
			var how_many_lines = document.getElementById('option_lines').value;

		for ( let x=0; x<how_many_lines; x++ ){

			// Check if draw line or curve
			ctx.beginPath();
			if ( getProbabilityResult( curve_probability ) ) {
				ctx.moveTo( randomNumber(width), randomNumber(height) );
				ctx.quadraticCurveTo(
					randomNumber(width),
					randomNumber(height),
					randomNumber(width),
					randomNumber(height)
				);
			}
			else {
				ctx.moveTo( randomNumber(width), randomNumber(height) );
				ctx.lineTo( randomNumber(width), randomNumber(height) );
			}
			ctx.strokeStyle = document.getElementById('option_color').value;
			ctx.stroke();

		}

		var body = document.getElementById("content");
		body.appendChild(canvas);

	}

	timeEnd = Date.now();

	let generatedIn = (timeEnd-timeStart)/1000 != 0 ? (timeEnd-timeStart)/1000 + ' s.' : '< 0.001 s.';

	document.getElementById('time').innerHTML = 'Generated in: ' + generatedIn;
}

function randomNumber(max_number){
	return Math.floor(Math.random() * max_number) + 1;
}

function getProbabilityResult(number){
	if ( number >= Math.floor(Math.random() * 100) + 1 )
		return true;
	else
		return false;
}

function update_range_curve(){
	document.getElementById('option_curve_show').innerHTML = document.getElementById('option_curve').value + '%';
}
function update_range_line(){
	document.getElementById('option_lines_show').innerHTML = document.getElementById('option_lines').value;
}
function update_random_lines(){
	if( document.getElementById('random_lines').checked ){
		document.getElementById('option_lines_show').innerHTML = '1-5';
		document.getElementById('option_lines').disabled = true;
	}
	else {
		update_range_line();
		document.getElementById('option_lines').disabled = false;
	}
}

function init(){
	update_range_curve();
	update_range_line();
	update_random_lines();
}

init();