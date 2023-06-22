use('optic')

const {BSON, EJSON, Objectid} = require('bson');

db.supplier.insertOne({
    supplier_id: bson.ObjectId(),
    customer_name: "Gaz", 
    last_name: "Mawete", 
    street:"Freedom Avenue", 
    housenr: "10", 
    floor: "1a", 
    door: "2", 
    city : "Kinshasa", 
    postal_code: "RW430", 
    country: "Democratic Republic of Congo", 
    telephone: "'9845523'", 
    fax: "9845444", 
    nif : "9845444" })

    // https://www.npmjs.com/package/bson

    // https://github.com/OllinDesigns/sprint1-node-cibernarium-edgarG

let uri = 'mongodb+srv://ollinDesigns:claveParaAtlas@cluster0.1b2ylxi.mongodb.net/?retryWrites=true&w=majority'
    