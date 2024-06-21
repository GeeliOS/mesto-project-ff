(()=>{"use strict";var e=".card",t=document.querySelector("#card-template").content,r="popup_is-opened";function n(){var e=document.querySelector(".".concat(r));e.removeEventListener("mousedown",o),document.removeEventListener("keydown",a),e.querySelector(".popup__close").removeEventListener("click",n),e.classList.remove(r)}function a(e){"Escape"===e.key&&n()}function o(e){e.target.classList.contains(r)&&n()}function c(e){e.classList.add(r),e.addEventListener("mousedown",o),document.addEventListener("keydown",a),e.querySelector(".popup__close").addEventListener("click",n)}var i={name:document.querySelector(".profile__title"),description:document.querySelector(".profile__description"),avatar:document.querySelector(".profile__image")},u=function(e){var t=e.name,r=e.about,n=e.avatar;i.name.textContent=t,i.description.textContent=r,i.avatar.style.backgroundImage="url(".concat(n,")")},l=document.querySelector(".popup_type_image"),d=l.querySelector(".popup__image"),s=l.querySelector(".popup__caption");function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))},m=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},y={baseUrl:"https://nomoreparties.co/v1/cohort-bac-2",headers:{authorization:"23ce9711-841e-4434-8cce-a97e3b391d14","Content-Type":"application/json"}},v=function(e){return console.error(e)},h=function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))},_=function(){return fetch("".concat(y.baseUrl,"/cards"),{headers:y.headers}).then(h)},b=function(){return fetch("".concat(y.baseUrl,"/users/me"),{headers:y.headers}).then(h)},S=function(e){return fetch("".concat(y.baseUrl,"/users/me"),{method:"PATCH",headers:y.headers,body:JSON.stringify(e)}).then(h)},C=function(e){return fetch("".concat(y.baseUrl,"/cards"),{method:"POST",headers:y.headers,body:JSON.stringify(e)}).then(h)},g=function(e){return fetch("".concat(y.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:y.headers}).then(h)},q=function(e){return fetch("".concat(y.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:y.headers}).then(h)},k=function(e){return fetch("".concat(y.baseUrl,"/cards/likes/").concat(e),{headers:y.headers,method:"DELETE"}).then(h)},E=function(e){return fetch("".concat(y.baseUrl,"/users/me/avatar"),{headers:y.headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(h)},A=["name"],L=["_id"];function w(e,t){if(e){if("string"==typeof e)return x(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var j,U,I=document.querySelector(".content"),T=I.querySelector(".places__list"),P="edit",B="gallery",D={edit:document.forms["edit-profile"],addCard:document.forms["new-place"],updateAvatar:document.forms["update-avatar"]},M=[{edit:I.querySelector(".profile__edit-button"),name:P},{addCard:I.querySelector(".profile__add-button"),name:"addCard"},{updateAvatar:I.querySelector(".profile__image-button"),name:"updateAvatar"}],N={edit:document.querySelector(".popup_type_edit"),addCard:document.querySelector(".popup_type_new-card"),gallery:document.querySelector(".popup_type_image"),deleteCard:document.querySelector(".popup_type_delete-card"),updateAvatar:document.querySelector(".popup_type_update-avatar")},J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},G="request",H="success",V=function(e,t){var r=e.querySelector(J.submitButtonSelector);switch(t){case G:r.textContent="Сохранение...";break;case H:r.textContent="Сохранить"}};function $(e,t){switch(e){case P:(r=D.edit).name.value=i.name.textContent,r.description.value=i.description.textContent;break;case B:!function(e){d.src=e.link,d.alt=e.name,s.innerText=e.name}(t)}var r;!function(e,t){var r,n=t.querySelector(e.formSelector),a=function(e){if(Array.isArray(e))return f(e)}(r=n.querySelectorAll(e.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n.querySelector(e.submitButtonSelector);a.forEach((function(t){m(n,t,e),n.reset(),p(a,o,e)}))}(J,N[e]),c(N[e])}var z=function(r,n){return function(r,n,a){var o,c=r.likes,i=r.link,u=r.name,l=r.owner,d=t.querySelector(e).cloneNode(!0),s={contents:{title:(o=d).querySelector(".card__title"),image:o.querySelector(".card__image"),likeCounter:o.querySelector(".card__like-counter")},buttons:{delete:o.querySelector(".card__delete-button"),like:o.querySelector(".card__like-button")}},f=s.contents,p=s.buttons;return f.image.src=i,f.image.alt=u,f.title.textContent=u,f.likeCounter.textContent=c.length,l._id===n&&(p.delete.classList.add("card__delete-button_is-active"),p.delete.addEventListener("click",a.deleteCard)),Array.isArray(c)&&c.some((function(e){return e._id===n}))&&p.like.classList.add("card__like-button_is-active"),p.like.addEventListener("click",(function(e){return a.likeCard(e,f.likeCounter)})),f.image.addEventListener("click",a.openGallery),d}(r,n,{deleteCard:function(t){return function(t,r){j=r,U=t.target.closest(e),c(N.deleteCard)}(t,r._id)},likeCard:function(e,t){return function(e,t,r){(e.target.classList.contains("card__like-button_is-active")?k:q)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),r.textContent=t.likes.length})).catch(v)}(e,r._id,t)},openGallery:function(){return $(B,r)}})};M.forEach((function(e){var t=e.name;return O(e,A)[t].addEventListener("click",(function(){return $(t)}))})),D.edit.addEventListener("submit",(function(e){e.preventDefault(),V(D.edit,G),S({name:D.edit.name.value,about:D.edit.description.value}).then((function(e){u(e),n()})).catch(v).finally((function(){return V(D.edit,H)}))})),D.addCard.addEventListener("submit",(function(e){e.preventDefault(),V(D.addCard,G),C({name:D.addCard["place-name"].value,link:D.addCard.link.value}).then((function(e){T.prepend(z(e,e.owner._id)),n(),D.addCard.reset()})).catch(v).finally((function(){return V(D.addCard,H)}))})),D.updateAvatar.addEventListener("submit",(function(e){var t=D.updateAvatar.avatar.value;e.preventDefault(),V(D.updateAvatar,G),E(t).then((function(e){i.avatar.style.backgroundImage="url(".concat(e.avatar,")"),n(),D.updateAvatar.reset()})).catch(v).finally((function(){return V(D.updateAvatar,H)}))})),N.deleteCard.querySelector(J.submitButtonSelector).addEventListener("click",(function(){g(j).then((function(){U.remove(),n()})).catch(v)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);p(r,n,t),r.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?m(e,t,r):function(e,t,r,n){var a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),a.textContent=r,a.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,a,t),p(r,n,t)}))}))}(t,e)}))}(J),Promise.all([b(),_()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,c,i=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw a}}return i}}(t,r)||w(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=a._id,c=O(a,L),i=n[1];u(c),T.append.apply(T,function(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i.map((function(e){return z(e,o)}))))})).catch(v)})();