'use strict'

var categories = document.getElementById('categories');
var dayHiking = [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
var paddling = [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
var climbing = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
var beach = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,]
var fishing = [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
var rv = [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]

function handleClick(event){
  if (event.target.id === 'dayHiking'){
    var stringifieddayHiking = JSON.stringify(dayHiking);
    localStorage.setItem('checkedKey', stringifieddayHiking)
  }
  if (event.target.id === 'paddling'){
    var stringifiedpaddling = JSON.stringify(paddling);
    localStorage.setItem('checkedKey', stringifiedpaddling)
  }
  if (event.target.id === 'climbing'){
    var stringifiedclimbing = JSON.stringify(climbing);
    localStorage.setItem('checkedKey', stringifiedclimbing)
  }
  if (event.target.id === 'beach'){
    var stringifiedbeach = JSON.stringify(beach);
    localStorage.setItem('checkedKey', stringifiedbeach)
  }
  if (event.target.id === 'fishing'){
    var stringifiedfishing = JSON.stringify(fishing);
    localStorage.setItem('checkedKey', stringifiedfishing)
  }
  if (event.target.id === 'rvs'){
    var stringifiedrv = JSON.stringify(rv);
    localStorage.setItem('checkedKey', stringifiedrv)
  }
}

categories.addEventListener('click', handleClick);