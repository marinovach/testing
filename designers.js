addEventListener("load",() => {
  let index = 0;
        const images = document.querySelectorAll(".img");
        const classHide = "images-hidden", count = images.length;
        nextSlide();
        function nextSlide() {
            images[(index ++) % count].classList.add(classHide);
            images[index % count].classList.remove(classHide);
            setTimeout(nextSlide, 2500);
        }
    });


    function btnNewsletter() {
        alert('Thank you! We will keep you updated.')
      }