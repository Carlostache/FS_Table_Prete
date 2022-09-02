# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create(:name => "Kogane", 
 :description => "Daily homemade fresh ramen in a modern and relaxing atmosphere.", 
 :pricing => "$31 to $50", 
 :cuisines => "Ramen, Japanese, Asian",
 :address => "337 West 14th St, New York, NY, 10014", 
 :phone_number => "(212) 337-9832", 
 :neighborhood => "Chelsea", 
 :business_hours => "Mon–Thu, Sun 12:00 pm–9:00 pm Fri, Sat 12:00 pm–10:00 pm",
 :dining_style => "Casual Dining", 
 :dress_code => "Casual Dress", 
 :extra_info => "Beer, Counter Seating, Delivery, Happy Hour, Non-Smoking, Patio/Outdoor Dining, Patio/Outdoor Dining, Takeout, Wine",
 :dollars => "$$$", 
 :cuisine => "Ramen")

Restaurant.create(:name => "Ivan Ramen", 
 :description => "Ivan Ramen imagines the Classic NY diner as seen through the Japanese lens. The food is incredible, the service outstanding, the menu is uniquely Ivan Orkin. Ivan Ramen celebrates Ivan’s creativity through the lens of his life journey. His effortless blending of: his New York roots, his classic French training, and his deep understanding of Japan, color the menu and the restaurant. Ramen here is clearly a must, but you should not miss out on the amazing array of other dishes, which are perfect for sharing while you enjoy a well selected sake. Casual, comfortable and quirky with splashes of art inspired by pop culture and movies, Ivan Ramen is simply a fun restaurant.",
 :pricing => "$30 and under",
 :cuisines => "Contemporary Asian, Japanese, Asian", 
 :address => "25 Clinton St, New York, NY, 10002",
 :phone_number => "(646) 678-3859",
 :neighborhood => "Lower East Side",
 :business_hours => "Daily 12:00 pm–9:00 pm",
 :dining_style => "Casual Dining",
 :dress_code => "Casual Dress",
 :extra_info => "Banquet, Beer, Beer Garden, BYO Wine, Corkage Fee, Counter Seating, Delivery, Gender Neutral Restroom, Gluten-free Options, Non-Smoking, Patio/Outdoor Dining, Patio/Outdoor Dining, Private Room, Takeout, View, Wheelchair Access, Wine",
 :dollars => "$$", 
 :cuisine => "Contemporary Asian")


Restaurant.create(:name => "Nakamura", 
 :description => "Chef Shigetoshi Nakamura debuts his first restaurant in the United States. Hailed as one of only 4 Ramen Gods Chef Naka experienced colossal success in Japan after he opened Nakamura-Ya when he was 22. Always seeking to share his craft with America, he partnered up with Sun Noodle, the leading US-based ramen noodle manufacturer, and started building up a network state side. In the US, Chef Nakamura debuted at Sun Noodle's Ramen Lab where he again received critical acclaim. With a network of support created through Sun Noodle, and the success at Ramen Lab, Chef Naka was ready to open his own shop: Nakamura.",
 :pricing => "$30 and under",
 :cuisines => "Ramen , Japanese",
 :address => "172 Delancey St, New York, NY, 10002",
 :phone_number => "(212) 614-1810",
 :neighborhood => "Lower East Side",
 :business_hours => "Mon-Thu 12:00 pm-9:00pm, Sat-Sun 12:00 pm-10:00pm",
 :dining_style => "Casual Dining",
 :dress_code => "Business Casual",
 :extra_info => "Offers Takeout, Offers Delivery", 
 :dollars => "$$", 
 :cuisine => "Ramen")



Restaurant.create(:name => "Jin Ramen", 
 :description => "Jin is the Japanese pronunciation of the character 仁. It means benevolence and finds its root in Confucian ideals.  The character Jin consists of two elements. The left side represents a human being and the right side represents the numeral two. Jin is said to depict the way two people should treat one another. We, the founding partners, chose Jin as our ramen bar’s name not only out of an enthusiasm for ramen, but also from a desire to grow a business that has a positive impact on the community.  In 2012, after Jin gains a solid foothold in the neighborhood, we hope that you, our customers, will advise us on how Jin should use its resources to benefit our community and neighbors.",
 :pricing => "$30 and under",
 :cuisines => "Ramen, Japanese comfort food",
 :address => "462 Amsterdam, New York, NY, 10024",
 :phone_number => "(646) 657-0755",
 :neighborhood => "Upper West Side",
 :business_hours => "Everyday 11:30 am-3:00pm & 5:00 pm-10:00pm",
 :dining_style => "Casual Dining",
 :dress_code => "Casual Dress",
 :extra_info => "Offers Takeout, Offers Delivery", 
 :dollars => "$$", 
 :cuisine => "Ramen")

Restaurant.create(:name => "NR", 
 :description => "NR is a contemporary twist on restaurants that were found in traditional Japanese port towns during the Meiji Period, when Japan first became open to the rest of the world after nearly two centuries of seclusion. Not unlike these ports, NR is where East meets West, where the past fuses with the present. At NR, we specialize in ramen - noodles of Chinese origin, and cocktails - first brought to Japanese ports by western countries. We’ve since honed and perfected both in an effort to bring a taste of the past into the future.",
 :pricing => "$30 and under",
 :cuisines => "Ramen, Seafood, Cocktails",
 :address => "339 East 75th St, New York, NY, 10021",
 :phone_number => "(646) 226-4874",
 :neighborhood => "Upper East Side",
 :business_hours => "Mon-Thu 5:00 pm-11:00pm, Fri 5:00 pm-1:00am, Sat 12:00 pm-1:00am, Sun 12:00 pm-10:00pm",
 :dining_style => "Casual Dining",
 :dress_code => "Casual Dress",
 :extra_info => "Offers Takeout, Offers Delivery", 
 :dollars => "$$", 
 :cuisine => "Ramen")

 User.create(:username => "DemoUser", :password => "DemoPass")