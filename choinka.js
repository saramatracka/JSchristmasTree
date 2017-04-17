var star = '*';
var space = '_';

for (i = 0; i <= 4; i++) {
    space = '';
    for (j = 0; j <= 4 - i; j++) {
        space += '_';
    }

    console.log(space + star)
    star += '**';
}