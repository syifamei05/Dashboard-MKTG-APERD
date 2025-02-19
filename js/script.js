// home.html => canvas bar chart value

document.addEventListener("DOMContentLoaded", function () {
    // Total AUM Chart
    var ctxAUM = document.getElementById("barChartAUM").getContext("2d");
    var barChartAUM = new Chart(ctxAUM, {
        type: "bar",
        data: {
            labels: ["Bareksa", "MNC Sekuritas", "IPOT", "Bank DBS", "AJAIB", "INVESNOW"],
            datasets: [
                {
                    label: "Total AUM (Rp)",
                    data: [535188996, 6027186088, 1279968236, 4091320561, 502844166, 1313491953],
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{  // ✅ Ensure this is inside an array
                    ticks: {
                        beginAtZero: true, // ✅ Forces the Y-axis to start from zero
                    },
                }],
            },
        },
    });

    // Total NOA Chart
    var ctxNOA = document.getElementById("barChartNOA").getContext("2d");
    var barChartNOA = new Chart(ctxNOA, {
        type: "bar",
        data: {
            labels: ["Bareksa", "MNC Sekuritas", "IPOT", "Bank DBS", "AJAIB", "INVESNOW"],
            datasets: [
                {
                    label: "Total NOA (Accounts)",
                    data: [1245, 982, 1603, 890, 1429, 1351],
                    backgroundColor: "rgba(153, 102, 255, 0.6)",
                    borderColor: "rgba(153, 102, 255, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{  // ✅ Corrected this part
                    ticks: {
                        beginAtZero: true, // ✅ Ensures numbers start from zero
                    },
                }],
            },
        },
    });
});



// ADD REMOVE BUTTON LIST ITEMS

// v3
// const inputBox = document.querySelector('#input-box');
// const addButton = document.querySelector('#add-button');
// const removeButton = document.querySelector('#remove-button');
// const list = document.querySelector('.list');

// // Load the list from localStorage when the page loads
// document.addEventListener('DOMContentLoaded', loadList);

// function loadList() {
//     const storedItems = JSON.parse(localStorage.getItem('listItems')) || [];
//     list.innerHTML = ''; // Clear the list before repopulating

//     storedItems.forEach(itemText => {
//         const li = document.createElement('li');
//         li.innerHTML = `<a href="#">${itemText}</a>`;
//         list.appendChild(li);
//     });
// }

// function saveList() {
//     const items = Array.from(list.getElementsByTagName('li')).map(li => li.textContent.trim());
//     localStorage.setItem('listItems', JSON.stringify(items));
// }

// function addLists() {
//     if (inputBox.value.trim() === '') {
//         alert('Please input the name!');
//         return;
//     }

//     const newItemText = inputBox.value.trim();
//     const existingItems = JSON.parse(localStorage.getItem('listItems')) || [];

//     // Prevent duplicate items
//     if (existingItems.includes(newItemText)) {
//         alert('This item already exists in the list!');
//         inputBox.value = '';
//         return;
//     }

//     const li = document.createElement('li');
//     li.innerHTML = `<a href="#">${newItemText}</a>`;
//     list.appendChild(li);

//     existingItems.push(newItemText);
//     localStorage.setItem('listItems', JSON.stringify(existingItems));

//     inputBox.value = '';
// }

// function removeLists() {
//     if (inputBox.value.trim() === '') {
//         alert('Please enter the name of the item you want to remove!');
//         return;
//     }

//     const itemToRemove = inputBox.value.trim();
//     let existingItems = JSON.parse(localStorage.getItem('listItems')) || [];

//     if (!existingItems.includes(itemToRemove)) {
//         alert('Item not found in the list!');
//         return;
//     }

//     const confirmDelete = confirm(`Are you sure you want to remove "${itemToRemove}" from the list?`);
//     if (confirmDelete) {
//         existingItems = existingItems.filter(item => item !== itemToRemove);
//         localStorage.setItem('listItems', JSON.stringify(existingItems));
//         loadList(); // Reload the updated list
//     }

//     inputBox.value = '';
// }

// addButton.addEventListener('click', addLists);
// removeButton.addEventListener('click', removeLists);

// inputBox.addEventListener('keyup', (event) => {
//     if (event.which === 13) {
//         addLists();
//     }
// });


// // NEW VERSION v2.0
const inputBox = document.querySelector('#input-box');
const addButton = document.querySelector('#add-button');
const removeButton = document.querySelector('#remove-button');
const list = document.querySelector('.list');

function addLists() {
    if (inputBox.value === '') {
        alert('Please input the name!');
    } else {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${inputBox.value}</a>`;
        list.appendChild(li);
        inputBox.value = '';
    }
}

function removeLists() {
    if (inputBox.value === '') {
        alert('Please enter the name of the item you want to remove!');
        return;
    }

    const items = list.getElementsByTagName('li');
    let found = false;

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === inputBox.value.trim()) {
            const confirmDelete = confirm(`Are you sure you want to remove "${inputBox.value}" from the list?`);
            if (confirmDelete) {
                list.removeChild(items[i]);
            }
            found = true;
            break;
        }
    }

    if (!found) {
        alert('Item not found in the list!');
    }

    inputBox.value = '';
}

addButton.addEventListener('click', addLists);
removeButton.addEventListener('click', removeLists);

inputBox.addEventListener('keyup', (event) => {
    if (event.which === 13) {
        addLists();
    }
});