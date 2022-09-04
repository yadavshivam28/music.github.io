const music = new Audio('1.mp3');
// music.play();

const songs = [
    {
        id: "1",
        songName: `On MY way<br><div class="subtitel"> Alan walker</div>`,
        poster: "1.jpg"
    },
    {
        id: "2",
        songName: `Fadded<br><div class="subtitel"> Alan walker</div>`,
        poster: "2.jpg"
    },
    {
        id: "3",
        songName: `Dil Diyaan Gaala<br><div class="subtitel"> Arijit Singh</div>`,
        poster: "3.jpg"
    },
    {
        id: "4",
        songName: `Naah<br><div class="subtitel"> Harrdy Sandhu</div>`,
        poster: "4.jpg"
    },
    {
        id: "5",
        songName: `NAJA<br><div class="subtitel"> PAV DHARI</div>`,
        poster: "5.jpg"
    },
    {
        id: "6",
        songName: `QUISMAT<br><div class="subtitel"> AMIY </div>`,
        poster: "6.jpg"
    },
    {
        id: "7",
        songName: `SUNA HAI<br><div class="subtitel"> ARJIT</div>`,
        poster: "7.jpg"
    },
    {
        id: "8",
        songName: `SUNA HAI<br><div class="subtitel"> NEHA KAKKAR</div>`,
        poster: "8.jpg"
    },
    {
        id: "9",
        songName: `DILBAR <br><div class="subtitel"> NEHA</div>`,
        poster: "9.jpg"
    },
    {
        id: "10",
        songName: `GALIYAN<br><div class="subtitel"> Alan walker</div>`,
        poster: "10.jpg"
    },
    {
        id: "11",
        songName: `LAHOR DI<br><div class="subtitel"> GURU</div>`,
        poster: "11.jpg"
    },
    {
        id: "12",
        songName: `PUTT<br><div class="subtitel"> DILJIT</div>`,
        poster: "12.jpg"
    },
    {
        id: "13",
        songName: `MIX<br><div class="subtitel"> ATIF ASLAM</div>`,
        poster: "13.jpg"
    },
    {
        id: "14",
        songName: `VASTE<br><div class="subtitel"> NISHA</div>`,
        poster: "14.jpg"
    },
    {
        id: "15",
        songName: `LUT GAYE<br><div class="subtitel">ARMAN</div>`,
        poster: "15.jpg"
    },
    {
        id: "16",
        songName: `MERI ZINDAGI HAI TU<br><div class="subtitel"> ARJIT</div>`,
        poster: "16.jpg"
    },
    {
        id: "17",
        songName: `ZAROORI THA<br><div class="subtitel"> RAHATH FATEH</div>`,
        poster: "17.jpg"
    },
    {
        id: "18",
        songName: `PASOORI<br><div class="subtitel"> Alan walker</div>`,
        poster: "18.jpg"
    },
    {
        id: "19",
        songName: `EXCUESES<br><div class="subtitel"> AP DHILLION</div>`,
        poster: "19.jpg"
    },
    {
        id: "20",
        songName: `ZALIMA<br><div class="subtitel"> ARJIT SINGH</div>`,
        poster: "20.jpg"
    },
    {
        id: "21",
        songName: `AAJ SE TERI<br><div class="subtitel"> ARJIT</div>`,
        poster: "21.jpg"
    }

]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.style.display = 'flex';
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        
    }
    else {
        music.pause();
        wave.style.display = 'none';
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let makeitAll=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
el.style.background='rgb(105, 105, 105, 0)';
    })

    }

    

let index = 0;
let title= document.getElementById('title');
let poster_master_play = document.getElementById('poster-master-play');
Array.from(document.getElementsByClassName('play-list-play')).forEach((e) => {
    e.addEventListener(('click'), (el) => {
        index = el.target.id;
        music.src = `${index}.mp3`;
        music.play();
        
        poster_master_play.src = `${index}.jpg`;
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill')
        title.innerHTML = songs[`${index}`-1].songName;
 makeitAll();
 Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105, 105, 105, 1)';
 wave.style.display = 'flex';

    });
   
});
let current_start= document.getElementById('current-start');
let current_end= document.getElementById('current-end');
let seek= document.getElementById('seek');
let bar2= document.getElementsByClassName('bar2');
let dot= document.getElementsByClassName('dot');

music.addEventListener('timeupdate',()=>{
    let music_cur=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`
    }
    current_end.innerHTML=`${min1}:${sec1}`;

    let min2=Math.floor(music_cur/60);
    let sec2=Math.floor(music_cur%60);
    if(sec1<10){
        sec1=`0${sec1}`
    }
    current_start.innerHTML=`${min2}:${sec2}`;

let progressBar=parseInt((music_cur/music_dur)*100);
seek.value=progressBar;
/*let seekbar= seek.value;
bar2.style.width=`${seekbar}%`;
dot.style.left=`${seekbar}%`*/

})
seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
   

})









let pop_song_left = document.getElementById('pop-song-left');
let pop_song_right = document.getElementById('pop-song-right');
let pop_songs = document.getElementsByClassName('pop-songs')[0];


pop_song_right.addEventListener('click', () => {
    pop_songs.scrollLeft += 300;
});
pop_song_left.addEventListener('click', () => {
    pop_songs.scrollLeft -= 300;
});

let artist_left = document.getElementById('artist_left');
let artist_right = document.getElementById('artist_right');
let artist_box = document.getElementsByClassName('artist_box')[0];


artist_right.addEventListener('click', () => {
    artist_box.scrollLeft += 300;
});
artist_left.addEventListener('click', () => {
    artist_box.scrollLeft -= 300;
});


