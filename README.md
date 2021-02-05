# Code Challenge - ITCrowd

![ITCrowd](itcrowd.png)

---

## Garage APP

![Screenshots](screenshots.png)

This repo is a working project that lists cars based on a local API response. It contains both the backend and the frontend app, and it aims at testing candidates' abilities to solve real-world problems, without demanding too much time setting up everything.

## Challenge ideas

### Homework

These tasks are recommended to be completed before the technical interview, where we will hold a pair-programming session with some extra quick tasks.

- [ ] Implement a relational DataBase (use SQLite for simplicity), with two entities, one for Makers and another for Cars. Use the same fields as provided by `cars.json` file. Each Maker can have several Cars.
--- Implemented knex with sqlite for database with cars and maker model

- [ ] Consider implementing a resizing and cache system for served images. What approach would you take? What libraries or services? There's no need to implement it fully, but an example or a simple implementation will be appreciated.
--- Added 'memory-cache' for caching request and images, it will check in cache for request sent, if found then take it from cache otherwise save in to cache
we can use other caching mechanisam like redis, memcached and flat-cache for same as well
--- For resizing we can setup resized image on browser as needed or take images from cached, imagemagick is the best library for the same for resizing images

- [ ] Implement a 'Detail' screen on the frontend app, following the same design principles and using the same information already provided.
--- Implemented Details page with routing