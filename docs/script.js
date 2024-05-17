var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;


        var manualNav = function(manual){
            slides.forEach((slide) => {
                slide.classList.remove ('active');

                btns.forEach((btn) => {
                    btn.classList.remove ('active');
                });
            });
            slides[manual].classList.add('active');
            btns[manual].classList.add('active');
        }
        btns.forEach((btn,i)=> {
            btn.addEventListener("click",() => {
                manualNav(i);
                currentSlide = 1;  
            })
        })

        var slides2 = document.querySelectorAll('.slidee');
        var btns2 = document.querySelectorAll('.btnn');
        let currentSlide2 = 1;


        var manualNav2 = function(manual){
            slides2.forEach((slide) => {
                slide.classList.remove ('active');

                btns2.forEach((btn) => {
                    btn.classList.remove ('active');
                });
            });
            slides2[manual].classList.add('active');
            btns2[manual].classList.add('active');
        }
        btns2.forEach((btn,j)=> {
            btn.addEventListener("click",() => {
                manualNav2(j);
                currentSlide2 = 1;  
            })
        })

        var repeat = function (activeClass){
            let active = document.getElementsByClassName('active');
            let i = 1;

            var repeater = () => {
                setTimeout(function(){

                    slides.forEach((activeSlide) => {
                        activeSlide.classList.remove('active');
                    })
                    slides2.forEach((activeSlide) => {
                        activeSlide.classList.remove('active');
                    })
                    btns.forEach((activeSlide) => {
                        activeSlide.classList.remove('active');
                    })
                    btns2.forEach((activeSlide) => {
                        activeSlide.classList.remove('active');
                    })
                    slides [i].classList.add('active');
                    btns  [i].classList.add('active');
                    slides2 [i].classList.add('active');
                    btns2  [i].classList.add('active');
                    i++;

                    if(slides.length == i){
                        i = 0;
                    }
                    if(i >= slides.length) {
                        return;
                    }
                   repeater();
                }, 4000);
            }
            repeater ();
        }
        repeat ();

        repeat(slides, btns);