import { merge } from "./merge";

const collection_1 = [1, 4, 7];
const collection_2 = [2, 5, 8];
const collection_3 = [9, 6, 3];

const result = merge(collection_1, collection_2, collection_3);
console.log(JSON.stringify(result));
