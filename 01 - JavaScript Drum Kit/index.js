playSound =(e) =>{
     // audio to match the key with the sound
     const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
     //key to apply the active css style
     const key= document.querySelector(`.key[data-key="${e.keyCode}"]`); 
     if(!audio) return ; // if there is no sound associated the function stops
     audio.currentTime=0;// rewinds the audio and let the audio play over and over again
     audio.play();
     key.classList.add('playing');
};

removeTransition = (e) =>{
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    else{
        e.target.classList.remove('playing');
    }
};

// Transition event
const keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//Listening Event
window.addEventListener('keydown', playSound)