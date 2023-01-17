module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    for(let i=0 ; i < mockData.length; i++){

    }


    //To DO: add the pattern functions and describe the logic inside the function

}