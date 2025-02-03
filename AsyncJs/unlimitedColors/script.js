//generating randoms colors

const randomColor = function () {
  const hexVal = "0123456789ABCDEF";
  let colors = "#";

  for(let i =0 ; i < 6 ; i++){
    colors += hexVal[Math.floor(Math.random()*16)]
  }

  return colors;
// document.body.style.backgroundColor = colors;
};

// console.log(randomColor());


const bgColor = function(){
    document.body.style.backgroundColor=randomColor();
}

let intervalId;
const startChangingColor = function(){
    if(!intervalId) {
        intervalId = setInterval(bgColor, 1000)
    }; 
    
}

const start =  document.getElementById('start')
start.addEventListener('click',startChangingColor);


const stop = document.getElementById('stop');

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId=null;
}
stop.addEventListener('click',stopChangingColor)