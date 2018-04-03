function add(numbers) {
    if (typeof numbers == 'string') {
        var err = new Error;
        var sum = 0;
        try {
            var template = numbers.match(/\/\/(.*)\n(.*)/); // разбираем шаблон на 2 строки {//[разделители]\n[числа]}
            var strNumbers = '';
            var arSplitters = [];
            var arNumbers = [];
            if (template) {
                arSplitters = template[1].match(/<(.*?)>/g); //собираем все разделители
                strNumbers = template[2];
                arSplitters.forEach(splitter => {
                    let s = "\\" + splitter.match(/<(.*?)>/)[1];
                    let regex = new RegExp(s, "g");
                    strNumbers = strNumbers.replace(regex, ',');
                });
            } else {
                arSplitters = ',';
                strNumbers = numbers.replace(/\n/g, ',')
            }
            arNumbers = strNumbers.split(',');
            
            arNumbers.forEach(number => {
                let i = parseInt(number)
                if (typeof i == 'number' & !isNaN(i)) {
                    if (i < 0) {
                        err.message += ' ' + i;
                    } else if (i < 1000) {
                        sum += i;
                    }
                }
            });
        } catch (error) {
            sum = 0;
        }

        if (err.message) {
            throw err;
        } else {
            return sum;
        }

    } else {
        return 0
    };
};

module.exports = { add };

