var slider = {
    slides:[
        {type: 'image', src:'img/1.jpg'},
        {type: 'image', src:'img/2.jpg'},
        {type: 'image', src:'img/3.jpg'},
        {type: 'image', src:'img/4.jpg'},
        {type: 'image', src:'img/5.jpg'},
        {type: 'image', src:'img/6.jpg'},
        {type: 'image', src:'img/7.jpg'},
        {type: 'image', src:'img/8.jpg'}
    ],
    frame:0,
    set: function(image) {
        document.getElementById("slider_show").style.backgroundImage = "url("+image+")";
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