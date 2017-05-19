/*global$*/
$(document).ready(function(){
    $("#Searchbutton").click(function() {
        var type= $("#type").val();
        var near= $("#Zipcode").val();
        var url= "https://api.foursquare.com/v2/venues/search?client_id=GJP350DH3G2PX544RXXXML0B22PC32D4XYDTN5OGIH2X0HTE&client_secret=H0MTUBOXYGXFS1OJHRRAT23MCDL5KZKGJGHXK15X1BZZR4UC&v=20130815";
        var url1="&near=";
        var url2="&query=";
   var url11 = url +url1 +near +url2+ type;
console.log(url11)
        $.getJSON(url11, function(response){
            var Venues=response.response.venues;
            for (var i=0; i<Venues.length; i++){
            console.log(response.response.venues[i].name);
            var contact = response.response.venues[i].contact.formattedPhone
            var address = response.response.venues[i].location.formattedAddress
            var h4='<a href="#" class="list-group-item">' + '<h4 class="list-group-item-heading">' + response.response.venues[i].name + "</h4>" + '<p class="list-group-item-text">' + address + '<br>' + 'Phone #:' + "" + contact + '</p>' + "</a>";
            var venue=response.response.venues[i];
             $("#results").append(h4); 
            }
            
           
 /*           
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}  */      
        
        }); 
    });
});
