import search from './search.js';
import sortData from './sortData.js';

  const addEventListeners = (origianlData) => {
        const searchInput = document.querySelector('.searchInput');
        const filter = document.querySelector('#filter');

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('openAccordion')) {
                const child = e.target.parentNode.parentNode.childNodes[5]
                child.classList.remove('hide')
                if (e.target.innerHTML === 'Open Folder') {
                    e.target.innerHTML = 'Close Folder';
                    child.classList.remove('hide');
                } else {
                    e.target.innerText = 'Open Folder';
                    child.classList.add('hide');
                }
            }
        })

        searchInput.addEventListener('input', (e) => {
            let term = e.target.value;
            search(term.toLowerCase(), origianlData);
        })

        filter.addEventListener('change', (e) => {
            let arr = e.target.value.split('_');
            sortData(arr[0], arr[1], origianlData);
        })
    }
    export default addEventListeners;