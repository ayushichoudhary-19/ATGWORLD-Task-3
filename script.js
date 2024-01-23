document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".submit-button");
  const input = document.querySelector(".input");
  const loadingIcon = document.querySelector(".loading-icon");
  let actionCompleted = false;

  button.addEventListener("click", handleButtonClick);

  function handleButtonClick() {
    if (actionCompleted) {
      return;
    }

    loadingIcon.style.display = "inline";
    button.disabled = true;
    input.disabled = true;

    setTimeout(function () {
      loadingIcon.style.display = "none"; 
      button.disabled = false;
      input.disabled = false;
      actionCompleted = true;
      input.classList.add("input-success");
      button.classList.add("button-success");
    }, 2000);
  }
});
