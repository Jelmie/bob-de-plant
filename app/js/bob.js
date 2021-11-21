document.onLoad = d3.select("#app").append("div").attr("id","test");

//plantDraw function
function plantDraw(pNum, emote, name, size)   { 
    console.log(bobsEmotion)
    d3.selectAll("#app > #test > *").remove();

    pContainer = d3.select("#test")
    pContainer.append("div")
        .attr("id",name)

    pContainer.attr("class", "pContainer pType"+pNum + " p"+size)
        
    pContainer.append("img")
    .attr("src", "gfx/plants/plant-"+ pNum +".svg")
    .attr("class", "plantElement pPlant")

    pContainer.append("img")
    .attr("src", "gfx/pots/pot-"+ pNum +".svg")
    .attr("class", "plantElement pPot")

    pContainer.append("img")
    .attr("src", "gfx/emotes/"+ emote +".svg")
    .attr("class", "plantElement pEmote")
}   

function bobTalk() {
    d3.select("#test")
    .append("div")
    .attr("class", "speech-bubble")
    .text("Hi!")
}

document.onload = plantDraw(bobType,bobsEmotion,"henk",bobSize)
document.onload = bobTalk()

// //Bob actions
// bobWantsAttention function() {
    // .text("Stop eens met werken!")
// }