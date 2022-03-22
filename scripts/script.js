function changeTheme(){
  if(myTarget.classList.contains("dark")){
    myTarget.classList.remove("dark");
    myTarget.innerHTML = `<div class="moon"><i class="fa fa-moon"></i></div>`;
    document.body.classList.remove("dark");
    document.querySelector("header").classList.remove("dark");
    document.querySelector("header").querySelector("span").classList.remove("dark");
    document.querySelector("a").classList.remove("dark");
    document.querySelector(".profile").classList.remove("dark");
    document.querySelector(".description").classList.remove("dark");
  } else {
    myTarget.classList.add("dark");
    myTarget.innerHTML = `<div class="sun"><i class="fa fa-sun"></i></div>`;
    document.body.classList.add("dark");
    document.querySelector("header").classList.add("dark");
    document.querySelector("header").querySelector("span").classList.add("dark");
    document.querySelector("a").classList.add("dark");
    document.querySelector(".profile").classList.add("dark");
    document.querySelector(".description").classList.add("dark");
  }
}

const myTarget = document.querySelector(".trigger");
myTarget.addEventListener("click", changeTheme);
