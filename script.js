			function convert()
			{
				//take input from user
				var input = document.getElementById("toBeConverted").value;
				//convert input to inches
				var centi2In = input*.39370;
				// round answer to 2 decimal places
				centi2In = centi2In.toFixed(2);
				
				//convert input to  centimetres
				var in2Cent = input*2.54;
				// round answer to 2 decimal places
				in2Cent = in2Cent.toFixed(2); 
				
				//convert input to fahrenheit
				var centg2Fahr = ((input*9)/5)+32;
				// round answer to 2 decimal places
				centg2Fahr = centg2Fahr.toFixed(2);
				
				//convert input to centigrade
				var fahr2Cent = (input-32) *(5/9);
				// round answer to 2 decimal places
				fahr2Cent = fahr2Cent.toFixed(2);
				
				// select relevant output boxes by DOM id & set inner HTML to relevant answers
				document.getElementById("Centi2In").innerHTML = input +" cms = " + centi2In + " ins";
				document.getElementById("In2Centm").innerHTML = input +" ins = " + in2Cent + " cms";
				document.getElementById("Centg2Fahr").innerHTML = input +" deg C = " + centg2Fahr + "deg F";
				document.getElementById("Fahr2Centg").innerHTML = input +" deg F = " + fahr2Cent + " deg C";
			}