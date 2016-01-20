//------------------------------------------------------------------------------------
//								GOOGLE MAP SETTINGS
//------------------------------------------------------------------------------------		


$(document).ready(function(){	
	"use strict";
	
	var map;		
	var MY_MAPTYPE_ID = 'custom_style';
				
	function initialize() {
				
		var featureOpts = [
			{
				stylers: [
					{ saturation: -20 },
					{ lightness: 40 },
					{ visibility: 'simplified' },
					{ gamma: 0.8 },
					{ weight: 0.4 }
				]
			},
			{
				elementType: 'labels',
				stylers: [
					{ visibility: 'on' }
				]
			},
			{
				featureType: 'water',
				stylers: [
					{ color: '#dee8ff' }
				]
			}
		];
				
		var mapOptions = {
			zoom: 14,
			scrollwheel: false,
			draggable: false,
			panControl: false,
			mapTypeControl: false,
  			streetViewControl: false,
			center: new google.maps.LatLng(33.978, -118.1),
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};
				
		map = new google.maps.Map(document.getElementById('canvas-map'),mapOptions);
		
		var image = new google.maps.MarkerImage("images/point.png",
        // This marker is 20 pixels wide by 32 pixels tall.
        null, 
        // The origin for this image is 0,0.
        new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 0,32.
        new google.maps.Point(25,60)
    );
		
		var myLatLng = new google.maps.LatLng(33.978, -118.1);
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
		});
		var styledMapOptions = {
			name: 'Custom Style'
		};
				
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
				
		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	}
				
	google.maps.event.addDomListener(window, 'load', initialize);

});
	