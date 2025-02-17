

// var xyz = document.getElementById("barChart");

// var barChart = new Chart(xyz, {
//     type: "bar",
//     data: {
//         labels: ["X1", "X2", "X3"],
//         datasets: [{
//             label: "Bar Chart",
//             data: ["5", "10", "15", "20"],
//             backgroundColor: ["yellow", "orange", "red"]
//         },
//         ],
//     }
//   });

  document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("barChart").getContext("2d");
    var barChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Item 1", "Item 2", "Item 3", "Item 4"],
            datasets: [
                {
                    label: "Series 1",
                    data: [10, 15, 25, 30], // Adjust values as per your reference
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Series 2",
                    data: [5, 12, 20, 28], // Adjust values accordingly
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
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
