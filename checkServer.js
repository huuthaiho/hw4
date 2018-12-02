var os = require('os');
var {from} = require('rxjs');
var {map, filter} = require('rxjs/operators');
function checkSystem(){
    console.log('Checking your system');
    const fourGB = 4096000;
    const infor = [{name:'RAM', value: os.totalmem()},{name:'CPU', value: os.cpus().length}];
    from(infor)
    .pipe(
        map((obj) => {
        if(obj.name === 'RAM' && obj.value < fourGB) {
            return 'This app needs at least 4 GB of RAM';
        } else if(obj.name === 'CPU' && obj.value < 2) {
            return 'Processor is not supported.';
        } 

    }),
    filter(msg => msg != undefined))
    .subscribe((msg) => console.log(msg));
}

checkSystem();