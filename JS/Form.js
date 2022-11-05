"use strict";
const Close = document.querySelector('.Close');
Close === null || Close === void 0 ? void 0 : Close.addEventListener('click', () => {
    document.body.remove();
});
