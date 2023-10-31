(() => {
    const refs = {
      // openModalBtn: document.querySelector('[data-modal-open]'),
      // closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    // refs.openModalBtn.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);
  
    // function toggleModal() {
    //   refs.modal.classList.toggle('is-hidden');
    // }

  })();


  let activeAlert = false;
    const title = "Cowabunga Tattoo / ТАТУ В КИЕВЕ";
    const msg = "Победы 68/1";
    const changeTitle = setInterval(() => {
      document.title = activeAlert ? title : msg;
      activeAlert = !activeAlert;
    }, 3600000);