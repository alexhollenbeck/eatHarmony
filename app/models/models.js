/* Global */
var likeList = [];



$(window).load(function() {

	// Get all restaurants and initialize like count to 0
	$.getJSON('restaurants/restaurants.json', function( data ) {
		$.each(data, function() {
		    likeList[($(this)[0].name)] = 0;
		 });
		console.log(likeList);
	});

	// Like a restaurant
	$('ul.restaurants').delegate("li div.restaurant-card", "click", function() {
		var rName = $(this).children('p:first-child').html();
		likeList[rName] += 1;
		console.log(likeList[rName]);
	});

	// Get results
	$('button.submit').click(function() {
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