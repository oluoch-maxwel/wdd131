
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    if (input.value.trim() == '') {
        input.focus();
        return;
    }

    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    })

    input.value = "";
    input.focus();

})






