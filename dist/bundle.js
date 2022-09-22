(()=>{"use strict";!function(){const e=document.querySelector("[data-header]"),t=document.querySelector("[data-blur]");function a(e){e.forEach((e=>{e.classList.remove("active")}))}if(null!==e){const i=e.querySelectorAll("[data-select-language]"),n=e.querySelector("[data-catalog-menu]"),o=e.querySelector("[data-menu-services]"),c=e.querySelector("[data-menu-call]"),l=e.querySelector("[data-menu-account]"),s=e.querySelector("[data-open-mobile-menu]"),d=e.querySelector("[data-header-wrapper]"),u=e.querySelector("[data-close-menu-mobile]"),v=e.querySelectorAll("[data-menu-mobile-item]"),p=(e.querySelector("[data-menu-mobile-list]"),e.querySelector("[data-mobile-menu-wrapper]")),y=e.querySelectorAll("[data-accordion-mobile]"),f=e.querySelectorAll("[data-select-submenu-mobile]"),m=e.querySelector("[data-button-search]"),L=e.querySelector("[data-button-close-search]"),S=e.querySelectorAll("[data-default-link]");if((r=i).forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault(),e.classList.contains("active")||(r.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"))}))})),null!==n){const r=e.querySelector("[data-button-show-catalog]"),i=e.querySelectorAll("[data-catalog-menu-item]"),o=e.querySelectorAll("[data-item-submenu]");e.querySelector("[data-submenu-catalog]"),r.addEventListener("click",(function(){n.classList.toggle("active"),t.classList.toggle("active")})),window.addEventListener("click",(e=>{const a=e.composedPath().includes(n),i=e.composedPath().includes(r);a||i||(n.classList.remove("active"),t.classList.remove("active"))})),i.forEach(((e,t)=>{e.addEventListener("click",(function(){a(i),a(o),e.classList.add("active"),o[t].classList.add("active")}))}))}if(null!==o){const t=e.querySelector("[data-button-services]"),a=e.querySelector("[data-section-services]");t.addEventListener("click",(function(){this.classList.toggle("active"),o.classList.toggle("active"),a.classList.toggle("active")})),window.addEventListener("click",(e=>{const r=e.composedPath().includes(o),i=e.composedPath().includes(t);r||i||(o.classList.remove("active"),t.classList.remove("active"),a.classList.remove("active"))}))}if(null!==c){const t=e.querySelector("[data-button-call]"),a=e.querySelector("[data-section-call]");t.addEventListener("click",(function(){this.classList.toggle("active"),c.classList.toggle("active"),a.classList.toggle("active")})),window.addEventListener("click",(e=>{const r=e.composedPath().includes(c),i=e.composedPath().includes(t);r||i||(c.classList.remove("active"),t.classList.remove("active"),a.classList.remove("active"))}))}if(null!==l){const t=e.querySelector("[data-button-account]"),a=e.querySelector("[data-section-account]");t.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("active"),l.classList.toggle("active"),a.classList.toggle("active")})),window.addEventListener("click",(e=>{const r=e.composedPath().includes(l),i=e.composedPath().includes(t);r||i||(l.classList.remove("active"),t.classList.remove("active"),a.classList.remove("active"))}))}s.addEventListener("click",(()=>{d.classList.add("active")})),u.addEventListener("click",(()=>{d.classList.remove("active")})),v.forEach((e=>{e.addEventListener("click",(function(){this.classList.toggle("active"),p.classList.toggle("active")}))})),y.forEach((e=>{e.addEventListener("click",(function(e){const t=e.currentTarget.querySelector("[data-accordion-mobile-content]");this.classList.toggle("active"),this.classList.contains("active")?t.style.height=t.scrollHeight+"px":t.style.height="0px"}))})),v.forEach(((e,t)=>{e.addEventListener("click",(function(){a(v),a(f),e.classList.add("active"),f[t].classList.add("active")}))})),m.addEventListener("click",(function(){e.classList.add("active-search")})),L.addEventListener("click",(function(t){t.preventDefault(),e.classList.remove("active-search")})),S.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault()}))}))}var r}(),function(){const e=document.querySelector("[data-footer]"),t=document.querySelector("[data-header]"),a=document.querySelector("[data-modal-enter]"),r=document.querySelectorAll("[data-tel-input]"),i=document.querySelector("[data-main]"),n=document.querySelector("[data-modal-on-click]"),o=document.querySelector("[data-modal-stay-review]"),c=document.querySelector("[data-filter]"),l=document.querySelector("[data-ordering-form-enter]"),s=document.querySelector("[data-ordering-tab-forget-pass]"),d=document.querySelector("[data-new-user-section]"),u=document.querySelector("[data-personal-arae]"),v=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,p=/^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,y=/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/,f=function(e){return e.value.replace(/\D/g,"")},m=function(e){let t=e.target,a=f(t),r=e.clipboardData||window.clipboardData;if(r){let e=r.getData("Text");if(/\D/g.test(e))return void(t.value=a)}},L=function(e){var t=e.target,a=f(t),r=t.selectionStart,i="";if(!a)return t.value="";if(t.value.length==r){if(["3","8","0"].indexOf(a[0])>-1){"0"==a[0]&&(a="8"+a),"3"==a[0]&&(a="8");var n="8"==a[0]?"8":"+3";i=t.value=n+" ",a.length>1&&(i+="("+a.substring(1,4)),a.length>=5&&(i+=") "+a.substring(4,7)),a.length>=8&&(i+="-"+a.substring(7,9)),a.length>=10&&(i+="-"+a.substring(9,11))}else i="+"+a.substring(0,16);t.value=i}else e.data&&/\D/g.test(e.data)&&(t.value=a)};var S=function(e){var t=e.target.value.replace(/\D/g,"");8==e.keyCode&&1==t.length&&(e.target.value="")};for(var g of r)g.addEventListener("keydown",S),g.addEventListener("input",L,!1),g.addEventListener("paste",m,!1);function h(e,t,a){t?e?(a.classList.remove("error"),t.disabled=!1):(a.classList.add("error"),t.disabled=!0):e?a.classList.remove("error"):a.classList.add("error")}function q(e,t){return e===y?!!(t.includes("@")&&t.includes(".")&&e.test(t)):e.test(t)}function w(e,t,a,r){q(e,t.value)||""==t.value?h(!0,a,r):h(!1,a,r)}function E(e){e.addEventListener("click",(function(e){e.preventDefault()}))}function b(e,t,a,r){e.value!==t.value?(a.classList.add("error"),r.classList.add("error")):(a.classList.remove("error"),r.classList.remove("error"))}if(null!==e){const k=e.querySelector("[data-input-email-container-footer]"),A=e.querySelector("[data-input-email-footer]"),P=e.querySelector("[data-button-input-footer]");E(P),A.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,A,P,k)}))}if(null!==a){const x=a.querySelectorAll("[data-show-password]"),_=a.querySelector("[data-input-email-modal-enter-container]"),V=a.querySelector("[data-input-email-modal-enter]"),D=a.querySelector("[data-input-password-modal-enter]"),T=a.querySelector("[data-input-name-modal-register-container]"),z=a.querySelector("[data-input-email-modal-register-container]"),C=a.querySelector("[data-input-password-modal-register-container]"),H=a.querySelector("[data-input-password-re-modal-register-container]"),B=(a.querySelector("[data-input-name-modal-register]"),a.querySelector("[data-input-password-modal-register]")),Y=a.querySelector("[data-input-password-re-modal-register]"),W=a.querySelector("[data-modal-button-enter]"),X=a.querySelector("[data-modal-button-register]"),Z=a.querySelectorAll("[data-input-enter]"),O=a.querySelectorAll("[data-input-register]"),N=a.querySelector("[data-input-email-modal-forget-container]"),$=a.querySelector("[data-input-forget]"),M=a.querySelector("[data-button-forget-send]"),j=a.querySelector("[data-close-modal-send]"),F=a.querySelector("[data-wrapper-modal]");function G(e,t){e.forEach((a=>{a.addEventListener("input",(function(){e[0].value&&e[1].value&&e[2].value&&e[3].value&&q(p,e[0].value)&&q(y,e[1].value)&&(t.disabled=!1)}))}))}function I(e,t){e.forEach((a=>{a.addEventListener("input",(function(){e[0].value&&e[1].value&&(t.disabled=!1)}))}))}X.addEventListener("click",(function(){b(B,Y,C,H)})),V.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,V,W,_)})),$.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,$,M,N)})),j.addEventListener("click",(()=>{F.classList.remove("active")})),M.addEventListener("click",(function(e){e.preventDefault(),this.disabled||F.classList.add("active")})),D.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,"")})),O.forEach((e=>{e.addEventListener("input",(function(){this.classList.contains("name-register")?(this.value=this.value.replace(/\s+/gi,""),w(p,this,W,T)):this.classList.contains("email-register")&&(this.value=this.value.replace(/\s+/gi,""),w(y,this,W,z)),G(O,X)}))})),x.forEach((e=>{e.addEventListener("click",(function(){let t=this.getAttribute("data-target"),a=document.querySelector(t);"password"===a.getAttribute("type")?(a.setAttribute("type","text"),e.classList.add("active")):(a.setAttribute("type","password"),e.classList.remove("active"))}))})),I(Z,W)}if(null!==n){const J=n.querySelector("[data-button-modal-on-click]"),K=n.querySelector("[data-input-tel-modal-on-click]"),Q=n.querySelector("[data-input-name-modal-on-click]"),R=n.querySelector("[data-input-tel-container-modal-on-click]"),U=n.querySelectorAll("[data-input-modal-on-click]");J.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("done")})),K.addEventListener("input",(function(){w(v,K,!1,R)})),Q.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,"")})),U.forEach((e=>{e.addEventListener("input",(()=>{let t=[];("tel"===e.type&&""!==e.value&&q(v,e.value)||""!==e.value&&"text"===e.type)&&U.forEach(((e,a)=>{""!==e.value&&t.push(U[a])})),t.length===U.length&&(J.disabled=!1)}))}))}if(null!==t){const ee=t.querySelector("[data-input-phone-header-cotainer]"),te=t.querySelector("[data-input-tel-header]"),ae=t.querySelector("[data-button-tel-submit-header]");E(ae),te.addEventListener("input",(function(){w(v,te,ae,ee)}))}if(null!==i&&null!==i.querySelector("[data-stey-partner-section]")){const re=i.querySelectorAll("[data-input-main]"),ie=i.querySelector("[data-button-stay-partner]"),ne=i.querySelector("[data-tel-input]"),oe=i.querySelector("[data-input-phone-main-container]"),ce=i.querySelector("[data-input-name]"),le=i.querySelector("[data-input-name-main-container]");function se(e,t,a){q(e,t.value)||""==t.value?de(!0,a):de(!1,a)}function de(e,t){e?t.classList.remove("error"):t.classList.add("error")}function ue(e,t){e.forEach((a=>{a.addEventListener("input",(function(){""!==e[0].innerText&&e[1].value&&e[2].value&&e[3].value&&q(p,e[1].value)&&(t.disabled=!1)}))}))}i.querySelectorAll("[data-input-main-item]"),ne.addEventListener("input",(function(){se(v,ne,oe)})),ce.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),se(p,ce,le)})),ue(re,ie)}if(null!==o){const ve=o.querySelectorAll("[data-input-stay-review]"),pe=o.querySelector("[data-button-modal-review]"),ye=o.querySelector("[data-input-tel-stay-review-contaner]"),fe=o.querySelector("[data-input-tel-stay-review]");E(pe),ve.forEach((e=>{e.addEventListener("input",(()=>{let t=[];("tel"===e.type&&""!==e.value&&q(v,e.value)||""!==e.value&&"text"===e.type)&&ve.forEach(((e,a)=>{""!==e.value&&t.push(ve[a])})),t.length===ve.length&&(pe.disabled=!1)}))})),fe.addEventListener("input",(function(){w(v,fe,!1,ye)}))}if(null!==c&&c.querySelectorAll("[data-input-range]").forEach((e=>{e.addEventListener("input",(function(e){this.value=this.value.replace(/[^\d.]/g,"")}))})),null!==l){const me=l.querySelectorAll("[data-input-ordering-enter]"),Le=l.querySelector("[data-ordering-button-enter]"),Se=l.querySelector("[data-input-email-ordering-enter]"),ge=l.querySelector("[data-input-email-ordering-enter-container]"),he=(l.querySelector("[data-input-password-ordering-enter]"),l.querySelector("[data-show-password-ordering-enter]"));E(Le),Se.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,Se,!1,ge)})),me.forEach((e=>{e.addEventListener("input",(()=>{let t=[];(""!==e.value&&"text"===e.type&&q(y,e.value)||""!==e.value&&"password"===e.type)&&me.forEach(((e,a)=>{""!==e.value&&t.push(me[a])})),console.log(t.length),t.length===me.length&&(Le.disabled=!1)}))})),he.addEventListener("click",(function(){let e=this.getAttribute("data-target"),t=document.querySelector(e);"password"===t.getAttribute("type")?(t.setAttribute("type","text"),this.classList.add("active")):(t.setAttribute("type","password"),this.classList.remove("active"))}))}if(null!==s){const qe=s.querySelector("[data-input-email-ordering-forget-container]"),we=s.querySelector("[data-input-email-ordering-forget]"),Ee=s.querySelector("[data-button-ordering-forget-send]");we.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,we,!1,qe),""!==this.value&&q(y,this.value)&&(Ee.disabled=!1)}))}if(null!==d){const be=d.querySelector("[data-input-name-ordering-container]"),ke=d.querySelector("[data-input-surname-ordering-container]"),Ae=d.querySelector("[data-input-phone-ordering-cotainer]"),Pe=d.querySelector("[data-input-email-ordering-container]"),xe=d.querySelector("[data-input-email-ordering]"),_e=d.querySelector("[data-input-tel-ordering]"),Ve=d.querySelector("[data-input-ordering-name]"),De=d.querySelector("[data-input-ordering-surname]"),Te=d.querySelectorAll("[data-input-ordering]"),ze=d.querySelector("[data-button-ordering]");d.querySelector("[data-dropdown-city-selected]"),d.querySelector("[data-dropdown-region-selected]"),d.querySelector("[data-dropdown-number-post-selected]"),xe.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,xe,!1,Pe)})),Ve.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(p,Ve,!1,be)})),De.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(p,De,!1,ke)})),_e.addEventListener("input",(function(){w(v,_e,!1,Ae)})),Te.forEach((e=>{e.addEventListener("input",(()=>{let t=[];""!==e.value&&Te.forEach(((e,a)=>{""!==e.value&&t.push(Te[a])})),t.length===Te.length&&(ze.disabled=!1)}))}))}if(null!==u){const Ce=u.querySelector("[data-input-name-private-data]"),He=u.querySelector("[data-input-surname-private-data]"),Be=u.querySelector("[data-input-tel-private-data]"),Ye=u.querySelector("[data-input-email-private-data]"),We=u.querySelector("[data-input-password-new-private-data]"),Xe=u.querySelector("[data-input-password-re-private-data]"),Ze=u.querySelector("[data-input-name-private-data-container]"),Oe=u.querySelector("[data-input-surname-private-data-container]"),Ne=u.querySelector("[data-input-phone-private-data-cotainer]"),$e=u.querySelector("[data-input-email-private-data-container]"),Me=u.querySelector("[data-input-password-new-private-data-container]"),je=u.querySelector("[data-input-password-re-private-data-container]"),Fe=u.querySelector("[data-button-save-change]"),Ge=u.querySelectorAll("[data-show-password-private-data]");Be.addEventListener("input",(function(){w(v,Be,!1,Ne)})),Ce.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(p,Ce,!1,Ze)})),He.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(p,He,!1,Oe)})),Ye.addEventListener("input",(function(){this.value=this.value.replace(/\s+/gi,""),w(y,Ye,!1,$e)})),Ge.forEach((e=>{e.addEventListener("click",(function(){let e=this.getAttribute("data-target"),t=document.querySelector(e);"password"===t.getAttribute("type")?t.setAttribute("type","text"):t.setAttribute("type","password")}))})),Fe.addEventListener("click",(function(e){e.preventDefault(),b(We,Xe,Me,je)}))}}(),document.querySelector("[data-catalog-page]"),function(){const e=document.querySelector("[data-card-product]"),t=document.querySelector("[data-all-about-section]"),a=document.querySelector("[data-mobile-navigation]");function r(e){e.forEach((e=>{e.classList.remove("active")}))}if(null!==e){const t=e.querySelectorAll("[data-navigation-item]"),a=e.querySelectorAll("[data-color-item]"),i=e.querySelectorAll("[data-size-item]"),n=e.querySelectorAll("[data-button-like]"),o=e.querySelectorAll("[data-button-compare]"),c=e.querySelectorAll("[data-accordion-all-info]"),l=e.querySelector("[data-characteristics-section]"),s=e.querySelector("[data-reviews-section]");if(t.forEach((e=>{e.addEventListener("click",(function(){r(t),e.classList.add("active")}))})),a.forEach((e=>{e.addEventListener("click",(function(){r(a),e.classList.add("active")}))})),i.forEach((e=>{e.addEventListener("click",(function(){r(i),e.classList.add("active")}))})),n.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("active")}))})),o.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("active")}))})),c.forEach((e=>{e.addEventListener("click",(function(e){const t=e.currentTarget.querySelector("[data-accordion-all-info-content]");this.classList.toggle("active"),this.classList.contains("active")?t.style.height=t.scrollHeight+"px":t.style.height="0px"}))})),null!==l&&l.querySelector("[data-button-show-characteristics]").addEventListener("click",(function(){l.classList.toggle("active")})),null!==s){const e=s.querySelector("[data-button-show-reviews]");e.addEventListener("click",(function(){e.classList.toggle("active"),s.classList.toggle("active")}))}}if(null!==t&&window.addEventListener("scroll",(function(){window.scrollY>879?t.classList.add("active"):t.classList.remove("active")})),null!==a){const e=a.querySelector("[data-button-like-mobile-footer]"),t=a.querySelector("[data-button-compare-mobile-footer]");e.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("active")})),t.addEventListener("click",(e=>{e.preventDefault()})),window.scrollY<500&&a.classList.add("active"),window.addEventListener("scroll",(function(){window.scrollY<500?a.classList.add("active"):a.classList.remove("active")}))}}(),function(){const e=document.querySelector("[data-card-item-section]");if(null!==e){const t=e.querySelectorAll("[data-card-color-item]"),a=document.querySelectorAll("[data-card-button-like]");t.forEach((e=>{e.addEventListener("click",(function(){t.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}))})),a.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("active")}))}))}}(),function(){const e=document.querySelector("[data-card-product]"),t=document.querySelector("[data-main]"),a=document.querySelector("[data-title-slider]"),r=document.querySelector("[data-news-one]");function i(e){e.forEach((e=>{e.classList.remove("active")}))}if(null!==e){new Swiper(".recommendation__slider",{direction:"horizontal",slidesPerView:4,spaceBetween:24,pagination:{el:".swiper-pagination"},navigation:{nextEl:".recommendation__slider-button-next",prevEl:".recommendation__slider-button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{0:{slidesPerView:1.1},400:{slidesPerView:1.3},520:{slidesPerView:1.5},600:{slidesPerView:2},820:{slidesPerView:2.5},1e3:{slidesPerView:3},1300:{slidesPerView:4}}});const n=new Swiper(".main-slider__container-navigation",{direction:"horizontal",slidesPerView:6,navigation:{nextEl:".main-slider__button-next",prevEl:".main-slider__button-prev"},freeMode:!0,breakpoints:{0:{slidesPerView:4,direction:"horizontal"},960:{slidesPerView:4,direction:"vertical"}}});new Swiper(".main-slider__container-basic",{direction:"horizontal",slidesPerView:1,mousewheel:!0,navigation:{nextEl:".main-slider__button-next",prevEl:".main-slider__button-prev"},grabCursor:!0,thumbs:{swiper:n},breakpoints:{0:{direction:"horizontal"},768:{direction:"horizontal"}}})}if(null!==t){const o=t.querySelector("[data-current-offers]"),c=t.querySelector("[data-news-section]");null!==o&&(new Swiper(".current-offers__slider-bestseller",{direction:"horizontal",slidesPerView:4,spaceBetween:32,pagination:{el:".swiper-pagination"},navigation:{nextEl:".current-offers__slider-bestseller-button-next",prevEl:".current-offers__slider-bestseller-button-prev"},scrollbar:{el:".current-offers__bestseller-scrollbar",draggable:!0},breakpoints:{0:{slidesPerView:1.1},400:{slidesPerView:1.3},520:{slidesPerView:1.5},600:{slidesPerView:2},820:{slidesPerView:2.5},1e3:{slidesPerView:3},1300:{slidesPerView:4}}}),new Swiper(".current-offers__slider-novelties",{direction:"horizontal",slidesPerView:4,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".current-offers__slider-novelties-button-next",prevEl:".current-offers__slider-novelties-button-prev"},scrollbar:{el:".current-offers__novelties-scrollbar",draggable:!0}}),new Swiper(".current-offers__slider-stock",{direction:"horizontal",slidesPerView:4,spaceBetween:32,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".current-offers__slider-stock-button-next",prevEl:".current-offers__slider-stock-button-prev"},scrollbar:{el:".current-offers__stock-scrollbar",draggable:!0}})),null!==c&&new Swiper(".news__slider",{direction:"horizontal",slidesPerView:3,spaceBetween:32,watchOverflow:!0,breakpoints:{1150:{slidesPerView:3},960:{slidesPerView:2.2},860:{slidesPerView:2},640:{slidesPerView:1.8},0:{slidesPerView:1.15}}})}if(null!==a){const l=a.querySelector("[data-title-slides]"),s=a.querySelector("[data-title-slider-next]"),d=a.querySelector("[data-title-slider-prev]"),u=a.querySelectorAll("[data-title-slide]"),v=a.querySelectorAll("[data-point-title-slider]"),p=a.querySelector("[data-wrp-slider-cont]"),y=t.querySelector("[data-title-slides]"),f=t.querySelector("[data-slider-wrapper-get-height]"),m=120;window.getComputedStyle(y).getPropertyValue("--height"),y.style.setProperty("--height",window.innerHeight-m+"px"),window.getComputedStyle(f).getPropertyValue("--height"),f.style.setProperty("--height",window.innerHeight-m+"px");let L=0;function S(e){window.getComputedStyle(l).getPropertyValue("--translateX"),l.style.setProperty("--translateX",-e*p.offsetWidth+"px")}l.offsetWidth,v[L].classList.add("active"),v.forEach(((e,t)=>{e.addEventListener("click",(()=>{L=t,S(L),i(v),v[L].classList.add("active")}))})),s.addEventListener("click",(()=>{u.length-1===L?(L=0,S(L),i(v),v[L].classList.add("active")):(L+=1,S(L),i(v),v[L].classList.add("active"))})),d.addEventListener("click",(()=>{0===L?(L=u.length-1,S(L),i(v),v[L].classList.add("active")):(L-=1,S(L),i(v),v[L].classList.add("active"))})),window.addEventListener("resize",(()=>{var e;e=p.offsetWidth,window.getComputedStyle(l).getPropertyValue("--width"),l.style.setProperty("--width",e+"px"),S(L)})),window.addEventListener("resize",(()=>{if(window.innerWidth<=860){l.addEventListener("touchstart",a,!1),l.addEventListener("touchmove",n,!1),l.addEventListener("touchend",o,!1);let e=null,t=0;function a(t){const a=t.touches[0];e=a.clientX}let r={};function n(t){if(!e)return!1;let a=t.touches[0].clientX-e;r.xDiff=a,e=null}function o(){r.xDiff>0?0===t?(t=u.length-1,S(t),i(v),v[t].classList.add("active")):(t-=1,S(t),i(v),v[t].classList.add("active")):u.length-1===t?(t=0,S(t),i(v),v[t].classList.add("active")):(t+=1,S(t),i(v),v[t].classList.add("active"))}}}))}null!==r&&new Swiper(".news-one__slider",{direction:"horizontal",slidesPerView:3,spaceBetween:32,watchOverflow:!0,breakpoints:{1150:{slidesPerView:3},960:{slidesPerView:2.2},860:{slidesPerView:2},640:{slidesPerView:1.8},0:{slidesPerView:1.15}}})}(),function(){const e=document.querySelector("[data-main]"),t=document.querySelector("[data-product-selection]"),a=document.querySelector("[data-current-offers]"),r=document.querySelector("[data-botton-up]");function i(e,t){e.forEach((e=>{e.addEventListener("click",(()=>{t.innerText=e.innerText}))}))}function n(e){e.forEach((e=>{e.classList.remove("active")}))}function o(e,t,a,r){e.addEventListener("click",(function(e){e.composedPath().includes(t)||(t.classList.remove("active"),""===a.innerText&&r.classList.remove("active"))}))}function c(t,a,r){t.addEventListener("click",(function(){t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active"),""===a.innerText&&r.classList.toggle("active"),o(e,t,a,r)}))}if(null!==e){const t=e.querySelector("[data-dropdown-type-of-trade]"),a=e.querySelector("[data-product-selection-dropdowns]");if(null!==t){const a=document.querySelectorAll("[data-type-of-trade-item]"),r=document.querySelector("[data-dropdown-selected]"),c=document.querySelector("[data-dropdown-label]"),l=document.querySelectorAll("[data-dropdown]");t.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):(n(l),this.classList.add("active")),""===r.innerText&&c.classList.toggle("active"),o(e,t,r,c)})),i(a,r)}if(null!==a){const e=a.querySelector("[data-dropdown-category]"),t=a.querySelector("[data-dropdown-category-label]"),r=a.querySelector("[data-dropdown-category-selected]"),n=a.querySelectorAll("[data-category-item]"),o=a.querySelector("[data-dropdown-growth]"),l=a.querySelector("[data-dropdown-growth-label]"),s=a.querySelector("[data-dropdown-growth-selected]"),d=a.querySelectorAll("[data-growth-item]"),u=a.querySelector("[data-dropdown-test-one]"),v=a.querySelector("[data-dropdown-test-one-label]"),p=a.querySelector("[data-dropdown-test-one-selected]"),y=a.querySelectorAll("[data-test-one-item]"),f=a.querySelector("[data-dropdown-test-two]"),m=a.querySelector("[data-dropdown-test-two-label]"),L=a.querySelector("[data-dropdown-test-two-selected]"),S=a.querySelectorAll("[data-test-two-item]");c(e,r,t),i(n,r),c(o,s,l),i(d,s),c(u,p,v),i(y,p),c(f,L,m),i(S,L)}}if(null!==t){const e=t.querySelectorAll("[data-checkbox-container]");e.forEach((t=>{t.addEventListener("click",(function(a){n(e),a.currentTarget.querySelector("[data-checkbox-input]").checked=!0,t.classList.add("active")}))}))}if(null!==a){const e=a.querySelectorAll("[data-menu-item]"),t=a.querySelectorAll("[data-select-list]");e.forEach(((a,r)=>{a.addEventListener("click",(function(i){i.preventDefault(),n(e),n(t),a.classList.add("active"),t[r].classList.add("active")}))}))}null!==r&&(r.addEventListener("click",(function(){window.scrollTo(0,0)})),window.addEventListener("scroll",(function(){window.scrollY>300?r.classList.add("active"):r.classList.remove("active")})))}(),function(){const e=document.querySelector("[data-modal-enter]");if(document.querySelector("[data-blur]"),null!==e){const t=e.querySelectorAll("[data-header-modal-item]"),a=e.querySelectorAll("[data-modal-tab-section]"),r=e.querySelectorAll("[data-close-modal]"),i=e.querySelector("[data-popup-modal-container]"),n=document.querySelector("#body-cont"),o=e.querySelector("[data-modal-sended-email]");e.classList.contains("active")&&(n.style.overflow="hidden"),t.forEach((function(r){r.addEventListener("click",(function(){const i=r.getAttribute("data-modal-tab-item"),n=e.querySelector(i);r.classList.contains("active")||(t.forEach((function(e){e.classList.remove("active")})),a.forEach((function(e){e.classList.remove("active")})),r.classList.add("active"),n.classList.add("active"))}))})),r.forEach((t=>{t.addEventListener("click",(function(){e.classList.remove("active"),n.style.overflow="auto"})),e.addEventListener("click",(t=>{const a=t.composedPath().includes(i),r=t.composedPath().includes(o);a||r||(e.classList.remove("active"),n.style.overflow="auto")}))}))}}(),function(){const e=document.querySelector("[data-modal-on-click]"),t=document.querySelector("[data-modal-stay-review]"),a=document.querySelector("[data-modal-basket]");if(null!==e){const t=document.querySelector("[data-button-open-modal-on-click]"),a=document.querySelector("[data-close-modal-on-click]"),r=document.querySelector("[data-modal-on-click-container]"),i=document.querySelector("#body-cont");t.addEventListener("click",(function(){e.classList.add("active"),i.style.overflow="hidden"})),a.addEventListener("click",(function(){e.classList.remove("active"),i.style.overflow="auto"})),e.addEventListener("click",(function(t){t.composedPath().includes(r)||(e.classList.remove("active"),i.classList.remove("lock"))}))}if(null!==t){const e=t.querySelector("[data-button-modal-review]"),a=t.querySelector("[data-close-modal-stay-review]"),r=document.querySelector("[data-button-open-modal-review]"),i=t.querySelector("[data-modal-sended-review]"),n=t.querySelector("[data-modal-stay-review-container]"),o=t.querySelector("[data-close-modal-sended-review]"),c=t.querySelector("[data-modal-stay-review-container]"),l=document.querySelector("#body-cont");r.addEventListener("click",(function(){t.classList.add("active"),l.style.overflow="hidden"})),e.addEventListener("click",(function(){i.classList.add("active"),n.classList.add("hidden")})),o.addEventListener("click",(function(){t.classList.remove("active"),i.classList.remove("active"),n.classList.remove("hidden"),l.style.overflow="auto"})),a.addEventListener("click",(()=>{t.classList.remove("active"),l.style.overflow="auto"})),t.addEventListener("click",(function(e){e.composedPath().includes(c)||(t.classList.remove("active"),l.style.overflow="auto")}))}if(null!==a){const e=document.querySelector("[data-button-open-basket]"),t=a.querySelector("[data-button-close-modal-basket]"),r=a.querySelector("[data-button-continue]"),i=a.querySelector("[data-modal-basket-container]"),n=document.querySelector("#body-cont");e.classList.contains("empty")||e.addEventListener("click",(function(){a.classList.add("active"),n.style.overflow="hidden"})),t.addEventListener("click",(function(){a.classList.remove("active"),n.style.overflow="auto"})),r.addEventListener("click",(function(){a.classList.remove("active"),n.style.overflow="auto"})),a.addEventListener("click",(function(e){e.composedPath().includes(i)||(a.classList.remove("active"),n.style.overflow="auto")}))}}(),function(){const e=document.querySelector("[data-filter]");if(null!==e){const t=e.querySelector("[data-filter-switch]"),a=e.querySelector("[data-dropdown-filter]"),r=(e.querySelectorAll("[data-checkbox-input]"),e.querySelectorAll("[data-title-checkbox]")),i=e.querySelector("[data-filter-price]"),n=e.querySelector("[data-filter-range-title]"),o=e.querySelector("[data-left-navigation-bar]"),c=e.querySelector("[data-catalog-items]"),l=e.querySelector("[data-scroll-bar]"),s=e.querySelector("[data-empty-section]"),d=e.querySelectorAll("[data-button-list-view]"),u=e.querySelectorAll("[data-product-item-change-view]");const v=document.querySelector("[data-top-navigation-section]").offsetHeight,p=document.querySelector("[data-title-page-size]").offsetHeight,y=document.querySelector("[data-page]").offsetHeight,f=document.querySelector("[data-header]").offsetHeight;window.getComputedStyle(o).getPropertyValue("--heightNav"),o.style.setProperty("--heightNav",window.innerHeight-v-p-y-f+"px"),t.addEventListener("click",(function(){this.classList.toggle("active"),o.classList.toggle("active"),c.classList.toggle("active")})),a.addEventListener("click",(function(){this.classList.toggle("active")})),e.addEventListener("click",(e=>{const t=e.composedPath().includes(a);console.log(t),t||a.classList.remove("active")})),n.addEventListener("click",(function(){i.classList.toggle("active")})),r.forEach((e=>{e.addEventListener("click",(function(){this.classList.toggle("active")}))})),window.addEventListener("scroll",(function(){window.scrollY>121?(l.classList.add("active"),s.classList.add("active")):(l.classList.remove("active"),s.classList.remove("active"))})),d.forEach((e=>{e.addEventListener("click",(function(){d.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),e.classList.contains("top-navigation__button-normal")?u.forEach((e=>{e.classList.remove("palit")})):u.forEach((e=>{e.classList.add("palit")}))}))}))}}(),function(){const e=document.querySelector("[data-personal-arae]");function t(e){e.forEach((e=>{e.classList.remove("active")}))}function a(e,t){e.forEach((e=>{e.addEventListener("click",(()=>{t.innerText=e.innerText}))}))}function r(e,t,a,r){e.addEventListener("click",(function(e){e.composedPath().includes(t)||(t.classList.remove("active"),""===a.innerText&&r.classList.remove("active"))}))}if(null!==e){const i=e.querySelector("[data-navigation-bar]"),n=e.querySelector("[data-favorites]"),o=e.querySelector("[data-private-data]"),c=e.querySelector("[data-my-orders]"),l=e.querySelector("[data-comparison]");if(null!==i){const a=i.querySelectorAll("[data-tab-item]"),r=e.querySelectorAll("[data-section-personal-area]"),n=e.querySelector("[data-navigation-bar-empty]");a.forEach((e=>{e.addEventListener("click",(function(){let i=e,n=i.getAttribute("data-tab"),o=document.querySelector(n);t(a),t(r),i.classList.add("active"),o.classList.add("active")}))})),window.addEventListener("scroll",(function(){window.scrollY>56?(i.classList.add("active"),n.classList.add("active")):(i.classList.remove("active"),n.classList.remove("active"))}))}if(null!==n){const t=n.querySelectorAll("[data-favorites-item]"),i=n.querySelector("[data-dropdown-favorites-selected]"),o=n.querySelector("[data-dropdown-favorites-label]"),c=n.querySelector("[data-dropdown-favorites]");c.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active"),""===i.innerText&&o.classList.toggle("active"),r(e,c,i,o)})),a(t,i)}if(null!==o&&e.querySelectorAll("[data-input-password-private-data-container]").forEach((e=>{e.addEventListener("input",(function(e){const t=e.currentTarget,a=t.querySelector("[data-input-password-private-data]"),r=t.querySelector("[data-show-password-private-data]");""!==a.value?r.classList.add("active"):r.classList.remove("active")}))})),null!==c&&c.querySelectorAll("[data-order-item-short-content]").forEach((e=>{e.addEventListener("click",(function(){const e=this.nextElementSibling;this.classList.toggle("active"),this.classList.contains("active")?(e.style.height=e.scrollHeight+"px",e.classList.add("active")):(e.style.height="0px",e.classList.remove("active"))}))})),null!==l){const i=l.querySelectorAll("[data-dropdown-category-item]"),n=l.querySelector("[data-dropdown-category-selected]"),o=l.querySelector("[data-dropdown-category]"),c=l.querySelectorAll("[data-wrapper-comparison-more]");o.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active"),""===n.innerText&&itemLabel.classList.toggle("active"),r(e,o,n,!1)})),a(i,n),c.forEach((function(a){const r=l.querySelectorAll("[data-button-comparison-more]"),i=l.querySelectorAll("[data-wrapper-comparison-more]");a.addEventListener("click",(function(n){const o=n.currentTarget,c=o.querySelector("[data-buuton-more-list]"),l=o.querySelector("[data-button-comparison-more]");e.addEventListener("click",(e=>{e.composedPath().includes(a)||(c.classList.remove("active"),l.classList.remove("active"))})),l.classList.contains("active")||(t(r),t(i),c.classList.add("active"),l.classList.add("active"))}))}));const s=l.querySelector("[data-button-next-comparison]"),d=l.querySelector("[data-button-prev-comparison]"),u=l.querySelector("[data-comparison-slider-header]"),v=l.querySelectorAll("[data-slide-comparison]"),p=l.querySelectorAll("[data-slide-header-item-comparison]");let y=0,f=p.length,m=336,L=5;s.addEventListener("click",(()=>{y<=f-L&&(y+=1,window.getComputedStyle(u).getPropertyValue("--transform"),u.style.setProperty("--transform",-y*m+"px"),v.forEach((e=>{window.getComputedStyle(e).getPropertyValue("--transform"),e.style.setProperty("--transform",-y*m+"px")})))})),d.addEventListener("click",(()=>{0!==y&&(y-=1,window.getComputedStyle(u).getPropertyValue("--transform"),u.style.setProperty("--transform",-y*m+"px"),v.forEach((e=>{window.getComputedStyle(e).getPropertyValue("--transform"),e.style.setProperty("--transform",-y*m+"px")})))}))}}}(),function(){const e=document.querySelector("[data-ordering]");function t(e,t){e.forEach((e=>{e.addEventListener("click",(()=>{t.innerText=e.innerText}))}))}function a(t,a,r){t.addEventListener("click",(function(){t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active"),""===a.innerText&&r.classList.toggle("active"),function(e,t,a,r){e.addEventListener("click",(function(e){e.composedPath().includes(t)||(t.classList.remove("active"),""===a.innerText&&r.classList.remove("active"))}))}(e,t,a,r)}))}if(null!==e){const r=e.querySelector("[data-dropdown-select-delivery]"),i=e.querySelector("[data-ordering-section]"),n=e.querySelector("[data-ordering-basket]");if(null!==r){const o=r.querySelector("[data-dropdown-city]"),c=r.querySelector("[data-dropdown-city-label]"),l=r.querySelector("[data-dropdown-city-selected]"),s=r.querySelectorAll("[data-city-item]"),d=r.querySelector("[data-dropdown-region]"),u=r.querySelector("[data-dropdown-region-label]"),v=r.querySelector("[data-dropdown-region-selected]"),p=r.querySelectorAll("[data-region-item]"),y=r.querySelector("[data-dropdown-number-post]"),f=r.querySelector("[data-dropdown-number-post-label]"),m=r.querySelector("[data-dropdown-number-post-selected]"),L=r.querySelectorAll("[data-number-post-item]");a(o,l,c),t(s,l),a(d,v,u),t(p,v),a(y,m,f),t(L,m)}if(null!==i){const S=i.querySelectorAll("[data-ordering-tab]"),g=i.querySelectorAll("[data-ordering-tab-section]"),h=i.querySelector("[data-ordering-tab-link]"),q=(i.querySelector("[data-ordering-tab-forget-pass]"),i.querySelector("[data-ordering-login-wrapper]"));S.forEach((function(e){e.addEventListener("click",(function(){const t=e.getAttribute("data-ordering-tab-item"),a=i.querySelector(t);e.classList.contains("active")||(S.forEach((function(e){e.classList.remove("active")})),g.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),a.classList.add("active"))}))})),h.addEventListener("click",(function(e){e.preventDefault();const t=h.getAttribute("data-ordering-tab-item"),a=i.querySelector(t);q.classList.add("active"),a.classList.add("active")}))}if(null!==n){function w(){window.innerWidth<=960&&n.querySelector("[data-button-ordering-show-full-info]").addEventListener("click",(function(){const e=this.nextElementSibling;this.classList.toggle("active"),this.classList.contains("active")?(e.style.height=e.scrollHeight+"px",e.classList.add("active")):(e.style.height="0px",e.classList.remove("active"))}))}w(),window.addEventListener("resize",(()=>{w()}))}}}()})();