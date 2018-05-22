var slider = {
    slides:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'],
    frame:0,
    set: function(image) { // установка нужного фона слайдеру
        document.getElementById("slider_show").style.backgroundImage = "url("+"img/"+image+")";
    },
    init: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() {
        this.frame++;
        if(this.frame === this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    },5000);
};