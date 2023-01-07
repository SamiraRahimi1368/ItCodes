export default {
    name: 'solution',
    type: 'document',
    title: 'Solution',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'message',
            type: 'text',
            title: 'Message'
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