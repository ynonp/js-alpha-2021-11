const db = [
    { id: 4, name: 'shelf', price: 250 },
    { id: 2, name: 'chair', price: 200 },
    { id: 1, name: 'laptop', price: 1000 },
    { id: 3, name: 'table', price: 400 },
]

exports.db = {
    getProductById(id) {
        return db.find(p => p.id === Number(id));
    },
    getAllProducts() {
        return db;
    }
};
// module.exports = db;

// https://www.zap.co.il/model.aspx?modelid=1064052