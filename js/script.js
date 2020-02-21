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
objPlaces = [];
var iArray = [];
var theLocation = ["Vienna", "Stephansdom", "Schönbrunn", "Jamaica"];
var zipCode = ["1020", "1220", "1130", "1000"];
var adress = ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna", "blalal"];
var imgPlace = ["img/prater.jpg", "img/Stephansdom.jpg", "img/Schonbrunn.jpg", "img/Schonbrunn.jpg"];
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
        CardsLocation += "\n        <div class=\"card text-white p-0 col-lg-3 col-md-6 col-sm-12 bg-warning border\">\n                        <div  class=\"Card\">\n                        <p><img src=\"" + objPlaces[i].imgPlace + "\" class=\"imgLoc\" alt=\"" + objPlaces[i].theLocation + "\"></p>\n                        <h3>" + objPlaces[i].theLocation + "</h3>\n                        <div class=\"hideInfo\">\n                        <p>" + objPlaces[i].zipCode + "</p>\n                        <p>" + objPlaces[i].adress + "</p>\n                        </div>\n                        <button type=\"submit\" class=\"p-3\" id=\"button\">More Infos</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
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
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(theLocation, zipCode, adress, imgPlace, food, link) {
        var _this = _super.call(this, theLocation, zipCode, adress, imgPlace, food, link) || this;
        _this.food = food;
        _this.link = link;
        return _this;
    }
    return Restaurant;
}(Places));
var food = new Restaurant("");
