let form = document.getElementById('lobby__form')

// let displayName = localStorage.getItem('display_name')
let displayName = sessionStorage.getItem('display_name')   //used sessionStorage for testing purpose 
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    // localStorage.setItem('display_name', e.target.name.value)
    sessionStorage.setItem('display_name', e.target.name.value)   //used sessionStorage for testing purpose 

    let inviteCode = e.target.room.value
    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 10000))
    }
    window.location = `/javascript/room.html?room=${inviteCode}`
})