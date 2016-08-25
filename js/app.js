'use strict';

(function() {
    var Selz = {
        run: function() {
            this.initialize();
            this.startSlider();
        },

        initialize: function() {
            this.index = 0;
            this.desktopImage = document.querySelector('#image_desktop');
            this.mobileImage = document.querySelector('#image_mobile');
            document.querySelector('#time').innerHTML = this.getCurrentTime();
            this.website = document.querySelector('#website');
        },

        startSlider: function() {
            setInterval(function() {
                this.desktopImage.src = this.images[this.index]['desktop'];
                this.mobileImage.src = this.images[this.index]['mobile'];
                this.website.innerHTML = this.images[this.index]['website'];
                this.updateIndex();
            }.bind(this), 4000);
        },

        updateIndex: function() {
            if(this.index < this.images.length - 1) {
                this.index++;
            } else {
                this.index = 0;
            }
        },

        getCurrentTime: function() {
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var amPm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            return hours + ':' + minutes + ' ' + amPm;
        },

        images: [
            {
                desktop: 'images/digital_desktop.jpg',
                mobile:  'images/digital_mobile.jpg',
                website: 'victor.design'
            },
            {
                desktop: 'images/coach_desktop.jpg',
                mobile:  'images/coach_mobile.jpg',
                website: 'sarahclarkehealth.com'
            },
            {
                desktop: 'images/writer_desktop.jpg',
                mobile:  'images/writer_mobile.jpg',
                website: 'ruthmcloud.blog'
            },
            {
                desktop: 'images/maker_desktop.jpg',
                mobile:  'images/maker_mobile.jpg',
                website: 'hoxtonpark.co'
            }
        ]
    };

    Selz.run();
})();