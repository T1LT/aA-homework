document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items

  // --- your code here!
  const handleFavoriteSubmit = (e) => {
    e.preventDefault();
    const favoriteInput = document.querySelector(".favorite-input");
    const favorite = favoriteInput.value;
    favoriteInput.value = "";
    const li = document.createElement("li");
    li.textContent = favorite;
    const favoritesList = document.getElementById("sf-places");
    favoritesList.appendChild(li);
  };

  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", handleFavoriteSubmit);

  // adding new photos

  // --- your code here!
  const showPhotoForm = (e) => {
    const formDiv = document.querySelector(".photo-form-container");
    if (formDiv.className === "photo-form-container") {
      formDiv.className += " hidden";
    }
  };

  const photoShowButton = document.querySelector(".photo-show-button");
  photoShowButton.addEventListener("click", showPhotoForm);

  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const urlInput = document.querySelector(".photo-url-input");
    const photoUrl = urlInput.value;
    urlInput.value = "";
    const newImg = document.createElement("img");
    newImg.src = photoUrl;
    const li = document.createElement("li");
    li.appendChild(newImg);
    const dogPhotosList = document.querySelector(".dog-photos");
    dogPhotosList.appendChild(li);
  };

  const photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click", handlePhotoSubmit);
});
