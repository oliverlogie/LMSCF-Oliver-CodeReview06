let objPlaces: Array<Places>;
let objRestaurants: Array<Restaurant>;
let objEvents: Array<Events>;
objPlaces = [];
objRestaurants = [];
objEvents = [];
// let iArray = [];
// let aArray = [];

let theLocation: Array<string>= ["Russia", "India","China","Vienna"];
let resName: Array<string>= ["Addicted to Rock", "Aurelius", "SUSHI Mari", "Figlmüller"];
let zipCode: Array<string>= ["1020","1220", "1130", "1060"];
let adress:  Array<string>= ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna","Tokiostraße 7"];
let restaurantAdress: Array<string> = ["Schwarzenbergplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna","blalal"];
let imgPlace: Array<string>= ["img/Moschee.png","img/India.jpg", "img/China.jpg","img/vienna.jpg"];
let imgRestaurant: Array<string>= ["img/burger.jpg","img/Fisch.jpg", "img/sushi.jpg","img/Schnitzel.jpg"];
let imgEvents: Array<string>= ["img/event1.jpg","img/event2.jpg", "img/event3.jpg","img/event4.jpg"];
let food: Array<string>= ["Burger", "Fish", "Pizza", "Schnitzel"];
let link: Array<string>=["http://www.restaurant-on.at/","biofrische.wien","https://www.mjam.net/","https://www.leontine.at/"];
let tele: Array<number>=[067626176231, 977237231123, 637812423643, 123712426785];
let eventName: Array<string>=["Der Hangar-7", 'Freak Out - “It started in the Sixties”', "LEAD TODAY. SHAPE TOMORROW", "Empowering Agile Konferenz"];
let eventDate: Array<string>=["12.3.2021", "16.9.2021", "28.6.2021", "17.1.2021"];
let eventTime: Array<string>=["17:00", "19:30", "13:00", "20:00"];

class Places {
    theLocation: string;
    zipCode: string;
    adress: string;
    imgPlace:string;

    constructor(theLocation, zipCode, adress, imgPlace){
        this.theLocation = theLocation;
        this.zipCode = zipCode;
        this.adress = adress;
        this.imgPlace = imgPlace;
    }
}

class Restaurant extends Places{
    food:string;
    link:string;
    tele:number;
    imgRestaurant:string;
    resName:string;

    constructor(theLocation, zipCode, adress, food, link, tele, imgRestaurant, resName){
        super(theLocation, zipCode, adress, imgPlace);
        this.food = food;
        this.link = link;
        this.tele = tele;
        this.imgRestaurant = imgRestaurant;
        this.resName = resName;
    }
}

class Events extends Places{
    eventDate:string;
    eventTime:string;
    imgEvents:string;
    eventName:string;

    constructor(theLocation, zipCode, adress, eventDate, eventTime,imgEvents,eventName){
        super(theLocation, zipCode, adress, imgPlace);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.imgEvents = imgEvents;
        this.eventName = eventName;
    }
}

function creationLocation(type: string){
    if (type === 'places') {
        for (let i = 0; i<4; i++){
            let place = new Places(theLocation[i], zipCode[i],adress[i],imgPlace[i])
            objPlaces.push(place);
        }
    }
    else if (type === 'restaurants') {
        for (let i = 0; i<4; i++){
            let res = new Restaurant(theLocation[i], zipCode[i],adress[i], food[i], link[i], tele[i],imgRestaurant[i], resName[i] )
            objRestaurants.push(res);
        }
    }
    else if (type === 'events') {
        for (let i = 0; i<4; i++){
            let event = new Events(theLocation[i], zipCode[i], adress[i], eventDate[i], eventTime[i], imgEvents[i], eventName[i])
            objEvents.push(event);
        }
    }
}

function showRes(index: number) {
    console.log('I GET HIT');
    if($(`#res${index}`).css('visibility') == 'hidden') {
        $(`#res${index}`).css('visibility', 'visible')
    }
    else {
        $(`#res${index}`).css('visibility', 'hidden')
    }
}

function showEve(index: number) {
    console.log('I GET HIT');
    if($(`#event${index}`).css('visibility') == 'hidden') {
        $(`#event${index}`).css('visibility', 'visible')
    }
    else {
        $(`#event${index}`).css('visibility', 'hidden')
    }
}

function showInfo(index: number) {
$(document).ready(function() {
        $(`#button${index}`).parent().find(".hideInfo").toggle();
    });
}



function createCard(){
    var CardsLocation = "";
    for (let i=0; i < objPlaces.length; i++) {
        CardsLocation += `
        <div class="card text-black col-lg-3 col-md-6 col-sm-12 border">
                        <div class="Card">
                        <p><img src="${objPlaces[i].imgPlace}" class="imgLoc" alt="${objPlaces[i].theLocation}"></p>
                        <h3 class="shadow-sm">${objPlaces[i].theLocation}</h3>
                        <div class="hideInfo">
                        <p>${objPlaces[i].zipCode}</p>
                        <p>${objPlaces[i].adress }</p>
                        </div>
                        <button onclick="showInfo(${i})" type="submit" class="p-3" id="button${i}">More Infos</button>
                        </div>
                        <button onclick="showRes(${i})" type="submit" class="p-3 mb-3" id="button2${i}">Show Restaurants</button>
                        <button onclick="showEve(${i})" type="submit" class="p-3 mb-3" id="button3${i}">Show Events</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
     };
   document.getElementById('Loc').innerHTML = CardsLocation;
};

function createRestaurant(){
    var CardsRestaurant = "";
    for (let i=0; i < objRestaurants.length; i++) {
            CardsRestaurant += `
             <div id="res${i}" class="hiddenRes card text-black p-0 col-lg-3 col-md-6 col-sm-12 border">
                                <div  class="Card">
                                <p><img src="${objRestaurants[i].imgRestaurant}" class="imgLoc"></p>
                                <h3>${objRestaurants[i].resName}</h3>
                                <div class="shadow">
                                <p class="">Adress: ${objRestaurants[i].adress}</p>
                                <p>Adress: ${objRestaurants[i].theLocation}</p>
                                <p>ZIP: ${objRestaurants[i].zipCode}</p>
                                <p>Specialised on: ${objRestaurants[i].food}</p>
                                <p>Link: ${objRestaurants[i].link}</p>
                                <p>Tel: ${objRestaurants[i].tele}</p>
                                </div>
                                <button onclick="showEve(${i})" type="submit" class="p-3 mb-3" id="button3${i}">Show Events</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            };
   document.getElementById('Restaurants').innerHTML = CardsRestaurant;
};

function createEvents(){
    var CardsEvents = "";
    for (let i=0; i < objEvents.length; i++) {
            CardsEvents += `
             <div id="event${i}" class="hiddenRes card text-black p-0 col-lg-3 col-md-6 col-sm-12 border">
                                <div  class="Card">
                                <p><img src="${objEvents[i].imgEvents}" class="imgLoc" alt="${objEvents[i].theLocation}"></p>
                                <div class="shadow">
                                <h3> ${objEvents[i].eventName}</h3>
                                <p>Adress: ${objEvents[i].adress}</p>
                                <p>Country: ${objEvents[i].theLocation}</p>
                                <p>ZIP: ${objEvents[i].zipCode}</p>
                                <p>Date: ${objEvents[i].eventDate}</p>
                                <p>Time: ${objEvents[i].eventTime}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            };
   document.getElementById('Events').innerHTML = CardsEvents;
};

creationLocation('places');

creationLocation('restaurants');

creationLocation('events');

createCard();

createRestaurant();

createEvents();