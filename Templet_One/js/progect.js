let ele = document.querySelector(".icon")
let Ul = document.querySelector(".ul_items")
ele.addEventListener("click", () => {
    Ul.style.display === "none" ? Ul.style.display = "block" : Ul.style.display = "none";
})