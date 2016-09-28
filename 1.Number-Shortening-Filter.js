function shortenNumber(suffixes, base) {
    return function(val) {
        if(/^\d+$/.test(val)) {//check if only digits
            var i = 0;//index of suffix
            while(val / base >= 1 && i < suffixes.length - 1) {//while val can still be divided by base and there are suffixes left
                val = parseInt(val / base);
                i++;
            }
            return val + suffixes[i];
        } else if(Array.isArray(val)) {//check if array
            return val.toString();
        } else//string
            return val;
    }
}