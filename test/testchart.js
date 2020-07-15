<canvas id = "mychart"> </canvas>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.0.0-alpha/Chart.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script>

d3.csv('https://raw.githubusercontent.com/samantaroy/justpredictgame/master/test/data.csv?token=AKVFU5OKHLOS6CYO6WK6ZUC7B5PGK')
.then(makeChart);

function makeChart(players

  var dayLabels = players.map(function(d){
    return d.day
  });

  var numbers = players.map(funtion(d){
    return d.count
  })



  let mychart = document.getElementById('mychart').getContext('2d');



  let massChart = new Chart(mychart, {
    type: 'bar',
    data:{
      labels:dayLabels,
      datasets:[{
        label: 'Number of Cases',
        data:numbers,

        backgroundColor : 'rgba(115, 0, 192, 0.6)',
        borderWidth:1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'

      }]
    },
    options:{
      title:{
        display :true,
        text: 'Template Game Chart',
        fontSize : 25



      },
      legend:{
        display:false
      }
    }
  });
}

</script>
