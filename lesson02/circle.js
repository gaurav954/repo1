var chart = AmCharts.makeChart("chartdiv", {
    "type": "xy",
    "theme": "dark",
    "pathToImages": "/wp-content/themes/amcharts/static/amcharts/images/",
    "dataProvider": valueVariable(),
        "valueAxes": [{
            "title": "X Axis",
            "position": "bottom",
            "id": "x1"
        }, {
            "position": "left",
            "id": "y1",
            "title": "Y Axis"
}],
            "graphs": [{
                "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>x error:<b>[[errorX]]</b><br>y error:<b>[[errorY]]</b>",
                "bullet": "xError",
                "bulletAxis": "x1",
                "errorField": "errorX",
                "lineAlpha": 0,
                "xField": "x",
                "yField": "y",
                "fillAlphas": 0               
            }, {
                "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>x error:<b>[[errorX]]</b><br>y error:<b>[[errorY]]</b>",
                "bullet": "yError",
                "bulletAxis": "y1",
                "errorField": "errorY",
                "lineAlpha": 0,
                "xField": "x",
                "yField": "y",
                "fillAlphas": 0                
}]
});



function valueVariable() {
    var r = 2;
    var arrPoints = [];
    for( var a=0; a<=(Math.PI/2); a += .01) {
        x = r*(Math.cos(a));
        y = r*(Math.sin(a));
        var point1 = { "x": x, "y": y, "errorX": 0, "errorY": 0 };
        var point2 = { "x": -x, "y": y, "errorX": 0, "errorY": 0 };
        var point3 = { "x": -x, "y": -y, "errorX": 0, "errorY": 0 };
        var point4 = { "x": x, "y": -y, "errorX": 0, "errorY": 0 };
        arrPoints.push(point1, point2, point3, point4);
    }
    return arrPoints;
 }