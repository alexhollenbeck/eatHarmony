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

	$('ul.restaurants').delegate("li div.restaurant-card", "click", function() {
		var rName = $(this).children('p:first-child').html();
		likeList[rName] += 1;
		console.log(likeList[rName]);
	});

});