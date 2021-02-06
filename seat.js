var count_left = 0;
var count_right = 1;

var c = 0;
var d = 1;
var rows = 5;
var back = 6;
var left = 3;
var right = 2;

for(var i=1;  i <= rows; i++ ){
    //console.log(i+' ');

    if(i == rows){
        for(var p = 0; p < back; p++ ){
            var e = count_right + p;
            console.log(e+' ');
        }
        return;
    }

    for(var j = 1; j <= left; j++){
        var r = count_left + j;
        console.log(r +' ');
        c++;
        count_right++;
        d++;

    }

    var w = Math.round(rows/2);
    console.log('ssssssss ');

    if(i !== w){
        for(var k=0; k< right; k++){
            var t = count_right + k;
            console.log(t + ' ');
            c++;
            d++;
        }
    }

    count_right = d;
    count_left = c;
    console.log('\n');
}