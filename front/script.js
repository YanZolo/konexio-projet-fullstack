$(function(){

    $("#btnShowData").click(function(){

        $.ajax({
            url: "http://localhost:8000/all",
            succes: function getAllCountries(data, status, response) {
                let text= "Konexio!"
                $("#container").html(text)
            }
        });

    })

    


})

