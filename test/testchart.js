<canvas id = "mychart"> </canvas>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.0.0-alpha/Chart.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script>

	//requesting data using d3
	d3.csv('https://raw.githubusercontent.com/samantaroy/justpredictgame/master/test/data.csv')
	.then(makeChart);

	function makeChart(players){
	var dayLabels = players.map(function(d) {return d.Day});

  var numCases = players.map(function(d) {return d.NumCases});

		let mychart = document.getElementById('mychart').getContext('2d');



		let massChart = new Chart(mychart, {
			type: 'bar',
			data:{
				labels: dayLabels,
				//dayLabels,
				//['A', 'B', 'C', 'D'],
				datasets:[{
					label: 'Number of Cases',
					data: numCases,
					//numCases,
					//[ 12,13,14,15,16],

					backgroundColor : 'rgba(228,223, 150, 0.6)',
					borderWidth:1,
					borderColor: '#777',
					hoverBorderWidth: 3,
					hoverBorderColor: '#000'

				}]
			},
			options:{
				title:{
					display :true,
					text: 'New COVID Cases',
					fontSize : 25



				},
				legend:{
					display:false
				}
			}
		});

}
</script>
