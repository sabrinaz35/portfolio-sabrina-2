console.log("java is goed geconnect");

//Regelen van hoe de hond eruit ziet, dmv. array
//let plaatjeHondArray = ["hond1.jpeg", "hond-boos.jpeg", "hond-tong.jpeg", "hond-verbaasd.jpeg", "hond-verdrietig.jpeg"]; //de plaatjes neerzetten in de javascript

//code wat in een if eles ofzo gezet moet worden als plaatjes moeten wisselen
//document.querySelector(".hond").src= 'images/'+plaatjeHondArray[4];

//dit is de code die ik html moet zetten onderaan, dus onder de footer, maar nog wel in de body
//<script src="script.js"></script>

let pollutionpartyArray = ["pollutionparty.png", "hond-boos.jpeg", "hond-tong.jpeg", "hond-verbaasd.jpeg", "hond-verdrietig.jpeg"];

let timer = setInterval (veranderPlaatje, 500)

function veranderPlaatje () {
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
}

