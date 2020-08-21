window.onload = function () {
    var yt_api_key = "AIzaSyBzbryflqWNAZKG8Q1SKmLpEII--pVNMdk",
        yt_video_id = "PL2YP6Z8YoozvWBb9Ej5PZikhlvfVoLogl",
        yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId="+yt_video_id+"&key="+yt_api_key;
    var ol = document.getElementById("lessonsid");
    ol.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            var jqxhr = $.getJSON(yt_snippet_endpoint)
                .done(function(data) {
                    // console.log(data.items[i].snippet.title);
                    var loc="https://www.youtube.com/embed/"+data.items[e.target.id.substring(3)-1].snippet.resourceId.videoId;
                    document.getElementById("lesvid").src = loc;
                })
                .fail(function() {
                    alert("Error");
                });
            var x = document.querySelectorAll("li");
            for (let i = 0; i< x.length; i++) {
                x[i].style.background = "white";
            }
            e.target.style.background="linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%)";

        }
    });
    function getTitle(snippet_json_data){
        var title = snippet_json_data.description;
        console.log(title);
        return title;
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function youtubetest(){
    var videourl="https://www.youtube.com/watch?v=hU0T-tUdD-A";
    var apikey="AIzaSyBzbryflqWNAZKG8Q1SKmLpEII--pVNMdk";

}
