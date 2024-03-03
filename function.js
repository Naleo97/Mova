(() => {
  $(document).ready(function () {
    $(".answer-item").click(function () {
      clearAnswerContent();
      $(this).addClass("display-answer-content");
      
    });
    function clearAnswerContent() {
      $(".answer-list .answer-item").each(function (i, e) {
        $(e).removeClass("display-answer-content");
      });
    }
  });
})(jQuery);
