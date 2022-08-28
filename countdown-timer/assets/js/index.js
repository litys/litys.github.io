let timers = [
	{
		title: 'testowy timer 1',
		time: "Jan 5, 2024 15:37:25"
	},
	{
		title: 'testowy timer 2',
		time: "2023-01-05T15:37"
	}
]

const setTimer = () => {
	timers.forEach( (timer, index) => {
		
		let newTimerTitle = document.createElement('h2');
		newTimerTitle.innerHTML = (index + 1) + '. ' + timer.title;
		document.getElementById('timers').appendChild(newTimerTitle);

		let newTimerDiv = document.createElement('div');
		const newTimerID = "timer-" + index;
		newTimerDiv.id = newTimerID;
		document.getElementById('timers').appendChild(newTimerDiv);
		
		const timerTime = new Date(timer.time).getTime();

		// Set Timer
		setInterval( ( time = timerTime, timerID = newTimerID ) => {
			var now = new Date().getTime();
		
			var distance = time - now;
		
			const days = Math.floor(distance / (1000 * 60 * 60 * 24)),
						hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
						minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
						seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
			
			const returnTimeFont = ( time ) => { return '<span class="time">' + ( time < 10 ? '0' : '') + time +  '</span>' }

			document.getElementById(newTimerID).innerHTML = 
				returnTimeFont(days) + "DAYS " + 
				returnTimeFont(hours) + "HOURS "+ 
				returnTimeFont(minutes) + "MINUTES " + 
				returnTimeFont(seconds) + "SECONDS ";
		}, 1000);
		
	});
}


const deleteEvent = () => {
	const deleteID = document.getElementById( 'delete-id' ).value;
	if ( deleteID > 1 && deleteID < 1000 ) {
		timers.splice(deleteID - 1, 1)
		localStorage.setItem('timers', JSON.stringify(timers));
		window.location.reload(true);
	} else {
		alert('Plese enter valid ID')
	}
}

const setNewEvent = () => {
	let newEvent = {
		title: document.getElementById('event-name').value,
		time: document.getElementById('event-time').value
	}
	if ( newEvent.time && newEvent.title ) {
		timers.push( newEvent );
		localStorage.setItem('timers', JSON.stringify(timers));
		window.location.reload(true);
	} else {
		alert('Please set event title, date and time');
	}
}

document.getElementById('event-time').value = new Date().getTime();
let userTimers = localStorage.getItem('timers');
if ( userTimers ) {
	timers = JSON.parse(userTimers);
}

setTimer();

const openPanel = () => {
	const panel = document.getElementsByClassName('panel')[0];

	if ( panel.classList.contains( 'panel--open' ) ) {
		panel.classList.remove('panel--open')
	} else {
		panel.classList.add('panel--open')
	}
}