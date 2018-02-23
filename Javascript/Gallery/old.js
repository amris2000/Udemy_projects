function readTextFileLocal(file) {
  file = "file:///C:/Users/Frede/Desktop/Udemy/Javascript/Gallery/files/" + file;
  var rawFile = new XMLHttpRequst();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function() {
    if (rawfile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}

function readTextFileLocal2(file) {
  console.log("readTextFileLocal2");
  var fs = require("fs");
  var text = fs.readFileSync("./" + file);
  return textByLine = text.split("\n");
}
