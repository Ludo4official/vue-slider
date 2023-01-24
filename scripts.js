const { createApp } = Vue;

createApp({

    data() {

        return {

            images: [

                '01.webp',
                '02.webp',
                '03.webp',
                '04.webp',
                '05.webp'

            ],

            activeIndex: 0
        }

    },

    methods: {

        changeSlide(direction) {

            if (direction == 'next') {

                if (this.activeIndex == this.images.length - 1){
                    this.activeIndex = 0;
                } else {
                    this.activeIndex++;
                }

            } else {

                if (this.activeIndex == 0){
                    this.activeIndex = this.images.length - 1;
                } else {
                    this.activeIndex--;
                }

            }
               
        }

    }

}).mount('#app');