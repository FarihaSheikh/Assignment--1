"use strict";
let Guest_list = ['Mahnoor Ali', 'Rozina Narejo', 'Shagufta Aslam'];
// for(let i=0;i<Guest_list.length;i++){
//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }
let person_not_Coming = 'Mahnoor Ali';
let new_Guest = 'Rabiya Ghazal';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss ' + Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n');
}
console.log(`Miss. ${person_not_Coming} is not coming to the party.\n\n`);
console.log('Good News! We got a big table so we are inviting more guests.\n\n');
Guest_list.unshift('Ifrah Zubair');
Guest_list.splice(2, 0, 'Tooba');
Guest_list.push('Madiha Arif');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss ' + Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n');
}
