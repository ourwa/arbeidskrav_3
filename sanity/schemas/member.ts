import { defineType } from 'sanity'

export default defineType({
  name: 'member',
  type: 'document',
  title: 'Group Member',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profile Image'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography'
    },
    {
      name: 'interests',
      type: 'array',
      title: 'Interests',
      of: [{ type: 'string' }]
    },
    {
        name: 'log',
        title: 'Arbeidslogg',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'date', type: 'datetime', title: 'Dato' },
              { name: 'task', type: 'string', title: 'Oppgave' },
              { name: 'hours', type: 'string', title: 'Timer' },
            ],
          },
        ],
      }
      
  ]
})
