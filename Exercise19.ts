

// Excercise 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.



let Guest_list:string[]=['Mahnoor Ali','Rozina Narejo','Shagufta Aslam'];
// for(let i=0;i<Guest_list.length;i++){

//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }

let person_not_Coming :string = 'Mahnoor Ali' ;
let new_Guest :string = 'Rabiya Ghazal' ;

Guest_list[0] = new_Guest;

// for(let i=0;i<Guest_list.length;i++){

//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }

// console.log(`Miss. ${person_not_Coming} is not coming to the party.\n\n`);

// console.log('Good News! We got a big table so we are inviting more guests.\n\n')


Guest_list.unshift('Ifrah Zubair');
Guest_list.splice(2 , 0 , 'Tooba');
Guest_list.push('Madiha Arif');

// for(let i=0;i<Guest_list.length;i++){

//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }

// console.log('\nSorry we can not arrange big table,only 2 peoples will be invited.');

while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop();
    // console.log(`Sorry Miss. ${remove_Guest}, You are not invited for the party.`);
}

// for(let i=0;i<Guest_list.length;i++){

//     console.log('\nDear Miss '+ Guest_list[i] + ',\n\n You are still invited to the party.\n\nThank You!\n\n')
// }

Guest_list.splice( 0, 2);
console.log(Guest_list);

//Excercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest are: ${Guest_list.length}`);