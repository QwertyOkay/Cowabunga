    $(document).ready(function () {
      var itemsPerPage = 9;
      var $images = $('.image');

      function showPage(page) {
        $images.hide();
        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
        $images.slice(startIndex, endIndex).show();

        // Убираем класс "active" со всех кнопок пагинации
        $('.page-button').removeClass('active2');

        // Добавляем класс "active" только к активной кнопке
        $(`.page-button[data-page="${page}"]`).addClass('active2');

      }

      showPage(1);

      $('.page-button').on('click', function () {
        var page = parseInt($(this).data('page'));
        showPage(page);
      });
    });


// new script
    
// function showPage(page) {
//   $images.hide();
//   var startIndex = (page - 1) * itemsPerPage;
//   var endIndex = startIndex + itemsPerPage;
//   $images.slice(startIndex, endIndex).show();

//   // Убираем класс "active" со всех кнопок пагинации
//   $('.page-button').removeClass('active2');

//   // Добавляем класс "active" только к активной кнопке
//   $(`.page-button[data-page="${page}"]`).addClass('active2');

//   // Прокручиваем секцию на 800 пикселей вверх
//   window.scrollBy(0, -800);
// }