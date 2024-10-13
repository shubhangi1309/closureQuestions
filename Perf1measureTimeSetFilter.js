// set => O(1) vs filter => O(n) performance

function measureTime(name, func) {
    console.time(name);
    func();
    console.timeEnd(name);
}

var array = [1,2,3,3,4,2,5,6];

measureTime('filter', () => {
    let uniqueArrItems = array.filter((item, index) => array.indexOf(item) === index);
    console.log("filter uniqueArrItems ", uniqueArrItems);
});

measureTime('set', () => {
    let set = new Set(array);
    console.log("set ", set);
    console.log("set[0] ", set);
    console.log("set[1] ", set[1]);
    let uniqueArrItems = [...new Set(set)];
    console.log("set uniqueArrItems ", uniqueArrItems);
});

