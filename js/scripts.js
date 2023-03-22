$(document).ready(function () {
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
});

$(document).ready(function () {
  const data = [
    {
      ID: 1,
      SKU: "	10F22JAC008_004",
      NAME: "	Áo Khoác Nam Tay Dài Trơn Túi Oversize Form Regular - Routine 10F22JAC008",
      COLOR: "PARTRIDGE",
      SIZE: "M",
      TOTAL: 1,
    },
    {
      ID: 1,
      SKU: "	10F22JAC008_004",
      NAME: "	Áo Khoác Nam Tay Dài Trơn Túi Oversize Form Regular - Routine 10F22JAC008",
      COLOR: "PARTRIDGE",
      SIZE: "M",
      TOTAL: 1,
    },
    {
      ID: 1,
      SKU: "	10F22JAC008_004",
      NAME: "	Áo Khoác Nam Tay Dài Trơn Túi Oversize Form Regular - Routine 10F22JAC008",
      COLOR: "PARTRIDGE",
      SIZE: "M",
      TOTAL: 1,
    },
    {
      ID: 1,
      SKU: "	10F22JAC008_004",
      NAME: "	Áo Khoác Nam Tay Dài Trơn Túi Oversize Form Regular - Routine 10F22JAC008",
      COLOR: "PARTRIDGE",
      SIZE: "M",
      TOTAL: 1,
    },
    {
      ID: 1,
      SKU: "	10F22JAC008_004",
      NAME: "	Áo Khoác Nam Tay Dài Trơn Túi Oversize Form Regular - Routine 10F22JAC008",
      COLOR: "PARTRIDGE",
      SIZE: "M",
      TOTAL: 1,
    },
  ];
  loadData(data);
  function loadData(data) {
    var table = document.getElementById("tb-detail");
    table.innerHTML = ``;
    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
     <td>${data[i].ID}</td>
     <td>${data[i].SKU}</td>
     <td>${data[i].NAME}</td>
     <td>${data[i].COLOR}</td>
     <td>${data[i].SIZE}</td>
     <td>${data[i].TOTAL}</td>
                       </tr>`;
      table.innerHTML += row;
    }
  }
});
