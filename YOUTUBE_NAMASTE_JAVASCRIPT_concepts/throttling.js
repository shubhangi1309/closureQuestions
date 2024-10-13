const getData = () => {
    console.log("fetchng");
}

const throttle = (fn, limit) => {
    let timer;
    let flag= true;
    return () => {
        let context = this, args = arguments;
        if(flag) {
            fn.apply(context, args);
            flag = false;
        }
        clearTimeout(timer);
        timer = setTimeout(()=> {
            flag = true;
        }, limit)
    }
}