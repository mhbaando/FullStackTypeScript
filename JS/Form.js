"use strict";
const Close = document.querySelector('.Close');
const Send = document.querySelector('.send');
Close === null || Close === void 0 ? void 0 : Close.addEventListener('click', () => {
    document.body.remove();
});
Send === null || Send === void 0 ? void 0 : Send.addEventListener('click', () => {
    alert("waad ku mahadsantahay Waala Diray");
});
