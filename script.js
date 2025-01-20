const form = document.querySelector("form");
const card_1 = document.querySelector(".container");
const card_2 = document.querySelector(".pop-ups");
const dismiss = document.querySelector("#dismiss");

form.addEventListener("submit", (e) =>
{
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");
});
//close the pop-up
dismiss.addEventListener("click", () =>
{
  card_1.classList.remove("hide");
  card_2.classList.add("hide");
});