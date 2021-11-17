//D3 STUFF------------------------------------------------------

// parse the date / time
var parseDate = d3.timeParse("%d-%m-%Y"); //ParseDate
var parseTime = d3.timeParse("%H:%M"); //ParseTime

// set the ranges
var y = d3.scaleBand()
          .range([height,0])
var x = d3.scaleTime()
          .range([0, width])
          .nice();

//Parse the selected date 
selectedDate = parseDate(selectedDate);

//THE DRAWING FUNCTION
function drawGraphs() {

if (active === true) {
    d3.select("#titlebox")
    .text("Aan het werk")

    //clear graph
    d3.selectAll("#app > svg ").remove();

//canvas setup
var svg = d3.select("#app")
  .append("svg")
    .attr("width", 900 + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "boi")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")



       //CSV
       d3.csv("data/calendar.csv").then(function(data) {

        // format the data
        data.forEach(function(d) {
            d.Datum = parseDate(d.Datum);
            d.Start = parseTime(d.Start);
            d.Einde = parseTime(d.Einde);
            d.Alleen = +d.Alleen;
        })
    
        //---------------------------------First Block-----------------------------------//
        // Scale the range of the data in the domains
            y.domain(data.map(function(d) { return d.Locked; }));
            //Planned domain
            // x.domain(d3.extent( //Concat the Start and Einde to get the domain
            //     [].concat(data.map(function (d) {
            //         return (d.Start);
            //     }), data.map(function (d) {
            //         return (d.Einde);
            //     })
            // )));
    
            //Workhours domain
            x.domain([parseTime("8:00"), parseTime("12:00")])
            console.log(y.domain);
            //set height for this block
            y.range([height,0])
        //Create the Lines -- Use a var for easier nesting?
        var g =  svg //create a variable g to enter multiple children
            .append("g")
                .attr("class", "lines1")
            .selectAll(".line")
            .data(data)
                .enter()
                    .append("g")//Create groups for all
                        .attr("class", "event")//Add class to group
                    g.append("line")//Add the line
                        .attr("class", "line")//Set Class
                        .attr("y1", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y1
                        .attr("y2", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y2
                        .attr("x1", function(d) { 
                            return x(d.Start);
                        })//set x1
                        .attr("x2", function(d) { 
                            return x(d.Einde);
                        })//set x2
                        .attr("stroke-width",y.bandwidth() )
                    g.append("text")//Add the text
                        .text(function(d){ return d.Naam})//Fill in the text
                        .attr("class", "label")//Add the label
                        .attr("y", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y
                        .attr("x", function(d) { return x(d.Start)})//Set x
                .exit()  
        ;
})    
}

 // Load the data and do magic
//Check whats selected
if (planner === true) {
    //clear graph
    d3.selectAll("#app > svg").remove();
    d3.select("#titlebox")
        .text("Planner")


        //canvas setup
var svg = d3.select("#app")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("class", "boi")
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    //Split the canvas in 3
    
    //CSV
    d3.csv("data/calendar.csv").then(function(data) {

    // format the data
    data.forEach(function(d) {
        d.Datum = parseDate(d.Datum);
        d.Start = parseTime(d.Start);
        d.Einde = parseTime(d.Einde);
        d.Alleen = +d.Alleen;
    })

    //---------------------------------First Block-----------------------------------//
    // Scale the range of the data in the domains
        y.domain(data.map(function(d) { return d.Locked; }));
        //Planned domain
        // x.domain(d3.extent( //Concat the Start and Einde to get the domain
        //     [].concat(data.map(function (d) {
        //         return (d.Start);
        //     }), data.map(function (d) {
        //         return (d.Einde);
        //     })
        // )));

        //Workhours domain
        x.domain([parseTime("8:00"), parseTime("12:00")])
        
        //set height for this block
        y.range([height/9*3,height/9*2])
    //Create the Lines -- Use a var for easier nesting?
    var g =  svg //create a variable g to enter multiple children
        .append("g")
            .attr("class", "lines1")
        .selectAll(".line")
        .data(data)
            .enter()
                .append("g")//Create groups for all
                    .attr("class", "event")//Add class to group
                g.append("line")//Add the line
                    .attr("class", "line")//Set Class
                    .attr("y1", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y1
                    .attr("y2", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y2
                    .attr("x1", function(d) { 
                        return x(d.Start);
                    })//set x1
                    .attr("x2", function(d) { 
                        return x(d.Einde);
                    })//set x2
                    .attr("stroke-width",y.bandwidth() )
                g.append("text")//Add the text
                    .text(function(d){ return d.Naam})//Fill in the text
                    .attr("class", "label")//Add the label
                    .attr("y", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y
                    .attr("x", function(d) { return x(d.Start)})//Set x
            .exit()  
    ;

        // add the x Axis
        svg.append("g")
        .attr("transform", "translate(0," + height/9*3 + ")")
        .call(d3.axisBottom(x))
  //---------------------------------Second-----------------------------------//
    // Scale the range of the data in the domains
    y.domain(data.map(function(d) { return d.Locked; }));
    //Planned domain
    // x.domain(d3.extent( //Concat the Start and Einde to get the domain
    //     [].concat(data.map(function (d) {
    //         return (d.Start);
    //     }), data.map(function (d) {
    //         return (d.Einde);
    //     })
    // )));

    //Workhours domain
    x.domain([parseTime("12:00"), parseTime("16:00")])

        //set height for this block
        y.range([height/9*6,height/9*5])

//Create the Lines -- Use a var for easier nesting?
var g =  svg //create a variable g to enter multiple children
    .append("g")
        .attr("class", "lines2")
    .selectAll(".line")
    .data(data)
        .enter()
            .append("g")//Create groups for all
                .attr("class", "event")//Add class to group
            g.append("line")//Add the line
                .attr("class", "line")//Set Class
                .attr("y1", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y1
                .attr("y2", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y2
                .attr("x1", function(d) { 
                    return x(d.Start);
                })//set x1
                .attr("x2", function(d) { 
                    return x(d.Einde);
                })//set x2
                .attr("stroke-width",y.bandwidth() )
            g.append("text")//Add the text
                .text(function(d){ return d.Naam})//Fill in the text
                .attr("class", "label")//Add the label
                .attr("y", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y
                .attr("x", function(d) { return x(d.Start)})//Set x
        .exit()  
;

    // add the x Axis
    svg.append("g")
    .attr("transform", "translate(0," + height/9*6 + ")")
    .call(d3.axisBottom(x))


      //---------------------------------Third-----------------------------------//
    // Scale the range of the data in the domains
    y.domain(data.map(function(d) { return d.Locked; }));
    //Planned domain
    // x.domain(d3.extent( //Concat the Start and Einde to get the domain
    //     [].concat(data.map(function (d) {
    //         return (d.Start);
    //     }), data.map(function (d) {
    //         return (d.Einde);
    //     })
    // )));

    //Workhours domain
    x.domain([parseTime("16:00"), parseTime("20:00")])

            //set height for this block
            y.range([height/9*8,height/9*9])
    workhoursEnd =  function() { return x(workhoursEnd) }
//Create the Lines -- Use a var for easier nesting?
var g =  svg //create a variable g to enter multiple children
    .append("g")
        .attr("class", "lines3")
    .selectAll(".line")
    .data(data)
        .enter()
            .append("g")//Create groups for all
                .attr("class", "event")//Add class to group
            g.append("line")//Add the line
                .attr("class", "line")//Set Class
                .attr("y1", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y1
                .attr("y2", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y2
                .attr("x1", function(d) { 
                    return x(d.Start);
                })//set x1
                .attr("x2", function(d) { 
                    return x(d.Einde);
                })//set x2
                .attr("stroke-width",y.bandwidth() )
            g.append("text")//Add the text
                .text(function(d){ return d.Naam})//Fill in the text
                .attr("class", "label")//Add the label
                .attr("y", function(d) { return y(d.Locked)+ y.bandwidth()/2; })//Set y
                .attr("x", function(d) { return x(d.Start)})//Set x

        .exit()  

        svg.append("line") 
            .attr("class","endLine")
            .attr("x1","200")
            .attr("x2","300")
            .attr("y1",height/9*6)
            .attr("y2",height/9*9)
        
    // add the y Axis
    // svg.append("g")
    //     .call(d3.axisLeft(y));

    // add the x Axis
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

    });
}
}

//Run the draw function once
document.onload = drawGraphs()
