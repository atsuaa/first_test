$(function(){
  //ページトップへのスクロール
  $('#pagetop').click(function () {
      //id名#pagetopがクリックされたら、以下の処理を実行
      $("html,body").animate({scrollTop:0},"300");
  });
  $('#pagetop').hide();
  $(window).scroll(function () {
      if($(window).scrollTop() > 100) {
          $('#pagetop').slideDown();
      } else {
          $('#pagetop').slideUp();
      }
  });

  // それぞれのいちへ移動
  $('.heading').click(function(){
    var num = $('.heading').index(this);
    $("html,body").animate({scrollTop:$('.box').eq(num).offset().top});
  });


  var fixTop = $('#side ul').offset().top;
  activateNav();

  function activateNav() {
      // サイドバーにメニューを固定
    $(window).scroll(function(){
      var top = $(window).scrollTop();
      if (fixTop - top < 0) {
        $('#side ul').addClass('side-fix');
      }else if (fixTop - top > 0) {
        $('#side ul').removeClass('side-fix');
      }

      // サイドバーにアクティブクラスをつける
      if ($('.box').offset().top - top < 0) {
        $('.box').each(function(){
          var boxTop = $(this).offset().top;
          var nextTop = $(this).index() !== $('.box').last().index() ? $(this).next('.box').offset().top : top + 11;
          if (boxTop - top < 10 && nextTop - top > 10) {
            var actionId = $(this).index();
            $('.heading').removeClass('activate');
            $('.heading').eq(actionId).addClass('activate');
            return false;
          }
        });
      }
    });
  }
});
