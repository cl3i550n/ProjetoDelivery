const Images = [
    { image: require('../Assets/Banners/food-banner1.jpg') },
    { image: require('../Assets/Banners/food-banner2.jpg') },
    { image: require('../Assets/Banners/food-banner3.jpg') },
    { image: require('../Assets/Banners/food-banner4.jpg') },
    { image: require('../Assets/Banners/food-banner5.jpg') },
  ];
  
  export const StoresWithCoords = [
    {
      id: '1',
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: 'Primeiro lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      categories: ['Restaurante', 'Hotel', 'Jantar Fora'],
    },
    {
      id: '2',
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: 'Segundo lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      categories: ['Restaurante', 'Centro de Fastfood', 'Petiscos'],
    },
    {
      id: '3',
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: 'Terceiro lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[2].image,
      rating: 3,
      reviews: 220,
      categories: ['Restaurante', 'Hotel', 'Jantar Fora'],
    },
    {
      id: '4',
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: 'Quarto lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[3].image,
      rating: 4,
      reviews: 48,
      categories: ['Restaurante', 'Centro de Fastfood', 'Petiscos'],
    },
    {
      id: '5',
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: 'Quinto lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[4].image,
      rating: 4,
      reviews: 178,
      categories: ['Restaurante', 'Hotel', 'Jantar Fora'],
    },
    {
      id: '6',
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: 'Sexto lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      categories: ['Restaurante', 'Hotel', 'Jantar Fora'],
    },
    {
      id: '7',
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: 'Setimo lugar de comida incrível',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, 
      posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      categories: ['Restaurante', 'Centro de Fastfood', 'Petiscos'],
    },
  ];
  