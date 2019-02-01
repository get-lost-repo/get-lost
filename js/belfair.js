'use strict'

// ****************************************************
// Global variables for world domination and Dom access
// **************************************************** 
var commentList = document.getElementById('comment-list');
var commentForm = document.getElementById('comment-form');
var belfairComments = [];


// ****************************************************
// Constructor for constructing the comments
// ****************************************************
var Comment = function(userName, text) {
  this.userName = userName;
  this.text = text;
  belfairComments.unshift(this);
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = this.userName + ' says ' + this.text;
  return liEl;
};

var dataBack = JSON.parse(localStorage.getItem('belfairCommentsStringified'));
var reversedDataBack = []
function reverse(){
  if(! dataBack){
    console.log('this might work')
  }else{
    for(var i = 0; i<dataBack.length; i++){
      reversedDataBack.unshift(dataBack[i])
    }
  }
}
reverse();
// ***********************************************************************
// GETS THE DATA BACK FROM LOCAL STORAGE AND THEN RUNS THROUGH CONSTRUCTOR
// ***********************************************************************
if (! dataBack) {
  console.log('no comments to render');
} else {
  for (var i=0; i < dataBack.length; i++){
    new Comment(reversedDataBack[i].userName, reversedDataBack[i].text);
  }
  // belfairComments = dataBack;
  renderAllComments();
}



// for (var i=0; i < dataBack.length; i++){
//   new Comment(dataBack[i].userName, dataBack[i].text);
// }
//*****************************************************************************


// EVENT HANDLER FUNCTION FOR SUBMISSION OF COMMENTS
function handleCommentSubmit(event){

event.preventDefault(); //prevents page load on submit

var commenter = event.target.who.value;
var remark = event.target.says.value;

var newComment = new Comment(commenter, remark);

event.target.who.value = null;
event.target.says.value = null;

// Comment.belfairComments.unshift(newComment);

renderAllComments();
localStorage.setItem('belfairCommentsStringified', JSON.stringify(belfairComments));
return;
}


//**********************************************************************************
 // Function goes through array of comments and calls the render() method on each one //

function renderAllComments(){
  commentList.innerHTML = '';

  for (var i = 0; i < belfairComments.length; i++){
    commentList.appendChild(belfairComments[i].render());
  }
}

//*************************************************** 
// EVENT LISTENER FOR COMMENT SUBMISSION FORM 

commentForm.addEventListener('submit', handleCommentSubmit);



