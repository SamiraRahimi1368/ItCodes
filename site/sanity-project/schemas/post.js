export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'mainImage',
        type: 'image',
        title: ' Main image',
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
        name: 'rating',
        type: 'string',
        title: 'Rating'
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message'
      },
    ]
  }