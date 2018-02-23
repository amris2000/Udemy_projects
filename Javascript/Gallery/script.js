
const pictureLocation = "picture/";

// Assuming this comes from a database
function getImages() {
  return ["img1.png", "img2.png", "img3.png", "img4.png"];
}

function printImages() {
  var text = getImages();
  var myDiv = document.getElementById("pictureList");
  var printThis = "";
  console.log(text[0]);

  // Print
  for (var i = 0; i < text.length; i++) {
    printThis += "<br>" + text[i];
  }

  myDiv.innerHTML = printThis;
}

function WebPageLoad() {
  console.log("Web page loaded ...");
  picSel = new PictureSelector(0);
  choosePicture();
  printButtons();
}

class PictureSelector {
  constructor(defaultImageIndex) {
    this.currentPicture = defaultImageIndex;
    this.pictureCount = getImages().length - 1;
    console.log("PictureSelector object created ...");
    console.log("### currentPicture = " + this.currentPicture);
    console.log("### pictureCount = " + this.pictureCount);
  }

  chooseNextPicture() {
    if (this.currentPicture == this.pictureCount) {
      this.currentPicture = 0;
    } else {
      this.currentPicture += 1;
    }
    this.updatePicture();
  }

  updatePicture() {
    // console.log("currentPicture is now " + this.currentPicture)
    choosePicture();
  }

  choosePreviousPicture() {
    if (this.currentPicture == 0) {
      this.currentPicture = this.pictureCount;
    } else {
      this.currentPicture -= 1;
    }
    this.updatePicture();
  }
}

function printButtons() {
  count = getImages().length;
  out = "<h2>";
  for (var i=0; i<count; i++) {
    out += '<span onClick="choosePictureByNumber(' + i + ')" id="circles"> &#9679 </span>';
    console.log(out);
  }
  out += "</h2>"
  document.getElementById("galleryButtons").innerHTML = out;
}

function buttonTest() {
  var myDiv = document.getElementById("test");
  var myOtherDiv = document.getElementById("newTest");
  myDiv.innerHTML = "New text..."
  var x = document.getElementById("myInput").value;
  myOtherDiv.innerHTML = x;
}

function choosePicture() {
    imageId = picSel.currentPicture;
    pictureName = getImages()[imageId];
    // console.log("Image ID: " + imageId);
    document.getElementById('textBelowPicture').innerHTML = getImages()[imageId];
    document.getElementById('picture').src = "pictures/" + pictureName;
}

function choosePictureByNumber(number) {
    picSel.currentPicture = number;
    choosePicture();
}
