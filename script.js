var currentid;
var brick=document.getElementsByClassName("moods");
var song=document.getElementsByClassName("songs");
var effect=document.getElementsByClassName("effects");
var length=brick.length;
var treelogo=document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0];
var abdologo=document.getElementsByClassName("logo")[0].getElementsByTagName("img")[1];
var body=document.getElementsByTagName("body")[0];
var bi; //backwardindicator

function destroyandplay(clicked_id) {
  
  window.scrollTo(0, 0);
  bi = 0;
  currentid=clicked_id;
  for(i=0;i<length;i++){
    brick[i].style.animation="3s forwards destroy";
    brick[i].setAttribute("onclick","none");
  }
  document.getElementsByClassName("header")[0].style.animation="3s forwards destroy";
  document.getElementsByClassName("paragraph")[0].style.animation="3s forwards destroy";
  document.getElementsByClassName("ques")[0].style.animation="3s forwards destroy";
  abdologo.style.animation="3s forwards destroy";
  treelogo.style.opacity="0.3";
  body.style.overflowY="hidden";
  document.getElementsByTagName("body")[0].style.animation="2s infinite zooming";
  document.getElementById("backbutton").style.display="block";
  song[currentid].play();
  effect[currentid].style.opacity="1";
  setTimeout(function(){ effect[currentid].style.display="block"; }, 2000);

//specifying the picdance style for each song:
    
  var songpic=effect[currentid].getElementsByTagName("img")[0];
  var songparagraph=effect[currentid].getElementsByTagName("p")[0];
    
  switch(clicked_id){

    case '0':
        songpic.style.animation="4s forwards infinite picdance";
		songparagraph.style.animation="1s forwards infinite wordsdance";
	    body.style.animation="8s infinite zooming"; break;
    case '1':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="5s forwards infinite wordsdance";
		body.style.animation="12s infinite zooming";
		setTimeout(function(){if (currentid==='1' && bi===0) body.style.animation="1s infinite zooming";},35300);
		setTimeout(function(){if (currentid==='1' && bi===0) body.style.animation="5s infinite zooming";},100000); break;
    case '2':
        songpic.style.animation="5s forwards infinite picdance";
		songparagraph.style.animation="1s ease-out forwards infinite wordsdance";
		body.style.animation="8s infinite zooming"; break;
    case '3':
        songpic.style.animation="7s forwards infinite picdance";
		document.getElementsByTagName("body")[0].style.animation="5s infinite zooming";
	    body.style.animation="8s infinite zooming"; break;
    case '4':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="3s forwards infinite wordsdance";
		body.style.animation="5s infinite zooming"; break;
    case '5':
        songpic.style.animation="7s 7s forwards infinite picdance";
		songparagraph.style.animation="3s 7s forwards infinite wordsdance";
		body.style.animation="1s 44s infinite zooming";
		setTimeout(hyperpicdance,44000);
		function hyperpicdance() {if (currentid==='5' && bi===0) songpic.style.animation="2s forwards infinite picdance";}
		setTimeout(normalpicdance,77000); break;
		function normalpicdance() {if (currentid==='5' && bi===0) songpic.style.animation="7s forwards infinite picdance";}
    case '6':
        songpic.style.animation="2s forwards infinite picdance";
		songparagraph.style.animation="0.3s forwards infinite wordsdance"; break;
    case '7':
        songpic.style.animation="7s 3s forwards infinite picdance";
		songparagraph.style.animation="3s 3s forwards infinite wordsdance";
		body.style.animation="7s 3s infinite zooming"; break;
    case '8':
        songpic.style.animation="7s 2.5s forwards infinite picdance";
		songparagraph.style.animation="3s 2.5s forwards infinite wordsdance";
		body.style.animation="20s 2.5s infinite zooming"; break;
    case '9':
        songpic.style.animation="6s forwards infinite picdance";
		songparagraph.style.animation="0.1s forwards infinite wordsdance";
		setTimeout(normalwordsdance,4000); break;
		function normalwordsdance() {if (currentid==='9' && bi===0) songparagraph.style.animation="2s forwards infinite wordsdance";}
    case '10':
        songpic.style.animation="4s 3.5s forwards infinite picdance";
		songparagraph.style.animation="2s 3.5s forwards infinite wordsdance"
		body.style.animation="5s 3.5s infinite zooming"; break;
		setTimeout(hyperstate1,51000);
		function hyperstate1() {if (currentid==='10' && bi===0) songpic.style.animation="2s forwards infinite picdance";}
		setTimeout(normalstate1,139000); break;
		function normalstate1() {if (currentid==='10' && bi===0) songpic.style.animation="4s forwards infinite picdance";}
    case '11':
        songpic.style.animation="10s forwards infinite picdance";
		songparagraph.style.animation="2s 14s forwards infinite wordsdance"
		body.style.animation="4s 14s infinite zooming"; break;
    case '12':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="3s forwards infinite wordsdance"; break;
    case '13':
        songpic.style.animation="5s forwards infinite picdance";
		songparagraph.style.animation="2s 10s forwards infinite wordsdance"; break;
    case '14':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="2s 2s forwards infinite wordsdance"; break;
    case '15':
        songpic.style.animation="2.5s forwards infinite picbreath";
		songparagraph.style.animation="1s 19s forwards infinite wordsdance";
		body.style.animation="4s infinite zooming"; break;
    case '16':
        songpic.style.animation="2.5s forwards infinite picbreath";
		songparagraph.style.animation="1s forwards infinite wordsdance"; break;
    case '17':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="2s 7.5s forwards infinite wordsdance"; break;
    case '18':
        songpic.style.animation="6s forwards infinite picdance";
		songparagraph.style.animation="1s 2.5s forwards infinite wordsdance";
		body.style.animation="8s infinite zooming"; break;
    case '19':
        songpic.style.animation="4s forwards infinite picdance";
		songparagraph.style.animation="1s forwards infinite wordsdance"; break;
    case '20':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="1s 10.5s forwards infinite wordsdance"; break;
    case '21':
        songpic.style.animation="15s forwards infinite picdance";
		songparagraph.style.animation="3s forwards infinite wordsdance";
		body.style.animation="15s infinite zooming"; break;
    case '22':
        songpic.style.animation="2s forwards infinite picbreath";
		songparagraph.style.animation="0.4s forwards infinite wordsdance"; break;
    case '23':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="0.4s forwards infinite wordsdance"; break;
    case '24':
        songpic.style.animation="5s 6.5s forwards infinite picdance";
		songparagraph.style.animation="0.8s 53.5s forwards infinite wordsdance"; break;
    case '25':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="1.18s forwards infinite wordsdance"; break;
    case '26':
        songpic.style.animation="7s forwards infinite picdance";
		body.style.animation="15s infinite zooming";
		setTimeout(hyperstate2,63500);
		function hyperstate2() {if (currentid==='26' && bi===0) {
			songparagraph.style.animation="1.5s forwards infinite wordsdance";
			body.style.animation="6s infinite zooming";}}
		setTimeout(normalstate2,285000); break;
		function normalstate2() {if (currentid==='26' && bi===0) body.style.animation="15s infinite zooming";}
    case '27':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="2s 4s forwards infinite wordsdance";
		body.style.animation="8s infinite zooming"; break;
    case '28':
        songpic.style.animation="7s forwards infinite picdance";
		songparagraph.style.animation="0.7s forwards infinite wordsdance"; break;
    case '29':
        songpic.style.animation="10s 4.5s forwards infinite picdance";
		songparagraph.style.animation="4s 4.5s forwards infinite wordsdance";
        body.style.animation="15s infinite zooming"; break;
    default:
        songpic.style.animation="7s forwards infinite picdance"; break;
  }
    /*
  setInterval(picdancestop, 1000);
  function picdancestop() {
	if (!(song[currentid].duration > 0 && !song[currentid].paused))
		{songpic.style.animation="none";}
	}
	*/
    //this setinterval is to make the picdancing stop once the song is not playing, but I preferred to make the audios be in loop
}


function undo() {
  
  bi = 1;
  song[currentid].pause();
  song[currentid].currentTime=0;
  
  for(i=0;i<length;i++){
  brick[i].style.animation="none";
  brick[i].setAttribute("onclick","destroyandplay(this.id)");
  }
  
  document.getElementsByClassName("header")[0].style.animation="none";
  document.getElementsByClassName("paragraph")[0].style.animation="none";
  document.getElementsByClassName("ques")[0].style.animation="none";
  abdologo.style.animation="none";
  treelogo.style.opacity="1";
  body.style.overflowY="auto";
  body.style.animation="5s ease-out forwards zoomingback";
  document.getElementById("backbutton").style.display="none";
	
  effect[currentid].style.opacity="0"; 
  var interval = setInterval(function(){effect[currentid].style.display="none"}, 0.01);
  setTimeout(function(){ clearInterval(interval); }, 2000);
  /*the last 3 lines are to avoid the effect of clicking on one of the moods then clicking on BACK immediately..
  this problem would appear if we only put effect[currentid].style.display="none";*/
    
}
