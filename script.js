const server = "https://api.artifactsmmo.com";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFsaWNlbGFyc3Nvbjk1QGhvdG1haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.0-h0amMSzrYOIYLLAabMenrgU_cowk3XT3veksFO4iE";
const character = "Alipad";

const upButton = document.querySelector('.button--up');
const rightButton = document.querySelector('.button--right');
const downButton = document.querySelector('.button--down');
const leftButton = document.querySelector('.button--left');
const fightButton = document.querySelector('.button--fight');
const gatheringButton = document.querySelector('.button--gather');
const restButton = document.querySelector('.button--rest');
const characterName = document.querySelector('.name')
const xPosition = document.querySelector('.x-position')
const yPosition = document.querySelector('.y-position')
const charLevel = document.querySelector('.level')

let currentXPos = 0;
let currentYPos = 0;

async function getCharacter() {
  const url = server + "/characters/" + character

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token
  },
}

try {
  const response = await fetch(url, options)
  const data = await response.json()

  console.log(data)

  currentXPos = data.data.x
  currentYPos = data.data.y

  characterName.innerText = "Character: " + data.data.name
  xPosition.innerText = "X-position: " + data.data.x
  yPosition.innerText = "Y-position: " + data.data.y
  charLevel.innerText = "Level: " + data.data.level

  console.log("Character information is ready")

} catch (error) {
  console.log(error)
}
}
getCharacter()

async function movement(newXPos, newYPos) {
  const url = server + '/my/' + character + '/action/move';
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      x: newXPos,
      y: newYPos,
    }),
  };
  
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);

    currentXPos = newXPos;
    currentYPos = newYPos;

  } catch (error) {
    console.log(error);
  }
}

upButton.addEventListener('click', () => {
  console.log("UP");
  movement(currentXPos, (currentYPos - 1));
});

rightButton.addEventListener('click', () => {
  console.log("RIGHT");
  movement((currentXPos + 1), currentYPos);
});

downButton.addEventListener('click', () => {
  console.log("DOWN");
  movement(currentXPos, (currentYPos + 1));
});

leftButton.addEventListener('click', () => {
  console.log("LEFT");
  movement((currentXPos - 1), currentYPos);
});

async function fight() {
  const url = server + '/my/' + character + '/action/fight';
    
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };

  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);
    

  } catch (error) {
    console.log(error);
  }
}

fightButton.addEventListener('click', fight)

async function gather() {
  const url = server + '/my/' + character + '/action/gathering';
    
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };

  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);
    

  } catch (error) {
    console.log(error);
  }
}

gatheringButton.addEventListener('click', rest)

async function rest() {
  const url = server + '/my/' + character + '/action/rest';
    
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };

  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log(data);
    

  } catch (error) {
    console.log(error);
  }
}

restButton.addEventListener('click', rest)