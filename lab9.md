# Lab: Express Web Server

[ ] Create an Express API with only one route '/' that will return a JSON object with your name:

```
{ name: 'ynon' }
```

[ ] Create an Express API with only one route '/' that will return a JSON object with the current time of day. Use the package [strftime](https://www.npmjs.com/package/strftime) to format the date/time.

```
{ now: '10:25' }
```

[ ] Create an Express API for a counter. POST a request to '/' increases a counter value and GET returns a JSON object with the current value:

```
{ counter: 7 }
```

[ ] Allow the counter to receive a body parameter to say "by how much" you want it to increase.

[ ] Create an express API to share and "like" bookmarks
  - POST '/bookmarks' submit a new link and saves it in the server
  - GET '/bookmarks' returns a list of all submitted links, each with its unique id and how many "likes" they received.
  - POST '/bookmarks/:linkid' perform a "like" on the bookmark
  

[ ] Modify the code that handles `GET /bookmarks` to return at most 10 results. Users can use the parameter `page` to ask for a different page, for example `GET /bookmarks?page=2` will return results 10-19. Results should be ordered by "like" count.


