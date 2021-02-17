export default {
    title: 'About Me',
    name: 'about',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Body', 
            name: 'body',
            type: 'PortableText', 
          }
    ]
}