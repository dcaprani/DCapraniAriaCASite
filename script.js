			function convert()
			{
				var input = document.getElementById("toBeConverted").value;
				var centi2In = input*3;
				var in2Cent = input/3;
				var centg2Fahr = input*9;
				var fahr2Cent = input/9;
				
				document.getElementById("Centi2In").innerHTML = input +" cms = " + centi2In + " ins";
				document.getElementById("In2Centm").innerHTML = input +" ins = " + in2Cent + " cms";
				document.getElementById("Centg2Fahr").innerHTML = input +" deg C = " + centg2Fahr + "deg F";
				document.getElementById("Fahr2Centg").innerHTML = input +" deg F = " + fahr2Cent + " deg C";
			}