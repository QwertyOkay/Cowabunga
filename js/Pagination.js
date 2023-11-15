    $(document).ready(function () {
      let itemsPerPage = 9;
      let $images = $('.image');

      function showPage(page) {
        $images.hide();
        let startIndex = (page - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;
        $images.slice(startIndex, endIndex).show();

        // Убираем класс "active" со всех кнопок пагинации
        $('.page-button').removeClass('active2');

        // Добавляем класс "active" только к активной кнопке
        $(`.page-button[data-page="${page}"]`).addClass('active2');

      }

      showPage(1);

      $('.page-button').on('click', function () {
        let page = parseInt($(this).data('page'));
        showPage(page);
      });
    });


   