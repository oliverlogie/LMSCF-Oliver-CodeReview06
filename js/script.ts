let objPlaces: Array<Places>;
objPlaces = [];
let iArray = [];
let aArray = [];

let theLocation: Array<string>= ["Vienna", "Stephansdom","Schönbrunn","Jamaica"];
let zipCode: Array<string>= ["1020","1220", "1130", "1000"];
let adress:	Array<string>= ["Riesenradplatz 1, Vienna", "Stephansplatz 3, Vienna", "Maxingstraße 13b, 1130 Vienna","blalal"];
let imgPlace: Array<string>= ["img/prater.jpg","img/Stephansdom.jpg", "img/Schonbrunn.jpg","img/Schonbrunn.jpg"];
let food: Array<string>= ["Burger", "Fish", "Fries", "Schnitzel"];
let link: Array<string>=["http://www.restaurant-on.at/","biofrische.wien","https://www.mjam.net/","https://www.leontine.at/"];

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

function creationLocation(){
    for (let i = 0; i<4; i++){
        let place = new Places(theLocation[i], zipCode[i],adress[i],imgPlace[i])
        objPlaces.push(place);
    }
}

function createCard(){
    var CardsLocation = "";
    for (let i=0; i < objPlaces.length; i++) {
        iArray.push(i);
        CardsLocation += `
        <div class="card m-0 text-black col-lg-2 col-md-6 col-sm-12 border">
                        <div  class="Card">
                        <p><img src="${objPlaces[i].imgPlace}" class="imgLoc" alt="${objPlaces[i].theLocation}"></p>
                        <h3>${objPlaces[i].theLocation}</h3>
                        <div class="hideInfo">
                        <p>${objPlaces[i].zipCode}</p>
                        <p>${objPlaces[i].adress}</p>
                        </div>
                        <button type="submit" class="p-3" id="button">More Infos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
   };
   document.getElementById('Loc').innerHTML = CardsLocation;
};
creationLocation();

createCard();

$(document).ready(function(){
    $("#button").on('click', function(){
        $(this).parent().find(".hideInfo").toggle();
    })
})

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