const articles = document.querySelectorAll(".card");
const container = document.querySelector(".cardcontainer");

container.addEventListener("scroll", () => {
  articles.forEach((article) => {
    console.log(article);
    const rect = article.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    console.log("scroll");
    // Vérifie si l'élément est au centre
    const isCentered =
      rect.left >= containerRect.left + containerRect.width / 4 &&
      rect.right <= containerRect.right - containerRect.width / 4;
    if (isCentered) {
      article.classList.remove("grey");
    } else {
      article.classList.add("grey");
    }
  });
});
