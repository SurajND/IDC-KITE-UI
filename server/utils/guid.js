const guid = require('guid');

module.exports = {
    GetGUID: () => {
        return guid.create().value;
    },
    IsValidGUID: (id) => {
        return guid.isGuid(id);
    },
    CompareGUID: (id1, id2) => {
        let tempID = new guid(id1);
        return tempID.equals(id2); 
    }
};