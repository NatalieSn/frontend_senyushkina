const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
      },
});


const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const span = document.getElementsByClassName("modal__close")[0];
  const okButton = document.getElementById("okButton");
  const cancelButton = document.getElementById("cancelButton");

  btn.onclick = function() {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Отключаем скролл
  }

  span.onclick = function() {
      closeModal();
  }

  okButton.onclick = function() {
      closeModal();
  }

  cancelButton.onclick = function() {
      closeModal();
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  }

  function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Включаем скролл
  }


  //Прелоадер
  window.onload = function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none'; // Скрыть прелоадер
        document.body.style.display = 'block'; // Показать содержимое сайта
    }, 1500);
};