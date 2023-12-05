document.addEventListener('DOMContentLoaded', () => {
    $(".card").on("click", function(){
      $(".detailed").addClass("active");
      $(".close-outline").css("display", "block").css("cursor", "pointer");
    })
  
    $(".close-outline").on("click", function(){
      $(".detailed").removeClass("active");
      $(".close-outline").css("display", "none");
    })
  
    $(".hamburg").on("click", function(){
      $(".sidebar").addClass("active");
    })
  
    $(".caret-back-outline").on("click", function(){
      $(".sidebar").removeClass("active");
    })
  })
  