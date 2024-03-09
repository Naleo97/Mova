(() => {
  $(document).ready(function () {
    var pathname = window.location.pathname;
    let baseUrl = pathname.split("/");
    baseUrl.pop();
    console.log("path",pathname.split("/"));
    console.log("baseUrl",baseUrl.join("/"));
    $(".answer-item").click(function () {
      let  ques_for = $(this).data("ques-for");
      for(let i = 1; i <= 5; i++){
        if(i !== ques_for){
          $(`.answer-item[data-ques-for=${i}]`).removeClass("display-answer-content")
        }else{
          continue;
        }
      }
      
      $(this).toggleClass("display-answer-content");
     
      
      
    });
    $(".landing-page-button").click(function(){
      $(this).toggleClass("landing-page-button-action");
    });
    $(".langure-option").click((function(){
      let val = $(this).text();
      let current_value = $(".langure-choise").text();
      let data = $(this).data("value");
      let url = $(this).data("url")
      console.log("data",data);
      console.log("val",val)
      console.log("url",url);

      if(current_value !== val){
        console.log("ajsbdsjdb;sdkj",`${baseUrl.join("/")}/${url}.html`)
        window.location.replace(`${url}.html`);
      }
     
    }))
  });
})(jQuery);
