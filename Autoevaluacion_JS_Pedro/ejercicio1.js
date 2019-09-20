	

	function inicializar(){

		let array = [];

		for (var i = 0; i < 5; i++) {
			
			array[i] = prompt("Introduzca nombres hasta llegar a cinco nombres.");

			if(array[i].includes(array[i - 1]) && isNaN(array[i])){
				alert("Error, no se pueden repetir nombres.");

				array.pop(array[i]);

				array[i] = prompt("Introduzca un nombre distinto.");

			}else{
				
			}
		}

		array.sort();

		array.forEach(function (inicial) {
			console.log(inicial.charAt(0).toUpperCase()+inicial.slice(1));
		});

	}