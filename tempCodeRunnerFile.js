async function getSongs() {
    let a = await fetch('http://127.0.0.1:3000/songs/');
    let ans = await a.text();
    let div = document.createElement("div");
    div.innerHTML = ans;
    let as = div.getElementsByTagName("a");
    let songsarr = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songsarr.push(element.href);
        }
    }
    return songsarr;
}
async function songs() {
    let sgns = await getSongs();
    console.log(sgns);
    
}
