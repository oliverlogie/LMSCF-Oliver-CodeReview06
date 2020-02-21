var objPlaces;
objPlaces = [];
var iArray = [];
var aArray = [];
var theLocation = ["Vienna", "Stephansdom", "Schönbrunn", "Jamaica"];
var zipCode = ["1020", "1220", "1130", "1000"];
var adress = ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna", "blalal"];
var imgPlace = ["img/prater.jpg", "img/Stephansdom.jpg", "img/Schonbrunn.jpg", "img/Schonbrunn.jpg"];
var food = ["Burger", "Fish", "Fries", "Schnitzel"];
var link = ["http://www.restaurant-on.at/", "biofrische.wien", "https://www.mjam.net/", "https://www.leontine.at/"];
var Places = /** @class */ (function () {
    function Places(theLocation, zipCode, adress, imgPlace) {
        this.theLocation = theLocation;
        this.zipCode = zipCode;
        this.adress = adress;
        this.imgPlace = imgPlace;
    }
    return Places;
}());
function creationLocation() {
    for (var i = 0; i < 4; i++) {
        var place = new Places(theLocation[i], zipCode[i], adress[i], imgPlace[i]);
        objPlaces.push(place);
    }
}
function createCard() {
    var CardsLocation = "";
    for (var i = 0; i < objPlaces.length; i++) {
        iArray.push(i);
        CardsLocation += "\n        <div class=\"card m-0 text-black col-lg-2 col-md-6 col-sm-12 border\">\n                        <div  class=\"Card\">\n                        <p><img src=\"" + objPlaces[i].imgPlace + "\" class=\"imgLoc\" alt=\"" + objPlaces[i].theLocation + "\"></p>\n                        <h3>" + objPlaces[i].theLocation + "</h3>\n                        <div class=\"hideInfo\">\n                        <p>" + objPlaces[i].zipCode + "</p>\n                        <p>" + objPlaces[i].adress + "</p>\n                        </div>\n                        <button type=\"submit\" class=\"p-3\" id=\"button\">More Infos</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    }
    ;
    document.getElementById('Loc').innerHTML = CardsLocation;
}
;
creationLocation();
createCard();
$(document).ready(function () {
    $("#button").on('click', function () {
        $(this).parent().find(".hideInfo").toggle();
    });
});
// class Restaurant extends Places{
//     food:string;
//     link:string;
//     constructor(theLocation, zipCode, adress, imgPlace, food, link){
//         super(theLocation, zipCode, adress, imgPlace);
//         this.food = food;
//         this.link = link;
//     }
// }
// function creationRestaurant(){
//     for (let i = 0; i<4; i++){
//         let placeRes = new Places(theLocation[i], zipCode[i],adress[i],imgPlace[i],food[i],link[i])
//         objPlaces.push(placeRes);
//     }
// }
// function createRestaurant(){
//     var CardsRestaurant = "";
//     for (let i=0; i < objPlaces.length; i++) {
//         aArray.push(i);
//         CardsRestaurant += `
//         <div class="card text-white p-0 col-lg-3 col-md-6 col-sm-12 bg-warning border">
//                         <div  class="Card">
//                         <p><img src="${objPlaces[i].imgPlace}" class="imgLoc" alt="${objPlaces[i].theLocation}"></p>
//                         <h3>${objPlaces[i].theLocation}</h3>
//                         <div class="hideInfo">
//                         <p>${objPlaces[i].zipCode}</p>
//                         <p>${objPlaces[i].adress}</p>
//                         </div>
//                         <p>${objPlaces[i].food}</p>
//                         <p>${objPlaces[i].link}</p>
//                         <button type="submit" class="p-3" id="button">More Infos</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//    };
//    document.getElementById('Loc').innerHTML = CardsRestaurant;
// };
// creationRestaurant();
// createRestaurant();
