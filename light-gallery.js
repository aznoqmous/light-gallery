const defaultConfig = {
    selector: 'light-gallery', //classname selector
    thumbTagSelector: 'a',
    thumbClassSelector: null,
    defaultThumb: 'undefined.jpg.png',
    element: null
};

class LightGallery {
    constructor(config) {

        console.log('light-gallery', config);

        this.defaultConfig = defaultConfig;
        var config = config || {};
        this.config = this.getConfig(config);

        this.init();

    }

    init() {


        this.current = 0;

        this.container = this.config.element || document.getElementById(this.config.selector);
        this.getStyles();

        this.thumbs = this.getThumbs();
        console.log(this.thumbs);

        this.panes = [];

        this.buildHTML();
        this.bindEvents();

    }

    getConfig(config) {
        return Object.assign(this.defaultConfig, config);
    }

    buildHTML() {

        this.box = document.createElement('div');
        this.box.classList.add('light-gallery-box');

        this.buildPanes();

        this.buildNavigation();

        this.container.appendChild(this.box);

        this.container.classList.add('light-gallery');
    }

    buildPanes() {
        for (var i = 0; i < this.thumbs.length; i++) {
            var thumb = this.thumbs[i];

            var pane = document.createElement('div');
            pane.classList.add('light-gallery-box-pane');

            var fig = document.createElement('figure');

            var img = document.createElement('img');
            img.setAttribute('data-light-gallery-src', thumb.getAttribute('href'));

            fig.appendChild(img);
            pane.appendChild(fig);
            this.box.appendChild(pane);

            this.panes.push(pane);
            thumb.setAttribute('data-light-gallery-index', i);
        }
    }

    getThumbs() {
        var arrThumbs = [];

        var thumbs = this.container.getElementsByTagName( this.config.thumbTagSelector );
        if( this.config.thumbClassSelector ) var thumbs = this.container.getElementsByClassName( this.config.thumbClassSelector );

        for (var i = 0; i < thumbs.length; i++) {
            var thumb = thumbs[i];
            if ( thumb.getElementsByTagName('img').length ) arrThumbs.push(thumb);
        }

        return thumbs;
    }

    getStyles() {

        this.styles = document.createElement('style');
        this.styles.innerHTML = '.light-gallery { /* nothing here ! */}';

        this.styles.innerHTML += '.light-gallery-freeze { overflow: hidden !important }'; //off state

        this.styles.innerHTML += '.light-gallery-box, .light-gallery-nav { z-index: 100000; opacity: 0; transition: all 0.5s ease; pointer-events: none; }'; //off state
        this.styles.innerHTML += '.light-gallery .light-gallery-box { position: fixed; display: flex; flex-flow: nowrap; top: 0; left: 0; height: 100vh; background: rgba(0,0,0,0.8); }';

        this.styles.innerHTML += '.light-gallery.active .light-gallery-box, .light-gallery.active .light-gallery-nav { opacity: 1; pointer-events: all }';

        this.styles.innerHTML += '.light-gallery-box .light-gallery-box-pane { height: 100%; width: 100vw; display: flex; justify-content: center; align-items: center; }';
        this.styles.innerHTML += '.light-gallery-box .light-gallery-box-pane figure { overflow: hidden }';

        this.styles.innerHTML += '.light-gallery-nav { z-index: 100001; position: fixed; top: 50vh; left: 0; width: 100vw; display: flex; justify-content: space-between; align-items: center; transform: translate3d(0, -50%, 0); }';

        this.styles.innerHTML += '.light-gallery-prev, .light-gallery-next { padding: 20px; cursor: pointer; }';
        this.styles.innerHTML += '.light-gallery-next:before { content: ">"; font-weight: bold; font-size: 30px; color: white; }';
        this.styles.innerHTML += '.light-gallery-prev:before { content: "<"; font-weight: bold; font-size: 30px; color: white; }';
        this.styles.innerHTML += '.light-gallery-prev:hover, .light-gallery-next:hover {  }';

        this.container.appendChild(this.styles);

    }

    bindEvents() {
        var self = this;

        // BIND THUMBS
        for (var i = 0; i < this.thumbs.length; i++) {
            var thumb = this.thumbs[i];
            thumb.addEventListener('click', function (e) {
                e.preventDefault();
                self.setActive(this);
                console.log('click');
            });
        }

        //BIND BOX
        this.box.addEventListener('click', function () {
            self.setUnactive()
        });

        this.prev.addEventListener('click', function () {
            self.prevPane()
        });
        this.next.addEventListener('click', function () {
            self.nextPane()
        });

    }

    buildNavigation() {
        this.nav = document.createElement('div');
        this.nav.classList.add('light-gallery-nav');

        this.prev = document.createElement('div');
        this.prev.classList.add('light-gallery-prev');
        this.next = document.createElement('div');
        this.next.classList.add('light-gallery-next');

        this.nav.appendChild(this.prev);
        this.nav.appendChild(this.next);

        this.container.appendChild(this.nav);
    }

    nextPane() {
        this.current++;
        if (this.current >= this.thumbs.length) this.current = 0;
        this.setActive();
    }

    prevPane() {
        this.current--;
        if (this.current < 0) this.current = this.thumbs.length - 1;
        this.setActive();
    }

    setActive(el) {

        var el = el || this.thumbs[this.current];
        var index = el.getAttribute('data-light-gallery-index');
        var pane = this.panes[index];
        var thumb = this.thumbs[index];
        var img = pane.getElementsByTagName('img')[0];

        this.box.style.left = '-' + index + '00vw';

        var dataSrc = img.getAttribute('data-light-gallery-src') || thumb.getAttribute('src') || this.config.defaultThumb;
        img.setAttribute('src', dataSrc);

        this.active = 1;
        this.container.classList.add('active');
        this.container.classList.remove('unactive');

        document.body.classList.add('light-gallery-freeze');

    }

    setUnactive() {

        this.active = 0;
        this.container.classList.add('unactive');
        this.container.classList.remove('active');

        document.body.classList.remove('light-gallery-freeze');

    }

}
