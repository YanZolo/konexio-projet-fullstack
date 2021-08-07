let listCountries = "";
let listInfosCountries = "";
let inputValue = "";

$(function () {
    $("#btnShowData").click(function () {
        $("#listCountries").css("display", "block");
        $.ajax({
            url: "http://localhost:8000/all",
            success: getAllCountries
        });
    });

    $("#btnReset").click(function () {
        $("#listCountries").css("display", "none");
        $("#infosCountry").css("display", "none");
        listCountries = "";
        listInfosCountries = "";
        inputValue = "";
    });

    $("#btnSearch").click(function () {

        inputValue = $("#inputSearch").val();
        if (inputValue === "") {
            $("#inputSearch").attr("placeholder","enter a country name");
        } else {
            $.ajax({
                url: "http://localhost:8000/" + inputValue,
                success: getCountry
            });
        }
    });


})
function getAllCountries(data, status, response) {

    let dataJson = data;
    for (let i = 0; i < dataJson.length; i++) {
        listCountries += `<li>${dataJson[i]} </li>`;
    }
    $("#listCountries").html(listCountries);
    $("#listCountries").css("display", "block");
    console.log("uploaded countries data with success");
}

function getCountry(data, status, response) {
    let dataJson = data;
    listInfosCountries = `<li>${dataJson}</li>`
    $("#infosCountry").html(listInfosCountries)
    $("#infosCountry").css("display", "block");
    console.log("uploaded country data with success")
}






// document.addEventListener("DOMContentLoaded", function () {

//     let btn = document.querySelector("#btnShowData");
//     let container = document.querySelector("#container");
//     btn.addEventListener("click", function () {
//         var request = new XMLHttpRequest();

//         request.open('GET', 'https://restcountries.eu/rest/v2/name/france', true);
//         request.onload = function () {
//             if (this.status >= 200 && this.status < 400) {
//                 let data = JSON.parse(this.response)
//                 console.log(data[0].name);
//                 console.log(data[0].capital);
//                 container.innerText(data[0].name)
//             } else {
//                 console.log('error return information')
//             }
//         };
//         request.onerror = function () {
//             console.log('error connection')
//         };
//         request.send();
//     });
// });