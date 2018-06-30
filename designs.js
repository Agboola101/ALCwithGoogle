
var grid = document.getElementById('pixel_canvas');
var submission = document.getElementById('inputsubmit');

// Function to  make the grid based on use
function makeGrid() {
    //Create empty space for grid
    grid.innerHTML = '';
    //  values for rows and columns
    var gridrows = document.getElementById('input_height').value;
    var gridcols = document.getElementById('input_width').value;
    var tbody = document.createElement('tbody');
    //color change on click
    var color = document.getElementById("colorPicker");
    var addColor = function (cell) {
        // This will Put the selected color on click
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.value;
            $('td').click(function(){
        color = $('#colorPicker').val();
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }
        else {
            $(this).attr('style', 'background-color:' + color);
        };
    });ss
        });
    };
    
    for (var i = 0; i<gridrows; i++){
        var tr = document.createElement('tr');
        for (var j = 0; j < gridcols; j++){
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
            td.addEventListener('click', addColor(td));

        }
        tbody.appendChild(tr);
    }
    grid.appendChild(tbody);
}


//  preventing the page from reloading when Submit is clicked
submission.addEventListener('click', function(evt){
    evt.preventDefault();
    makeGrid();
});
