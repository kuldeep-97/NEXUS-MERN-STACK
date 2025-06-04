console.log("Welcome to music side");

//All varialbles
let songIndex=0;
let audioElement=new Audio("./assets/0.mp3");
let masterPlay=document.querySelector("#masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let songItems=Array.from(document.getElementsByClassName("card"));
let playImage=document.querySelector(".song-image");
let para1=document.querySelector(".para1");
let para2=document.querySelector(".para2");
let Sort=document.querySelector('.SortPlayer');

let songs=[
    {songsName: "Aaj P Tum Pe", filePath: "../check/1.mp3", coverPath: "./assets/card1img.jpg",singer:" Legend Arijit Sing"}, 
    {songsName: "Agar Tum Saath ", filePath: "./assets/1.mp3", coverPath: "./assets/Agar Tum.jpg",singer:" Legend Arijit Sing"},
    {songsName: "Dildara Dildara", filePath: "./assets/2.mp3", coverPath: "./assets/dildaara.jpg",singer:"Lakhbir Singh Lakkha"},
    {songsName: "Do Anjane Ajnabi", filePath: "./assets/3.mp3", coverPath: "./assets/do anjaane.jpg",singer:"Udit Narayan, Shreya Ghoshal"},
    {songsName: "Tera Yaar Hu Main", filePath: "./assets/4.mp3", coverPath: "./assets/tera yaar.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Gawah Hai Chand Tare", filePath: "./assets/5.mp3", coverPath: "./assets/damini.jpg",singer:"Kumar Sanu, Sadhana Sargam"},
    {songsName: "Ghar More Pardesiya", filePath: "./assets/6.mp3", coverPath: "./assets/ghar more.jpg",singer:"Shreya Ghoshal"},
    {songsName: "Ghar Se Nikalte Hi", filePath: "./assets/7.mp3", coverPath: "./assets/ghar se nikalte hi.jpg",singer:"Armaan Malik"},
    {songsName: "Hamari Adhuri Khani", filePath: "./assets/8.mp3", coverPath: "./assets/adduri khani.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Hawayein Song", filePath: "./assets/9.mp3", coverPath: "./assets/hawayein.jpeg",singer:"Legend Arijit Sing"},
    {songsName: "Husan Paharo Ka", filePath: "./assets/10.mp3", coverPath: "./assets/husan paharo ka.jpg",singer:"Lata Mangeshkar Ji"},
    {songsName: "Jaan Nisaar He", filePath: "./assets/11.mp3", coverPath: "./assets/jaan Nisaar he.webp",singer:"Legend Arijit Sing"},
    {songsName: "Jalthe Diye Full Song", filePath: "./assets/12.mp3", coverPath: "./assets/jalthe diye.jpg",singer:"Anweshaa, Harshdeep Kaurh"},
    {songsName: "Janam Janam - Dilwale", filePath: "./assets/13.mp3", coverPath: "./assets/janam janam.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Kabira Maan Ja", filePath: "./assets/14.mp3", coverPath: "./assets/kabira man ja.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Kale Je Libaas Di", filePath: "./assets/15.mp3", coverPath: "./assets/kaal libas.jpg",singer:"KaKa"},
    {songsName: "Khamoshiyan Full Song", filePath: "./assets/16.mp3", coverPath: "./assets/khamoriya.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Kinna Sona Full Song", filePath: "./assets/17.mp3", coverPath: "./assets/mahiya mere mahi.jpg",singer:"Sunil Kamath"},
    {songsName: "Kitni Hasrat Hai Hame Tumse", filePath: "./assets/18.mp3", coverPath: "./assets/kitni hasrat hai.jpg",singer:"Kumar Sanu & Sadhana Sargam"},
    {songsName: "Koi jaane Na: Tu Mane Ya Na Mane", filePath: "./assets/19.mp3", coverPath: "./assets/raab miliya.jpg",singer:"Wadali Brothers"},
    {songsName: "Mujhe Haq Hai", filePath: "./assets/20.mp3", coverPath: "./assets/mujhe haq.jpg",singer:"Udit Narayan, Shreya Ghoshal"},
    {songsName: "Tu Hi Hai Aashiqui", filePath: "./assets/21.mp3", coverPath: "./assets/tu hi hai.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Tu Hi Yaar Mera", filePath: "./assets/22.mp3", coverPath: "./assets/tera yaar.jpg",singer:"Legend Arijit Sing"},
    {songsName: "Tu Kitni Achhi Hai - Neha kakker", filePath: "./assets/23.mp3", coverPath: "./assets/naina song.jpg",singer:"Neha Kakker"},
    {songsName: "Tum Dil KI Dhadkhan Main", filePath: "./assets/24.mp3", coverPath: "./assets/tum dil ki.jpg",singer:"Kumar Sanu"},
    {songsName: "Vande Mataram || India Most Wanted", filePath: "./assets/25.mp3", coverPath: "./assets/vande mataram.jpg",singer:"Papon & Altamash Faridi"},
];

 songItems.forEach((element,i) => { 
      element.getElementsByTagName('img')[0].src = songs[i].coverPath;
      element.getElementsByClassName('card-title')[0].innerText = songs[i].songsName;
 });
//Hnadle play/pause click
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      playImage.src="./assets/card1img.jpg";
      para1.innerText=songs[songIndex].songsName;
      para2.innerText=songs[songIndex].singer;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    console.log(progress);
    if(progress==100){
        nextSong(); 
    }
});
 
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('SortPlayer')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('SortPlayer')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
          makeAllPlays();
          songIndex=parseInt(e.target.id);
          e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`./assets/${songIndex}.mp3`;
        // e.getElementsByClassName('song-image')[0].src = songs[songIndex].coverPath; 
        audioElement.currentTime=0;
        playerImage();
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        // masterPlay.classList.add('fa-circle-pause');
    })
});

document.querySelector('#forward').addEventListener('click', ()=>{
    if(songIndex>=25){
      songIndex=0;
    }else{
    songIndex+=1;
    }
    playerImage();
    audioElement.src=`./assets/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
document.querySelector('#previous').addEventListener('click', ()=>{
    if(songIndex<=0){
      songIndex=25;
    }else{
    songIndex-=1;
    }
    console.log(songIndex);
     playerImage();
    //  console.dir(playImage);
    audioElement.src=`./assets/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

function nextSong(){

    if(songIndex>=25){
        songIndex=0;
      }else{
      songIndex+=1;
      }
      audioElement.src=`./assets/${songIndex}.mp3`;
      playerImage();
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      masterPlay.classList.add('fa-circle-pause');
      return;
}

function playerImage(){
    playImage.src=songs[songIndex].coverPath;
    para1.innerText=songs[songIndex].songsName;
    para2.innerText=songs[songIndex].singer;
    return;
};