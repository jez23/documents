"use strict";

import updateHTML from './html.js';
import addEventListeners from './addEventListeners.js';

(() => {
    let origianlData = [];
    fetch('../files.json')
        .then(respone => respone.json())
        .then(data => {
            origianlData = data;
            return updateHTML(data)
        })
        .then(() => addEventListeners(origianlData))
        .catch(err => {throw err})

})();

