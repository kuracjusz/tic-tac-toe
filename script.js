// gracz kontra gracz

function wstaw(nr)
{
	var element = "pole" + nr;
	
	if (p[nr] == "n")
	{
		if (kto=="o")
		{
			document.getElementById(element).innerHTML = '<img src="img/o.bmp" alt="" />';
			document.getElementById(element).style.cursor = "default";
			p[nr]="o";
			kto="x";
			document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #003399;">krzyżyk</span>';
		}
		else
		{
			document.getElementById(element).innerHTML = '<img src="img/x.bmp" alt="" />';
			document.getElementById(element).style.cursor = "default";
			p[nr]="x";
			kto="o";
			document.getElementById("tura").innerHTML = 'Tura gracza: <span style="color: #009933;">kółko</span>';
		}
		sprawdzaj();
	}
}

function sprawdzaj()
{
	if ((p[0]==p[1] && p[1]==p[2] && p[0]!='n') || 
		(p[3]==p[4] && p[4]==p[5] && p[3]!='n') ||
        (p[6]==p[7] && p[7]==p[8] && p[6]!='n') || 
		(p[0]==p[3] && p[3]==p[6] && p[0]!='n') ||
        (p[1]==p[4] && p[4]==p[7] && p[1]!='n') || 
		(p[2]==p[5] && p[5]==p[8] && p[2]!='n') ||
        (p[0]==p[4] && p[4]==p[8] && p[0]!='n') ||
		(p[2]==p[4] && p[4]==p[6] && p[2]!='n'))
	{
		
		if (kto=="x")
		{
			document.getElementById("tura").innerHTML = '<span style="font-size: 35px;">Koniec Gry!</span> Gratulacje dla gracza <span style="color: #009933;">Kółko!</span><br><br><span class="reset" onclick="startuj()">JESZCZE RAZ?</span>';
			liczo++;
			document.getElementById("licznik").style.marginTop= "10px";
			document.getElementById("licznik").innerHTML = '<span style="color: #009933; font-size: 31px;">'+liczo+'</span> kółko vs krzyżyk <span style="color: #003399; font-size: 31px;">'+liczx+'</span>';
		}
		else
		{
			document.getElementById("tura").innerHTML = '<span style="font-size: 35px;">Koniec Gry!</span> Gratulacje dla gracza <span style="color: #003399;">Krzyżyk!</span><br><br><span class="reset" onclick="startuj()">JESZCZE RAZ?</span>';
			liczx++;
			document.getElementById("licznik").style.marginTop= "10px";
			document.getElementById("licznik").innerHTML = '<span style="color: #009933; font-size: 31px;">'+liczo+'</span> kółko vs krzyżyk <span style style="color: #003399; font-size: 31px;">'+liczx+'</span>';
		}
		
		for (i=0; i<9; i++)
		{
			document.getElementById("pole"+i).style.cursor= "default";
			document.getElementById("pole"+i).setAttribute("onclick", ";");
			document.getElementById("pole"+i).style.backgroundColor = "white";
		}
	}
	else if ( p[0]!='n' && p[1]!='n' && p[2]!='n' && 
			     p[3]!='n' && p[4]!='n' && p[5]!='n' && 
				 p[6]!='n' && p[7]!='n' && p[8]!='n' )
	{
			document.getElementById("tura").innerHTML = '<span style="font-size: 35px;">Koniec Gry!</span> <u>REMIS</u><br><br><span class="reset" onclick="startuj()">JESZCZE RAZ?</span>';
			document.getElementById("licznik").style.marginTop= "40px";
	}
		
				
}	