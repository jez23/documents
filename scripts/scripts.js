(() => {
    fetch('../files.json')
        .then(respone => respone.json())
        .then(data => {
            origianlData = data;
            return updateHTML(data)
        })
        .then(html => addEventListeners(html))
        .catch(err => console.log(err))


    const results = document.querySelector('.result')



    function updateHTML(data) {

        let html = '';

        let id = 1;
        if (data.length > 0) {
            data.forEach(file => {
                if (file.type === 'folder') {
                    html += `<div class="folder">
                                <h3>${file.name.toUpperCase()}</h3>
                                <p>${file.type.toUpperCase()}</p>
                                ${file.added? `<p>${file.added}</p>` : ''}
                                <button id=${id + 10} class="openAccordion">Open Folder</button>
                                <div class="hide accordion" id=${id}>
                                ${file.files.map(subFile => {
                                    return `<div class="file">
                                                <h3>${subFile.name.toUpperCase()}</h3>
                                                <p>${subFile.type.toUpperCase()}</p>
                                                <p>${subFile.added}</p>
                                                <button><a href="https://www.jezblackmore.com/JezBlackmoreBScMA.pdf" target="_blank">View File</a></button>
                                            </div>`
                                })}
                                </div>
                            </div>`
                } else {
                    html += `<div class="file">
                                    <h3>${file.name.toUpperCase()}</h3>
                                    <p>${file.type.toUpperCase()}</p>
                                    <p>${file.added}</p>
                                    <button><a href="https://www.jezblackmore.com/JezBlackmoreBScMA.pdf" target="_blank">View File</a></button>
                                </div>`
                }

                id += 1;
            })
        } else {
            html = `<p>Sorry, no matching results</p>`
        }

        results.innerHTML = html;

        return html;
    }

    function addEventListeners() {
        const searchInput = document.querySelector('.searchInput');
        const filter = document.querySelector('#filter');


        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('openAccordion')) {

                let element = document.getElementById(e.target.id - 10);

                if (e.target.innerHTML === 'Open Folder') {
                    e.target.innerHTML = 'Close Folder';
                    element.classList.remove('hide');
                } else {
                    e.target.innerText = 'Open Folder';
                    element.classList.add('hide');
                }
            }

        })

        searchInput.addEventListener('input', (e) => {
            let term = e.target.value;
            search(term);
        })

        filter.addEventListener('change', (e) => {
            let arr = e.target.value.split('_');
            sortData(arr[0], arr[1]);
        })
    }

    function search(searchTerm) {
        if (searchTerm.length < 1) {
            updateHTML(origianlData);
            return;
        }
        let data = [...origianlData]
        let newData = data.filter(file => {
            return file.name.toLowerCase().includes(searchTerm);
        })

        updateHTML(newData);
    }

    function sortData(property, ascOrDsc) {

        let sortedResults = origianlData.sort(compareFiles);
        updateHTML(sortedResults)

        function compareFiles(a, b) {
            const file1 = a[property].toLowerCase();
            const file2 = b[property].toLowerCase();

            let comparison = 0;
            (file1 > file2) ? comparison = 1: comparison = -1;
            return ascOrDsc === "+" ? comparison : comparison * -1;
        }

    }



})();

let origianlData = [];