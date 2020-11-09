import updateHTML from './updateHtml.js';

const search = (searchTerm, origianlData) => {
    if (searchTerm.length < 1) {
        return updateHTML(origianlData);
    }
    let data = [...origianlData]
    let newData = data.filter(file => file.name.toLowerCase().includes(searchTerm))

    updateHTML(newData);
}

export default search;