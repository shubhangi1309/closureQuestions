// -------- KEY-VALUE RETRIEVAL ----------
// Comparing 3 Methods for Key-Value Retrieval from OBJECT:
// 𝟏. 𝐟𝐨𝐫...𝐢𝐧: FASTEST for iterating through keys.
// 𝟐. 𝐎𝐛𝐣𝐞𝐜𝐭.𝐤𝐞𝐲𝐬(): SLOWER than for...in, due to some overhead for creating an key array.
// 𝟑. 𝐎𝐛𝐣𝐞𝐜𝐭.𝐞𝐧𝐭𝐫𝐢𝐞𝐬(): SLOWEST due to overhead for creating key-value pairs.

let object = {x1: 1, x2: 2, x3: 3, x4:4, x5:5, x6: 6, x7: 7, x8: 8, x9:9, x10:10, x11: 11, x12: 12, x13: 13, x14: 14, x15: 15};

for(let key in object) {
    console.log(key, object[key]);
}

Object.keys(object).forEach(key => console.log(key, object[key]));

Object.entries(object).forEach(([key,value]) => console.log(key, value));