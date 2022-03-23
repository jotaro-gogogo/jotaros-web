const myList = document.querySelectorAll(".def");
const myTarget = document.querySelector(".trigger");
const themeScheme = matchMedia("(prefers-color-scheme: dark)");

function changeTheme(){
  if(myTarget.classList.contains("dark")){
    for(let i=0; i<myList.length;i++){
      myList[i].classList.remove("dark");
    }
    myTarget.innerHTML = `<div class="moon"><i class="fa fa-moon"></i></div>`;
  } else {
    for(let i=0; i<myList.length;i++){
      myList[i].classList.add("dark");
    }
    myTarget.innerHTML = `<div class="sun"><i class="fa fa-sun"></i></div>`;
  }
}

myTarget.addEventListener("click", changeTheme);
