export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
 
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        Options: {
          hotspot: {
            height: 0.44,
            width: 0.65,
            x: 0.43,
            y: 0.26
          }
        }
  
      },
    
    ]
  }