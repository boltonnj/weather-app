var lat, lon, url;

//retrieve lat and lon 

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		/*
		$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
		*/
		url = "https://api.wunderground.com/api/528bcd3d9d90c919/conditions/q/"+lat+","+lon+".json";
		
		$.getJSON(url,function(data){	
			console.log(data);
			//alert(data['current_observation']["icon_url"]);
			
			//show temp
			var temp = $("#temp").html(data['current_observation']['temp_f']+"&#8457");
			$("#tempToggle").on("click",function(){
				$("#temp").html(data['current_observation']['temp_c']+"&#8451");
				
			});
			
			//show icon
			var img = $('<img />',
             { id: 'icon',
               src: data['current_observation']['icon_url'], 
               width: 300
             })
							.appendTo($('#weatherIcon'));

});
	});
};

//print out JSON info