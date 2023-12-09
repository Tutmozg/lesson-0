import MyComment from './actions/functions.mjs';

let comment = new MyComment();
console.log(comment.reverse('abcde'));
console.log(comment.ucFirst('abcde'));
console.log(comment.ucWords('abcde abcde abcde'));