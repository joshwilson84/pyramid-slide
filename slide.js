pyrHeight="";
brickType="";

heightElem = function(height){
  pyrHeight = height;
  showRange();
  drawPyramid();


}


function showRange(){
  var rangeValue = pyrHeight;
  document.getElementById("range-height").innerHTML = rangeValue;

}

brickSymbol = function(symbol){
  brickType = symbol;
  drawPyramid();
}


function drawPyramid(){
  document.getElementById("pyramid").innerHTML = "";
  height = pyrHeight;
  if (brickType == ''){
    symbol = '#';
    } else{
    symbol = brickType;
    }


  for (var row = 0; row < height; row++) {


    var numBricks = row + 2;
    var numSpaces = height - row - 1;
    var rowStr = "";
    for (var i = 0; i < numSpaces; i++) {
      var char = "&nbsp";
      rowStr += char;
      }
    for (var i = 0; i < numBricks; i++) {
      rowStr += symbol;
    }


    textElem = document.createTextNode(rowStr);


    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;


    document.getElementById("pyramid").appendChild(rowElem);
    }
}
