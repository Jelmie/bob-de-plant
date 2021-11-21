 //Create menu
  //Create menu-item
function createMenuCategory(titel, id, parent) {
    var menuList = d3.select("#menuContainer > #"+parent) 
    .append("li")
    .append("ul")
        .attr("class", "menuItem")
        .attr("id", id)
        .text(titel)            
}

 //Create menu-item
function createMenuItem(titel, id, parent) {
    var menuList = d3.select("#"+parent) 
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
        .attr("id", "menuContainer")
        .attr("role", "navigation");

//create menu header   
menuContainer.append("h4")
            .attr("class", "debug-menu")
            .text("Debug menu")

//create menu header   
menuContainer.append("ul")
            .attr("id", "menuMain")

// menu.append(ul)

 //Create menu items
 document.onload =  createMenuItem("Home", "homeButton", "menuMain"),   
                    createMenuItem("Planner","planner", "menuMain"),
                    createMenuItem("Active","active", "menuMain"),
                    createMenuCategory("SelectDate", "selectDate", "menuMain"),
                    createMenuItem("15-11-2021","15-11-2021", "selectDate"),
                    createMenuItem("16-11-2021","16-11-2021", "selectDate"),
                    createMenuCategory("BobType", "bobType", "menuMain"),
                    createMenuItem("B1","b1", "bobType"),
                    createMenuItem("B2","b2", "bobType"),
                    createMenuItem("B3","b3", "bobType"),
                    createMenuItem("B4","b4", "bobType"),
                    createMenuItem("B5","b5", "bobType"),
                    createMenuItem("B6","b6", "bobType"),
                    createMenuCategory("BobEmotion", "bobEmotion", "menuMain"),
                    createMenuItem("Angry", "angryBob", "bobEmotion"),
                    createMenuItem("Confused", "confusedBob", "bobEmotion"),
                    createMenuItem("Content", "contentBob", "bobEmotion"),
                    createMenuItem("Happy", "happyBob", "bobEmotion"),
                    createMenuItem("Joy", "joyBob", "bobEmotion"),
                    createMenuItem("Pleased", "pleasedBob", "bobEmotion"),
                    createMenuItem("Purring", "purringBob", "bobEmotion"),
                    createMenuItem("Sad", "sadBob", "bobEmotion"),
                    createMenuItem("Sceptical", "scepticalBob", "bobEmotion"),
                    createMenuItem("Smiling", "smilingBob", "bobEmotion"),
                    createMenuItem("Snoozing", "snoozingBob", "bobEmotion"),
                    createMenuItem("Super pleased", "super-pleasedBob", "bobEmotion"),
                    createMenuItem("Surprised", "surprisedBob", "bobEmotion"),
                    createMenuItem("Very surprised", "very-surprisedBob", "bobEmotion"),                    
                    createMenuItem("Winking", "winkingBob", "bobEmotion"),

                    
//change the conatiner to the thing just made

// d3.select("#popupContainer")

//Create click events
//Bobs emotion clickers
document.getElementById("angryBob").onclick= function() {
    bobsEmotion = "angry"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("confusedBob").onclick= function() {
    bobsEmotion = "confused"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("contentBob").onclick= function() {
    bobsEmotion = "content"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("happyBob").onclick= function() {
    bobsEmotion = "happy"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("joyBob").onclick= function() {
    bobsEmotion = "joy"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("pleasedBob").onclick= function() {
    bobsEmotion = "pleased"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("purringBob").onclick= function() {
    bobsEmotion = "purring"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("sadBob").onclick= function() {
    bobsEmotion = "sad"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("scepticalBob").onclick= function() {
    bobsEmotion = "sceptical"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("smilingBob").onclick= function() {
    bobsEmotion = "smiling"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("snoozingBob").onclick= function() {
    bobsEmotion = "snoozing"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("super-pleasedBob").onclick= function() {
    bobsEmotion = "super-pleased"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("surprisedBob").onclick= function() {
    bobsEmotion = "surprised"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("very-surprisedBob").onclick= function() {
    bobsEmotion = "very-surprised"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

document.getElementById("winkingBob").onclick= function() {
    bobsEmotion = "winking"
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}

//UI switcher
document.getElementById("planner").onclick= function() {
    drawPlanner(selectedDate)
}

document.getElementById("active").onclick= function() {
    drawActive(selectedDate)
} 

//
document.getElementById("b1").onclick= function() {
    bobType = 1
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}
document.getElementById("b2").onclick= function() {
    bobType = 2
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}
document.getElementById("b3").onclick= function() {
    bobType = 3
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}
document.getElementById("b4").onclick= function() {
    bobType = 4
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}
document.getElementById("b5").onclick= function() {
    bobType = 5
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}
document.getElementById("b6").onclick= function() {
    bobType = 6
    plantDraw(bobType,bobsEmotion,"henk",bobSize)
}
document.getElementById("15-11-2021").onclick= function() {
    selectedDate = "15-11-2021";
}

document.getElementById("16-11-2021").onclick= function() {
    selectedDate = "16-11-2021";
}


//create Title card
d3.select("#app")
    .append("h2")
    .attr("class","boldtext")
    .attr("id","titlebox")
    .text("Ahoy")

 
