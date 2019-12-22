const axios = require('axios');
const cheerio = require('cheerio')

const getHTML = async (link) => {
    const res = await axios({
        method: 'get',
        url: `${link}`,
        responseType: 'document'
    });

    return res.data;
};

const getTreeCount = async () => {
    const html = await getHTML('https://info.ecosia.org/what');
    const $ = cheerio.load(html);
    const treeCount = $('.js-total-treecount').first().text();
    return treeCount;
};

module.exports = {
    getTreeCount
};