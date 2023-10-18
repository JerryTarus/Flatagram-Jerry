document.addEventListener("DOMContentLoaded", () => {});

// Post content displayed
const titleDisplayed = document.querySelector("#card-title");
const imageDisplayed = document.querySelector("#card-image");
const likesDisplayed = document.querySelector("#like-count");

// Comments content displayed
const commentsList = document.querySelector("#comments-list");
const heartButton = document.querySelector("#like-button");

// Adding likes after click
let likesAdded = document.querySelector(".likes");
let likesCount = 0;
likesAdded.textContent = likesCount;

// Fetching images from db.json
fetch("http://localhost:3000/images")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((posts) => {
      imageDisplayed.src = posts.image;
      titleDisplayed.innerHTML = posts.title;
      likesDisplayed.innerHTML = `${posts.likes} likes`;
    })
  );

// Fetching comments from db.json
fetch("http://localhost:3000/comments")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((commentMade) => {
      commentsList.innerHTML = commentMade.content;
    })
  );

// Adding likes event handler
heartButton.addEventListener("click", () => {
  likesCount++;
  likesAdded.innerHTML = `${likesCount} likes`;
});
