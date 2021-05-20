let body = document.body;
let ul_1 = document.getElementsByTagName("ul")[0];
let ul_2 = document.getElementsByTagName("ul")[1];
let newli_1 = document.createElement("li")
newli_1.innerHTML = "1 2 3"

function randomNum(el) {
    return Math.floor(Math.random()* el);
};

body.addEventListener("click", (e) => {
    switch (e.target.value) {
        case "Delete First Child":
            ul_1.removeChild(ul_1.firstElementChild);
            break;
        case "Delete Last Child":
            ul_1.removeChild(ul_1.lastElementChild);
            break;
        case "Delete Random Child":
            ul_1.removeChild(ul_1.children[randomNum(ul_1.children.length)]);
        case "exercice 4":
            ul_2.replaceChild(newli_1, ul_2.children[1]);
        case "exercice 5":
            let newli_2 = document.createElement("li");
            let yourText = document.getElementById("replaceValue").value;
            newli_2.innerHTML = yourText;
            ul_2.replaceChild(newli_2, ul_2.children[2])
        default:
            break;
    }
})