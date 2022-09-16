let toggles = document.querySelectorAll(".toggleBtn");

toggles.forEach(function (btn) {
  btn.addEventListener("click",function (e) {
    const contents= e.currentTarget.nextElementSibling;
    contents.classList.toggle("active");

  })

})
