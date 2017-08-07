var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info legend'),
		grades = [0, 1000000000, 2000000000, 5000000000, 10000000000],
		labels = [];
// loop through our density intervals and generate a label with a colored square for each interval
	for (var i = 0; i < grades.length; i++) {
		div.innerHTML +=
		'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
		grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
	}

	return div;
	};
legend.addTo(map);
			
