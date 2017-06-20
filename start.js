// rozpoczecie gry i ustawienie planszy

var p = new Array(9);
//p1..p9 pola w grze (ich zawartosc: p1='n'; nic lub 'x' lub 'o' )
var kto;
var liczx = 0;
var liczo = 0;

window.onload = wybor;

function wybor()
{
	document.getElementById("wstep").innerHTML = '<div id="wybor"><span class="wybor" onclick="startuj()">Gracz vs Gracz</span> <br> czy <br> <span class="wybor" onclick="startujAI()">Gracz vs Komputer</span></div>';
}

function startuj()
{
	$('#wstep').slideUp(0).fadeIn(300);
	var trescDiva = "";
	
	for (i=0; i<9; i++)
	{
			var element = "pole" + i;
			trescDiva = trescDiva + '<div class="pole" onclick="wstaw('+i+')" id="'+element+'"></div>';
			
			if ((i+1) % 3 == 0) trescDiva = trescDiva + '<div style="clear: both;"></div>';
			
			p[i] = "n";
			kto = "o";
	}
		
	var container = '<div id="container">   <div id="gra"></div>   <div id="menu">   <div id="tura"></div>  <div id="licznik"></div>   </div>   <div style="clear: both;"></div>   </div>';
	document.getElementById("wstep").innerHTML=container;
	document.getElementById("gra").innerHTML=trescDiva;
	if (kto == 'o')
		document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #009933;">kółko</span>';
	else 
		document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #003399;">krzyżyk</span>';
	document.getElementById("licznik").innerHTML = '<span style="color: #009933; font-size: 31px;">'+liczo+'</span> kółko vs krzyżyk <span style="color: #003399; font-size: 31px;">'+liczx+'</span>';
}

function startujAI()
{
	$('#wstep').slideUp(0).fadeIn(300);
	var trescDiva = "";

	for (i=0; i<9; i++)
	{
			var element = "pole" + i;
			trescDiva = trescDiva + '<div class="pole" onclick="wstawAI('+i+')" id="'+element+'"></div>';
			
			if ((i+1) % 3 == 0) trescDiva = trescDiva + '<div style="clear: both;"></div>';
			
			p[i] = 'e';
			kto = 'o';
	}
	
	var container = '<div id="container">   <div id="gra"></div>   <div id="menu">   <div id="tura"></div>  <div id="licznik"></div>   </div>   <div style="clear: both;"></div>   </div>';
	document.getElementById("wstep").innerHTML=container;
	document.getElementById("gra").innerHTML=trescDiva;
	document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #009933;">kółko</span>';
	if (kto == 'o')
		document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #009933;">kółko</span>';
	else 
		document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #003399;">krzyżyk</span>';
	document.getElementById("licznik").innerHTML = '<span style="color: #009933; font-size: 31px;">'+liczo+'</span> kółko vs krzyżyk <span style="color: #003399; font-size: 31px;">'+liczx+'</span>';
	
	
}