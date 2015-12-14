# Phase 1: User Authentication, Review and Location Model, and JSON API (1.5 days)

## Rails
### Models
* User
* Review
* Location

### Controllers
* UsersController (create, new, show)
* SessionsController (create, new, destroy)
* Api::ReviewsController (create, destroy, update)
* Api::LocationsController (show)

### Views
* users/new.html.erb
* session/new.html.erb
* users/show.json.jbuilder
* locations/show.json.jbuilder
* reviews/_review.json.jbuilder

## Flux
### Views (React Components)
* Router that has Users and Sessions new pages as its children

### Stores
* SessionStore

### Actions
* SessionActions.createSession
* UserActions.createUser

### ApiUtil
* ApiUtil.createUser
* ApiUtil.createSession

## Gems/Libraries
* BCrypt (Gem)
