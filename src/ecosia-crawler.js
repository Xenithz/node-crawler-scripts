const cheerio = require('cheerio');
const getHTML = require('./utils/html-grabber').getHTML;

const getTreeCount = async () => {
    const html = await getHTML('https://info.ecosia.org/what');
    const $ = cheerio.load(html);
    const treeCount = $('.js-total-treecount').first().text();
    return treeCount;
};

module.exports = {
    getTreeCount
};