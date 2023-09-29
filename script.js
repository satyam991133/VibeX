console.log("Welcome to VibeX"); 

let songIndex = 0 ; 
let masterPlay = document.getElementById('masterPlay'); 
let audioElement = new Audio();   
let myProgressBar = document.getElementById('myProgressBar');  
let gif = document.getElementById('gif');   
let songItems = Array.from(document.getElementsByClassName('songItem')); 

// Collection of songs 

let songs = [
    {songName : "Warriyo-Mprtals" ,  filepath : "songs/1.mp3" , coverPath : "cover_images/1.jpg"},
    {songName : "Cielo - Huma-Huma" ,  filepath : "songs/2.mp3" , coverPath : "cover_images/2.jpg"},
    {songName : "DEAF KEV - Invincible" ,  filepath : "songs/3.mp3" , coverPath : "cover_images/3.jpg"},
    {songName : "My Heart-320k" ,  filepath : "songs/4.mp3" , coverPath : "cover_images/4.jpg"},
    {songName : "Worth It" ,  filepath : "songs/5.mp3" , coverPath : "cover_images/5.jpg"},
    {songName : "Let me Love You" ,  filepath : "songs/6.mp3" , coverPath : "cover_images/6.jpg"},
    {songName : "Unstoppable " ,  filepath : "songs/7.mp3" , coverPath : "cover_images/7.jpg"},
    {songName : "Believer" ,  filepath : "songs/8.mp3" , coverPath : "cover_images/8.jpg"},
    {songName : "Invincible" ,  filepath : "songs/9.mp3" , coverPath : "cover_images/9.jpg"},
    {songName : "With You - AP Dhillon" ,  filepath : "songs/10.mp3" , coverPath : "cover_images/10.jpg"},
]

// Mapping of each song with their corresponding song name and path location

songItems.forEach((element , i) =>{ 
    
    console.log(element , i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;  
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;  

})

// Handle play/pause click 

masterPlay.addEventListener('click' , ()=>{ 

    if(audioElement.paused || audioElement.currentTime<=0){
        
        gif.style.opacity = 1;  
        audioElement.src = songs[songIndex].filepath;  
        audioElement.currentTime = 0;  
        document.getElementById('songDisplay').innerHTML = songs[songIndex].songName;  
        audioElement.play();  
        masterPlay.classList.remove('fa-play-circle'); 
        masterPlay.classList.add('fa-pause-circle'); 
    }else{ 
        
        document.getElementById('songDisplay').innerHTML = ""; 
        document.getElementById('song')  
        audioElement.pause();  
        gif.style.opacity = 0; 
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle'); 
    }
})


audioElement.addEventListener('timeupdate',()=>{ 
    // console.log('timeupdate');  
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);  
    // console.log(progress);  
    myProgressBar.value = progress; 
}) 


// How song's progress bar will move as the song goes on
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;   
})


const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
    })
} 

// work 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   
    element.addEventListener('click', (e)=>{
         console.log(e.target);   
         makeAllPlay();  
         songIndex = parseInt(e.target.id); 
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle'); 
         audioElement.src = songs[songIndex].filepath;  
         audioElement.currentTime = 0; 
         audioElement.play();  
         document.getElementById('songDisplay').innerHTML = songs[songIndex].songName;  
         masterPlay.classList.remove('fa-play-circle'); 
         masterPlay.classList.add('fa-pause-circle'); 
    })
})


// code for working of next buttons 
document.getElementById('next').addEventListener('click' , ()=>{
    
    songIndex+=1; 
    songIndex = songIndex%10;  
    audioElement.src = songs[songIndex].filepath;  
    document.getElementById('songDisplay').innerHTML = songs[songIndex].songName;      
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle'); 
    masterPlay.classList.add('fa-pause-circle');    

}) 

// code for working of previous button
document.getElementById('previous').addEventListener('click' , ()=>{
    
   
    if(songIndex==0){
        songIndex = 9 ;
    }else{
        songIndex-=1; 
    } 

    audioElement.src = songs[songIndex].filepath;  
    document.getElementById('songDisplay').innerHTML = songs[songIndex].songName;    
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle'); 
    masterPlay.classList.add('fa-pause-circle');    

}) 





