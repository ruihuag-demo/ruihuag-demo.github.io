"use strict";
exports.__esModule = true;
var data1 = {
    uuid: "uuid",
    name: "name",
    size: 12,
    created: 33,
    lastModified: 55,
    resourceType: 66,
    cancel: function () { return console.log('cancel'); },
    status: 'false'
};
var data2 = {
    uuid: "uuid2",
    materialName: "ffasd_name",
    materialLink: "dddlink",
    materialType: 2,
    uid: "FSDF",
    ext: "FSD"
};
var data3 = {
    uuid: "uuid3",
    resourceName: "rnmae3",
    resourceLink: "link3",
    resourceType: 3,
    version: "444",
    ext: "fsdf"
};
var data1List = [];
data1List.push(data1);
data1List.push(data1);
console.log('data1', data1List);
