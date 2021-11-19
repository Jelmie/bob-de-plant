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
 document.onload =  createMenuItem("Home", "homeButton"),
                    createMenuItem("Happy Bob", "happyBob"),
                    createMenuItem("Sad Bob", "sadBob"),
                    createMenuItem("Planner","planner"),
                    createMenuItem("Active","active"),
                    createMenuItem("B1","b1"),
                    createMenuItem("B2","b2"),
                    createMenuItem("B3","b3"),
                    createMenuItem("B4","b4"),
                    createMenuItem("B5","b5"),
                    createMenuItem("B6","b6")
                    



//change the conatiner to the thing just made

d3.select("#popupContainer")

//Click event

// Make bob smile 

document.getElementById("happyBob").onclick= function() {
    bobsEmotion = "purring"
    plantDraw(4,bobsEmotion,"henk",bobSize)
}

document.getElementById("sadBob").onclick= function() {
    bobsEmotion = "sad"
    plantDraw(4,bobsEmotion,"henk",bobSize)
}

document.getElementById("planner").onclick= function() {
    drawPlanner();
}

document.getElementById("active").onclick= function() {
    drawActive();
}

document.getElementById("b1").onclick= function() {
    plantDraw(1,bobsEmotion,"henk",bobSize)
}
document.getElementById("b2").onclick= function() {
    plantDraw(2,bobsEmotion,"henk",bobSize)
}
document.getElementById("b3").onclick= function() {
    plantDraw(3,bobsEmotion,"henk",bobSize)
}
document.getElementById("b4").onclick= function() {
    plantDraw(4,bobsEmotion,"henk",bobSize)
}
document.getElementById("b5").onclick= function() {
    plantDraw(5,bobsEmotion,"henk",bobSize)
}
document.getElementById("b6").onclick= function() {
    plantDraw(6,bobsEmotion,"henk",bobSize)
}

    





