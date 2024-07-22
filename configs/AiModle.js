/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location : Sri Lanka, for 4 Days and NaN Night for Family with a Expensive budget with a Flight Details, Flight Price with Booking URL, Hotel Option list with Hotel Name,Hotel address, Price Hotel Image URL,Geo Coordinates, ticket Price, Time to travel each of the location for 4 days and 3  with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip\": {\n    \"destination\": \"Sri Lanka\",\n    \"duration\": {\n      \"days\": 4,\n      \"nights\": 3\n    },\n    \"budget\": \"Expensive\",\n    \"travelers\": \"Family\",\n    \"flight\": {\n      \"details\": \"Roundtrip from your location to Colombo, Sri Lanka (CMB).\",\n      \"price\": \"This will vary greatly depending on your origin. You can check prices at sites like Skyscanner or Google Flights.\",\n      \"booking_url\": \"https://www.skyscanner.com/ or https://www.google.com/flights\"\n    },\n    \"hotels\": [\n      {\n        \"name\": \"The Fortress Resort & Spa\",\n        \"address\": \"Galle Fort, Galle, 80000, Sri Lanka\",\n        \"price\": \"Prices vary depending on the season and room type. Expect to pay upwards of $300 per night.\",\n        \"image_url\": \"https://www.thefortressresort.com/images/gallery/fortress-resort-and-spa-galle-sri-lanka-hero-image.jpg\",\n        \"geo_coordinates\": \"6.0299, 80.2350\",\n        \"ticket_price\": null\n      },\n      {\n        \"name\": \"Cinnamon Grand Colombo\",\n        \"address\": \"77 Galle Rd, Colombo 03, Sri Lanka\",\n        \"price\": \"Prices vary depending on the season and room type. Expect to pay upwards of $200 per night.\",\n        \"image_url\": \"https://www.cinnamonhotels.com/cinnamon-grand-colombo/images/hero-image.jpg\",\n        \"geo_coordinates\": \"6.9275, 79.8567\",\n        \"ticket_price\": null\n      },\n      {\n        \"name\": \"The Shangri-La Hotel, Colombo\",\n        \"address\": \"1 Galle Rd, Colombo 03, Sri Lanka\",\n        \"price\": \"Prices vary depending on the season and room type. Expect to pay upwards of $250 per night.\",\n        \"image_url\": \"https://www.shangri-la.com/colombo/shangrila/en/gallery/hotel-highlights/hotel-highlights-01.jpg\",\n        \"geo_coordinates\": \"6.9266, 79.8575\",\n        \"ticket_price\": null\n      }\n    ],\n    \"itinerary\": [\n      {\n        \"day\": 1,\n        \"title\": \"Arrival in Colombo & Cultural Immersion\",\n        \"description\": \"Arrive at Bandaranaike International Airport (CMB) in Colombo. After clearing customs and collecting your luggage, head to your hotel in Colombo. Check-in, freshen up, and then embark on a delightful journey exploring Colombo's rich culture and vibrant city life.\",\n        \"activities\": [\n          {\n            \"time\": \"Afternoon\",\n            \"activity\": \"Visit the Gangaramaya Buddhist Temple: Witness the architectural brilliance and spiritual aura of this iconic temple, adorned with intricate carvings and serene surroundings.\",\n            \"duration\": \"2-3 hours\",\n            \"best_time\": \"Any time of day\"\n          },\n          {\n            \"time\": \"Evening\",\n            \"activity\": \"Explore the Colombo National Museum: Delve into Sri Lanka's fascinating history and heritage through captivating exhibits, artifacts, and displays. Learn about the island's art, culture, and natural wonders.\",\n            \"duration\": \"2-3 hours\",\n            \"best_time\": \"Late morning or afternoon\"\n          },\n          {\n            \"time\": \"Dinner\",\n            \"activity\": \"Indulge in a delicious Sri Lankan dinner at a fine-dining restaurant: Enjoy the authentic flavors of Sri Lankan cuisine, savoring dishes like kottu roti, string hoppers, and curries.\",\n            \"duration\": \"1-2 hours\",\n            \"best_time\": \"Evening\"\n          }\n        ]\n      },\n      {\n        \"day\": 2,\n        \"title\": \"Scenic Tea Plantations & Cultural Heritage in Kandy\",\n        \"description\": \"Embark on a scenic journey from Colombo to Kandy, nestled in the heart of Sri Lanka's verdant hills. Enjoy the breathtaking views of the countryside and experience the charm of this historic city.\",\n        \"activities\": [\n          {\n            \"time\": \"Morning\",\n            \"activity\": \"Visit a tea plantation in Nuwara Eliya: Enjoy a tour of a tea factory, learn about the tea-making process, and indulge in a delightful tea tasting session. Explore the surrounding tea estates, enjoying panoramic views.\",\n            \"duration\": \"3-4 hours\",\n            \"best_time\": \"Morning or afternoon\"\n          },\n          {\n            \"time\": \"Afternoon\",\n            \"activity\": \"Explore the Temple of the Tooth Relic in Kandy: Witness the sacred tooth relic of Buddha, housed in this magnificent temple. Experience the spiritual aura and marvel at the intricate architecture.\",\n            \"duration\": \"2-3 hours\",\n            \"best_time\": \"Any time of day\"\n          },\n          {\n            \"time\": \"Evening\",\n            \"activity\": \"Attend a traditional Kandyan dance performance: Immerse yourself in the rich cultural heritage of Sri Lanka by watching a captivating performance featuring traditional costumes, music, and dance forms.\",\n            \"duration\": \"1-2 hours\",\n            \"best_time\": \"Evening\"\n          }\n        ]\n      },\n      {\n        \"day\": 3,\n        \"title\": \"Ancient Ruins and Wildlife Safari in Sigiriya\",\n        \"description\": \"Embark on a day trip to Sigiriya, a UNESCO World Heritage site known for its ancient rock fortress and breathtaking views.\",\n        \"activities\": [\n          {\n            \"time\": \"Morning\",\n            \"activity\": \"Ascend Sigiriya Rock Fortress: Hike to the top of this iconic rock fortress, marveling at the ancient ruins, frescoes, and stunning panoramic views of the surrounding landscape. \",\n            \"duration\": \"3-4 hours\",\n            \"best_time\": \"Early morning or late afternoon to avoid the midday heat\"\n          },\n          {\n            \"time\": \"Afternoon\",\n            \"activity\": \"Explore the Pidurangala Rock: Enjoy a scenic climb to the top of Pidurangala Rock, offering unparalleled views of Sigiriya and the surrounding jungle.  \",\n            \"duration\": \"2-3 hours\",\n            \"best_time\": \"Morning or afternoon\"\n          },\n          {\n            \"time\": \"Evening\",\n            \"activity\": \"Visit Minneriya National Park: Embark on a captivating jeep safari through Minneriya National Park, hoping to spot elephants, leopards, and a variety of other wildlife. \",\n            \"duration\": \"3-4 hours\",\n            \"best_time\": \"Late afternoon or evening\"\n          }\n        ]\n      },\n      {\n        \"day\": 4,\n        \"title\": \"Beach Bliss & Departure\",\n        \"description\": \"Enjoy a relaxing day at one of Sri Lanka's beautiful beaches before departing for your flight home.\",\n        \"activities\": [\n          {\n            \"time\": \"Morning\",\n            \"activity\": \"Relax and enjoy the beach: Spend the morning at a beach resort, soaking up the sun, swimming in the crystal-clear waters, or indulging in some water sports.\",\n            \"duration\": \"3-4 hours\",\n            \"best_time\": \"Morning or afternoon\"\n          },\n          {\n            \"time\": \"Afternoon\",\n            \"activity\": \"Enjoy a farewell lunch: Savor a delicious lunch at a beachfront restaurant, enjoying the sounds of the ocean and the vibrant atmosphere.\",\n            \"duration\": \"1-2 hours\",\n            \"best_time\": \"Lunchtime\"\n          },\n          {\n            \"time\": \"Evening\",\n            \"activity\": \"Transfer to Colombo Airport: Depart from Sri Lanka, carrying cherished memories of your extraordinary adventure.\",\n            \"duration\": \"2-3 hours\",\n            \"best_time\": \"Evening\"\n          }\n        ]\n      }\n    ]\n  }\n}\n```\n\n**Explanation:**\n\n* **trip**: This object holds the main information about the trip.\n* **destination**: Sets the location of the trip to Sri Lanka.\n* **duration**: Defines the length of the trip in days and nights.\n* **budget**: Specifies the budget as \"Expensive\".\n* **travelers**: Mentions the travelers as \"Family\".\n* **flight**: Provides information about the flight.\n    * **details**: Offers a general description of the flight.\n    * **price**: Indicates the price is variable depending on origin, and suggests using sites like Skyscanner or Google Flights to check prices.\n    * **booking_url**: Provides links to Skyscanner and Google Flights for booking.\n* **hotels**: This is an array listing potential hotels for the trip.\n    * **name**: Provides the name of the hotel.\n    * **address**: Gives the address of the hotel.\n    * **price**: Indicates that prices vary and provides a general price range.\n    * **image_url**: Offers a link to an image of the hotel.\n    * **geo_coordinates**: Provides the latitude and longitude of the hotel.\n    * **ticket_price**: This field is not applicable for hotels and is left as null.\n* **itinerary**: This is an array of daily plans for the trip.\n    * **day**: Indicates the day number of the itinerary.\n    * **title**: Provides a title for the day's activities.\n    * **description**: Offers a general overview of the day's activities.\n    * **activities**: This is an array of activities planned for the day.\n        * **time**: Indicates the time of day for the activity.\n        * **activity**: Describes the activity.\n        * **duration**: Specifies the estimated duration of the activity.\n        * **best_time**: Suggests the best time of day to do the activity. \n\n**Important Notes:**\n\n* This is a sample itinerary. You can modify it based on your family's interests and preferences.\n* Remember to book your flights and accommodations in advance, especially if traveling during peak season.\n* This itinerary assumes a comfortable pace of travel with ample time for relaxation and exploration.\n* Consider obtaining travel insurance and researching visa requirements before traveling to Sri Lanka.\n* Be aware of the local customs and traditions, and dress modestly when visiting religious sites.\n* Enjoy your Sri Lankan adventure! \n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());


