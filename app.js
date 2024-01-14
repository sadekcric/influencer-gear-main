// Navigation menu
let navIcon=document.getElementById(`nav_icon`);

navIcon.addEventListener(`click`, function(){
  let navigation=document.getElementById(`mobile_menu`)
  navigation.classList.toggle(`mobile_ul`)
})

