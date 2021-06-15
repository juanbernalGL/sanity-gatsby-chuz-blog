export default {
  name: 'filters',
  type: 'object',
  title: 'Filters',
  description: 'Add filters that search in your blog.',
  fields: [
    { name: 'filter', type: 'string', title: 'Filter' },
    { name: 'filled', type: 'boolean', title: 'Filled' },
  ],
}
