// Set the graph address and initialize the graph.
Plotly.plot('chart',[{
    y:[graphData],
    type:'line'
}]);

// Is a variable used to tell the boundary of the graph
var cnt = 0;

// Every 15ms will push data in real-time graphs.
setInterval(function(){
    Plotly.extendTraces('chart',{ y:[[graphData]]}, [0]);
    cnt++;

    // The display scope is at 666 interval (666 * 15ms = 10s) ,indicates that the display is at 10 seconds.
    if(cnt > 666) {
        Plotly.relayout('chart',{
            xaxis: {
                range: [cnt-666,cnt]
            }
        });
    }
},15);
