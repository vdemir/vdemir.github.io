
		$(function() {

			$('.weather-temperature').openWeather({
				lang: 'tr',
				key: '21ff7887fe67c2f13557f973192685c1',
				city: 'Seferihisar',
				descriptionTarget: '.weather-description',
				windSpeedTarget: '.weather-wind-speed',
				minTemperatureTarget: '.weather-min-temperature',
				maxTemperatureTarget: '.weather-max-temperature',
				humidityTarget: '.weather-humidity',
				sunriseTarget: '.weather-sunrise',
				sunsetTarget: '.weather-sunset',
				placeTarget: '.weather-place',
				iconTarget: '.weather-icon',
				customIcons: '/images/icons/weather/',
				success: function(data) {
					// show weather
					$('.weather-wrapper').show();
					console.log(data);
				},
				error: function(data) {
					console.log(data.error);
					$('.weather-wrapper').remove();
				}
			});

		});

