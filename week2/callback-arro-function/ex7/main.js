const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
const makeSound = sound => alert(sound)

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
      
  explode(shineLight, makeSound, "BOOM")