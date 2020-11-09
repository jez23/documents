import updateHTML from './updateHtml.js';

const sortData = (property, ascOrDsc, origianlData) => {

    let sortedResults = origianlData.sort(compareFiles);
    updateHTML(sortedResults)

    function compareFiles(a, b) {
        const file1 = a[property].toLowerCase();
        const file2 = b[property].toLowerCase();

        let comparison = (file1 > file2) ? 1:  -1;
        return ascOrDsc === "+" ? comparison : comparison * -1;
    }
}

export default sortData;