function getColor(d) {
				return d > 10000000000 ?'red' :
					   d > 5000000000 ? 'blue' :
					   d > 2000000000 ? 'green' :
					   d > 1000000000 ? 'yellow' :
								  '#FFEDA0';
					}
		
function districtStyle(feature){
	return{
	fillColor:getColor(feature.properties.AREA),
	weight:2,
	opacity:1,
	color:'red',
	dashArray:1,
	fillOpacity:0.7
		}
	}			
				

<!--map and map view-->	
var map =L.map('map').setView([28.689151, 87.382372],6.5);
var districtLayer = L.geoJson.ajax("data/district.geojson",{style : districtStyle,onEachFeature: onEachFeature})
map.addLayer(districtLayer)

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});		
map.addLayer(osm);


var baseMaps = {
    "osm": osm
};

var overlayMaps = {
    "districtLayer": districtLayer
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

function highlightFeature(e) {
	var layer = e.target;
	info.update(layer.feature.properties);
	 layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    }); 

if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	layer.bringToFront();
	}
	}
function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
	}
							
			
function onEachFeature(feature, layer) {
	layer.on({
		click: highlightFeature,
		mouseout: resetHighlight
		});
		}		
				
var info = L.control();
	info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
	this.update();
	return this._div;
			};
// method that we will use to update the control based on feature properties passed
	info.update = function (p) {
	this._div.innerHTML = '<h4> Area of District of Nepal</h4>' +  (p ?
	'<b>' + p.NAME + '</b><br />' + p.AREA + ' M<sup>2</sup>'
	: 'click a district');
	};

	info.addTo(map);
			
