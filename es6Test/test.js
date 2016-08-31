/**
 * Des
 * Created by luowei5 on 2016/8/29.
 * E-mail luowei5@jd.com
 * Update 2016/8/29
 */
var ref = "some value";

const atom = {ref};

console.log(atom);

let mapArr = [['name', '张三'], ['title', 'this is map'], ['port', 3030]];
let map = new Map(mapArr);

for(let key of map.keys()){
    console.log(`keys: ${key}`, typeof key);
}

for(let value of map.values()){
    console.log(`values: ${value}`, typeof value);
}

for(let item of map.entries()){
    console.log(`entries: ${item}`, typeof item, item[0]);
}