var progress = 0; //resets on page reload :/

//used to get current date and last modified date
setInterval(updateTime, 1);

var popupflag1 = false;
var popupflag2 = false;
var popupflag3 = false;
var popupflag4 = false;


//gets the text that gets automatically input
var count = 0;
//var code = readTextFile("Resource/code.txt");
var code = readTextFile("../images/code.txt");
//checks whether there has been any typing and fills in the progress 
var canvas = document.getElementById("progressBar");
var ctx = canvas.getContext('2d');
setInterval(fillbar, 1);

//used to get current date and last modified date
function updateTime(){
  var y = new Date();
  var x = new Date(document.lastModified);
  document.getElementById('foot').innerHTML = "Todays Date " + y + " Last modified "+ x;
}

function autoinput(){
  progress += 1;//every time something is typed progress bar gets filled

  var x = document.getElementById("fakeinput").value;
  xlen = x.length;
  x = x.slice(0,xlen-1);
  x += code.slice(count, count+1); // replace what you typed with something from code
  count++;
  document.getElementById("fakeinput").value = x;
}

function fillbar(){
  if(progress < 300){
    var red = 20 + progress * (255 / 350);
    ctx.fillStyle = "rgba(" + red + ", 0 ,0, 1)";
    ctx.fillRect(0, 0 , progress, 350);
    document.getElementById('per').innerHTML = Math.round((progress/300)*100) + "%";
  }
  if(progress > 80 && !popupflag1){
    document.getElementById("popup1").style.display = "inline";
    popupflag1 = true;
  }
  if(progress > 140 && !popupflag2){
    document.getElementById("popup2").style.display = "inline";
    popupflag2 = true;
  }
  if(progress > 250 && !popupflag3){
    document.getElementById("popup3").style.display = "inline";
    popupflag3 = true;
  }
  
}

function closepopup(){
  document.getElementById("popup1").style = "hidden";
}

/**
the function for the run button
*/
function run(){
    if(progress > 300){
      alert("Username = cits Password = 3403");
      document.getElementById("default").submit();
      
    }
   // var form = document.forms."default";
    
}

function run2(){
    if(progress > 300){
      try{
      	document.getElementById("popup4").style.display = "inline";
      	popupflag4 = true;
      	} catch(err){console.log("lol");}
    }
}



//what happens when you press login button
function login(){
    var username = document.getElementById('loginform').elements[0].value;
    var password = document.getElementById('loginform').elements[1].value;
    if(username=='cits' && password == "3403"){window.location.href = "blankpage.html";}
    else{ document.getElementById('wrongpassword').removeAttribute("hidden")}
  }

//function to minimize hacking tab
function minimize(){
  if(document.getElementById("hackingtool").style.display != "none"){
    document.getElementById("hackingtool").style.display = "none";
    document.getElementById("hackingtooldiv").style.zIndex = -1;
    document.getElementById('minimized').style.display ="inline";
    document.getElementById("tabname").style.top = "365px";
    document.getElementById("minimizebtn").style.top = "384px";
  }
  else{
    document.getElementById("hackingtooldiv").style.zIndex = 1;
    document.getElementById("hackingtool").style.display = "inline";
    document.getElementById("minimized").style.display = "none";
    document.getElementById("tabname").style.top = "85px";
    document.getElementById("minimizebtn").style.top = "105px";
  }
}


/*
* reading local files ONLY SEEMS TO WORK WITH FIREFOX!
* code taken from http://stackoverflow.com/questions/14446447/javascript-read-local-text-file*/
function readTextFile(file)
{
    var allText = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;

            }
        }
    }
    rawFile.send(null);
    return(allText);
}


