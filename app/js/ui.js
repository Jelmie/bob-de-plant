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
 
 //Create menu
 //Create menu-item
function createMenuItem(titel, id) {
    var menuList = d3.select("#navigation > ul") 
    .append("li")
        .attr("class", "menuItem")
        .append("a")
            .attr("href", "#")
            .text(titel)
            .attr("id", id);
}

//create menu container
var menuContainer = d3.select("#app")
    .append("nav")
        .attr("id", "navigation")
        .attr("role", "navigation");

var menu = d3.select("#navigation")
    .append("ul");
 
    
 //Create click events 
 document.onload = createMenuItem("Home", "homeButton"),createMenuItem("Happy Bob", "happyBob");

    
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

// Make bob smile 
document.getElementById("happyBob").onclick = function(){
    bobsEmotion = "smiling"
    
    plantDraw(1,bobsEmtion,"henk")

    
}





