# BlogApp

Blog application developed using React native, react context which provides features for users to create, edit, delete, and see the blog posts. Also, upgraded the app to use the DATA API to store, fetch the blogs from the server and allows users to take advantage of the same features but using API calls.

Link to the application:- <a id="blogs-app-android" href="https://alabama.box.com/s/q4t8u79baifbyfba8pv9hc0mb7zgk87t">Android</a>

If using DATA API, Please do the following before building the app using react-native server:-
* Open terminal Under BlogApp/blog(With DATA API)/jsonserver/
* Run the db and tunnel on two separate terminals (Make sure to install ngrok)
    ```
    npm run db
    npm run tunnel
    ```
* Paste the ngrok URL in jsonServer.js located under BlogApp/blog(With DATA API)/src/api/
* Finally, start the react-native server

###### Images:-

<img src="https://user-images.githubusercontent.com/42498264/110012728-74de9a80-7ce6-11eb-8b60-1cba4dbb2899.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/42498264/110012735-76a85e00-7ce6-11eb-9ab4-b7aa9307c220.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/42498264/110012742-77d98b00-7ce6-11eb-9b53-6f4b050c9f45.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp;

