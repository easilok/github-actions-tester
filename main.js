
console.log("Hello")
console.log("World!")
// var chucknorrisAPI = require('@apiverve/chucknorris');
// var api = new chucknorrisAPI({
//     api_key: "123",
//     secure: true //(Optional, defaults to true)
// });



api.execute(function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});

