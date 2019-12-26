const cheerio = require('cheerio');
const getHTML = require('./utils/html-grabber').getHTML;

const getPageViewers = async (link) => {
    const html = await getHTML(link);
    const $ = cheerio.load(html);
    let viewers = [];
    $("div[class='ipsWidget_inner ipsPad']").find("ul[class='ipsList_inline ipsList_csv ipsList_noSpacing ipsType_normal']").find('li').each((index, elem) => {
        viewers.push($(elem).text().trim());
    });

    return viewers;
};

module.exports = {
    getPageViewers
};
