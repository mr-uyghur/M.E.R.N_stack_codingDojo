/* *1189. Maximum Number of Balloons
 * Given a string text you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */

 function howMany(str){
    map = {}
    for(let i=0; i<str.length; i++){
       map[str[i]] = (map[str[i]] || 0) + 1
    }
    return map
    
 }
 console.log(howMany('loonbalxballpoon'))

// var x = "CodingDojo";


// console.log(x[0]); // C

// console.log(x[x.length-1]); // o

// x[0] = "c";


// for(var i = 0; i < x.length; i++){
//     console.log(x[i]);
// }

// let y = {};

// y[key] = value;

// {key: value}