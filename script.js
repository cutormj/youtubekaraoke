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
                    <li>
                    <a href="https://cutormj.github.io/youtubekaraoke/support.php?songId=${item.id.videoId}">
                    ${item.snippet.title}
                    </a>
                    </li>
                    `
                $("#videos").append(video)
            });
        })

    }
    
})
