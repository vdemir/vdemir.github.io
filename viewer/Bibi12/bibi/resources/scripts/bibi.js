import sML from 'sml.js'; self.sML = sML;
import * as _ from './bibi.heart.js'; for(const m in _) self[m] = _[m];

require('./bibi.book.scss');

document.addEventListener('DOMContentLoaded', () => {
    Bibi.Script = document.getElementById('bibi-script');
    (_ => {
        if(!window.Promise) return document.head.insertBefore(sML.create('script', { className: 'bibi-polyfill', src: Bibi.Script.src.replace(/\/bibi\.js$/, '/polyfills/bundle.js'), onload: _ }), Bibi.Script);
        const Polyfills = [], PolyfillsPath = new URL('./polyfills', Bibi.Script.src).href;
        if(!window.TextDecoder)          Polyfills.push(PolyfillsPath + '/encoding.js');
        if(!window.IntersectionObserver) Polyfills.push(PolyfillsPath + '/intersection-observer.js');
        if(!Polyfills.length) return _();
        const Promises = [];
        Polyfills.forEach(Polyfill => Promises.push(new Promise(resolve => document.head.insertBefore(sML.create('script', { className: 'bibi-polyfill', src: Polyfill, onload: resolve }), Bibi.Script))));
        Promise.all(Promises).then(_);
    })(() => {
        let BookStyleCSS = '', BookStyleElement = Bibi.Script.nextElementSibling;
        while(BookStyleElement) {
            if(/^style$/i.test(BookStyleElement.tagName) && /^\/\*! Bibi Book Style \*\//.test(BookStyleElement.textContent)) {
                BookStyleCSS = BookStyleElement.textContent.replace(/\/*.*?\*\//g, '').trim();
                BookStyleElement.innerHTML = '';
                document.head.removeChild(BookStyleElement);
                break;
            } else BookStyleElement = BookStyleElement.nextElementSibling;
        }
        Bibi.BookStyleURL = O.createBlobURL('Text', BookStyleCSS, 'text/css');
        if(sML.UA.Trident) {
            document.documentElement.style.display = 'none';
            const BibiStyles = Array.prototype.map.call(document.head.querySelectorAll('#bibi-style, #bibi-dress'), _ => { _.HREF = _.getAttribute('href'), _.href = ''; return _; });
            return setTimeout(() => {
                BibiStyles.forEach(_ => { _.href = _.HREF; delete _.HREF; });
                document.documentElement.style.display = '';
                Bibi.hello();
            }, 0);
        }
        Bibi.hello();
    });
});