let myList = document.body.querySelectorAll(".def");

function changeTheme(){
  if(myTarget.classList.contains("dark")){
    for(let i=0; i<myList.length;i++){
      myList[i].classList.remove("dark");
      console.log(myList[i]);
    }
    document.body.classList.remove("dark");
    myTarget.classList.remove("dark");
    myTarget.innerHTML = `<div class="moon"><i class="fa fa-moon"></i></div>`;
  } else {
    for(let i=0; i<myList.length;i++){
      myList[i].classList.add("dark");
    }
    document.body.classList.add("dark");
    myTarget.classList.add("dark");
    myTarget.innerHTML = `<div class="sun"><i class="fa fa-sun"></i></div>`;
    document.getElementById("linkTo").classList.add("dark");
  }
}

const myTarget = document.querySelector(".trigger");
myTarget.addEventListener("click", changeTheme);
