# Recess

[Recess][link]
[link]: http://www.recess.online/

Recess is a web application inspired by Goodreads, providing recommendations for your next vacation. Recess is built using Ruby on Rails, PostgreSQL, React.js, jQuery, Shepherd, and jvectorMap.

## Main Functionality
- Interactively select preferences for your next vacation
- Receive vacation recommendations based off of your preferences
- Mark places you've been to or like to go on a map
- Select and delete placed markers on map
- Create, read, edit, and delete reviews of visited locations
- Search and view locations by city or country

## Additional Functionality
- User log in and authentication
- Provides an instructional tour which guides user on how use the site via Shepherd
- React.js communicating with backend JSON API
- Map interaction provided by jVectorMap

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Review and Location Model, and JSON API

Phase 1 will be implementing user signup and authentication using BCrypt. User Log In and Sign Up pages will be created with React Route, thus preventing the pages from redirecting when alternating from one another. Set up JSON API for reviews and locations.

[Details][phase-one]

### Phase 2: Review form, User Reviews index, Reviews CRUD

Phase 2 adds a form allowing users to create a review. A Reviews 'Index' will be nested under the user's show page and React views will be created for the Reviews' 'IndexItem' and 'ItemDetail'. These reviews are queried from the user. Update and Destroy handlers will also be provided in the 'IndexItem' or 'ItemDetail'.

[Details][phase-two]

### Phase 3: Incorporate Flux in Locations page

Each location's show page will contain user reviews associated with that location. Reviews will be queried from the location and implemented using the React view structure. Look into styling Locations show page and consider implementing infinite scroll displaying user reviews.

[Details][phase-three]

### Phase 4: Next Vacation Preference Form with jVectorMap

Phase 4 will be focused on creating an interactive form allowing the user to select preferences for his/her next vacation. Using Google's Map API, React, and Flux, render a map that allows user to select a region of the world. Add options for user to select type of activity and price

[Details][phase-four]

### Phase 5: Recommendations and beginnings of User Home Page

Query for recommended locations based off of user's preferences. Recommendations will be dependent on region, activity, review ratings, and price, in descending order of importance. Use Google's Map API and render a map that allows user to place markers indicating places he/she has been to or want to go. Markers will be differentiated by color. Add buttons that allow users to go to vacation preference form and add review form. Add Search form that auto suggests when a user searches for a location.

[Details][phase-five]

### Phase 6: User Home Page and Home Page

Finish styling landing page and Create Home Page. Goal is to make a more modern looking page similar to the likes of TaskRabbit and Mint. Focus on styling various parts of the site and incorporate CSS transitions to make the client experience more interactive.

[Details][phase-six]

### Phase 7: Seed locations and reviews data

Phase 7 will be seeding the database with vacation destinations and some user reviews.

### Bonus Features (TBD)
- [ ] Click on other user reviews
- [ ] Rate user reviews
- [ ] Allow users to upload images in reviews
- [ ] PM other users
- [ ] Add pages that show top locations for their respective Activity type

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
