// function getUniqueValuesFromColumn() {
//   var unique_col_values_dict = {};
//   allFilters = document.querySelectorAll(".table-filter");
//   allFilters.forEach((filter_i) => {
//     col_index = filter_i.parentElement.getAttribute("col-index");
//     const rows = document.querySelectorAll("#item-table > tbody > tr");

//     rows.forEach((row) => {
//       cell_value = row.querySelector(
//         "td:nth-child(" + col_index + ")"
//       ).innerHTML;
//       if (col_index in unique_col_values_dict) {
//         if (unique_col_values_dict[col_index].includes(cell_value)) {
//         } else {
//           unique_col_values_dict[col_index].push(cell_value);
//         }
//       } else {
//         unique_col_values_dict[col_index] = new Array(cell_value);
//       }
//     });
//   });
//   updateSelectOptions(unique_col_values_dict);
// }

// function updateSelectOptions(unique_col_values_dict) {
//   allFilters = document.querySelectorAll(".table-filter");

//   allFilters.forEach((filter_i) => {
//     col_index = filter_i.parentElement.getAttribute("col-index");

//     unique_col_values_dict[col_index].forEach((i) => {
//       filter_i.innerHTML =
//         filter_i.innerHTML + `\n<option value="${i}">${i}</option>`;
//     });
//   });
// }
// function filter_rows() {
//   allFilters = document.querySelectorAll(".table-filter");
//   var filter_value_dict = {};

//   allFilters.forEach((filter_i) => {
//     col_index = filter_i.parentElement.getAttribute("col-index");

//     value = filter_i.value;
//     if (value != "all") {
//       filter_value_dict[col_index] = value;
//     }
//   });
//   var col_cell_value_dict = {};
//   const rows = document.querySelectorAll("#item-table tbody tr");
//   rows.forEach((row) => {
//     var display_row = true;
//     allFilters.forEach((filter_i) => {
//       col_index = filter_i.parentElement.getAttribute("col-index");
//       col_cell_value_dict[col_index] = row.querySelector(
//         "td:nth-child(" + col_index + ")"
//       ).innerHTML;
//     });
//     for (var col_i in filter_value_dict) {
//       filter_value = filter_value_dict[col_i];
//       row_cell_value = col_cell_value_dict[col_i];
//       if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
//         display_row = false;
//         break;
//       }
//     }
//     if (display_row == true) {
//       row.style.display = "table-row";
//     } else {
//       row.style.display = "none";
//     }
//   });
// }
var myArray = [
  {
    image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
    PGCode: "10POL01",
    quantity: "10",
    revenue: 90,
  },
  {
    image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
    PGCode: "10POL02",
    quantity: "20",
    revenue: 89,
  },
  {
    image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
    PGCode: "10POL03",
    quantity: "30",
    revenue: 85,
  },
  {
     image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
     PGCode: "10POL04",
     quantity: "40",
     revenue: 80,
   },
   {
     image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
     PGCode: "29",
     quantity: "2000",
     revenue: 5,
   },
   {
     image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
     PGCode: "29",
     quantity: "2000",
     revenue: 4,
   },
   {
     image: "https://img.icons8.com/ios-glyphs/30/null/short-sleeve-shirt.png",
     PGCode: "29",
     quantity: "2000",
     revenue: 5,
   },
];
$(".bg-info th").on("click", function () {
  var column = $(this).data("column");
  var order = $(this).data("order");
  var text = $(this).html();
  text = text.substring(0, text.length - 1);

  if (order == "desc") {
    $(this).data("order", "asc");
    myArray = myArray.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    text += "&#9660";
  } else {
    $(this).data("order", "desc");
    myArray = myArray.sort((a, b) => (a[column] < b[column] ? 1 : -1));
    text += "&#9650";
  }
  $(this).html(text);
  buildTable(myArray);
});

buildTable(myArray);

function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = ``;
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
     <td><img src='${data[i].image}'</td>
     <td>${data[i].PGCode}</td>
     <td>${data[i].quantity}</td>
     <td>${data[i].revenue}</td>
                       </tr>`;
    table.innerHTML += row;
  }
}
