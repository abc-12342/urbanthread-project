function checkDashboardLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}


function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
 }


window.onload = () => {
    checkDashboardLogin();
    setupHeaderScrollEffect();
    setupProductHover();
    setupFilter();
};


function setupHeaderScrollEffect() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
         header.style.boxShadow = "0 3px 8px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow = "0 0 5px rgba(0,0,0,0.1)";
        }
 });
}


function setupProductHover() {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
}

function setupFilter() {
    const filterSelect = document.querySelector(".header-right select");
    const products = document.querySelectorAll(".product-card");

    filterSelect.addEventListener("change", () => {
        const value = filterSelect.value;

        products.forEach(card => {
            const title = card.querySelector(".product-title").innerText.toLowerCase();

            if (value === "All Products") {
                card.style.display = "block";
            } else if (value === "Clothing") {
                card.style.display = "block"; // Add real category logic later
            } else {
                card.style.display = "none";
            }
        });
    });
}


function addLogout() {
    const headerRight = document.querySelector(".header-right");

    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logout";
    logoutBtn.style.padding = "8px 12px";
    logoutBtn.style.marginLeft = "10px";
    logoutBtn.style.cursor = "pointer";

    logoutBtn.onclick = logout;
    headerRight.appendChild(logoutBtn);
}

addLogout();
