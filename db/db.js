const db = {
    categories: ['one', 'two', 'three', 'four', 'five'],
    products: [
        {
          id:1,
          name: 'prod1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mauris in metus scelerisque posuere. Ut hendrerit metus sit amet efficitur eleifend. Curabitur malesuada euismod nisl at hendrerit. Cras nec risus auctor, fermentum elit et, dapibus ligula. Vivamus hendrerit, mauris ut facilisis vulputate, libero mauris tempus justo, eget volutpat nisi neque a tortor.',
          price: '$10.99',
        },
        {
          id:2,
          name: 'prod2',
          desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla hendrerit mi ut purus ullamcorper cursus. Nunc at bibendum nulla. In eget fermentum nulla, at pellentesque elit. Morbi euismod, sapien ac auctor euismod, neque ante blandit tellus, vitae hendrerit turpis metus a urna. Duis sit amet mi ex. In hac habitasse platea dictumst. Etiam in commodo mi, a ullamcorper lectus. Curabitur facilisis lacus id cursus cursus. Etiam rhoncus eu nisi ac scelerisque. Suspendisse ultricies lacus vel laoreet lacinia.',
          price: '$15.99',
          imgsrc: 'https://images.unsplash.com/photo-1618726413100-a842cc62e332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        },
        {
          id:3,
          name: 'prod3',
          desc: 'Aliquam at lacinia erat. In hac habitasse platea dictumst. Sed sollicitudin, mauris sit amet iaculis hendrerit, neque libero cursus urna, non blandit purus urna nec tellus. Donec in aliquam ligula. Integer a nisl eget dui luctus mattis vel et quam. Nullam dictum dolor eu tincidunt accumsan. Fusce nec quam euismod, hendrerit justo non, pharetra felis. Sed at libero quis lectus posuere lacinia nec et quam. Etiam nec lacinia felis. Nam finibus, elit in sagittis lacinia, massa leo tincidunt dolor, nec fermentum dolor libero nec metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          price: '$12.49',
          imgsrc: 'https://images.unsplash.com/photo-1505069446780-4ef442b5207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        },
        {
          id:4,
          name: 'prod4',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mauris in metus scelerisque posuere. Ut hendrerit metus sit amet efficitur eleifend. Curabitur malesuada euismod nisl at hendrerit. Cras nec risus auctor, fermentum elit et, dapibus ligula. Vivamus hendrerit, mauris ut facilisis vulputate, libero mauris tempus justo, eget volutpat nisi neque a tortor.',
          price: '$9.99',
        },
        {
          id:5,
          name: 'prod5',
          desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla hendrerit mi ut purus ullamcorper cursus. Nunc at bibendum nulla. In eget fermentum nulla, at pellentesque elit. Morbi euismod, sapien ac auctor euismod, neque ante blandit tellus, vitae hendrerit turpis metus a urna. Duis sit amet mi ex. In hac habitasse platea dictumst. Etiam in commodo mi, a ullamcorper lectus. Curabitur facilisis lacus id cursus cursus. Etiam rhoncus eu nisi ac scelerisque. Suspendisse ultricies lacus vel laoreet lacinia.',
          price: '$20.99',
          imgsrc: 'https://images.unsplash.com/photo-1618726413100-a842cc62e332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        },
        {
          id:6,
          name: 'prod6',
          desc: 'Aliquam at lacinia erat. In hac habitasse platea dictumst. Sed sollicitudin, mauris sit amet iaculis hendrerit, neque libero cursus urna, non blandit purus urna nec tellus. Donec in aliquam ligula. Integer a nisl eget dui luctus mattis vel et quam. Nullam dictum dolor eu tincidunt accumsan. Fusce nec quam euismod, hendrerit justo non, pharetra felis. Sed at libero quis lectus posuere lacinia nec et quam. Etiam nec lacinia felis. Nam finibus, elit in sagittis lacinia, massa leo tincidunt dolor, nec fermentum dolor libero nec metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          price: '$15.49',
          imgsrc: 'https://images.unsplash.com/photo-1573756990369-50cdad6dbd03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        },
        {
          id:7,
          name: 'prod7',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mauris in metus scelerisque posuere. Ut hendrerit metus sit amet efficitur eleifend. Curabitur malesuada euismod nisl at hendrerit. Cras nec risus auctor, fermentum elit et, dapibus ligula. Vivamus hendrerit, mauris ut facilisis vulputate, libero mauris tempus justo, eget volutpat nisi neque a tortor.',
          price: '$9.99',
        },
        {
          id:8,
          name: 'prod8',
          desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla hendrerit mi ut purus ullamcorper cursus. Nunc at bibendum nulla. In eget fermentum nulla, at pellentesque elit. Morbi euismod, sapien ac auctor euismod, neque ante blandit tellus, vitae hendrerit turpis metus a urna. Duis sit amet mi ex. In hac habitasse platea dictumst. Etiam in commodo mi, a ullamcorper lectus. Curabitur facilisis lacus id cursus cursus. Etiam rhoncus eu nisi ac scelerisque. Suspendisse ultricies lacus vel laoreet lacinia.',
          price: '$20.99',
          imgsrc: 'https://images.unsplash.com/photo-1618726413100-a842cc62e332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        },
        {
          id:9,
          name: 'prod9',
          desc: 'Aliquam at lacinia erat. In hac habitasse platea dictumst. Sed sollicitudin, mauris sit amet iaculis hendrerit, neque libero cursus urna, non blandit purus urna nec tellus. Donec in aliquam ligula. Integer a nisl eget dui luctus mattis vel et quam. Nullam dictum dolor eu tincidunt accumsan. Fusce nec quam euismod, hendrerit justo non, pharetra felis. Sed at libero quis lectus posuere lacinia nec et quam. Etiam nec lacinia felis. Nam finibus, elit in sagittis lacinia, massa leo tincidunt dolor, nec fermentum dolor libero nec metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          price: '$15.49',
          imgsrc: 'https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg',
        },
        {
          id:10,
          name: 'prod10',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mauris in metus scelerisque posuere. Ut hendrerit metus sit amet efficitur eleifend. Curabitur malesuada euismod nisl at hendrerit. Cras nec risus auctor, fermentum elit et, dapibus ligula. Vivamus hendrerit, mauris ut facilisis vulputate, libero mauris tempus justo, eget volutpat nisi neque a tortor.',
          price: '$9.99',
        },
      ],      
  };
  
  export default db;
  