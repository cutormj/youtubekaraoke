$(document).ready(function(){
    var API_KEY = "AIzaSyBpIgocvh7ibNAbC0i8D1-K2Zhuj9TyjfU"

    $("#form").submit(function(event){
        event.preventDefault()
        alert("form is submitted)

        var search = $("#search").val()
        videoSearch(API_KEY, search, 10)
    })

    function videoSearch(key, search, maxResults){

        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key 
        + "&type=video&part=snippet&maxResults=" + maxResults + "$q=" + search, function(data){
            console.log(data)
        })

    }
})
