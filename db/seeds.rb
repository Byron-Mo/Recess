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
# Barcelona, Spain                  X
# Montego Bay, Jamaica
# Rome, Italy                       X
# Toronto, Canada                   X
# San Juan, Puerto Rico
# Bora Bora
# Sydney, Australia                 X
# Maui, Hawaii                      X
# Rio de Janeiro, Brazil            X
# Cape Town, South Africa           X
# Maldives
# Prague,                           X
# Yellowstone, California
# Vancouver, Canada                 X
# Washington D.C.
# U.S. Virgin Islands
# Zurich
# Budapest
# Las Vegas
# Hong Kong, Hong Kong              X
# Create
# Puerto Rico
# Jerusalem





ActiveRecord::Base.transaction do
  locations = {
    "1" => {
      name: "New York City, New York, United States",
      region: "North America",
      activity: "Adventure",
      body: "Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2176/v1450675162/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de_h3tjlb.jpg",
      lat: 40.712332,
      lng: -74.005477
    },
    "2" => {
      name: "Rome, Italy",
      region: "Europe",
      activity: "Culture/History",
      body: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_1985/v1450675355/photo-1433961050574-322241b350f1_j34qux.jpg",
      lat: 41.908098,
      lng: 12.487397
    },
    "3" => {
      name: "London, England",
      region: "Europe",
      activity: "Culture/History",
      body: "London, England’s capital, set on the River Thames, is a 21st-century city with history stretching back to Roman times.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2230/v1450675570/photo-1428342628092-61f9e5d578f2_ywhcc2.jpg",
      lat: 51.519159,
      lng: -0.127697
    },
    "4" => {
      name: "San Francisco, California, United States",
      region: "North America",
      activity: "Adventure",
      body: "San Francisco, in northern California, is a city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its hilly landscape, year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2194/v1450675888/photo-1422226256160-9b266e308ea6_naflz8.jpg",
      lat: 37.781243,
      lng: -122.411441
    },
    "5" => {
      name: "Nassau, Bahamas",
      region: "North America",
      activity: "Beachfront",
      body: "Nassau is the capital and largest city of the Bahamas. It is known for its beaches and coral reefs, destinations for diving and snorkeling.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2310/v1450676104/photo-1441834267915-9bedae355259_pvvyul.jpg",
      lat: 25.048022,
      lng: -77.357353
    },
    "6" => {
      name: "Barcelona, Spain",
      region: "Europe",
      activity: "Culture/History",
      body: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is defined by quirky art and architecture, imaginative food and vibrant street life.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2057/v1450676476/photo-1447678523326-1360892abab8_zv0yo1.jpg",
      lat: 41.385754,
      lng: 2.172112
    },
    "7" => {
      name: "Hong Kong, Hong Kong",
      region: "Asia",
      activity: "Adventure",
      body: "Hong Kong is a city, and former British colony, in southeastern China. Vibrant and densely populated, it’s a major port and global financial center famed for its tower-studded skyline.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2152/v1450676857/photo-1442261350644-d746b4750d4c_dcul4m.jpg",
      lat: 22.282190,
      lng: 114.177794
    },
    "8" => {
      name: "Sydney, Australia",
      region: "Oceania",
      activity: "Adventure",
      body: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Opera House, with a distinctive sail-like design.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2189/v1450677095/photo-1447953696461-df240a5320a3_hhvd1e.jpg",
      lat: -33.874175,
      lng: 151.194315
    },
    "9" => {
      name: "Paris, France",
      region: "Europe",
      activity: "Culture/History",
      body: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1450457817/NnDHkyxLTFe7d5UZv9Bk_louvre_qqbm0n.jpg",
      lat: 48.856579,
      lng: 2.348929
    },
    "10" => {
      name: "Toronto, Canada",
      region: "North America",
      activity: "Adventure",
      body: "Toronto, the provincial capital of Ontario, Canada, is a large, ethnically diverse city sprawling along Lake Ontario’s northwestern shore.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2158/v1450822318/photo-1446853663655-381f4a1ce3fd_ktjtky.jpg",
      lat: 43.652612,
      lng: -79.384245
    },
    "11" => {
      name: "Maui, Hawaii",
      region: "North America",
      activity: "Beachfront",
      body: "Maui is an island in the mid-Pacific, part of the Hawaiian island chain and known for its beach resorts, diverse geography and outdoor activities ranging from hiking and biking to windsurfing and snorkeling.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2421/v1450822512/photo-1438798164535-f6a45922b74a_qdde6b.jpg",
      lat: 20.815776,
      lng: -156.331126
    },
    "12" => {
      name: "Rio de Janeiro, Brazil",
      region: "South America",
      activity: "Beachfront",
      body: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mt. Corcovado and Sugarloaf, a granite monolith with cable cars to its summit.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2455/v1450822805/photo-1447878035468-f6464b327023_qa0duw.jpg",
      lat: -22.908010,
      lng: -43.174371
    },
    "13" => {
      name: "Cape Town",
      region: "Africa",
      activity: "Adventure",
      body: "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2090/v1450823007/photo-1414862625453-d87604a607e4_yqff8i.jpg",
      lat: -33.922646,
      lng: 18.415703
    },
    "14" => {
      name: "Prague, Czech Republic",
      region: "Europe",
      activity: "Culture/History",
      body: "Prague, capital of the Czech Republic, is bisected by the Vltava River. Nicknamed “the City of a Hundred Spires,” it's known for its Old Town Square with colorful baroque buildings, Gothic churches and the medieval Astronomical Clock.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_1995/v1450823250/photo-1446760233569-3e856eed8217_nqgkvz.jpg",
      lat: 50.075012,
      lng: 14.439525
    },
    "15" => {
      name: "Vancouver, Canada",
      region: "North America",
      activity: "Adventure",
      body: "Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2482/v1450823433/316f8e75_pihmib.jpg",
      lat: 49.283884,
      lng: -123.117392
    },
    "16" => {
      name: "Las Vegas, Nevada, United States",
      region: "North America",
      activity: "Adventure",
      body: "Las Vegas, in Nevada’s Mojave Desert, is a resort town famed for its buzzing energy, 24-hour casinos and endless entertainment options.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2420/v1451525219/photo-1450869088552-c7e6c1c74c16_hesqgz.jpg",
      lat: 36.169276,
      lng: -115.148915
    },
    "17" => {
      name: "Washington D.C., United States",
      region: "North America",
      activity: "Culture/History",
      body: "Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2462/v1451525012/unsplash_5243a2eb2bc02_1_lifr2z.jpg",
      lat: 38.905740,
      lng: -77.036541
    },
    "18" => {
      name: "Los Angeles, California, United States",
      region: "North America",
      activity: "Adventure",
      body: "Los Angeles is a sprawling Southern California city famed as the center of the nation’s film and television industry.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2533/v1451525363/photo-1444723121867-7a241cacace9_awd3jl.jpg",
      lat: 34.050907,
      lng: -118.246969
    },
    "19" => {
      name: "Bora Bora, French Polynesia",
      region: "Oceania",
      activity: "Beachfront",
      body: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1451527769/5033-bora-bora-1920x1080-beach-wallpaper_zgoy9f.jpg",
      lat: -16.496310,
      lng: -151.740914
    },
    "20" => {
      name: "Sao Paulo, Brazil",
      region: "South America",
      activity: "Adventure",
      body: "Vibrant São Paulo is among the world's most populous cities. Brazil's financial center, it has abundant cultural institutions and a rich architectural tradition.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1451525847/saopaulo_ts7opq.jpg",
      lat: -23.551299,
      lng: -46.637903
    },
    "21" => {
      name: "Shanghai, China",
      region: "Asia",
      activity: "Culture/History",
      body: "Enormous Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1451526237/Shanghai-HD-Wallpaper_pmsovg.jpg",
      lat: 31.242832,
      lng: 121.476720
    },
    "22" => {
      name: "Beijing, China",
      region: "Asia",
      activity: "Culture/History",
      body: "Beijing, China’s massive capital, has history stretching back 3 millennia. Yet it’s known as much for its modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1451526393/forbidden_city_beijing-wide_bvwpcv.jpg",
      lat: 39.909056,
      lng: 116.411163
    },
    "23" => {
      name: "Tokyo, Japan",
      region: "Asia",
      activity: "Culture/History",
      body: "Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers and anime shops to cherry trees and temples.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1451526632/World___Japan_Street_Akihabara_in_Tokyo_058699__zfuumi.jpg",
      lat: 35.722333,
      lng: 139.732353
    },
    "24" => {
      name: "Seoul, South Korea",
      region: "Asia",
      activity: "Culture/History",
      body: "Seoul, the capital of South Korea, is a sprawling metropolis where hyper-modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/v1451526782/pROGFgC_wds1rb.jpg",
      lat: 37.557941,
      lng: 126.992289
    },
    "25" => {
      name: "Kuala Lumpur, Malaysia",
      region: "Asia",
      activity: "Adventure",
      body: "Kuala Lumpur, the capital of Malaysia, is called KL by locals. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2788/v1451526956/Kuala_Lumpur_Ultra_HD_w8kzuv.jpg",
      lat: 3.139686,
      lng: 101.688570
    },
    "26" => {
      name: "Singapore, Singapore",
      region: "Asia",
      activity: "Adventure",
      body: "Singapore, an island city-state off southern Malaysia, is a global financial centre with a tropical climate and multicultural population.",
      image: "http://res.cloudinary.com/dptviwjop/image/upload/c_scale,w_2538/v1451527079/photo-1440780336166-b19530cff5ec_tcotbl.jpg",
      lat: 1.355228,
      lng: 103.861430
    },
    "27" => {
      name: "Saigon, Vietname",
      region: "Asia",
      activity: "Culture/History",
      body: "Saigon is a city in southern Vietnam famous for the pivotal role it played in the Vietnam War. It's also known for its French colonial architecture, including Notre-Dame Basilica, made entirely of materials imported from France, and the neoclassical Saigon Central Post Office.",
      image: "",
      lat: ,
      lng:
    },
    "28" => {
      name: "Saint Petersburg, Russia",
      region: "Europe",
      activity: "Culture/History",
      body: "St. Petersburg is a Russian port city on the Baltic Sea. Founded in 1703 by Peter the Great, it was the imperial capital for 2 centuries, and it remains the country’s cultural center, with venues like the hypermodern Mariinsky Theatre hosting opera and ballet.",
      image: "",
      lat: ,
      lng:
    },
    "29" => {
      name: "Moscow, Russia",
      region: "Europe",
      activity: "Culture/History",
      body: "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a fortified complex that’s home to the president and tsarist treasures in the Armoury.",
      image: "",
      lat: ,
      lng:
    },
    "30" => {
      name: "Berlin, Germany",
      region: "Europe",
      activity: "Culture/History",
      body: "Berlin, Germany’s capital and cultural center, dates to the 13th century. Divided during the Cold War, today it's known for its art scene, nightlife and modern architecture, such as Mies van der Rohe’s landmark Neue Nationalgalerie.",
      image: "",
      lat: ,
      lng:
    },
    "31" => {
      name: "Frankfurt, Germany",
      region: "Europe",
      activity: "Culture/History",
      body: "Frankfurt, a central German city on the Main River, is a major financial hub.",
      image: "",
      lat: ,
      lng:
    },
    "32" => {
      name: "Male, Maldives",
      region: "Asia",
      activity: "Beachfront",
      body: "The Maldives is a tropical nation in the Indian Ocean composed of 26 coral atolls, which are made up of hundreds of islands. It’s known for its beaches, blue lagoons and extensive reefs.",
      image: "",
      lat: ,
      lng:
    },
    "33" => {
      name: "",
      region: "",
      activity: "",
      body: "",
      image: "",
      lat: ,
      lng:
    },
    "34" => {
      name: "",
      region: "",
      activity: "",
      body: "",
      image: "",
      lat: ,
      lng:
    },
    "35" => {
      name: "",
      region: "",
      activity: "",
      body: "",
      image: "",
      lat: ,
      lng:
    },
    "36" => {
      name: "",
      region: "",
      activity: "",
      body: "",
      image: "",
      lat: ,
      lng:
    },
    "37" => {
      name: "",
      region: "",
      activity: "",
      body: "",
      image: "",
      lat: ,
      lng:
    },
    "38" => {
      name: "",
      region: "",
      activity: "",
      body: "",
      image: "",
      lat: ,
      lng:
    },
    "39": {
      name: "Miami, Florida",
      region: "North America",
      activity: "Beachfront",
      body: "Miami, at Florida's southeastern tip, is a vibrant city whose Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana.",
      image:
    },
    "40": {
      name: "Cancun, Mexico",
      region: "North America",
      activity: "Beachfront",
      body: "Cancún, a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea, is known for its beaches, numerous resorts and energetic nightlife.",
      image:
    }
  }

  locations = locations.map do |num, stats|
    stats
  end

  Location.create!(locations)
end

User.create!(username: "bmo", password: "password")
Preference.create!(region: "Europe", activity: "Culture/History", user_id: 1)
LocationVisit.create!(location_id: 15, user_id: 1)
LocationVisit.create!(location_id: 8, user_id: 1)
LocationVisit.create!(location_id: 3, user_id: 1)
LocationVisit.create!(location_id: 1, user_id: 1)
LocationVisit.create!(location_id: 10, user_id: 1)
LocationVisit.create!(location_id: 11, user_id: 1)
Review.create!(rating: 4, body: "Amazing City", user_id: 1, location_id: 3)
Review.create!(rating: 4, body: "Lovely City", user_id: 1, location_id: 8)
Review.create!(rating: 4, body: "Beautiful City", user_id: 1, location_id: 15)
Review.create!(rating: 4, body: "Stunning City", user_id: 1, location_id: 1)
LocationWish.create!(location_id: 14, user_id: 1)
LocationWish.create!(location_id: 2, user_id: 1)
LocationWish.create!(location_id: 4, user_id: 1)
LocationWish.create!(location_id: 5, user_id: 1)
LocationWish.create!(location_id: 13, user_id: 1)
