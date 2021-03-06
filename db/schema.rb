# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151223222723) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "location_visits", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "location_visits", ["location_id"], name: "index_location_visits_on_location_id", using: :btree
  add_index "location_visits", ["user_id"], name: "index_location_visits_on_user_id", using: :btree

  create_table "location_wishes", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "location_wishes", ["location_id"], name: "index_location_wishes_on_location_id", using: :btree
  add_index "location_wishes", ["user_id"], name: "index_location_wishes_on_user_id", using: :btree

  create_table "locations", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "region",     null: false
    t.string   "activity",   null: false
    t.text     "body",       null: false
    t.string   "image",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float    "lat",        null: false
    t.float    "lng",        null: false
  end

  create_table "preferences", force: :cascade do |t|
    t.string   "region",     null: false
    t.string   "activity",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "preferences", ["user_id"], name: "index_preferences_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "rating",      null: false
    t.text     "body",        null: false
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["location_id"], name: "index_reviews_on_location_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
