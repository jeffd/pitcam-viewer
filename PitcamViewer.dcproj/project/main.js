
var urlRoot ="http://pitcamproxy.appspot.com/";

function load()
{
  dashcode.setupParts();
  init();
}

function init()
{
  if(pitcamStack()) {
    gotoNew();
    setInterval("update()",10000);
 }
}

function pitcamStack()
{
  return document.getElementById('pitcams').object;
}

function setNewImage(imageURL, canvasElement)
{
  var ctx = document.getElementById(canvasElement).getContext('2d');
//canvasElement.getContext('2d');
  var img = new Image();
  img.onload = function() {
    var h = ctx.canvas.height;
    var w = ctx.canvas.width;
    ctx.drawImage(img,0,0,w,h);
  };
  img.src = imageURL;
}

function gotoNew(event)
{
  pitcamStack().setCurrentView('new');
  update();
}

function gotoOld(event)
{
  pitcamStack().setCurrentView('old');
  update();
}

function flipToFront(event)
{
  var views = document.getElementById('sides');
  var front = document.getElementById('front');
  if (views && views.object && front) {
    views.object.setCurrentView(front, true);
  }
}

function flipToBack(event)
{
  var views = document.getElementById('sides');
  var settings = document.getElementById('back');
  if (views && views.object && settings) {
      views.object.setCurrentView(settings);
    }
}

// Takes the camera's name
// Returns a new image url
function nextImage(camera) {
  var file = urlRoot + camera +'.jpeg';
  var tmpdate = new Date();
  tmp = '?nocache=' + tmpdate.getTime();
  return (file+tmp);
}

function update() {
  var currentCameraView = pitcamStack().getCurrentView();
  var currentImageName = currentCameraView.id;
  // Last min hack
  var currentCameraCanvas = currentCameraView.id + "Cam";

  var latestImage = nextImage(currentImageName);
  setNewImage(latestImage, currentCameraCanvas);
}

function goToJeffD(event)
{
  window.location = "http://jeffd.org";
}

function goToMaps(event)
{
  window.location = "http://maps.google.com/maps?q=440+Huntington+Ave,+Boston,+Suffolk,+Massachusetts+02136";
}
