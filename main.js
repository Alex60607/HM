window.addEventListener('load', function () {

    let butPage = document.getElementById("button_page");
    let butStyle = document.getElementById("button_style");
    butPage.addEventListener('click', function (){
      window.location.href = "https://google.com";
    });
    butStyle.addEventListener('click', function(){
      document.body.style.backgroundColor = "aqua";
    });
});