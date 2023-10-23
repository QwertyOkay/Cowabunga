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

  const featureSubtitleFirst = document.getElementById('featureSubtitle-1');
  const featureSubtitleSecond = document.getElementById('featureSubtitle-2');
  const featureSubtitleThird = document.getElementById('featureSubtitle-3');
  const featureSubtitleFour = document.getElementById('featureSubtitle-4');

  const featureTextFirst = document.getElementById('featureText-1');
  const featureTextSecond = document.getElementById('featureText-2');
  const featureTextThird = document.getElementById('featureText-3');
  const featureTextFour = document.getElementById('featureText-4');
  const featureTextAdd = document.getElementById('featureText-5');

  const servicesTitle = document.getElementById('servicesTitle');

  const servicesSubtitleFirst = document.getElementById('servicesSubtitle-1');
  const servicesSubtitleSecond = document.getElementById('servicesSubtitle-2');
  const servicesSubtitleThird = document.getElementById('servicesSubtitle-3');
  const servicesSubtitleFour = document.getElementById('servicesSubtitle-4');
  const servicesSubtitleFive = document.getElementById('servicesSubtitle-5');
  const servicesSubtitleSix = document.getElementById('servicesSubtitle-6');

  const servicesSubtitleTextFirst = document.getElementById('servicesSubtitleText-1');
  const servicesSubtitleTextSecond = document.getElementById('servicesSubtitleText-2');
  const servicesSubtitleTextThird = document.getElementById('servicesSubtitleText-3');
  const servicesSubtitleTextFour = document.getElementById('servicesSubtitleText-4');
  const servicesSubtitleTextFive = document.getElementById('servicesSubtitleText-5');
  const servicesSubtitleTextSix = document.getElementById('servicesSubtitleText-6');

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

        featureSubtitleFirst.textContent = data.featureSubtitleFirst;
        featureSubtitleSecond.textContent = data.featureSubtitleSecond;
        featureSubtitleThird.textContent = data.featureSubtitleThird;
        featureSubtitleFour.textContent = data.featureSubtitleFour;

        featureTextFirst.textContent = data.featureTextFirst;
        featureTextSecond.textContent = data.featureTextSecond;
        featureTextThird.textContent = data.featureTextThird;
        featureTextFour.textContent = data.featureTextFour;
        featureTextAdd.textContent = data.featureTextAdd;

        servicesTitle.textContent = data.servicesTitle;

        servicesSubtitleFirst.textContent = data.servicesSubtitleFirst;
        servicesSubtitleSecond.textContent = data.servicesSubtitleSecond;
        servicesSubtitleThird.textContent = data.servicesSubtitleThird;
        servicesSubtitleFour.textContent = data.servicesSubtitleFour;
        servicesSubtitleFive.textContent = data.servicesSubtitleFive;
        servicesSubtitleSix.textContent = data.servicesSubtitleSix;

        servicesSubtitleTextFirst.textContent = data.servicesSubtitleTextFirst;
        servicesSubtitleTextSecond.textContent = data.servicesSubtitleTextSecond;
        servicesSubtitleTextThird.textContent = data.servicesSubtitleTextThird;
        servicesSubtitleTextFour.textContent = data.servicesSubtitleTextFour;
        servicesSubtitleTextFive.textContent = data.servicesSubtitleTextFive;
        servicesSubtitleTextSix.textContent = data.servicesSubtitleTextSix;
        
        // Измените содержимое мета-тегов
        // if (data.metaDesc) {
        //   metaDesc.setAttribute("content", data.metaDesc);
        // }
        // if (data.metaKey) {
        //   metaKey.setAttribute("content", data.metaKey);
        // }
      })

      .catch(error => {
        console.error('Ошибка при загрузке перевода:', error);
      });
  }

  // Определение языка браузера и загрузка соответствующего перевода
  const userLanguage = navigator.language.split('-')[0]; // Учтем только основной язык
  loadTranslation(userLanguage); // Загрузим перевод для языка браузера
});
