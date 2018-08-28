
		if (typeof jQuery == 'undefined') {
			document.write(unescape("%3Cscript src='/scripts/jquery.1.9.1.min.js' type='text/javascript'%3E%3C/script%3E"));
		}
	</script>

	<script src="/scripts/openweather.min.js"></script>

	<script>

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

