function add(numbers) {
    if (typeof numbers == 'string') {
        var sum = 0;
        var arrayofnum = [];
        try {
            arrayofnum = numbers
                .replace(/\n/g,',')
                .split(',');
            arrayofnum.forEach(element => {
                let i = parseInt(element)
                // console.log(i, typeof i, isNaN(i));
                if (typeof i == 'number' & !isNaN(i)) {
                    sum += i;
                }
            });
        } catch (error) {
            sum = 0;
        }


        // console.log(arrayofnum, sum);
        return sum;
        
    } else {
        return 0
    };
};

// add('1\n2,3');
module.exports = {add};