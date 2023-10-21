document.addEventListener('DOMContentLoaded', function() {
  const welcomeElement = document.getElementById('Consultation');
  const aboutElement = document.getElementById('Studio');
  const servicesElement = document.getElementById('Price');
  const contactsElement = document.getElementById('Contacts');
  const healingElement = document.getElementById('Healing');
  const aboutTitle = document.getElementById('aboutTitle');

  const aboutListTitleFirst = document.getElementById('aboutList-1');
  const aboutListTitleSecond = document.getElementById('aboutList-2');
  const aboutListTitleThird = document.getElementById('aboutList-3');
  const aboutListTitleFour = document.getElementById('aboutList-4');
  const aboutListTitleFive = document.getElementById('aboutList-5');

  // Используйте querySelector для получения мета-тегов
  const metaDesc = document.querySelector("meta[name='description']");
  const metaKey = document.querySelector("meta[name='keywords']");

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
        aboutTitle.textContent = data.aboutTitle;

        aboutListTitleFirst.textContent = data.aboutListTitleFirst;
        aboutListTitleSecond.textContent = data.aboutListTitleSecond;
        aboutListTitleThird.textContent = data.aboutListTitleThird;
        aboutListTitleFour.textContent = data.aboutListTitleFour;
        aboutListTitleFive.textContent = data.aboutListTitleFive;

        // Измените содержимое мета-тегов
        if (data.metaDesc) {
          metaDesc.setAttribute("content", data.metaDesc);
        }
        if (data.metaKey) {
          metaKey.setAttribute("content", data.metaKey);
        }
      })
      .catch(error => {
        console.error('Ошибка при загрузке перевода:', error);
      });
  }

  // Определение языка браузера и загрузка соответствующего перевода
  const userLanguage = navigator.language.split('-')[0]; // Учтем только основной язык
  loadTranslation(userLanguage); // Загрузим перевод для языка браузера
});
