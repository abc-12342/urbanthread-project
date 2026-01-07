if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

if (!localStorage.getItem("products")) {
    const products = [
        { id: 1, name: "Mocha Essential Sweatshirt", price: 599 },
        { id: 2, name: "Polar Classic Sweatshirt", price: 699 },
        { id: 3, name: "Urban Graywave Sweatshirt", price: 599 },
        { id: 4, name: "CoreActive Sweatshirt", price: 799 }
    ];
    localStorage.setItem("products", JSON.stringify(products));
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getProducts() {
    return JSON.parse(localStorage.getItem("products"));
}
