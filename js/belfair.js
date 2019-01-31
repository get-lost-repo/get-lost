'use strict'

// ****************************************************
// Global variables for world domination and Dom access
// **************************************************** 
var commentList = document.getElementById('comment-list');
var commentForm = document.getElementById('comment-form');
var belfairComments = [];

var dataBack = JSON.parse(localStorage.getItem('belfairComments'));
// ****************************************************
// Constructor for constructing the comments
// ****************************************************
var Comment = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = this.userName + ' says ' + this.text;
  return liEl;
};

// *****************************************************
// FUNCTION DECLARATIONS
// *****************************************************

// This function goes through the array of comments and calls the render() method on each one //
function renderAllComments(){
  commentList.innerHTML = '';

  for (var i = 0; i < belfairComments.length; i++){
    commentList.appendChild(belfairComments[i].render());
  }
}

// EVENT HANDLER FUNCTION FOR SUBMISSION OF COMMENTS
function handleCommentSubmit(event){
console.log(event.target.says.value);

event.preventDefault(); //prevents page load on submit

var commenter = event.target.who.value;
var remark = event.target.says.value;

var newComment = new Comment(commenter, remark);

event.target.who.value = null;
event.target.says.value = null;

belfairComments.unshift(newComment);
renderAllComments();
}

//*************************************************** 
// EVENT LISTENER FOR COMMENT SUBMISSION FORM 

commentForm.addEventListener('submit', handleCommentSubmit);


localStorage.setItem('belfairCommentsStringified', JSON.stringify(belfairComments));

