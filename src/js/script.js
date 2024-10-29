
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ハンバーガーメニュー
    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-open')) {
            $('.js-drawer-menu').removeClass("is-open");
            $(this).removeClass('is-open');
            $('body').removeClass('no-scroll'); // スクロール無効クラスを削除
        } else {
            $('.js-drawer-menu').addClass("is-open");
            $(this).addClass('is-open');
            $('body').addClass('no-scroll'); // スクロール無効クラスを追加
        }
    });

});
