const axios = require('axios');

const getHTML = async (link) => {
    const res = await axios({
        method: 'get',
        url: `${link}`,
        responseType: 'document'
    });

    return res.data;
};

module.exports = {
    getHTML
};