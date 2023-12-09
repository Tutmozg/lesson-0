class MyComment {
    reverse(string) {
        return string.split('').reverse().join('');
    }
    ucFirst(string) {
        return string[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    ucWords(string) {
        return string.split(' ').map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
    }
}

export default MyComment