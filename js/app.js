$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });
    const tab_head = $("#faq div.content section.tab-head a");
    $(tab_head).on("click",function(){
        var $this = $(this);
        $(tab_head).removeClass("active");
        $this.addClass("active");
        let tab_body = $this.data("id");
        $("#faq div.content section.tab-body").removeClass("active");
        $(`#${tab_body}`).addClass("active");
    });
});
