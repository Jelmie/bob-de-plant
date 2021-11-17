
//draw the plantboid




//plantDraw function
function plantDraw(pNum, emote, name)   {   
    pContainer = d3.select("#app")
    .append("div")
        .attr("id",name)

    pContainer.attr("class", "pContainer pType"+pNum)
        
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

document.onload = plantDraw(1,"purring","henk")
