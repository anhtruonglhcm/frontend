am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  let chart_13 = ChartsAmcharts.initChartSample13("chart_13", 2);
  chart_13.data = [
    {
      category: "01/01/2020",
      first: 400,
      second: 550,
      third: 600,
    },
    {
      category: "02/01/2020",
      first: 300,
      second: 780,
      third: 0,
    },
    {
      category: "05/01/2020",
      first: 270,
      second: 400,
      third: 450,
    },
    {
      category: "06/01/2020",
      first: 270,
      second: 678,
      third: 450,
    },
    {
      category: "07/01/2020",
      first: 980,
      second: 678,
      third: 123,
    },
  ];
  chart_13.createSeries("first", "Sản phẩm 1");
  chart_13.createSeries("second", "Sản phẩm 2");
  chart_13.createSeries("third", "Sản phẩm 3");

  let chart_14 = ChartsAmcharts.initChartSample13("chart_14", 10);
  chart_14.data = [
    {
      category: "01/01/2020",
      first: 400,
      second: 550,
      third: 600,
    },
    {
      category: "02/01/2020",
      first: 300,
      second: 780,
      third: 0,
    },
    {
      category: "05/01/2020",
      first: 270,
      second: 400,
      third: 450,
    },
    {
      category: "06/01/2020",
      first: 270,
      second: 678,
      third: 450,
    },
    {
      category: "07/01/2020",
      first: 980,
      second: 678,
      third: 123,
    },
  ];
  chart_14.createSeries("first", "NPP 1");
  chart_14.createSeries("second", "NPP 2");
  chart_14.createSeries("third", "NPP 3");
}); // end am4core.ready()
