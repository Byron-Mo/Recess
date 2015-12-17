json.array! @locations do |location|
  json.partial! 'api/locations/location', locals: { location: location }
end
