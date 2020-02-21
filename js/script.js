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
var theLocation = ["Russia", "India", "China", "Vienna"];
var resName = ["Addicted to Rock", "Aurelius", "SUSHI Mari", "Figlmüller"];
var zipCode = ["1020", "1220", "1130", "1060"];
var adress = ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna", "Tokiostraße 7"];
var restaurantAdress = ["Schwarzenbergplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna", "blalal"];
var imgPlace = ["img/Moschee.png", "img/India.jpg", "img/China.jpg", "img/vienna.jpg"];
var imgRestaurant = ["img/burger.jpg", "img/Fisch.jpg", "img/sushi.jpg", "img/Schnitzel.jpg"];
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
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(theLocation, zipCode, adress, eventDate, eventTime) {
        var _this = _super.call(this, theLocation, zipCode, adress, imgPlace) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        return _this;
    }
    return Events;
}(Places));
function creationLocation(type) {
    if (type === 'places') {
        for (var i = 0; i < 4; i++) {
            var place = new Places(theLocation[i], zipCode[i], adress[i], imgPlace[i]);
            objPlaces.push(place);
        }
    }
    else if (type === 'restaurants') {
        for (var i = 0; i < 4; i++) {
            var res = new Restaurant(theLocation[i], zipCode[i], adress[i], food[i], link[i], tele[i], imgRestaurant[i], resName[i]);
            objRestaurants.push(res);
        }
    }
    else if (type === 'events') {
        for (var i = 0; i < 4; i++) {
            var event_1 = new Events(theLocation[i], zipCode[i], adress[i], eventDate[i], eventTime[i]);
            objEvents.push(event_1);
        }
    }
}
function showRes(index) {
    console.log('I GET HIT');
    if ($("#res" + index).css('visibility') == 'hidden') {
        $("#res" + index).css('visibility', 'visible');
    }
    else {
        $("#res" + index).css('visibility', 'hidden');
    }
}
function showEve(index) {
    console.log('I GET HIT');
    if ($("#event" + index).css('visibility') == 'hidden') {
        $("#event" + index).css('visibility', 'visible');
    }
    else {
        $("#event" + index).css('visibility', 'hidden');
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
        CardsLocation += "\n        <div class=\"card text-black col-lg-3 col-md-6 col-sm-12 border\">\n                        <div class=\"Card\">\n                        <p><img src=\"" + objPlaces[i].imgPlace + "\" class=\"imgLoc\" alt=\"" + objPlaces[i].theLocation + "\"></p>\n                        <h3 class=\"shadow-sm\">" + objPlaces[i].theLocation + "</h3>\n                        <div class=\"hideInfo\">\n                        <p>" + objPlaces[i].zipCode + "</p>\n                        <p>" + objPlaces[i].adress + "</p>\n                        </div>\n                        <button onclick=\"showInfo(" + i + ")\" type=\"submit\" class=\"p-3\" id=\"button" + i + "\">More Infos</button>\n                        </div>\n                        <button onclick=\"showRes(" + i + ")\" type=\"submit\" class=\"p-3 mb-3\" id=\"button2" + i + "\">Show Restaurants</button>\n                        <button onclick=\"showEve(" + i + ")\" type=\"submit\" class=\"p-3 mb-3\" id=\"button3" + i + "\">Show Events</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    }
    ;
    document.getElementById('Loc').innerHTML = CardsLocation;
}
;
function createRestaurant() {
    var CardsRestaurant = "";
    for (var i = 0; i < objRestaurants.length; i++) {
        CardsRestaurant += "\n             <div id=\"res" + i + "\" class=\"hiddenRes card text-black p-0 col-lg-3 col-md-6 col-sm-12 border\">\n                                <div  class=\"Card\">\n                                <p><img src=\"" + objRestaurants[i].imgRestaurant + "\" class=\"imgLoc\"></p>\n                                <h3>" + objRestaurants[i].resName + "</h3>\n                                <div class=\"shadow\">\n                                <p class=\"\">Adress: " + objRestaurants[i].adress + "</p>\n                                <p>Adress: " + objRestaurants[i].theLocation + "</p>\n                                <p>ZIP: " + objRestaurants[i].zipCode + "</p>\n                                <p>Specialised on: " + objRestaurants[i].food + "</p>\n                                <p>Link: " + objRestaurants[i].link + "</p>\n                                <p>Tel: " + objRestaurants[i].tele + "</p>\n                                </div>\n                                <button onclick=\"showEve(" + i + ")\" type=\"submit\" class=\"p-3 mb-3\" id=\"button3" + i + "\">Show Events</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ";
    }
    ;
    document.getElementById('Restaurants').innerHTML = CardsRestaurant;
}
;
function createEvents() {
    var CardsEvents = "";
    for (var i = 0; i < objEvents.length; i++) {
        CardsEvents += "\n             <div id=\"event" + i + "\" class=\"hiddenRes card text-black p-0 col-lg-3 col-md-6 col-sm-12 border\">\n                                <div  class=\"Card\">\n                                <div class=\"shadow\">\n                                <p>Adress: " + objEvents[i].adress + "</p>\n                                <p>Country: " + objEvents[i].theLocation + "</p>\n                                <p>ZIP: " + objEvents[i].zipCode + "</p>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ";
    }
    ;
    document.getElementById('Events').innerHTML = CardsEvents;
}
;
creationLocation('places');
creationLocation('restaurants');
creationLocation('events');
createCard();
createRestaurant();
createEvents();
