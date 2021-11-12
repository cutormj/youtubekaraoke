$(document).ready(function(){
    var API_KEY = "AIzaSyBpIgocvh7ibNAbC0i8D1-K2Zhuj9TyjfU"
    var video = ''

    $("#form").submit(function(event){
        event.preventDefault()
        var search = $("#search").val()
        videoSearch(API_KEY, search, 10)
    })

    function saveToQueue(){
        temp_song_id = document.getElementById("song").val;

        const song = {
            song_id = temp_song_id,
        };

        fetch('index.php', {
            method: 'post',
            body: JSON.stringify(song),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(function(response){
            return response.text();
        }).then(function (text){
            console.log(text);
        }).catch(function(error){
            console.error(error);
        })
    }

    function videoSearch(key, search, maxResults){

        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key 
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "karaoke", function(data){
            console.log(data)
            data.items.forEach(item => {
                video = `
                    <li>
                    <a id="song" onclick="saveToQueue" href="${item.id.videoId}">
                    ${item.snippet.title}
                    </a>
                    </li>
                    `
                $("#videos").append(video)
            });
        })

    }
})
