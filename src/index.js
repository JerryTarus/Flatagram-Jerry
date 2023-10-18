document.addEventListener("DOMContentLoaded", () => {
  // Post content displayed
  const titleDisplayed = document.querySelector("#card-title");
  const imageDisplayed = document.querySelector("#card-image");
  const likesDisplayed = document.querySelector("#like-count");

  // Comments content displayed
  const commentsList = document.querySelector("#comments-list");
  const heartButton = document.querySelector("#like-button");
  const commentForm = document.querySelector("#comment-form");
  const commentInput = document.querySelector("#comment");

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
        const commentItem = document.createElement("li");
        commentItem.textContent = commentMade.content;
        commentsList.appendChild(commentItem);
      })
    );

  // Adding likes event handler
  heartButton.addEventListener("click", () => {
    likesCount++;
    likesAdded.innerHTML = `${likesCount} likes`;
  });

  // Comment form submission handler
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const commentText = commentInput.value.trim(); // Get the trimmed comment text

    if (commentText !== "") {
      // Create a new list item for the comment
      const commentItem = document.createElement("li");
      commentItem.textContent = commentText;

      // Append the comment item to the comments list
      commentsList.appendChild(commentItem);

      // Clear the comment input
      commentInput.value = "";
    }
  });
});
