class Slider {
    constructor(slider) {
        this.slider = document.querySelector(slider);
        this.container = this.slider.querySelector('.slider--container');
        this.slide = this.slider.querySelectorAll('.slider--slide');
        this.slideTxt = this.slider.querySelectorAll('.slider--txt');
        this.slideWidth = this.slider.querySelector('.slider--slide').clientWidth;
        this.prev = this.slider.querySelector('.slider--prev');
        this.next = this.slider.querySelector('.slider--next');
        this.dot = this.slider.querySelectorAll('.slider--dot');
        this.currentSlide = 0;
        this.next.addEventListener("click", () => {
            this.slideNext();
        });
        this.prev.addEventListener("click", () => {
            this.slidePrev();
        });
        this.dot.forEach((dot, clickedDot) => {
            dot.addEventListener('click', () => {
                this.slideDot(clickedDot);
            });
        });
    }
    reload() {
        this.slideWidth = this.slider.querySelector('.slider--slide').clientWidth;
        gsap.to(this.container, {
            x: -this.slideWidth * this.currentSlide,
            duration: 0
        });
    }

    init() {
        gsap.to(this.slideTxt, {
            duration: 0,
            xPercent: 50,
            yPercent: -50
        })

        gsap.set(this.dot[this.currentSlide], {
            scale: 1
        });
        gsap.set(this.slideTxt[this.currentSlide], {
            xPercent: 0
        });
    }

    slideDot(clickedDot) {
        let a;
        let b;
        this.currentSlide = clickedDot;
        this.slideTxt.forEach((el, elIndex) => {
            if (elIndex < clickedDot) {
                a = el;
            }
            if (elIndex > clickedDot) {
                b = el;
            }
            gsap.timeline()
                .to(this.container, {
                    x: -this.slideWidth * this.currentSlide,
                    duration: 1,
                    ease: 'power2.inOut'
                })
                .to(this.slideTxt[this.currentSlide], {
                    xPercent: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                }, '<')
                .to(a, {
                    xPercent: -50,
                    duration: 1,
                    ease: 'power2.inOut'
                }, '<')
                .to(b, {
                    xPercent: 50,
                    duration: 1,
                    ease: 'power2.inOut'
                }, '<')
                .to(this.dot, {
                    scale: .4,
                    duration: 1,
                    ease: 'power2.inOut'
                }, '<')
                .to(this.dot[this.currentSlide], {
                    scale: 1,
                    duration: 1,
                    ease: 'power2.inOut'
                }, '<')
        })
    }

    slidePrev() {
        if (this.currentSlide === 0) {
            return;
        } else {
            this.currentSlide--;
            sliderTl
                .to(this.container, {
                    x: -this.slideWidth * this.currentSlide
                })
                .to(this.dot[this.currentSlide], {
                    scale: 1
                }, '<')
                .to(this.dot[this.currentSlide + 1], {
                    scale: .4
                }, '<')
                .to(this.slideTxt[this.currentSlide], {
                    xPercent: 0
                }, '<')
                .to(this.slideTxt[this.currentSlide + 1], {
                    xPercent: 50
                }, '<')
        }
    }
    slideNext() {
        if (this.currentSlide === this.slide.length - 1) {
            return;
        } else {
            this.currentSlide++;
            sliderTl
                .to(this.container, {
                    x: -this.slideWidth * this.currentSlide
                })
                .to(this.dot[this.currentSlide], {
                    scale: 1
                }, '<')
                .to(this.dot[this.currentSlide - 1], {
                    scale: .4
                }, '<')
                .to(this.slideTxt[this.currentSlide], {
                    xPercent: 0
                }, '<')
                .to(this.slideTxt[this.currentSlide - 1], {
                    xPercent: -50
                }, '<')
        }
    }
}

let serviceSlider = new Slider('.slider--1');
serviceSlider.init();
const sliderTl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power2.inOut'
    }
});