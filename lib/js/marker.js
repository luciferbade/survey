var myMarker= L.marker([27.689151, 88.382372], {draggable:true}).addTo(map);
myMarker.bindPopup('<b>Bhaktapur</b>',{minWidth : 200});
myMarker.on("moveend",function(event){
alert(myMarker.getLatLng());
})