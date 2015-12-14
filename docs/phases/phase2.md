# Phase 2: Review form, User Reviews index, Reviews CRUD (1.5 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* UserIndexItem
  - ReviewsIndex
    - ReviewIndexItem
      - ReviewItemDetail
* ReviewsForm

### Stores
* ReviewsStore
* UserStore

### Actions
* ReviewActions.fetchAllReviews -> triggered by ApiUtil
* ReviewActions.fetchReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview
* UserActions.fetchUser

### ApiUtil
* ApiUtil.fetchUser
* ApiUtil.fetchAllReviews
* ApiUtil.fetchReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
* Flux Dispatcher (npm)
* React
* ReactDOM
* React Router
