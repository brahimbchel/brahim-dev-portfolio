// bissmillah

// 1: display the nav on phone

let hambIcon = document.getElementById("hamb-icon");
let navList = document.querySelectorAll("#nav-list li")

hambIcon.addEventListener("click", () => {
  // add and remove the hiden class to the nav
  for(let i = 0; i < navList.length; i++){
    navList[i].classList.toggle("hidden")
  }

  // change the icon to xmark
  for(let y = 0; y < navList[0].classList.length; y++){
    if(navList[0].classList[y] !== "hidden"){
      hambIcon.classList.add("fa-xmark");
      hambIcon.classList.remove("fa-bars")
    }else{
      hambIcon.classList.remove("fa-xmark");
      hambIcon.classList.add("fa-bars")
    }
  }
})
