export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
          },
      {
        name: 'author',
        type: 'string',
        title: 'Author'
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
        title: 'Release date',
        name: 'releaseDate',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
     
      {
        name: 'message',
        type: 'text',
        title: 'Message'
      },
    ]
  }