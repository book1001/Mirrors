window.changeColour = function(value)
  {
    // var colors = new Array();
    //     colors[0] = "r";
    //     colors[1] = "y";
    //     colors[2] = "b";
    //     colors[3] = "p";
    //
    // var defaultValue = colors[Math.floor(Math.random()*4)];
    // var color = document.body.style.backgroundColor;
    var color = document.getElementById("canvas-bg").style.backgroundColor;
    var titleDisplay = document.getElementById("font-title").style.display;

    // switch(value)
    switch(value)
    {
      case 'r':
          color = "#ff0000";
      break;

      case 'y':
          color = "#ffff00";
      break;

      case 'b':
          // color = "#0000ff";
          color = "#ffffff";
      break;

      case 'p':
          // color = "#ff00ff";
          color = "#000000";
      break;

      case 't':
          titleDisplay = "inline";
      break;

      case 'th':
          titleDisplay = "none";
      break;
    }
    // document.body.style.backgroundColor = color;
    document.getElementById("canvas-bg").style.backgroundColor = color;
    document.getElementById("font-title").style.display = titleDisplay;
  }
