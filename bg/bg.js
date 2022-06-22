google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  /*TAPESTRY*/
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Alek Wins', 20],
    ['Christina Wins (Oof)', 10]
  ]);

  var options = {
    title: 'Tapestry',
    is3d: true
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

  chart.draw(data, options);


  /*7 WONDERS DUEL*/
  var dataTable = google.visualization.arrayToDataTable([
    ['Year', 'Alek', 'Christina'],
    ['Total Wins',  20,    15],
    ['Point Wins',  5,   13],
    ['Research Wins',  8, 1],
    ['War Wins',  7,  1]
  ]);

  options = {
    title: '7 Wonders: Duel',
  };

  chart = new google.visualization.ColumnChart(document.getElementById('barchart1'));
  chart.draw(dataTable, options);

  /*GWT*/
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Alek Wins', 10],
    ['Christina Wins', 8]
  ]);

  var options = {
    title: 'Great Western Trail'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

  chart.draw(data, options);
  
}