import React from "react";

let count = 0;

const generateVoteCount = () => {
  count++;
  return count;
};

const Products = [
  {
    id: 1,
    title: "Yellow Pail",
    description: "on-demand sand castle construction expertise",
    url: "#",
    votes: generateVoteCount(),
    submitAvatarUrl:
      "https://thumbs.dreamstime.com/z/art-illustration-191466124.jpg",
    productImageUrl:
      "https://images.unsplash.com/photo-1528735000313-039ec3a473b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },

  {
    id: 2,
    title: "Dine Out",
    description: "A Multi Cuisine Restaurant",
    url: "#",
    votes: generateVoteCount(),
    submitAvatarUrl:
      "https://cdn1.iconfinder.com/data/icons/cafe-shop-ouline/128/Caffee_Icon_2019_-_128_Px_-_50_set_-_2_Outline_-_Expanded-18-512.png",
    productImageUrl:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/p/y/p36874-15221374475ab9f9673684e.jpg?tr=tr:n-medium",
  },
  {
    id: 3,
    title: "Yummy Halal",
    description: "A Multi Cuisine Restaurant",
    url: "#",
    votes: generateVoteCount(),
    submitAvatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPyIvk0l2D4gRUV_HBPfF4ffQXR1cmDSvzSw&usqp=CAU",
    productImageUrl:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
  },

  {
    id: 4,
    title: "Halal Eats",
    description: "A Multi Cuisine Restaurant",
    url: "#",
    votes: generateVoteCount(),
    submitAvatarUrl:
      "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX34847109.jpg",
    productImageUrl:
      "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg",
  },
];

export default Products;
