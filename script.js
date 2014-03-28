			function convert()
			{
				var input = document.getElementById("toBeConverted").value;
				var centi2In = input*.39370;
				centi2In = centi2In.toFixed(2);
				var in2Cent = input*2.54;
				in2Cent = in2Cent.toFixed(2); 
				var centg2Fahr = ((input*9)/5)+32;
				centg2Fahr = centg2Fahr.toFixed(2);
				var fahr2Cent = (input-32) *(5/9);
				fahr2Cent = fahr2Cent.toFixed(2);
				
				document.getElementById("Centi2In").innerHTML = input +" cms = " + centi2In + " ins";
				document.getElementById("In2Centm").innerHTML = input +" ins = " + in2Cent + " cms";
				document.getElementById("Centg2Fahr").innerHTML = input +" deg C = " + centg2Fahr + "deg F";
				document.getElementById("Fahr2Centg").innerHTML = input +" deg F = " + fahr2Cent + " deg C";
			}