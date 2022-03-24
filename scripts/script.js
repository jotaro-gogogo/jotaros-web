const myList = document.querySelectorAll(".def");
const myTarget = document.querySelector(".trigger");

if(matchMedia("(prefers-color-scheme: dark)").matches){
  for(let i=0; i<myList.length;i++){
    myList[i].classList.add("dark");
  }
  myTarget.innerHTML = `<div class="sun"><i class="fa fa-sun"></i></div>`;
  myTarget.style.backgroundColor = "#eee";
}

function changeTheme(){
  if(myTarget.classList.contains("dark")){
    for(let i=0; i<myList.length;i++){
      myList[i].classList.remove("dark");
      myList[i].classList.add("light");
    }
    myTarget.style.backgroundColor = "#333";
    myTarget.innerHTML = `<div class="moon"><i class="fa fa-moon"></i></div>`;
  } else {
    for(let i=0; i<myList.length;i++){
      myList[i].classList.remove("light");
      myList[i].classList.add("dark");
    }
    myTarget.innerHTML = `<div class="sun"><i class="fa fa-sun"></i></div>`;
  }
}

myTarget.addEventListener("click", changeTheme);
