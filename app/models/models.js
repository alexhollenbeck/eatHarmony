/* Global */
var likeList = [];

var votes = {},
	liked = {};



$(window).load(function() {

	// Get all restaurants and initialize like count to 0
	$.getJSON('models/restaurants.json', function( data ) {
		$.each(data, function() {
		    likeList[($(this)[0].name)] = 0;
		    votes[$(this)[0].name] = Math.floor((Math.random() * 5) + 1);
		    liked[$(this)[0].name] = false;
		 });
		var rCard;
		for (var key in votes) {

		$rCard = $(".restaurant-card:contains('" + key + "')");
		if (votes[key] == 0) {
			$rCard.addClass('zero');
		}
		else if (votes[key] == 1) {
			$rCard.addClass('one');
		}
		else if (votes[key] == 2) {
			$rCard.addClass('two');
		}
		else if (votes[key] == 3) {
			$rCard.addClass('three');
		}
		else if (votes[key] == 4) {
			$rCard.addClass('four');
		}
		else if (votes[key] == 5) {
			$rCard.addClass('five');
		}
		else if (votes[key] == 6) {
			$rCard.addClass('six');
		}
	}
	});

	var rCard;
	console.log(votes);
	

	// Like a restaurant
	$('ul.restaurants').delegate("li div.restaurant-card", "click", function() {
		var rName = $(this).find('span.restaurant-name').html();
		likeList[rName] += 1;
		if (!liked[rName]) {
			votes[rName]++;
			liked[rName] = true;
		}
		else {
			votes[rName]--;
			liked[rName] = false;
		}
		console.log(votes);
		var rCard;
		for (var key in votes) {

		$rCard = $(".restaurant-card:contains('" + key + "')");
		$rCard.removeClass('zero one two three four five six');
		if (votes[key] == 0) {
			$rCard.addClass('zero');
		}
		else if (votes[key] == 1) {
			$rCard.addClass('one');
		}
		else if (votes[key] == 2) {
			$rCard.addClass('two');
		}
		else if (votes[key] == 3) {
			$rCard.addClass('three');
		}
		else if (votes[key] == 4) {
			$rCard.addClass('four');
		}
		else if (votes[key] == 5) {
			$rCard.addClass('five');
		}
		else if (votes[key] == 6) {
			$rCard.addClass('six');
		}
	}
	});

	// Get results
	$('button.submit').click(function() {

		var max = 0,
		winner;
		for (var key in votes) {
			if (votes[key] > max) {
				max = votes[key];
				winner = key;
			}
		}
		alert('Let\'s eat at ' + winner + '!');


		var tuples = [];
		for (var key in likeList) tuples.push([key, likeList[key]]);

		tuples.sort(function(a, b) {
		    a = a[1];
		    b = b[1];
		    return a > b ? -1 : (a < b ? 1 : 0);
		});

		for (var i = 0; i < tuples.length; i++) {
		    var key = tuples[i][0];
		    var value = tuples[i][1];

		    console.log(key + ': '+ value);
		}
	});

});