const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItems = document.getElementById("no-items");
const cart = [];
const menuItems = [
    { name: "Hamburger", price: 2.99 },
    { name: "Cheeseburger", price: 3.99 },
    { name: "Cheese Pizza", price: 3.99 },
    { name: "Pepperoni Pizza", price: 4.99 },
    { name: "Sausage Pizza", price: 4.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Fries", price: 1.99 },
    { name: "Onion Rings", price: 2.49 }
];

function showCart() {
    cartTable.innerHTML = "<tr><th>Item Name</th><th>Price</th><th>Special Request</th><th>Actions</th></tr>";

    if (cart.length === 0) {
        noItems.style.display = "table-row";
    } else {
        noItems.style.display = "none";
    }

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const row = document.createElement("tr");
        const nameArea = document.createElement("td");
        const priceArea = document.createElement("td");
        const requestArea = document.createElement("td");
        const actionArea = document.createElement("td");
        const textarea = document.createElement("textarea");
        const removeButton = document.createElement("button");

        nameArea.textContent = cart[i].name;
        row.appendChild(nameArea);

        priceArea.textContent = "$" + cart[i].price;
        row.appendChild(priceArea);

        textarea.value = cart[i].specialRequest;
        textarea.onchange = function(e) {
            cart[i].specialRequest = e.target.value;
        };
        requestArea.appendChild(textarea);
        row.appendChild(requestArea);

        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            cart.splice(i, 1);
            showCart();
        };
        actionArea.appendChild(removeButton);
        row.appendChild(actionArea);
        cartTable.appendChild(row);

        total = total + cart[i].price;
    }

    const totalRow = document.createElement("tr");
    const totalLabel = document.createElement("td");
    const totalPrice = document.createElement("td");
    totalPrice.colSpan = 3;
    totalPrice.textContent = "$" + total.toFixed(2);
    totalLabel.textContent = "Total";

    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalPrice);
    cartTable.appendChild(totalRow);
}

for (let i = 0; i < menuItems.length; i++) {
    const li = document.createElement("li");
    li.textContent = menuItems[i].name + " - $ " + menuItems[i].price; 
    
    const button = document.createElement("button");
    button.textContent = "+";
    button.setAttribute("data-name", menuItems[i].name);
    button.setAttribute("data-price", menuItems[i].price);

    button.onclick = function() {
        const name = button.getAttribute("data-name");
        const price = menuItems[i].price;
        cart.push({
            name: name,
            price: price,
            specialRequest: "",
            additionalInfo: ""
        });
        showCart();
    };
    li.appendChild(button);
    menuList.appendChild(li);
}

showCart();