const bodyParse = require('body-parser');
const cors = require('cors');

module.export = app => {
    app.use(bodyParse.json());
    app.use(cors({
        origin: '*'
    }));
}