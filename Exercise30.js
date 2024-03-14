"use strict";
let userNames = ['admin', 'Fariha', 'Ibrahim', 'Mahnoor', 'Rozina'];
for (let user of userNames) {
    if (user === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thankyou for logging in again.`);
    }
}
