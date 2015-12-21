# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Paris, France                     X
# New York, New York                X
# Rome, Italy                       X
# Cancun, Mexico                    X
# London, England                   X
# Miami, Florida                    X
# Orlando, Florida
# San Francisco, California         X
# Myrtle Beach, South Carolina
# Branson, Missouri
# Nassau, Bahamas                   X
# Punta Cana, Dominican Republic
# Barcelona, Spain
# Montego Bay, Jamaica
# Rome, Italy
# Toronto, Canada
# San Juan, Puerto Rico
# Bora Bora
# Sydney, Australia                 X
# Maui, Hawaii
# Rio de Janeiro, Brazil
# Cape Town, South Africa
# Maldives
# Prague,
# Yellowstone, California
# Vancouver, Canada
# Washington D.C.
# U.S. Virgin Islands
# Zurich
# Budapest
# Las Vegas
# Hong Kong, Hong Kong              X
# Create
# Puerto Rico
# Jerusalem

# 3: {
#   name: "Cancun, Mexico",
#   region: "North America",
#   activity: "Beachfront",
#   body: "Cancún, a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea, is known for its beaches, numerous resorts and energetic nightlife.",
#   image:
# },

# 5: {
#   name: "Miami, Florida",
#   region: "North America",
#   activity: "Beachfront",
#   body: "Miami, at Florida's southeastern tip, is a vibrant city whose Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana.",
#   image:
# },

ActiveRecord::Base.transaction do
  locations = {
    "1" => {
      name: "New York City, New York",
      region: "North America",
      activity: "Adventure",
      body: "Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2176/v1450675162/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de_h3tjlb.jpg"
    },
    "2" => {
      name: "Rome, Italy",
      region: "Europe",
      activity: "Culture/History",
      body: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_1985/v1450675355/photo-1433961050574-322241b350f1_j34qux.jpg"
    },
    "3" => {
      name: "London, England",
      region: "Europe",
      activity: "Culture/History",
      body: "London, England’s capital, set on the River Thames, is a 21st-century city with history stretching back to Roman times.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2230/v1450675570/photo-1428342628092-61f9e5d578f2_ywhcc2.jpg"
    },
    "4" => {
      name: "San Francisco, California",
      region: "North America",
      activity: "Adventure",
      body: "San Francisco, in northern California, is a city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its hilly landscape, year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2194/v1450675888/photo-1422226256160-9b266e308ea6_naflz8.jpg"
    },
    "5" => {
      name: "Nassau, Bahamas",
      region: "North America",
      activity: "Beachfront",
      body: "Nassau is the capital and largest city of the Bahamas. It is known for its beaches and coral reefs, destinations for diving and snorkeling.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2310/v1450676104/photo-1441834267915-9bedae355259_pvvyul.jpg"
    },
    "6" => {
      name: "Barcelona, Spain",
      region: "Europe",
      activity: "Culture/History",
      body: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is defined by quirky art and architecture, imaginative food and vibrant street life.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2057/v1450676476/photo-1447678523326-1360892abab8_zv0yo1.jpg"
    },
    "7" => {
      name: "Hong Kong, Hong Kong",
      region: "Asia",
      activity: "Adventure",
      body: "Hong Kong is a city, and former British colony, in southeastern China. Vibrant and densely populated, it’s a major port and global financial center famed for its tower-studded skyline.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2152/v1450676857/photo-1442261350644-d746b4750d4c_dcul4m.jpg"
    },
    "8" => {
      name: "Sydney, Australia",
      region: "Oceania",
      activity: "Adventure",
      body: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Opera House, with a distinctive sail-like design.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2189/v1450677095/photo-1447953696461-df240a5320a3_hhvd1e.jpg"
    },
    "9" => {
      name: "Paris, France",
      region: "Europe",
      activity: "Culture/History",
      body: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1450457817/NnDHkyxLTFe7d5UZv9Bk_louvre_qqbm0n.jpg"
    }
  }

  locations = locations.map do |num, stats|
    stats
  end
  
  Location.create!(locations)
end
