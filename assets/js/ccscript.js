/*toogle = (el) => {
	el.style.display == 'none' ? el.style.display = 'block' : el.style.display = 'none'
}

document.getElementById("hm").addEventListener("click",()=>toogle(document.getElementById("menu_l")))
*/

function myMap() {
	var econ={lat:19.027648,lng:-98.191258};
	var mapProp = {
	    center:econ,
	    zoom:14
	};
	var placeName = "<h4>Consultoría Contracorriente</h4>";
	var infowindow = new google.maps.InfoWindow({
          content: placeName
        });
	var map = new google.maps.Map(document.getElementById("mapa"),mapProp);
   	var marker = new google.maps.Marker({
		position: econ,
		map: map,
		title: 'Periódico Digital e-consulta'
	});
	infowindow.open(map, marker);
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}

targetP = (el) => 
	(
		p = el.parentElement.querySelector("p.gal"),
		p.classList.toggle("ellipsis")

	);

Array.from
	(
		document.querySelectorAll(".more")
	).forEach
		(
			button => button.addEventListener("click",Ev=>targetP(Ev.target))
		);