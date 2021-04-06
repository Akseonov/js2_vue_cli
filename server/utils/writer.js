let fs = require('fs');

module.exports = async function(url, data) {
  try {
    await fs.writeFile(url, JSON.stringify(data, null, '  '), err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    return true;
  }
  catch (err) {
    console.log(err);
    return false;
  }
};