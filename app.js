let ico = document.querySelectorAll(".ico");


ico.forEach((e) => {
  e.addEventListener('click', function () {
    this.classList.toggle('img-ico');
    this.classList.toggle('img-ico-hide');
  })
})