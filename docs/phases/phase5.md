# Phase 5: Recommendations and beginnings of User Home Page (2.5 days)
## Rails
### Models
* UserBeenToLocation
* UserWantToLocation

### Controllers
* Api::UserBeentoLocationsController
* Api::UserWantToLocationsController

### Views

## Flux
### Views (React Components)
* Index
  - Map

### Stores
* UserBeenToLocationStore
* UserWantToLocationStore

### Actions
* UserBeenToLocationActions.createUserBeenToLocation
* UserBeenToLocationActions.editUserBeenToLocation
* UserBeenToLocationActions.destroyUserBeenToLocation
* UserWantToLocationActions.createUserWantToLocation
* UserWantToLocationActions.editUserWantToLocation
* UserWantToLocationActions.destroyUserWantToLocation

### ApiUtil
* ApiUtil.createUserBeenToLocation
* ApiUtil.editUserBeenToLocation
* ApiUtil.destroyUserBeenToLocation
* ApiUtil.createUserWantToLocation
* ApiUtil.editUserWantToLocation
* ApiUtil.destroyUserWantToLocation

## Gems/Libraries
* Flux Dispatcher (npm)
* React
* ReactDOM
