	
	function tabla(){

		pos = document.getElementById("pos").value;
		equ = document.getElementById("equ").value;
		punt = document.getElementById("punt").value;

		document.getElementsByTagName('td')[(pos*3)+1].innerHTML = equ;
		document.getElementsByTagName('td')[(pos*3)+2].innerHTML = punt;

	}
	

