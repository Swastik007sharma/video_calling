let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
<<<<<<< HEAD
  if (memberContainer.style.display === 'none' || !memberContainer.style.display) {
    memberContainer.style.display = 'block';
    if (window.innerWidth <= 768) {
      chatContainer.style.display = 'none';
    }
  } else {
    memberContainer.style.display = 'none';
  }
=======
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
>>>>>>> f6719f33e84bd639b8273ebf8e379c0108a0df69
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
<<<<<<< HEAD
  if (chatContainer.style.display === 'none' || !chatContainer.style.display) {
    chatContainer.style.display = 'block';
    if (window.innerWidth <= 768) {
      memberContainer.style.display = 'none';
    }
  } else {
    chatContainer.style.display = 'none';
  }
=======
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
>>>>>>> f6719f33e84bd639b8273ebf8e379c0108a0df69
});

let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {

  let child = displayFrame.children[0]
  if (child) {
    document.getElementById('streams__container').appendChild(child)
  }

  displayFrame.style.display = 'block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget

  for (let i = 0; videoFrames.length > i; i++) {
    if (videoFrames[i].id != userIdInDisplayFrame) {
      videoFrames[i].style.height = '100px'
      videoFrames[i].style.width = '100px'
    }
  }
}

for (let i = 0; videoFrames.length > i; i++) {
  videoFrames[i].addEventListener('click', expandVideoFrame)
}

let hideDisplayFrame = () => {
  userIdInDisplayFrame = null
  displayFrame.style.display = null

  let child = displayFrame.children[0]
  document.getElementById('streams__container').appendChild(child)

  for (let i = 0; videoFrames.length > i; i++) {
    videoFrames[i].style.height = '300px'
    videoFrames[i].style.width = '300px'
  }
}

displayFrame.addEventListener('click', hideDisplayFrame)