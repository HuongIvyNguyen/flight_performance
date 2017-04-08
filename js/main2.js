    function draw2(data){
        
        /*D3.js setup code */

        var svg = d3.select("body")
        .append("svg").attr("width", width).attr("height", height)
        .append('g').attr('class','chart2')

        /*Dimple.js setup code*/

        var myChart = new dimple.chart(svg, data);
        myChart.defaultColors = [new dimple.color("#06303e")];
        var x = myChart.addCategoryAxis("x", "carrier_name");
        x.fontSize = fontsize;
        x.title = 'Carrier Name';

        var y = myChart.addMeasureAxis("y", "ave_ontime");
        y.title = 'Average percentage of on-time flights';
        y.tickFormat = '%';
        y.fontSize = fontsize;
        var series = myChart.addSeries(null, dimple.plot.bar);
        series.addEventHandler("mouseover", onHover);
        series.addEventHandler("mouseleave", onLeave);

        var popup; 

        function onHover(e) {
            console.log(e);
            var cx = parseFloat(e.selectedShape.attr("x"));
            var cy = parseFloat(e.selectedShape.attr("y"));

            var width = 100; 
            var height = 30;

            var x = (cx + width + 10 < svg.attr("width") ?
                cx + 10:
                cx - width-20);

            var y = (cy - height/2 < 0 ?
                15 :
                cy - height/2);
            
            popup = svg.append('g')
            
            popup.append('rect')
            .attr("x", x+75)
            .attr("y", y-2)
            .attr("width", width)
            .attr("height", height)
            .attr("rx", 5)
            .attr("ry", 5)
            .style("fill", "#6d6b6b")

            popup.append("text")
            .append("tspan")
            .attr("x", x+85)
            .attr("y", y+20)
            .text("On-time: " + Math.floor(e.yValue*100)+"%")
            .style("font-size", "14px")
    
            d3.select(e.selectedShape[0][0])
            .style("stroke-width", "5px")
            .style("fill", "#18447f")
            .style("stroke", '#211f1f')
        }

        function onLeave(e) {
            if (popup != null) {
                popup.remove();
            }
            d3.select(e.selectedShape[0][0])
            .style("stroke-width", "0px")  
            .style("stroke", '#211f1f')
            .style("fill", "#06303e")  
        }

        series.barGap = 0.5
        myChart.draw();   

        svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", margin/2)
        .attr("text-anchor", "middle")  
        .style("font-size", titlefont) 
        .style("text-decoration", "bold")  
        .text("Top Five Airlines with the Highest Average Percentage of On-Time Flights, 2005-2015");   

    }

    d3.csv("data/top_five_on_time.csv", draw2)