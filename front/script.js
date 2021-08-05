
// $(function(){

//     $("#btnShowData").click(function(){
//         $.ajax({
//             url: "http://localhost:8000/all",
//             success : getAllCountries()
//         });

//     })

// })

// function getAllCountries(data, status, response) {
    
//     console.log(JSON.parse(data[0].name))
//     console.log(response)
//     let dataC = response[0].name
//     $("#container").html(dataC)
// }

document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector("#btnShowData");
    let container = document.querySelector("#container");
    btn.addEventListener("click", function () {
        var request = new XMLHttpRequest();

        request.open('GET', 'https://restcountries.eu/rest/v2/name/france', true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.response)
                console.log(data[0].name);
                console.log(data[0].capital);
                container.innerHTML(data[0].name)
            } else {
                console.log('error return information')
            }
        };
        request.onerror = function () {
            console.log('error connection')
        };

        request.send();
    });

});