/*!
    Browser.mobile
    Copyright	Chad Smith
    License		Unlicense
    Version		0.4.0

    http://detectmobilebrowsers.com
*/
window.mobileCheck = function () { var check = false; (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera); return check };

var html_tag = document.documentElement,
    isMobile = false;

function isTouchDevice() {
    "use strict";
    if (window.matchMedia("(pointer: coarse)").matches) {
        return true;
    } else {
        return false;
    }
}
if (window.mobileCheck() || isTouchDevice()) {
    isMobile = true;
}

function create_slider(el, settings, minSlides) {
    'use strict';
    var sliderElement = el,
        sliderFigure = el.closest('figure'),
        divContent,
        items,
        paginationClass,
        dots,
        dots_cont,
        dost_cont2,
        dost_cont3,
        prev,
        next,
        sl_dl;

    if (el.children.length > 1) {
        // if swiper element is <ul>, convert it to <div> and all it's children from <li> to <div class="li">
        if (el.tagName.toLowerCase() === "ul") {
            el.setAttribute('role', 'none');
            Array.from(el.children).forEach(function (child) {
                child.setAttribute('role', 'none');
                child.classList.add('li');
            });
        }

        items = sliderElement.children;

        if (!minSlides) {
            minSlides = 1;
        }
        if (items.length > parseFloat(minSlides)) {
            var icon = '<span class="svg-wrapper"><svg class="icon icon-caret" viewBox="0 0 10 6"><path fill="currentColor" fill-rule="evenodd" d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" clip-rule="evenodd"/></svg></span>';
            // if pagination class is different from default value (swiper-pagination), creates pagination element with correct class
            paginationClass = (settings && settings.pagination && settings.pagination.el) || ".swiper-pagination";
            paginationClass = paginationClass.replace(/\./g, " ").trim();
            dots = createElementWithClass('span', paginationClass);
            prev = createElementWithClass('a', 'swiper-button-prev');
            next = createElementWithClass('a', 'swiper-button-next');
            sliderElement.classList.add('swiper-initialization');

            prev.classList.add('swiper-button-nav');
            next.classList.add('swiper-button-nav');
            prev.setAttribute('role', 'button');
            next.setAttribute('role', 'button');
            prev.innerHTML = icon;
            next.innerHTML = icon;

            sl_dl = getComputedStyle(el).getPropertyValue('--nav_delay');
            if (sl_dl) {
                prev.setAttribute('data-sal', 'fade');
                next.setAttribute('data-sal', 'fade');
                prev.setAttribute('data-sal-delay', sl_dl);
                next.setAttribute('data-sal-delay', sl_dl);
            }
            Array.from(items).forEach(function (el) {
                wrap(el, document.createElement('div'), 'swiper-slide');
            });
            sliderElement.innerHTML = '<div class="swiper-outer"><div class="swiper-wrapper">' + sliderElement.innerHTML + '</div></div><div class="swiper-custom-pagination"></div>';
            dots_cont = sliderElement.getElementsByClassName('swiper-custom-pagination')[0];
            dost_cont2 = createElementWithClass('div', 'swiper-custom-bullets');
            // this fixed the bug that when adding the swiper in the top, the pagination for the main swiper wasn't being created
            if (settings && settings.pagination) {
                settings.pagination.el = settings.pagination.el || "." + paginationClass;
                dots_cont.appendChild(prev);
                dots_cont.appendChild(dost_cont2);
                dost_cont3 = sliderElement.getElementsByClassName('swiper-custom-bullets')[0];
                dost_cont3.appendChild(dots);
                append_url(dost_cont3, 'Play/Pause', 'play-pause');
                dots_cont.appendChild(createElementWithClass('span', 'swiper-custom-fraction'));
                dots_cont.appendChild(next);

            } else {
                sliderElement.appendChild(prev);
                sliderElement.appendChild(next);
            }

            return new Swiper(sliderElement.children[0], settings);
        }
    }

    return null;
}

function randomize(el) {
    'use strict';
    el.setAttribute('data-random', Math.floor(Math.random() * 10000) + 1);
}

function wrap(el, wrapper, className) {
    'use strict';
    el.parentNode.insertBefore(wrapper, el);
    if (className) {
        wrapper.classList.add(className);
    }
    wrapper.appendChild(el);
}

function createElementWithClass(tag, classList) {
    var tagElem = document.createElement(tag);
    if (!Array.isArray(classList)) {
        classList = [classList]
    }
    for (var i = 0; i < classList.length; i++) {
        tagElem.classList.add(classList[i])
    }
    return tagElem
}

function findClass(className, array) {
    "use strict";
    var elementsArray = [].slice.call(array);
    for (var index = 0; index < elementsArray.length; index++) {
        var element = elementsArray[index];
        if (element.className.indexOf(className) !== -1) {
            return true;
            // return element; // If you wish to return the element instead of true (comment out previous line if this option is used)
        }
    }
    return false;
    // return null; // If you wish to return null instead of false (comment out previous line if this option is used)
}

function append_url(el, content, className, href, access) {
    'use strict';
    if (!findClass(className, Array.from(el.children))) {
        var link = createElementWithClass('a', className);
        if (href) {
            link.href = href;
        } else {
            link.href = './';
            link.setAttribute('role', 'button');
        }
        if (access === true) {
            link.setAttribute('tabindex', -1);
            link.setAttribute('aria-hidden', true);
            link.setAttribute('focusable', false);
        }
        link.innerHTML += content;
        el.appendChild(link);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var Default = {
        utils: {
            start: function () {
                html_tag.classList.add('js');
            },
            mobile: function () {
                if (isMobile) {
                    html_tag.classList.add('mobile');
                } else {
                    html_tag.classList.add('no-mobile');
                }
            },
            swipers: function () {
                var module_featured;

                window.moduleFeaturedSlider = function () {
                    module_featured = document.querySelectorAll('.swiper-init:not(.swiper-initialization)');

                    if (module_featured.length) {
                        Array.from(module_featured).forEach(function (el) {
                            var pagination_type = 'bullets',
                                autoplay_int = false,
                                total_sl = el.children.length,
                                featuredSlider;
                            if (el.getAttribute('data-autoplay')) {
                                autoplay_int = {
                                    delay: parseFloat(el.getAttribute('data-autoplay'))
                                };
                            }
                            randomize(el);
                            // if (el.children.length > 1 && el.classList.contains('container')) {
                            //     Array.from(el.children).forEach(function (em) {
                            //         wrap(em, document.createElement('div'), 'article-container');
                            //     });
                            // }
                            featuredSlider = create_slider(el, {
                                direction: 'horizontal',
                                loop: true,
                                autoHeight: true,
                                autoplay: autoplay_int,
                                threshold: 50,
                                pagination: {
                                    el: '.swiper-pagination-' + el.getAttribute('data-random'),
                                    clickable: true,
                                    type: pagination_type,
                                    renderBullet: function (index, className) {
                                        return '<span class="' + className + '">' + (index + 1) + "<span class='prg'></span></span>";
                                    }
                                },
                                navigation: {
                                    nextEl: '[data-random="' + el.getAttribute('data-random') + '"] .swiper-button-next',
                                    prevEl: '[data-random="' + el.getAttribute('data-random') + '"] .swiper-button-prev'
                                },
                                on: {
                                    slideChangeTransitionStart: function (swiper) {
                                        var active_content = swiper.el.querySelectorAll('.swiper-slide[data-swiper-slide-index="' + swiper.realIndex + '"] article')[0];
                                        if (typeof active_content !== 'undefined') {
                                            el.setAttribute('data-active-content', active_content.getAttribute('class'));
                                        }
                                        if (swiper.realIndex > 0) {
                                            el.classList.add('changed');
                                        } else {
                                            el.classList.remove('changed');
                                        }
                                        if (swiper.realIndex + 1 === total_sl) {
                                            el.classList.add('last-slide-active');
                                        } else {
                                            el.classList.remove('last-slide-active');
                                        }
                                    },
                                    resize: function (swiper) {
                                        if (typeof Shopify !== 'undefined' && Shopify.designMode) {
                                            Array.from(featuredSlider.slides).forEach(function (slide) {
                                                featuredSlider.slideNext(0);
                                            });
                                        }
                                        setTimeout(function () {
                                            featuredSlider.updateAutoHeight();
                                        }, 500);
                                    }
                                }
                            });
                            if (featuredSlider !== null && el.getAttribute('data-autoplay')) {
                                el.style.setProperty('--autoplay_duration', el.getAttribute('data-autoplay') + 'ms');
                                el.getElementsByClassName('play-pause')[0].addEventListener('click', function (e) {
                                    if (el.classList.contains('paused')) {
                                        el.classList.remove('paused');
                                        featuredSlider.autoplay.start();
                                    } else {
                                        el.classList.add('paused');
                                        featuredSlider.autoplay.stop();
                                    }
                                    e.preventDefault();
                                });
                            }
                            if (!isMobile && featuredSlider !== null && el.getAttribute('data-autoplay') && !el.classList.contains('paused')) {
                                el.addEventListener('mouseleave', function () {
                                    el.classList.remove('paused');
                                    featuredSlider.autoplay.start();
                                });
                            }

                            window.addEventListener('resize', function (event) {
                                html_tag.classList.add('resized');
                                if (featuredSlider !== null) {
                                    featuredSlider.updateAutoHeight();
                                }
                            }, true);
                            setTimeout(function () {
                                if (featuredSlider !== null) {
                                    featuredSlider.updateAutoHeight();
                                }
                            }, 500);
                        });

                    }
                };
                moduleFeaturedSlider();

            }
        }
    };

    Default.utils.start();
    Default.utils.mobile();
    Default.utils.swipers();
});

document.addEventListener("shopify:section:load", function (event) {
    var section = event.srcElement;
    console.log("section load:", section);
    if (Shopify.visualPreviewMode && section.closest('shopify-editor') != null) {
        section.closest('shopify-editor').id = 'root';
    }
    if (event.srcElement.getElementsByClassName("swiper-init").length) {
        window.moduleFeaturedSlider();
    }
});

document.addEventListener("shopify:block:select", function (event) {
    var section = document.getElementById("shopify-section-" + event.detail.sectionId + "");

    if (section.querySelector(".swiper-init") != null) {
        var slideIndex = event.srcElement.dataset.slideIndex;
        if (slideIndex) {
            slideIndex = slideIndex - 1;
            var swiperOuter = section.querySelector(".swiper-init .swiper-outer");
            if (swiperOuter) {
                swiperOuter = swiperOuter.swiper;
                if (swiperOuter != null) {
                    swiperOuter.slideTo(slideIndex, 500);
                }
            }
        }
    }
});