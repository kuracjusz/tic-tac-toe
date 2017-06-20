// algorytm komputera do kolko i krzyzyk


function wstawAI(nr)
{
	var element = "pole" + nr;
	
	if (p[nr] == 'e')
	{
		if (kto == 'o')
		{
			document.getElementById(element).innerHTML = '<img src="img/o.bmp" alt="" />';
			document.getElementById(element).style.cursor = "default";
			p[nr]='o';
			kto='x';
			sprawdzajAI();
				
			const data = 
			{
				aiCharacter: 'x',
				playerCharacter: 'o',
				startingCharacter: 'o',
				board: [p[0],p[1],p[2],
						   p[3],p[4],p[5],
						   p[6],p[7],p[8]]
			};

			function ail()
			{
				var ruchAI = AI.getAIMove(data);
				var elementAI = "pole" + ruchAI;
			
				document.getElementById(elementAI).innerHTML = '<img src="img/x.bmp" alt="" />';
				document.getElementById(elementAI).style.cursor = "default";
				p[ruchAI]='x';
				kto='o';
				document.getElementById("tura").innerHTML = 'Grasz jako: <span style="color: #009933;">kółko</span>';
				
				sprawdzajAI();
			}
			setTimeout(ail, 500);
		}
	}
}
	
function sprawdzajAI()
{
	if ((p[0]==p[1] && p[1]==p[2] && p[0]!='e') || 
		(p[3]==p[4] && p[4]==p[5] && p[3]!='e') ||
        (p[6]==p[7] && p[7]==p[8] && p[6]!='e') || 
		(p[0]==p[3] && p[3]==p[6] && p[0]!='e') ||
        (p[1]==p[4] && p[4]==p[7] && p[1]!='e') || 
		(p[2]==p[5] && p[5]==p[8] && p[2]!='e') ||
        (p[0]==p[4] && p[4]==p[8] && p[0]!='e') ||
		(p[2]==p[4] && p[4]==p[6] && p[2]!='e'))
	{
		
		if (kto=="x")
		{
			
			document.getElementById("tura").innerHTML = '<span style="font-size: 35px;">Koniec Gry!</span> Wygrałeś z komputerem Gratulacje!<br><br><span class="reset" onclick="startujAI()">JESZCZE RAZ?</span>';
			liczo++;
			document.getElementById("licznik").style.marginTop= "10px";
			document.getElementById("licznik").innerHTML = '<span style="color: #009933; font-size: 31px;">'+liczo+'</span> kółko vs krzyżyk <span style="color: #003399; font-size: 31px;">'+liczx+'</span>';
		}
		else
		{
			document.getElementById("tura").style.marginTop= "30px";
			document.getElementById("tura").innerHTML = '<span style="font-size: 35px;">Koniec Gry!</span> <u>Przegrałeś</u> z komputerem SKUCHA! <br><span class="reset" onclick="startujAI()">JESZCZE RAZ?</span>';
			liczx++;
			document.getElementById("licznik").style.marginTop= "30px";
			document.getElementById("licznik").innerHTML = '<span style="color: #009933; font-size: 31px;">'+liczo+'</span> kółko vs krzyżyk <span style style="color: #003399; font-size: 31px;">'+liczx+'</span>';
					   
		}
		
		for (i=0; i<9; i++)
		{
			document.getElementById("pole"+i).style.cursor= "default";
			document.getElementById("pole"+i).setAttribute("onclick", ";");
			document.getElementById("pole"+i).style.backgroundColor = "white";
		}
		
	}
	else if ( p[0]!='e' && p[1]!='e' && p[2]!='e' && 
			     p[3]!='e' && p[4]!='e' && p[5]!='e' && 
				 p[6]!='e' && p[7]!='e' && p[8]!='e' )
	{
			document.getElementById("tura").innerHTML = '<span style="font-size: 35px;">Koniec Gry!</span> <u>REMIS</u><br><br><span class="reset" onclick="startujAI()">JESZCZE RAZ?</span>';
			document.getElementById("licznik").style.marginTop= "45px";
	}		
}	