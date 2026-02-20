// const a1 = [1,2,3,4,5]
// const a2 = [3,4,5,6,7]
// let result = [];
// let j = 0;
// for(let i = 0; i < a1.length; i++){
//     if(a1[i] === a2[j]){
//         result.push(a1[i]);
//         j++;
//     }

// }
// console.log(result);
// let arr = [1,2,3,4,5]
// let mul = arr.reduce((acc,curr)=>{
//     return acc * curr ;
// },1)
// console.log(mul)
let songsarr = [];
async function getSongs() {
 let response = await fetch("./songs.json");   // fetch JSON file
let data = await response.json();             // parse JSON
songsarr = data.map(song => song.url);        // extract URLs
return songsarr;

}

let audio = new Audio();
let i = 0;
let verifier = 0;

async function songs() {
  let sgns = await getSongs();
  console.log(sgns);        // check loaded songs
  audio.src = songsarr[i];  // start with first song

}
songs();
// function playsong() {
//    audio.src = songsarr[0]

// audio.play();

// }[0]

function playsong() {
  // audio.src = songsarr[i]
  verifier++;
  console.log(verifier);

  let bt = document.querySelectorAll(".plysongbtn");
  bt.forEach((btn, index) => {

    btn.addEventListener("click", () => {
      i = index;
      
      audio.src = songsarr[i];
        let tempsg = getSongname(songsarr[i]);

      console.log(removesng_slash(tempsg));
  let removed_slash = removesng_slash(tempsg);
  console.log(getSongname(songsarr[i]))
  // document.getElementById("songname").innerText = getSongname(songsarr[i]);
  document.getElementById("songname").innerText = removed_slash;
      document.getElementById("songname").innerText = removed_slash;
      audio.play();
      document.getElementById("play_btn").src = "pauseee.svg";
     
    });
  });
}
function pause_play_Song() {
  if (verifier === 0) {
    alert("Play Song Firt From Album !! 🙄");
    return;
  }
  if (audio.paused) {
    
    let tempsg = getSongname(songsarr[i]);

      console.log(removesng_slash(tempsg));
  let removed_slash = removesng_slash(tempsg);
  console.log(getSongname(songsarr[i]))
  // document.getElementById("songname").innerText = getSongname(songsarr[i]);
  document.getElementById("songname").innerText = removed_slash;
      document.getElementById("songname").innerText = removed_slash;
    audio.play();
    document.getElementById("play_btn").src = "pauseee.svg";
  } else {
    console.log(verifier);
    audio.pause();

    document.getElementById("play_btn").src = "playbar_play.png.png";
  }
}
function previous_button() {
  document.getElementById("play_btn").src = "pauseee.svg";
  if (i > 0) {
    i--;
    audio.src = songsarr[i];
    // console.log(removesng_slash(tempsg));
  let tempsg = getSongname(songsarr[i]);

  let removed_slash = removesng_slash(tempsg);
  console.log(getSongname(songsarr[i]))
  // document.getElementById("songname").innerText = getSongname(songsarr[i]);
  document.getElementById("songname").innerText = removed_slash;
    document.getElementById("songname").innerText = removed_slash
    audio.play();
  } else {
    alert("No previous songs availbale");
  }
}
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";

  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
function getSongname(urle) {
  return decodeURIComponent(urle.split("/").pop().replace(".mp3", ""));
}
function removesng_slash(slashed_url){
  return slashed_url.split("\\").pop();
}

audio.addEventListener("loadedmetadata", () => {
  if (verifier > 0) {
    document.getElementById("duration").innerText = formatTime(audio.duration);
    
  }
  else{
    document.getElementById("duration").innerText = "00/00";
  }
});
audio.addEventListener("timeupdate", () => {
  document.getElementById("currentTime").innerText = formatTime(
    audio.currentTime,
  );
  let percent = (audio.currentTime / audio.duration) * 100;
  percent = percent - 2;
  document.getElementById("circle").style.left = percent + "%";
});
function next_button() {
  i++;
  if (songsarr[i] == undefined) {
    alert("No next songs available");
    document.getElementById("play_btn").src = "playbar_play.png.png";
  }
  document.getElementById("play_btn").src = "pauseee.svg";
  audio.src = songsarr[i];
  let tempsg = getSongname(songsarr[i]);
  console.log(removesng_slash(tempsg));
  let removed_slash = removesng_slash(tempsg);
  console.log(getSongname(songsarr[i]))
  // document.getElementById("songname").innerText = getSongname(songsarr[i]);
  document.getElementById("songname").innerText = removed_slash;
  audio.play();
}
document.getElementById("seekbar").addEventListener("click", (e) => {
  let Dist_fromScrren = e.target.getBoundingClientRect();
  let Dist_fromSeekBar = e.clientX - Dist_fromScrren.left;
  let width = Dist_fromScrren.width;
  let Dist_fromScreen_percentage = Dist_fromSeekBar / width;
  audio.currentTime = Dist_fromScreen_percentage * audio.duration;
});
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  document.getElementById("conatiner2").style.left = "0";
});
document
  .getElementById("cancel_hamburger_img")
  .addEventListener("click", () => {
    document.getElementById("conatiner2").style.left = "-1000%";
  });
let crdcontainer = document.querySelectorAll(".cards_conatiner");
let leftarrow = document.getElementById("leftArrow");
let righttarrow = document.getElementById("rightArrow");




// crdcontainer.addEventListener("scroll", arrowUpdate);
// window.addEventListener("resize", arrowUpdate);
// window.addEventListener("load", arrowUpdate);
// 🔒 Strong DevTools deterrent (not 100% foolproof)


document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});




/* For High Level Of Security use below code */
// (function () {
//   // Disable right click
//   document.addEventListener("contextmenu", e => e.preventDefault());

//   // Disable common DevTools shortcuts
//   document.addEventListener("keydown", function (e) {
//     const key = e.key.toLowerCase();

//     // F12
//     if (key === "f12") e.preventDefault();

//     // Ctrl+Shift+I/J/C
//     if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
//       e.preventDefault();
//     }

//     // Ctrl+U (view source)
//     if (e.ctrlKey && key === "u") e.preventDefault();
//   });

//   // Detect DevTools open
//   setInterval(function () {
//     const devtoolsOpen =
//       window.outerWidth - window.innerWidth > 160 ||
//       window.outerHeight - window.innerHeight > 160;

//     if (devtoolsOpen) {
//       document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;'>DevTools is not allowed 🚫</h1>";
//     }
//   }, 1000);

// })();

