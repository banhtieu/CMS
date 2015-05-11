$(document).ready(function(){
    $(".slider").each(function(index, element){
        enableSlider(element);
    });
});

$(window).resize(function(){
    $(".slider").each(function(index, element){
        resizeSlider(element);
        element.setImage(element.imageIndex);
    });
});


function resizeSlider(element) {

    var width = $(element).width();
    var height = $(element).height();

    $(element).find(".pages").css("width", width * $(element).find(".page").length);
    $(element).find(".page").css("width", width);
    $(element).find(".page").css("height", height);
}

function enableSlider(element){
    resizeSlider(element);
    element.duration = $(element).data("duration") || 3000;

    $(element).find(".page").each(function(index, page){
        var image = $(page).find("img");
        if (image && image.length) {
            $(page).css("background-image", "url(" + image[0].src + ")");
            $(image[0]).hide();
        }
    });

    element.setImage = function(index) {
        this.imageIndex = index;
        $(this).find(".pages").animate({"left": -$(this).width() * this.imageIndex});
        $(this).find(".page").removeClass("selected");
        $($(this).find(".page")[this.imageIndex]).addClass("selected");
    }

    element.imageIndex = 0;
    element.interval = window.setInterval(function(){
        element.setImage((element.imageIndex + 1) % $(element).find(".page").length);
    }, element.duration);
}