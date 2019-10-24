# myFriendFinder aka Hot Trash
Build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Instructions

The Survey will have 10 questions for you to choose your answers.  Answers are on a scale of 1 to 5 (strongly disagree to strongly agree)

The server.js file requires the basic npm packages we have been using:  express and path.

The htmlRoutes.js file should include two routes:
A Get Route to /survey which will display the survey page
a default, route that leads to home.html.

Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

{
"name":"Ahmed",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
5,
1,
4,
4,
5,
1,
2,
5,
4,
1
]
}

Determine the user's most compatible friend using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.

Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.

### Technologies Utilized

* HTML
* NodeJS
* JavaScript
* JQuery
* NPM Express
* NPM Path

### Link to README.md

[GitHub Repository](https://github.com/seanrichter/myFriendFinder)