function timing(){

const timer = document.getElementById('root');
const now = new Date();
// timer.innerHTML = "Hello coder Army"
// only time chiye 
const indianTime = now.toLocaleTimeString();
timer.innerHTML = indianTime;
}

//   timing();
// while(true){// creass the code 
// timing();
// } // not work 

setInterval(timing,1000);// cllbacok funtion
 
const timer = document.getElementById('root');
timer.style.fontSize = "200px";
timer.style.display = 'flex';
timer.style.height = '100vh';
timer.style.justifyContent = 'center';
timer.style.alignItems = 'center';
// timer.style.backgroundColor = 'orange';

