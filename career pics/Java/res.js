var countries = ["Scotland", "England"];
console.log("Countries :" + countries);
countries.push("Wales");
console.log(countries);
countries.shift();
console.log(countries);
countries = [countries[0], "Northern Ireland", countries[1]];
console.log(countries);
var countrylist = [countries[0], countries[1], countries[2]];
console.log(countrylist)
var username = "Sarah";
var greeting = `Hi ${username}`;
console.log(greeting);
var countrylist = [`${countries[0]},${countries[1]},${countries[2]}`]
console.log(countrylist)
var surname = "Macneil";
var greeting = `Hi ${username} ${surname} , How are you ?`;
console.log(greeting);
