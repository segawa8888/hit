
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 200;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  $(function() {
    $('.menu-trigger , .menu-lists__item').on('click',function(){
        $('.menu-trigger').toggleClass('active');
        $('nav').fadeToggle(500);// navの表示・非表示切り替わる
      });
    });

    $(function(){
      var state = false;
      var pos;
      $('.menu-trigger , .menu-lists__item').click(function(){
      if (state == false) {
      pos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -pos});
      state = true;
      } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo(0, pos);
      state = false;
      }
      });
      });

  //ここまでWordPressで$使用可能
});
