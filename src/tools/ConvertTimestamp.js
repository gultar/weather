//Modified to only extract hours in 24h format to adjust style of app

export function convertTimestamp(timestamp, removeMins=false) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;



// 20:35
  if(removeMins)
	 time = h;
  else
    time = h + ':' + min;

	return time;
}
