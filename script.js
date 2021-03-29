$(function() {
    //ハンバーガーメニュー
    const hum = $('#smart-nav-bar, .smart-nav')
    const nav = $('.smart-nav')
    hum.click(function() {
        nav.toggleClass('toggle');
    });
    //ナビスクロール
    $("a").click(function() {
        var target = $($(this).attr("href")).offset().top;
        $("html,body").animate({ scrollTop: target }, 500);
        return false;
    });
    //title
    function titleOpen() {
        $(".main-title span").animate({ "opacity": 1 }, 3000);
    }
    window.setTimeout(titleOpen, 1000);
    //メニューハイライト eqを使用
    //======eq=========
    $(window).scroll(function() {
        for (var i = 0; i <= 4; i++) {
            if ($("section").eq(i).offset().top < $(window).scrollTop() + 200) {
                $("nav li").removeClass("current");
                $("nav li:nth-child(" + i + ")").addClass("current");
            }
        }
    });
    $(window).scroll(function() {
        if ($(".skills").offset().top < $(window).scrollTop() + 200) {
            $(".star").animate({ "opacity": 1 }, 10000);

        }
    });

    /*
    //=======NG==========
    $(window).scroll(function() {
        for (var i = 1; i <= 5; i++) {
            if ($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 200) {
                $("nav li").removeClass("current");
                $("nav li:nth-child(" + i + ")").addClass("current");
            }
        }
    });
    //=======ok===========変数の数調整にて    
    $(window).scroll(function() {
        for (var i = 2; i <= 6; i++) {
            if ($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 200) {
                $("nav li").removeClass("current");
                var select = i - 2;
                $("nav li:nth-child(" + select + ")").addClass("current");
            }
        }
    });
    /*
    console.log($("section").eq("0").offset().top); //0,1,2,3,4
    console.log($("section:nth-child(2)").offset().top); //2,3,4,5,6
    //$("section:nth-child(" + i + ")").offset().top　の　i が23456のみしかoffsetを拾わなかった
    //のでfor文はi=2 i<=6に設定　currentでハイライトを与える要素には i -2 をしてselectに代入調整
*/
    /*
        $("#contact-button").click(function() {
            var classArray = [".contact-name", ".contact-email", ".contact-message"];
            var nameArray = ["NAME", "E-MAIL", "MESSAGE"];
            for (var i = 0; i <= classArray.length; i++) {
                if (!$(classArray[i]).val()) {
                    $(classArray[i]).attr("placeholder", "alert:" + nameArray[i]);
                    $(classArray[i]).css("background-color", "#e66666");
                } else {
                    $(classArray[i]).attr("placeholder", nameArray[i]);
                    $(classArray[i]).css("background-color", "#FFFF");
                }
            }
            return false;
        });
        /* 
            if (!$(.contact-name).val()) {
                $(.contact-name).attr("placeholder", "alert: NAME");
                $(.contact-name).css("background-color", "#e66666");
            } else {
                $(.contact-name).attr("placeholder", "NAME");
                $(.contact-name).css("background-color", "#FFFF");
            }
            return false;
        });
        console.log();
    */
    $('#form').submit(function(event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfdzVV6WADDtq7VsoQqbWzjmsrah-oEl9ujHn8xYQfTmArlaw/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {
                    $(".end-message").fadeIn();
                    //window.location.href = "thanks.html";
                },
                200: function() {
                    $(".false-message").fadeIn();
                }
            }
        });
        event.preventDefault();
    });

});