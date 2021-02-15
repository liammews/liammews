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
            title: 'Description',
            name: 'description',
            type: 'string',
            validation: Rule => Rule.required()
        },
    ]
}