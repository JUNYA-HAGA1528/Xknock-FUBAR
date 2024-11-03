
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




        // アコーディオン
        document.querySelectorAll('.accordion__header').forEach(button => {
            button.addEventListener('click', () => {
                const accordionItem = button.parentElement;
        
                // アコーディオンの開閉
                accordionItem.classList.toggle('active');
        
                // 他のアコーディオンを閉じる
                document.querySelectorAll('.accordion__item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
                });
            });
        });
    
    
        const swiper = new Swiper(".swiper", {
            loop: true,
            // ページネーション
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // 前後の矢印
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // // 自動再生
            autoplay: {
                delay: 5000, // スライドが切り替わるまでの遅延時間（ミリ秒）
                disableOnInteraction: false, // ユーザーの操作後も自動再生を続ける
            },
        });
});
