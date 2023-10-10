document.addEventListener('DOMContentLoaded', function() {
  const welcomeElement = document.getElementById('Consultation');
  const aboutElement = document.getElementById('Studio');
    const servicesElement = document.getElementById('Price');
    const contactsElement = document.getElementById('Contacts');
    const healingElement = document.getElementById('Healing');

  // Функция загрузки переводов
  function loadTranslation(userLanguage) {
    fetch(`translations/${userLanguage}.json?nocache=${Math.random()}`)
      .then(response => response.json())
      .then(data => {
        welcomeElement.textContent = data.Consultation;
        aboutElement.textContent = data.Studio;
          servicesElement.textContent = data.Price;
          contactsElement.textContent = data.Contacts;
          healingElement.textContent = data.Healing;
      })
      .catch(error => {
        console.error('Ошибка при загрузке перевода:', error);
      });
  }

  // Определение языка браузера и загрузка соответствующего перевода
  const userLanguage = navigator.language.split('-')[0]; // Учтем только основной язык
  loadTranslation(userLanguage); // Загрузим перевод для языка браузера
});
