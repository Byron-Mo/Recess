# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null, inclusion: { in: (0..5).to_a }
body        | text      | not null
reviewer_id | integer   | not null, foreign key (references users), indexed
location_id | integer   | not null, foreign key (references locations), indexed

## locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
region      | string    | not null
activity    | string    | not null, inclusion: { in: %w(Culture/History, Beachfront, Adventure) }
body        | text      | not null
image       | string    | not null, picture used in background
lat         | float     | not null
lng         | float     | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## preferences
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
region      | string    | not null
activity    | string    | not null, inclusion: { in: %w(Culture/History, Beachfront, Adventure) }
user_id     | integer   | not null, foreign key (references users), indexed

## location_visits
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign_key (references users), indexed
location_id | integer   | not null, foreign_key (references locations), indexed

## location_wishes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign_key (references users), indexed
location_id | integer   | not null, foreign_key (references locations), indexed
