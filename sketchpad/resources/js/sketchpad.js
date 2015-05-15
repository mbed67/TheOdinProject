/*Ask the user how big the grid should be*/
var drawGrid = function() {
    var cells;
    var intRegex = /^\d+$/;
    var userAnswer = prompt("How many cells wide do you want the grid to be?");

    if (intRegex.test(userAnswer)) {
            cells = userAnswer;
    } else {
        alert("Please enter an integer");
        window.location.reload();
    }

    var cellSize = Math.round((960 - cells - 1) / cells) + "px";

    var newGrid = createGrid(cells);

    $('.container').html(newGrid);
    $('.cell').css({"height": cellSize, "width": cellSize});

};

/*Create the html for the total grid*/
var createGrid = function(height){
    var grid = "";
    var row = createRow(height);

    for (var i = 1; i <= height; i++) {
        grid += row;
    }

    return grid;
};

/*Create one row of the grid*/
var createRow = function(width){
    var row = "<div class=\"row\">";

    for (var j = 1; j <= width; j++) {

        row = row + "<div class=\"cell\"></div>";
    }

    row = row + "</div>";

    return row;
};


/*User controls*/

var random = function() {
    drawGrid();

    $('.cell').mouseenter(function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color", "#" + randomColor);
    });

    $(".cell").mouseleave(function() {
        $(this).animate({backgroundColor: '#B0AFB3'}, 'slow');
    }); 
};

var darken = function() {
    drawGrid();

    $('.cell').css("background-color", "rgb(250, 250, 250)");

    $('.cell').mouseenter(function() {

    var bgcolor = $(this).css('background-color');

    if ( bgcolor != "rgb(0, 0, 0)")
        {
            var rgb = bgcolor.match(/\d+/g);
    
            rgb[0] = rgb[0] - 25;
            rgb[1] = rgb[1] - 25;
            rgb[2] = rgb[2] - 25;

            var color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";

        $(this).css("background-color", color);
        }
    });
};
