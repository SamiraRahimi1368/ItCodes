export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonial',
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
      {
        name: 'job',
        type: 'string',
        title: 'Job'
      },
      
      {
        name: 'message',
        type: 'text',
        title: 'Message'
      },
      {
        title: 'Rating',
        name: 'rating',
        type: 'number',
        }
    
      ,
    ]
  }