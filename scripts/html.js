const results = document.querySelector('.result');

const updateHTML = (data) => {
    let html = '';
    if (data.length > 0) {
        data.forEach(file => {
          
                html += `<div class="document" id=${file.id}>
                            <div class="document_details">
                                <h3>${file.name.toUpperCase()}</h3>
                                <p>${file.type.toUpperCase()}</p>
                                ${file.added? `<p>${file.added}</p>` : ''}
                            </div>
                            <div class="document_buttons">
                                 ${file.type === 'folder'? `<button class="openAccordion btn">Open Folder</button>`:
                                `<a href="https://www.jezblackmore.com/JezBlackmoreBScMA.pdf" target="_blank"><button class="btn">View File</button></a>`}
                            </div>

                            <div class="hide accordion">
                            ${file.type === "folder"? file.files.map(el => {
                            return `
                                  <div class="document" id=${el.id}>
                                                 <div class="document_details">
                                                    <h3>${el.name.toUpperCase()}</h3>
                                                    <p>${el.type.toUpperCase()}</p>
                                                    <p>${el.added}</p>
                                                </div>
                                                <div class="document_buttons">
                                                    <a href="https://www.jezblackmore.com/JezBlackmoreBScMA.pdf" target="_blank"><button class="btn">View File</button></a>
                                                </div>
                                   </div>`}): ''
                            }
                            </div>
                         </div>`
 
        })
    } else {
        html = `<h2 class="noResults">Sorry, no matching results</h2>`
    }

    results.innerHTML = html;

    return html;
}

export default updateHTML;