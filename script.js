let vitem = 0;
let sitem = 0;
let titem = 0;
let citem = 0;
let vgitem= 0;
let totalcost = 0;

function updateLocalStorage() {
    const cartData = {
        vitem,
        sitem,
        titem,
        citem,
        vgitem,
        totalcost,
    };
    localStorage.setItem('cartData', JSON.stringify(cartData));
}

function loadCartFromLocalStorage() {
    const storedData = localStorage.getItem('cartData');
    if (storedData) {
        const { vitem: v, sitem: s, titem: t, citem : c, vgitem : vg, totalcost: cost } = JSON.parse(storedData);
        vitem = v;
        sitem = s;
        titem = t;
        citem = c;
        vgitem = vg;
        totalcost = cost;
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    document.getElementById('vadapav').textContent = vitem > 0 ? `Vadapav: 15 X ${vitem} = ${15 * vitem}` : '';
    document.getElementById('samosa').textContent = sitem > 0 ? `Samosa: 15 X ${sitem} = ${15 * sitem}` : '';
    document.getElementById('tea').textContent = titem > 0 ? `Tea: 10 X ${titem} = ${10 * titem}` : '';
    document.getElementById('ckbiryani').textContent = citem > 0 ? `Chicken Biryani: 150 X ${citem} = ${150 * citem}` : '';
    document.getElementById('vbiryani').textContent = vgitem > 0 ? `Veg Biryani: 120 X ${vgitem} = ${120 * vgitem}` : '';


    document.getElementById('cost').textContent = totalcost > 0 ? `Total Cost: ${totalcost} aindi` : '';
}

function addvadapav() {
    totalcost += 15;
    vitem += 1;
    updateCartDisplay();
    updateLocalStorage();
}

function removadapav() {
    if (vitem > 0) {
        totalcost -= 15;
        vitem -= 1;
        updateCartDisplay();
        updateLocalStorage();
    }
}

function addsamosa() {
    totalcost += 15;
    sitem += 1;
    updateCartDisplay();
    updateLocalStorage();
}

function remsomosa() {
    if (sitem > 0) {
        totalcost -= 15;
        sitem -= 1;
        updateCartDisplay();
        updateLocalStorage();
    }
}

function addtea() {
    totalcost += 10;
    titem += 1;
    updateCartDisplay();
    updateLocalStorage();
}

function removtea() {
    if (titem > 0) {
        totalcost -= 10;
        titem -= 1;
        updateCartDisplay();
        updateLocalStorage();
    }
}

function addckbiryani() {
    totalcost += 150;
    citem += 1;
    updateCartDisplay();
    updateLocalStorage();
}

function removckbiryani() {
    if (citem > 0) {
        totalcost -= 150;
        citem -= 1;
        updateCartDisplay();
        updateLocalStorage();
    }
}
function addvbiryani() {
    totalcost += 120;
    vgitem += 1;
    updateCartDisplay();
    updateLocalStorage();
}

function remvbiryani() {
    if (vgitem > 0) {
        totalcost -= 120;
        vgitem -= 1;
        updateCartDisplay();
        updateLocalStorage();
    }
}


function buy() {

    // Get the name and amount from the form
    const amount = totalcost;
    const upiId = "saishyammatta@ybl"; // Replace with your UPI ID
    const transactionNote = "Donation"; // Transaction note
    const currency = "INR"; // Currency

    // UPI deep link for PhonePe or other UPI apps
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&tn=${transactionNote}&am=${amount}&cu=${currency}`;

    // Save the name and amount to local storage
    localStorage.setItem("donorName", name);
    localStorage.setItem("donationAmount", amount);

    // Redirect user to UPI app for donation
    window.location.href = upiUrl;

    // Optional: Update the UI to show a message
    document.getElementById("message").innerText = "Redirecting to PhonePe for payment...";
};
// Load cart data when the page loads
document.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);