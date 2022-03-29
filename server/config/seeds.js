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
      image: 'motor1.jpeg',
      category: categories[0]._id,
      price: 150000000,
      quantity: 1
    },
    {
      name: 'Luxury Motor Yacht 2',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'motor2.jpeg',
      category: categories[0]._id,
      price: 70000000,
      quantity: 1
    },
    {
      name: 'Luxury Motor Yacht 3',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'motor3.jpeg',
      price: 50000000,
      quantity: 1
    },
    {
      name: 'Sailing Yacht',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'sail1.jpeg',
      price: 1400000,
      quantity: 1
    },
    {
      name: 'Sailing Yacht 2',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'sail2.jpeg',
      price: 1200000,
      quantity: 1
    },
    {
      name: 'Fishing Yacht',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'fishing1.jpeg',
      price: 850000,
      quantity: 1
    },
    {
      name: 'Fishing Yacht 2',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'fishing2.jpeg',
      price: 2000000,
      quantity: 1
    },
    {
      name: 'Expedition Yacht',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'exped1.jpeg',
      price: 15000000,
      quantity: 1
    },
    {
      name: 'Expedition Yacht 2',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'exped2.jpeg',
      price: 200000000,
      quantity: 1
    },
    {
      name: 'Expedition Yacht 2',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'exped2.jpeg',
      price: 200000000,
      quantity: 1
    },
    {
      name: 'Imperial Star Destroyer',
      category: categories[4]._id,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum!!!',
      image: 'https://static.wikia.nocookie.net/swfanon/images/a/a2/ISD_Night_Beast.jpg/revision/latest?cb=20150630020311',
      price: 200000000,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  process.exit();
});
