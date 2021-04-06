module.exports = {
  giveItem(data, count, page) {
    let newData = [];
    const pagesNum = Math.ceil(data.length / count);

    let lastItem = count * page;
    let firstItem = lastItem - count;
    for (let i = firstItem; i < lastItem && i < data.length; i++) {
      newData.push(data[i]);
    }

    return {
      pages: pagesNum,
      items: newData,
    };
  },

  findItem(data, id) {
    return data.find(el => el.id === +id);
  },

  filterItems(data, filter) {
    return data.filter(item => {
      const regexp = new RegExp(filter.toLowerCase(), 'i');
      return regexp.test(item.name.toLowerCase());
    });
  }
};