var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objPlaces;
var objRestaurants;
var objEvents;
objPlaces = [];
objRestaurants = [];
objEvents = [];
// let iArray = [];
// let aArray = [];
var theLocation = ["Vienna", "India", "China", "Russia"];
var resName = ["Addicted to Rock", "Aurelius", "PIZZA Mari", "Figlmüller"];
var zipCode = ["1020", "1220", "1130", "1000"];
// let adress:  Array<string>= ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna","blalal"];
var placeAdress = ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna", "blalal"];
var restaurantAdress = ["Schwarzenbergplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna", "blalal"];
var imgPlace = ["img/prater.jpg", "img/Stephansdom.jpg", "img/Schonbrunn.jpg", "img/Schonbrunn.jpg"];
var imgRestaurant = ["img/burger.jpg", "img/Fisch.jpg", "img/Pizza.jpg", "img/Schnitzel.jpg"];
var food = ["Burger", "Fish", "Pizza", "Schnitzel"];
var link = ["http://www.restaurant-on.at/", "biofrische.wien", "https://www.mjam.net/", "https://www.leontine.at/"];
var tele = [067626176231, 977237231123, 637812423643, 123712426785];
var eventDate = ["12.3.2021", "16.9.2021", "28.6.2021", "17.1.2021"];
var eventTime = ["17:00", "19:30", "13:00", "20:00"];
var Places = /** @class */ (function () {
    function Places(theLocation, zipCode, adress, imgPlace) {
        this.theLocation = theLocation;
        this.zipCode = zipCode;
        this.adress = adress;
        this.imgPlace = imgPlace;
    }
    return Places;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(theLocation, zipCode, adress, food, link, tele, imgRestaurant, resName) {
        var _this = _super.call(this, theLocation, zipCode, adress, imgPlace) || this;
        _this.food = food;
        _this.link = link;
        _this.tele = tele;
        _this.imgRestaurant = imgRestaurant;
        _this.resName = resName;
        return _this;
    }
    return Restaurant;
}(Places));
// class Events extends Places{
//     eventDate:string;
//     eventTime:string;
//     constructor(theLocation, zipCode, adress ){
//         super(theLocation, zipCode, adress, imgPlace);
//         this.eventDate = eventDate;
//         this.eventTime = eventTime;
//     }
// }
function creationLocation(type) {
    if (type === 'places') {
        for (var i = 0; i < 4; i++) {
            var place = new Places(theLocation[i], zipCode[i], placeAdress[i], imgPlace[i]);
            objPlaces.push(place);
        }
    }
    else if (type === 'restaurants') {
        for (var i = 0; i < 4; i++) {
            var res = new Restaurant(theLocation[i], zipCode[i], restaurantAdress[i], food[i], link[i], tele[i], imgRestaurant[i], resName[i]);
            objRestaurants.push(res);
        }
    }
    // else if (type === 'events') {
    //     for (let i = 0; i<4; i++){
    //         let res = new Restaurant(theLocation[i], zipCode[i],restaurantAdress[i],imgPlace[i], food[i], link[i], tele[i])
    //         objRestaurants.push(res);
    //     }
    // }
}
function showMore(index) {
    console.log('I GET HIT');
    if ($("#res" + index).css('visibility') == 'hidden') {
        $("#res" + index).css('visibility', 'visible');
    }
    else {
        $("#res" + index).css('visibility', 'hidden');
    }
}
function showInfo(index) {
    $(document).ready(function () {
        $("#button" + index).parent().find(".hideInfo").toggle();
    });
}
function createCard() {
    var CardsLocation = "";
    for (var i = 0; i < objPlaces.length; i++) {
        CardsLocation += "\n        <div class=\"card m-2 text-black flex-shrink-1 col-lg-4 col-md-6 col-sm-12 border\">\n                        <div class=\"Card\">\n                        <p><img src=\"" + objPlaces[i].imgPlace + "\" class=\"imgLoc\" alt=\"" + objPlaces[i].theLocation + "\"></p>\n                        <h3>" + objPlaces[i].theLocation + "</h3>\n                        <div class=\"hideInfo\">\n                        <p>" + objPlaces[i].zipCode + "</p>\n                        <p>" + objPlaces[i].adress + "</p>\n                        </div>\n                        <button onclick=\"showInfo(" + i + ")\" type=\"submit\" class=\"p-3\" id=\"button" + i + "\">More Infos</button>\n                        </div>\n                        <button onclick=\"showMore(" + i + ")\" type=\"submit\" class=\"p-3\" id=\"button2" + i + "\">Show Restaurants</button>\n                        <button onclick=\"showMore(" + i + ")\" type=\"submit\" class=\"p-3\" id=\"button3" + i + "\">Show Events</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    }
    ;
    document.getElementById('Loc').innerHTML = CardsLocation;
}
;
function createRestaurant() {
    var CardsRestaurant = "";
    for (var i = 0; i < objRestaurants.length; i++) {
        CardsRestaurant += "\n             <div id=\"res" + i + "\" class=\"hiddenRes m-2 flex-shrink-1  card text-white p-0 col-lg-3 col-md-6 col-sm-12 bg-warning border\">\n                                <div  class=\"Card\">\n                                <p><img src=\"" + objRestaurants[i].imgRestaurant + "\" class=\"imgLoc\"></p>\n                                <h3>" + objRestaurants[i].resName + "</h3>\n                                <p>Adress: " + objRestaurants[i].adress + "</p>\n                                <p>ZIP: " + objRestaurants[i].zipCode + "</p>\n                                <p>Specialised on: " + objRestaurants[i].food + "</p>\n                                <p>Link: " + objRestaurants[i].link + "</p>\n                                <p>Tel: " + objRestaurants[i].tele + "</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ";
    }
    ;
    document.getElementById('Restaurants').innerHTML = CardsRestaurant;
}
;
creationLocation('places');
creationLocation('restaurants');
creationLocation('events');
createCard();
createRestaurant();
