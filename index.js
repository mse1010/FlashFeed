const articles = document.querySelectorAll(".card");
const container = document.querySelector(".cardcontainer");

container.addEventListener("scroll", () => {
  articles.forEach((article) => {
    const rect = article.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    // Vérifie si l'élément est au centre

    let isCentered = null;
    if (window.innerWidth >= 1000) {
      isCentered =
        rect.left >= containerRect.left + containerRect.width / 4 &&
        rect.right <= containerRect.right - containerRect.width / 4;
    } else {
      isCentered =
        rect.top >= containerRect.top + containerRect.width / 4 &&
        rect.bottom <= containerRect.bottom - containerRect.width / 4;
    }

    if (isCentered) {
      article.classList.remove("grey");
    } else {
      article.classList.add("grey");
    }
  });
});
