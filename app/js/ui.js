//create Title card
d3.select("#app")
    .append("h2")
    .attr("class","boldtext")
    .attr("id","titlebox")
    .text("Ahoy")


//create popup block
var popup = d3.select("#app")
    .append("div")
        .attr("id", "popupContainer")
 
//change the conatiner to the thing just made

d3.select("#popupContainer")
    .append("button")
        .attr("class","clicky")
        .attr("id", "switcher")
        .text("switch")

    
//Click events
document.getElementById("switcher").onclick = function(){
    planner = !planner;
    active = !active;
    drawGraphs();
}