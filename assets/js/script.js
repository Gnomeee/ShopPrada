let iconHeart = document.querySelectorAll(".icon-heart");

for (let i = 0; i < iconHeart.length; i++) {
  iconHeart[i].addEventListener("click", function () {
    if (iconHeart[i].style.backgroundColor == "red") {
      iconHeart[i].style.backgroundColor = "white";
    } else {
      iconHeart[i].style.backgroundColor = "red";
    }
  });
}
