(()=>{"use strict";var e=".card",t=document.querySelector("#card-template").content,r="popup_is-opened";function n(e){e.removeEventListener("mousedown",o),document.removeEventListener("keydown",a),e.querySelector(".popup__close").removeEventListener("click",n),e.classList.remove(r)}function a(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function o(e){console.log(e),e.target.classList.contains("popup__close")&&(console.log(35),n(document.querySelector(".popup_is-opened")))}function c(e){e.classList.add(r),e.addEventListener("mousedown",o),document.addEventListener("keydown",a),e.querySelector(".popup__close").addEventListener("click",n)}var i={name:document.querySelector(".profile__title"),description:document.querySelector(".profile__description"),avatar:document.querySelector(".profile__image")},u=function(e){var t=e.name,r=e.about,n=e.avatar;i.name.textContent=t,i.description.textContent=r,i.avatar.style.backgroundImage="url(".concat(n,")")},l=document.querySelector(".popup_type_image"),d=l.querySelector(".popup__image"),s=l.querySelector(".popup__caption"),p=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))},f={baseUrl:"https://nomoreparties.co/v1/cohort-bac-2",headers:{authorization:"23ce9711-841e-4434-8cce-a97e3b391d14","Content-Type":"application/json"}},m=function(e){return console.error(e)},y=function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))},v=function(){return fetch("".concat(f.baseUrl,"/cards"),{headers:f.headers}).then(y)},_=function(){return fetch("".concat(f.baseUrl,"/users/me"),{headers:f.headers}).then(y)},h=function(e){return fetch("".concat(f.baseUrl,"/users/me"),{method:"PATCH",headers:f.headers,body:JSON.stringify(e)}).then(y)},b=function(e){return fetch("".concat(f.baseUrl,"/cards"),{method:"POST",headers:f.headers,body:JSON.stringify(e)}).then(y)},S=function(e){return fetch("".concat(f.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:f.headers}).then(y)},C=function(e){return fetch("".concat(f.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:f.headers}).then(y)},g=function(e){return fetch("".concat(f.baseUrl,"/cards/likes/").concat(e),{headers:f.headers,method:"DELETE"}).then(y)},k=function(e){return fetch("".concat(f.baseUrl,"/users/me/avatar"),{headers:f.headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(y)},q=["name"],E=["_id"];function L(e,t){if(e){if("string"==typeof e)return A(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x,O,U=document.querySelector(".content"),j=U.querySelector(".places__list"),P="edit",T="gallery",I={edit:document.forms["edit-profile"],addCard:document.forms["new-place"],updateAvatar:document.forms["update-avatar"]},B=[{edit:U.querySelector(".profile__edit-button"),name:P},{addCard:U.querySelector(".profile__add-button"),name:"addCard"},{updateAvatar:U.querySelector(".profile__image-button"),name:"updateAvatar"}],D={edit:document.querySelector(".popup_type_edit"),addCard:document.querySelector(".popup_type_new-card"),gallery:document.querySelector(".popup_type_image"),deleteCard:document.querySelector(".popup_type_delete-card"),updateAvatar:document.querySelector(".popup_type_update-avatar")},M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},N="request",J="success",G=function(e,t){var r=e.querySelector(M.submitButtonSelector);switch(t){case N:r.textContent="Сохранение...";break;case J:r.textContent="Сохранить"}};function H(e,t){switch(e){case P:(r=I.edit).name.value=i.name.textContent,r.description.value=i.description.textContent;break;case T:!function(e){d.src=e.link,d.alt=e.name,s.innerText=e.name}(t)}var r;c(D[e])}function V(){n(document.querySelector(".popup_is-opened"))}var z=function(r,n){return function(r,n,a){var o,c=r.likes,i=r.link,u=r.name,l=r.owner,d=t.querySelector(e).cloneNode(!0),s={contents:{title:(o=d).querySelector(".card__title"),image:o.querySelector(".card__image"),likeCounter:o.querySelector(".card__like-counter")},buttons:{delete:o.querySelector(".card__delete-button"),like:o.querySelector(".card__like-button")}},p=s.contents,f=s.buttons;return p.image.src=i,p.image.alt=u,p.title.textContent=u,p.likeCounter.textContent=c.length,l._id===n&&(f.delete.classList.add("card__delete-button_is-active"),f.delete.addEventListener("click",a.deleteCard)),Array.isArray(c)&&c.some((function(e){return e._id===n}))&&f.like.classList.add("card__like-button_is-active"),f.like.addEventListener("click",(function(e){return a.likeCard(e,p.likeCounter)})),p.image.addEventListener("click",a.openGallery),d}(r,n,{deleteCard:function(t){return function(t,r){x=r,O=t.target.closest(e),c(D.deleteCard)}(t,r._id)},likeCard:function(e,t){return function(e,t,r){(e.target.classList.contains("card__like-button_is-active")?g:C)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),r.textContent=t.likes.length})).catch(m)}(e,r._id,t)},openGallery:function(){return H(T,r)}})};B.forEach((function(e){var t=e.name;return w(e,q)[t].addEventListener("click",(function(){return H(t)}))})),I.edit.addEventListener("submit",(function(e){e.preventDefault(),G(I.edit,N),h({name:I.edit.name.value,about:I.edit.description.value}).then((function(e){u(e),V()})).catch(m).finally((function(){return G(I.edit,J)}))})),I.addCard.addEventListener("submit",(function(e){e.preventDefault(),G(I.addCard,N),b({name:I.addCard["place-name"].value,link:I.addCard.link.value}).then((function(e){j.prepend(z(e,e.owner._id)),V(),I.addCard.reset()})).catch(m).finally((function(){return G(I.addCard,J)}))})),I.updateAvatar.addEventListener("submit",(function(e){var t=this,r=I.updateAvatar.avatar.value;e.preventDefault(),G(I.updateAvatar,N),k(r).then((function(e){i.avatar.style.backgroundImage="url(".concat(e.avatar,")"),t.closePopupMain(),I.updateAvatar.reset()})).catch(m).finally((function(){return G(I.updateAvatar,J)}))})),D.deleteCard.querySelector(M.submitButtonSelector).addEventListener("click",(function(){S(x).then((function(){O.remove(),V()})).catch(m)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);p(r,n,t),r.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}(e,t,r):function(e,t,r,n){var a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),a.textContent=r,a.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,a,t),p(r,n,t)}))}))}(t,e)}))}(M),Promise.all([_(),v()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,c,i=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw a}}return i}}(t,r)||L(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=a._id,c=w(a,E),i=n[1];u(c),j.append.apply(j,function(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i.map((function(e){return z(e,o)}))))})).catch(m)})();