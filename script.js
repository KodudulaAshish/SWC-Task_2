console.log("Started");

const API_KEY = "api_key=38b8d2bcefa0333cdf8237e6be700817";
const BASE_URL ="https://api.themoviedb.org/3";
const API_URL = BASE_URL + '/discover/movie/?sort_by=popularity.desc&' + API_KEY;
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

fetch(API_URL)
.then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    for(i=0;i<data.results.length;i++){
    let element = 
    `<div id="item${i}" class="w-[260px] flex-col justify-center mx-[28px] my-3 poster">
        <div class="">
            <img class="moviecard text-clip" src="`+IMG_BASE_URL+`${data.results[i].poster_path}">
        </div>
        <div class="title font-medium pl-10 justify-center">${data.results[i].title}</div>
        <div class="rating flex w-[260px]">
            <div>❤️ ${data.results[i].vote_average}</div>
            <div class="pl-[130px]">${data.results[i].vote_count} votes</div>
    </div>`;

    var container = document.getElementById('menu');
    container.innerHTML += element;
    }


    var button = document.getElementById("search");
    button.addEventListener("click",() => {
        console.log("Searching....");

        for(i=0;i<data.results.length;i++){
            document.getElementById('item'+ i).hidden = true;
            if(data.results[i].title.includes(document.getElementsByTagName("input")[0].value))
            {
                document.getElementById('item'+ i).hidden = false;
            }
            console.log("Done!")
        }
    })
}).catch(() => {
    let element = 
    `<div >Please check your network connection
            Couldn't fetch the database &nbsp; 🤕
    </div>`

    var container = document.getElementById('menu');
    container.innerHTML += element;
})

 