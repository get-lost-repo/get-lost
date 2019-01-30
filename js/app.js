'use strict'

var campsitesObjects = [];
var selected = [];
var clicked = [];

var results = document.getElementById('camp-list');
var options = document.getElementById('all-lists');

var campsites = document.getElementById('campsites');
var structures = document.getElementById('structures');
var rvs = document.getElementById('rvs');
var showers = document.getElementById('showers');
var pets = document.getElementById('pets');
var toilets = document.getElementById('toilets');
var water = document.getElementById('water');
var fire = document.getElementById('campfire');
var trash = document.getElementById('garbage');
var picnicTables = document.getElementById('picnicTables');
var hiking = document.getElementById('hiking');
var swimming = document.getElementById('swimming');
var fishing = document.getElementById('fishing');
var paddling = document.getElementById('paddling');
var wildlife = document.getElementById('wildlife');
var biking = document.getElementById('biking');
var boating = document.getElementById('boating');
var whiteWater = document.getElementById('whiteWater');
var climbing = document.getElementById('climbing');
var snowSports = document.getElementById('snowSports');
var horseback = document.getElementById('horseback');
var stargazing = document.getElementById('stargazing');
var lake = document.getElementById('lake');
var beach = document.getElementById('beach');
var river = document.getElementById('river');
var hotspring = document.getElementById('hotspring');
var swimmingHole = document.getElementById('swimmingHole');
var caves = document.getElementById('caves');
var parkAt = document.getElementById('parkAt');
var walkTo = document.getElementById('walkTo');
var boatAccess = document.getElementById('boatAccess');
var equestrianAccess = document.getElementById('equestrianAccess');
var wheelchairAccess = document.getElementById('wheelchairAccess');


var categories = [campsites, structures, rvs, showers, pets, toilets, water, fire, trash, picnicTables, hiking, swimming, fishing, paddling, wildlife, biking, boating, whiteWater, climbing, snowSports, horseback, stargazing, lake, beach, river, hotspring, swimmingHole, caves, parkAt, walkTo, boatAccess, equestrianAccess, wheelchairAccess]


function Campground(name, campsites, structures, rvs, showers, pets, toilets, water, fire, trash, picnicTables, hiking, swimming, fishing, paddling, wildlife, biking, boating, whitewater, climbing, snowsports, horseback, stargazing, lake, beach, river, hotspring, swimmingHole, caves, parkAt, walkTo, boatAccess, equestrianAccess, wheelchairAccess, image){
  this.name = name;
  this.campsites = campsites;
  this.structures = structures;
  this.rvs = rvs;
  this.showers = showers;
  this.pets = pets;
  this.toilets = toilets;
  this.water = water;
  this.campfire = fire;
  this.garbage = trash;
  this.picnicTables = picnicTables;
  this.hiking = hiking;
  this.swimming = swimming;
  this.fishing = fishing;
  this.paddling = paddling;
  this.wildlife = wildlife;
  this.biking = biking;
  this.boating = boating;
  this.whiteWater = whitewater;
  this.climbing = climbing;
  this.snowSports = snowsports;
  this.horseback = horseback;
  this.stargazing = stargazing;
  this.lake = lake;
  this.beach = beach;
  this.river = river;
  this.hotspring = hotspring;
  this.swimmingHole = swimmingHole;
  this.caves = caves;
  this.parkAt = parkAt;
  this.walkTo = walkTo;
  this.boatAccess = boatAccess;
  this.equestrianAccess = equestrianAccess;
  this.wheelchairAccess = wheelchairAccess;
  this.imagesquare = '../img/' + this.name + '/' +image+'300.jpg';
  campsitesObjects.push(this);
}

new Campground('Klahanie Campground',true,false,true,false,true,true,false,false,false,true,true,true,true,true,true,true,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'klahanie');
new Campground('Hoh Campground',true,false,true,false,true,true,false,true,false,true,true,false,true,true,true,false,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'hoh');
new Campground('Queets Campground',true,false,false,false,true,true,false,true,false,false,true,true,true,true,true,false,true,false,true,true,true,false,false,false,true,true,true,false,false,true,false,false,false,'queets');
new Campground('North Fork Campground',true,false,true,false,true,true,false,true,false,true,true,true,true,true,true,false,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'north');
new Campground('Graves Creek Campground',true,false,true,false,true,true,false,true,false,true,true,false,true,true,true,false,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'graves');
new Campground('Staircase Campground',true,false,true,false,true,true,true,true,false,true,true,true,true,true,true,false,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'staircase');
new Campground('Belfair Main Loop Campground',true,false,true,true,true,true,false,true,false,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,false,true,false,true,false,false,false,false,'belfair');
new Campground('Brown Creek Campground',true,false,true,false,true,true,true,false,false,false,true,true,true,true,true,true,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'brown');
new Campground('Elkhorn Dispersed Camping Area',true,false,false,false,true,false,false,true,false,true,true,true,true,true,true,true,true,false,true,true,true,false,false,false,true,true,true,false,false,true,false,false,false,'elkhorn');
new Campground('Interrorem Cabin',true,true,false,false,true,true,true,true,false,false,true,true,true,true,true,true,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'interrorem');
new Campground('Camp Epona',true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,true,true,false,false,false,true,false,true,true,true,true,true,false,true,false,false,true,false,'epona');
new Campground('Olympic Lowlands Forest Sanctuary',true,false,false,false,false,false,true,true,false,true,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,'olympic');
new Campground('1936 Highliner Bus',false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,false,false,false,false,false,false,false,true,false,false,false,true,'bus');
new Campground('The Cute Nest Camper',false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,false,false,false,true,true,false,false,false,false,true,false,false,false,false,'camper');
new Campground('Klahowya Campground',true,false,true,false,true,true,true,true,false,true,true,true,true,true,true,true,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'klahowya');
new Campground('Sol Duc Campground',true,false,true,false,true,true,false,false,false,false,true,false,true,true,true,false,false,false,false,true,true,false,false,false,false,true,true,false,true,false,false,false,false,'solduc');
new Campground('Ozette Campground',true,false,true,false,true,true,false,true,false,true,true,true,true,true,true,false,true,false,true,true,true,false,false,false,true,true,true,false,true,false,false,false,false,'ozette');
new Campground('Glamp Yurt',false,true,false,true,true,true,true,true,true,false,true,true,false,false,true,false,false,false,false,false,false,true,false,true,false,false,false,false,true,false,false,false,false,'yurt');
new Campground('Mora Campground',true,false,true,false,true,true,true,true,false,true,true,false,true,true,true,false,true,false,true,true,true,false,false,true,true,true,true,false,true,false,false,false,false,'mora');

selected = campsitesObjects;

function makeList(){
  for( var i = 0; i < selected.length; i++){
    var site = document.createElement('li');
    var link = document.createElement('a')
    link.textContent = selected[i].name;
    var img = document.createElement('img')
    img.src = selected[i].imagesquare;
    img.width = '300';
    img.height = '300';
    // link.setAttribute('href', '../html/campgrounds/'+selected[i].name+'.html')
    link.setAttribute('href', 'http://www.google.com')
    link.appendChild(img);
    site.appendChild(link)
    results.appendChild(site);
    
  }
}

function makeClickList(){
  for (var j = 0; j<categories.length; j++){
    if(categories[j].checked === true){
      clicked.push(categories[j].id)
    }
  }
}

function removeClickedFromSelected(){
  for (var k = 0; k<selected.length; k++){
    for (var m = 0; m<clicked.length; m++){
      console.log(selected[k][clicked[m]]);
      if (selected[k][clicked[m]] === false){
        selected.splice(k,1)
      }
    }
  }
}

function handleClick(event){
  clicked=[];
  selected = campsitesObjects;
  makeClickList();
  removeClickedFromSelected();
  results.textContent = '';
  makeList();
  
    // console.log(categories[j].id, categories[j].value, categories[j].checked)
}

makeList();
options.addEventListener('click', handleClick);


