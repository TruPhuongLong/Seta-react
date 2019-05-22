Seta entrance test

target: 
- get data from API and show list
- allow post data to API

to do that:
1. i write src/service/data-service.js to request: get and post, then i implement this function in data-service to src/service/post-service.js, in here i pass URL and query to get data.

2. i use Redux to control data, in file index.js i implement redux with Provider, then pass store to save data of project to that, beside i use react-router-dom to handle router and can navigate between link get and post.
in homePage is localhost:3000/get i show list post of user, to do that,
 i connect redux to Page, then dispath async action , get function request to API from src/service/post-service.js, then when data come, i show in ui.

to post new data, it is the same, but not have API yet, so it will not work right now.
