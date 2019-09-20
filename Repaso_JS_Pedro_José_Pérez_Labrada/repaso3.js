	
	function provincias(){

		let prov = ["Sevilla","Cadiz","Huelva","Malaga","Granada","Almeria","Jaen","Cordoba"]; 

		let prov2 = prov.sort();

		document.write("<table border = '1' align = 'center'>");

		for (var i = 0; i < prov2.length; i++) {
			
			document.write("<tr>" + "<td>" + prov2[i]);

		}
	}