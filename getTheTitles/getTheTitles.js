const getTheTitles = function(array) {
    let titles = [];
    array.forEach((book ) => {
        titles.push(book.title);
    });
    return titles;
};

module.exports = getTheTitles;
