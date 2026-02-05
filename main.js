const items = document.querySelectorAll(".banner .slider .item");

let currentItem = null;

items.forEach(item => {
    item.addEventListener("click", () => {
        if (currentItem && currentItem !== item) {
            currentItem.classList.remove("focus");
        }
        item.classList.add("focus");
        currentItem = item;
    });
});

