(() =>{

    fetch('../files.json')
    .then(respone => respone.json())
    .then(data => updateHTML(data))
    .catch(err => console.log(err))


const results = document.querySelector('.result')

function updateHTML(data){

   let html = '';

   data.forEach(file => {
       if(file.type === 'folder'){
            html += `<div>
                        <h3>${file.name}</h3>
                        <p>${file.type}</p>
                        ${file.added? `<p>${file.added}</p>` : ''}
                        ${file.files.map(subFile => {
                            return `<div>
                                        <h3>${subFile.name}</h3>
                                        <p>${subFile.type}</p>
                                        <p>${subFile.added}</p>`
                        })}
                    </div>`
       } else {
            html += `<div>
                            <h3>${file.name}</h3>
                            <p>${file.type}</p>
                            <p>${file.added}</p>
                        </div>`
       }
   })

   results.innerHTML = html;
   console.log(html)
}


})();