document.addEventListener('DOMContentLoaded', function() {
  const welcomeElement = document.getElementById('Consultation');
  const aboutElement = document.getElementById('Studio');
  const servicesElement = document.getElementById('Price');
  const contactsElement = document.getElementById('Contacts');
  const healingElement = document.getElementById('Healing');

  const aboutTitlePrice = document.getElementById('aboutTitlePrice');
  const aboutTitlePrice2 = document.getElementById('aboutTitlePrice2');
  const headerPaintings = document.getElementById('headerPaintings');
  

  const consultationPrice = document.getElementById('consultationPrice');
  const minPrice = document.getElementById('minPrice');
  const sessionPrice = document.getElementById('sessionPrice');

  const priceFirst = document.getElementById('price-1');
  const priceSecond = document.getElementById('price-2');
  const priceThird = document.getElementById('price-3');

  const consultationPriceItemFirst = document.getElementById('consultationPriceItem-1');
  const consultationPriceItemSecond = document.getElementById('consultationPriceItem-2');
  const consultationPriceItemThird = document.getElementById('consultationPriceItem-3');
  const consultationPriceItemFour = document.getElementById('consultationPriceItem-4');
  const consultationPriceItemFive = document.getElementById('consultationPriceItem-5');

  const minPriceItemFirst = document.getElementById('minPriceItem-1');
  const minPriceItemSecond = document.getElementById('minPriceItem-2');
  const minPriceItemThird = document.getElementById('minPriceItem-3');

  // const sessionPriceItemFirst = document.getElementById('sessionPriceItem-1');
  // const sessionPriceItemSecond = document.getElementById('sessionPriceItem-2');
  const sessionPriceItemThird = document.getElementById('sessionPriceItem-3');

  const priceModalFirst = document.getElementById('priceModal-1');
  const priceModalSecond = document.getElementById('priceModal-2');

  // const aboutListTitleFirst = document.getElementById('aboutList-1');
  // const aboutListTitleSecond = document.getElementById('aboutList-2');
  // const aboutListTitleThird = document.getElementById('aboutList-3');
  // const aboutListTitleFour = document.getElementById('aboutList-4');
  // const aboutListTitleFive = document.getElementById('aboutList-5');

  // const featureSubtitleFirst = document.getElementById('featureSubtitle-1');
  // const featureSubtitleSecond = document.getElementById('featureSubtitle-2');
  // const featureSubtitleThird = document.getElementById('featureSubtitle-3');
  // const featureSubtitleFour = document.getElementById('featureSubtitle-4');

  // const featureTextFirst = document.getElementById('featureText-1');
  // const featureTextSecond = document.getElementById('featureText-2');
  // const featureTextThird = document.getElementById('featureText-3');
  // const featureTextFour = document.getElementById('featureText-4');
  // const featureTextAdd = document.getElementById('featureText-5');

  // const servicesTitle = document.getElementById('servicesTitle');

  // const servicesSubtitleFirst = document.getElementById('servicesSubtitle-1');
  // const servicesSubtitleSecond = document.getElementById('servicesSubtitle-2');
  // const servicesSubtitleThird = document.getElementById('servicesSubtitle-3');
  // const servicesSubtitleFour = document.getElementById('servicesSubtitle-4');
  // const servicesSubtitleFive = document.getElementById('servicesSubtitle-5');
  // const servicesSubtitleSix = document.getElementById('servicesSubtitle-6');

  // const servicesSubtitleTextFirst = document.getElementById('servicesSubtitleText-1');
  // const servicesSubtitleTextSecond = document.getElementById('servicesSubtitleText-2');
  // const servicesSubtitleTextThird = document.getElementById('servicesSubtitleText-3');
  // const servicesSubtitleTextFour = document.getElementById('servicesSubtitleText-4');
  // const servicesSubtitleTextFive = document.getElementById('servicesSubtitleText-5');
  // const servicesSubtitleTextSix = document.getElementById('servicesSubtitleText-6');

  // const servicesMoreButtonFirst = document.getElementById('more-1');
  // const servicesMoreButtonSecond = document.getElementById('more-2');
  // const servicesMoreButtonThird = document.getElementById('more-3');
  // const servicesMoreButtonFour = document.getElementById('more-4');
  // const servicesMoreButtonFive = document.getElementById('more-5');
  // const servicesMoreButtonSix = document.getElementById('more-6');

  // const faqTitle = document.getElementById('faqTitle');

  // const faqSubtitle = document.getElementById('faqSubtitle-1');
  // const faqSubtitleSecond = document.getElementById('faqSubtitle-2');
  // const faqSubtitleThird = document.getElementById('faqSubtitle-3');
  // const faqSubtitleFour = document.getElementById('faqSubtitle-4');
  // const faqSubtitleFive = document.getElementById('faqSubtitle-5');
  // const faqSubtitleSix = document.getElementById('faqSubtitle-6');
  // const faqSubtitleSeven = document.getElementById('faqSubtitle-7');

  // const faqText = document.getElementById('faqText-1');
  // const faqTextSecond = document.getElementById('faqText-2');
  // const faqTextThird = document.getElementById('faqText-3');
  // const faqTextFour = document.getElementById('faqText-4');
  // const faqTextFive = document.getElementById('faqText-5');
  // const faqTextSix = document.getElementById('faqText-6');

  const reviewTitle2 = document.getElementById('reviewTitle2');
  const reviewButton2 = document.getElementById('reviewButton2');

  const footerAddress = document.getElementById('footerAddress');
  const footerSocialText = document.getElementById('footerSocialText');

  const footerDev = document.getElementById('footerDev-1');
  const footerDevSecond = document.getElementById('footerDev-2');
  const footerRights = document.getElementById('footerRights');

  const mobMenu = document.getElementById('mobMenu-1');
  const mobMenuSecond = document.getElementById('mobMenu-2');
  const mobMenuThird = document.getElementById('mobMenu-3');
  const mobMenuFour = document.getElementById('mobMenu-4');
  const mobMenuFive = document.getElementById('mobMenu-5');
  const mobMenuSix = document.getElementById('mobMenu-6');
  const mobMenuSeven = document.getElementById('mobMenu-7');


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

        aboutTitlePrice.textContent = data.aboutTitlePrice;
        aboutTitlePrice2.textContent = data.aboutTitlePrice2;
        headerPaintings.textContent = data.headerPaintings;

        consultationPrice.textContent = data.consultationPrice;
        minPrice.textContent = data.minPrice;
        sessionPrice.textContent = data.sessionPrice;

        priceFirst.textContent = data.priceFirst;
        priceSecond.textContent = data.priceSecond;
        priceThird.textContent = data.priceThird;

        consultationPriceItemFirst.textContent = data.consultationPriceItemFirst;
        consultationPriceItemSecond.textContent = data.consultationPriceItemSecond;
        consultationPriceItemThird.textContent = data.consultationPriceItemThird;
        consultationPriceItemFour.textContent = data.consultationPriceItemFour;
        consultationPriceItemFive.textContent = data.consultationPriceItemFive;

        minPriceItemFirst.textContent = data.minPriceItemFirst;
        minPriceItemSecond.textContent = data.minPriceItemSecond;
        minPriceItemThird.textContent = data.minPriceItemThird;

        // sessionPriceItemFirst.textContent = data.sessionPriceItemFirst;
        // sessionPriceItemSecond.textContent = data.sessionPriceItemSecond;
        sessionPriceItemThird.textContent = data.sessionPriceItemThird;

        priceModalFirst.textContent = data.priceModalFirst;
        priceModalSecond.textContent = data.priceModalSecond;

        // aboutListTitleFirst.textContent = data.aboutListTitleFirst;
        // aboutListTitleSecond.textContent = data.aboutListTitleSecond;
        // aboutListTitleThird.textContent = data.aboutListTitleThird;
        // aboutListTitleFour.textContent = data.aboutListTitleFour;
        // aboutListTitleFive.textContent = data.aboutListTitleFive;

        // featureSubtitleFirst.textContent = data.featureSubtitleFirst;
        // featureSubtitleSecond.textContent = data.featureSubtitleSecond;
        // featureSubtitleThird.textContent = data.featureSubtitleThird;
        // featureSubtitleFour.textContent = data.featureSubtitleFour;

        // featureTextFirst.textContent = data.featureTextFirst;
        // featureTextSecond.textContent = data.featureTextSecond;
        // featureTextThird.textContent = data.featureTextThird;
        // featureTextFour.textContent = data.featureTextFour;
        // featureTextAdd.textContent = data.featureTextAdd;

        // servicesTitle.textContent = data.servicesTitle;

        // servicesSubtitleFirst.textContent = data.servicesSubtitleFirst;
        // servicesSubtitleSecond.textContent = data.servicesSubtitleSecond;
        // servicesSubtitleThird.textContent = data.servicesSubtitleThird;
        // servicesSubtitleFour.textContent = data.servicesSubtitleFour;
        // servicesSubtitleFive.textContent = data.servicesSubtitleFive;
        // servicesSubtitleSix.textContent = data.servicesSubtitleSix;

        // servicesSubtitleTextFirst.textContent = data.servicesSubtitleTextFirst;
        // servicesSubtitleTextSecond.textContent = data.servicesSubtitleTextSecond;
        // servicesSubtitleTextThird.textContent = data.servicesSubtitleTextThird;
        // servicesSubtitleTextFour.textContent = data.servicesSubtitleTextFour;
        // servicesSubtitleTextFive.textContent = data.servicesSubtitleTextFive;
        // servicesSubtitleTextSix.textContent = data.servicesSubtitleTextSix;

        // servicesMoreButtonFirst.textContent = data.servicesMoreButtonFirst;
        // servicesMoreButtonSecond.textContent = data.servicesMoreButtonSecond;
        // servicesMoreButtonThird.textContent = data.servicesMoreButtonThird;
        // servicesMoreButtonFour.textContent = data.servicesMoreButtonFour;
        // servicesMoreButtonFive.textContent = data.servicesMoreButtonFive;
        // servicesMoreButtonSix.textContent = data.servicesMoreButtonSix;

        // faqTitle.textContent = data.faqTitle;

        // faqSubtitle.textContent = data.faqSubtitle;
        // faqSubtitleSecond.textContent = data.faqSubtitleSecond;
        // faqSubtitleThird.textContent = data.faqSubtitleThird;
        // faqSubtitleFour.textContent = data.faqSubtitleFour;
        // faqSubtitleFive.textContent = data.faqSubtitleFive;
        // faqSubtitleSix.textContent = data.faqSubtitleSix;
        // faqSubtitleSeven.textContent = data.faqSubtitleSeven;

        // faqText.textContent = data.faqText;
        // faqTextSecond.textContent = data.faqTextSecond;
        // faqTextThird.textContent = data.faqTextThird;
        // faqTextFour.textContent = data.faqTextFour;
        // faqTextFive.textContent = data.faqTextFive;
        // faqTextSix.textContent = data.faqTextSix;

        reviewTitle2.textContent = data.reviewTitle2;
        reviewButton2.textContent = data.reviewButton2;

        footerAddress.textContent = data.footerAddress;
        // footerSocialText.textContent = data.footerSocialText;

        footerDev.textContent = data.footerDev;
        footerDevSecond.textContent = data.footerDevSecond;
        footerRights.textContent = data.footerRights;

        mobMenu.textContent = data.mobMenu;
        mobMenuSecond.textContent = data.mobMenuSecond;
        mobMenuThird.textContent = data.mobMenuThird;
        mobMenuFour.textContent = data.mobMenuFour;
        mobMenuFive.textContent = data.mobMenuFive;
        mobMenuSix.textContent = data.mobMenuSix;
        mobMenuSeven.textContent = data.mobMenuSeven;

      })
      .catch(error => {
        console.error('Ошибка при загрузке перевода:', error);
      });
  }

  // Определение языка браузера и загрузка соответствующего перевода
  const userLanguage = navigator.language.split('-')[0]; // Учтем только основной язык
  loadTranslation(userLanguage); // Загрузим перевод для языка браузера
});
