const db = require('./connection');
const { Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Motor' },
    { name: 'Sailing' },
    { name: 'Fishing' },
    { name: 'Expedition' },
    { name: 'Special' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Luxury Motor Yacht',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'http://cdn.cnn.com/cnnnext/dam/assets/210701131326-worlds-largest-yacht--credit--winch-design-3.jpg',
      category: categories[0]._id,
      price: 150000000,
      quantity: 1
    },
    {
      name: 'Luxury Motor Yacht 2',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'https://www.ginx.tv/uploads/NewFolder_1/Valheim_Guide_for_Beginners/Valheim_raft/Valheim_raft_guide_controls.jpg',
      category: categories[0]._id,
      price: 70000000,
      quantity: 1
    },
    {
      name: 'Luxury Motor Yacht 3',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'https://yachtharbour.com/static/uploads/scale_1387_3d73c.jpg',
      price: 50000000,
      quantity: 1
    },
    {
      name: 'Sailing Yacht',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbc2Hj6CjFnSTKAShmkB8thYDPM2IcLbOSoDoJYz0L8MYR2Fm0JXoGSh3tPeAAS2v6yE4&usqp=CAU',
      price: 1400000,
      quantity: 1
    },
    {
      name: 'Sailing Yacht 2',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://cdn.trendhunterstatic.com/thumbs/410/y7-sailing-yacht.jpeg',
      price: 1200000,
      quantity: 1
    },
    {
      name: 'Fishing Yacht',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://mlclell2icph.i.optimole.com/7H1dfI4.oUR-~477a/w:1200/h:800/q:80/https://www.yachtingmagazine.com/wp-content/uploads/sites/21/2021/09/7-29-11-final-high-res-2.jpg',
      price: 850000,
      quantity: 1
    },
    {
      name: 'Fishing Yacht 2',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/dKU4AL4vQnKHiGTw5muS_northern-marine-85-yacht-capsize-in-water.jpg/r%5Bwidth%5D=1920/dKU4AL4vQnKHiGTw5muS_northern-marine-85-yacht-capsize-in-water.jpg',
      price: 2000000,
      quantity: 1
    },
    {
      name: 'Expedition Yacht',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://images.lucentcms.com/iyc_website/2021/03/603e3cd90a3d0-explorer.png',
      price: 15000000,
      quantity: 1
    },
    {
      name: 'Expedition Yacht 2',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://image.yachtcharterfleet.com/w1200/h630/qh/ca/k307327b0/article/content/1810705/expedition-yacht-arctic.jpg',
      price: 200000000,
      quantity: 1
    },
    {
      name: 'Expedition Yacht 2',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://i.pinimg.com/originals/23/ee/52/23ee5292de1623f653fd8b5e5abd29fc.jpg',
      price: 200000000,
      quantity: 1
    },
    {
      name: 'Imperial Star Destroyer',
      category: categories[4]._id,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum!!!',
      image: 'https://i.dailymail.co.uk/1s/2019/04/04/12/11853916-6885809-Four_Imperial_Star_Destroyers_hover_over_New_York_city_in_this_f-a-69_1554378988417.jpg',
      price: 200000000,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  process.exit();
});
