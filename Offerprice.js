let items = [250, 645, 300, 900, 50];

let idx = 0;
for(let val of items) {
    //console.log(`Value of index ${idx} = ${val}`);
    let offer = val/10;
    items[idx] = items[idx] - offer;
    console.log(`Value after offer = ${items[idx]}`);
    idx++;
}

//same using simple for loop logic
for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);