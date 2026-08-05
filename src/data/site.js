// Editable business configuration.
// Change these values to customize the website for any food business.
// =====================================================
// MASTER CONFIGURATION
// Edit only this file to update business information.
// =====================================================
// Business Identity

// Address

// Contact

// Business Details

// Social Links

export const SITE = {
  name: "BaQaa",
  tagline: "Fast Food Restaurant",
  logo: "/logo.png",
  
  description:
  "BaQaa is a fast food restaurant in Juhapura, Ahmedabad, serving delicious burgers, pizzas, sandwiches, wraps, and more in a friendly atmosphere.",

  footerLocation: "Ahmedabad · Gujarat",

  address: {
  line1: "Shop No. 15, Seventh Heaven Building",
  locality: "100 Feet Rd, Opp. Al Burooj, Juhapura",
  city: "Ahmedabad",
  state: "Gujarat",
  postal: "380055",
  country: "India",
  landmark: "Opp. Al Burooj",
},
  phoneDisplay:  "90998 81421",
  phoneE164: "+9190998 81421",
  whatsappE164:  "9190998 81421",
  hoursLabel:  "Open Daily · 2:00 PM – 12:00 AM",
  hoursOpen:  "14:00",
  hoursClose: "00:00",
  priceRange: "₹200–₹400",
  rating: {
            value: 4.9, 
            count: 68, 
          },
  services: [
    "Dine-in", 
    "Takeaway", 
    "Delivery", 
  ],
  cuisines: [
        "Fast Food",
     ],
  swiggyUrl: "https://www.swiggy.com/city/ahmedabad/baqaa-prahlad-nagar-rest1311657", // client-editable placeholder
  googleReviewUrl: "https://maps.app.goo.gl/rdWt8gVZFM3aJWwr7",
  googleMapsEmbed:
    "",
  googleDirectionsUrl:
    "https://maps.app.goo.gl/8v6pgXf6FVtQfB7u5",
  social: {
    instagram: "https://www.instagram.com/baqaa.india/",
    facebook: "#",
  },
};

export const tel = () => `tel:${SITE.phoneE164}`;
export const wa = (msg = `Hi ${SITE.name}, I'd like to place an order.`) =>
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(msg)}`;
