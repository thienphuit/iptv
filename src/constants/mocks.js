const categories = [
  {
    id: 1,
    name: 'VTV1',
    tags: ['Product', 'insparations'],
    count: 160,
    image: require('../assets/icons/plants.png'),
  },
  {
    id: 2,
    name: 'HTV2',
    tags: ['product', 'shop'],
    count: 16,
    image: require('../assets/icons/seeds.png'),
  },
  {
    id: 3,
    name: 'VTV3',
    tags: ['product', 'inspirations'],
    count: 16,
    image: require('../assets/icons/flowers.png'),
  },
  {
    id: 4,
    name: 'VTV4',
    tags: ['product', 'shop'],
    count: 16,
    image: require('../assets/icons/sprayers.png'),
  },
  {
    id: 5,
    name: 'VTV5',
    tags: ['product', 'shop'],
    count: 16,
    image: require('../assets/icons/sprayers.png'),
  },
  {
    id: 6,
    name: 'VTV6',
    tags: ['product', 'shop'],
    count: 16,
    image: require('../assets/icons/sprayers.png'),
  },
];
const products = [
  {
    id: 1,
    name: '16 the Plants that thrive',
    tags: ['Interior', '27ms', 'shop'],
    count: 16,
    image: [
      require('../assets/icons/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ],
  },
];

const explore = [
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];
const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'thienphu@gmail.com',
  avatar: require('../assets/images/avatar.png'),
  bugget: 1000,
  monthly_cap: 6000,
  notifications: true,
  newsletter: false,
};

export {categories, explore, products, profile};
