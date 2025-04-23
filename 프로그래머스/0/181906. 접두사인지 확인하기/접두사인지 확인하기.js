function solution(my_string, is_prefix) {
    let count = 0;
    let string = my_string.split('');
    let prefix = is_prefix.split('');
    if(string[0] === prefix[0]) {
        for(let i=0; i<prefix.length; i++) {
            if(string[i]===prefix[i]) {
                count++;
            }
        }
        if(prefix.length == count) {
            return 1;
        }
    }
    return 0;
}