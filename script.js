$(document).ready(function(){
    var API_KEY = "AIzaSyBpIgocvh7ibNAbC0i8D1-K2Zhuj9TyjfU"
    var video = ''

    $("#form").submit(function(event){
        event.preventDefault()

        var search = $("#search").val()
        videoSearch(API_KEY, search, 10)
    })

    function videoSearch(key, search, maxResults){

        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key 
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "karaoke", function(data){
            console.log(data)
            data.items.forEach(item => {
                video = `
                    <iframe width="420" heights="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0"
allowfullscreen></iframe>                `
                $("#videos").append(video)
            });
        })

    }
})
