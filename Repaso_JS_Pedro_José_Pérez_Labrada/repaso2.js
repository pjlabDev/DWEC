	
	function añadir(){

		let lista = document.getElementById("lista");

		let objeto = document.getElementById("anadeel").value;

		let pos = document.getElementById("pos").value;

		let li = document.createElement("li");

		let creat = document.createTextNode(objeto);

		li.appendChild(creat);

		lista.insertBefore(li,document.getElementsByTagName("li")[pos-1]);

	}


	function borrar(){
		let ul = document.getElementById("lista");

		let pos = document.getElementById("pos").value;

		let borrael = document.getElementsByTagName("li")[pos-1];
		ul.removeChild(borrael);
	}
