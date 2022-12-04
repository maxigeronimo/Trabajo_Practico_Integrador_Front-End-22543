
function recibeValor() {
    let valor = 200;
    let cant = document.getElementById("cantidad").value;
    let categorias = document.getElementById("categoria").value;

    let nomb= document.getElementById("nombre").value;
    let apell=document.getElementById("apellido").value;
    let correo=document.getElementById("email").value;
    if(nomb.length <=3 || apell.length <=3 || correo.length<=6){
      alert("Ingrese sus datos por favor");
    }
    else if (cant > 0 && categorias == "1") {
      const resultado = cant * valor - cant * valor * (80 / 100);
      console.log(cant * valor - cant * valor * (80 / 100));
      document.getElementById("msj").innerHTML = `Total a Pagar: $ ${resultado}`;
    } else if (cant && categorias == "2") {
      const resultado = cant * valor - cant * valor * (50 / 100);
      console.log(cant * valor - cant * valor * (50 / 100));
      document.getElementById("msj").innerHTML = `Total a Pagar: $ ${resultado}`;
    } else if (cant > 0 && categorias == "3") {
      const resultado = cant * valor - cant * valor * (15 / 100);
      console.log(cant * valor - cant * valor * (15 / 100));
      document.getElementById("msj").innerHTML = `Total a Pagar: $ ${resultado}`;
    } else {
      alert("Por favor ingrese valores validos");
    }
  }
  
  function borrar() {
    document.getElementById("msj").innerText = "Total a Pagar: $ ....";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
  }
  