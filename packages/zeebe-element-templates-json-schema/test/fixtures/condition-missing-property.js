export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'myId',
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'label': 'input 2',
      'type': 'String',
      'condition': {
        'type': 'simple',
        equals: 'text'
      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/1/condition',
          schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/required',
          params: { missingProperty: 'property' },
          message: "should have required property 'property'",
          emUsed: true
        }
      ]
    },
    message: 'missing property name for condition'
  },
  {
    keyword: 'required',
    dataPath: '/properties/1/condition',
    schemaPath: '#/allOf/0/items/properties/condition/oneOf/1/required',
    message: "should have required property 'allMatch'",
    params: { missingProperty: 'allMatch' },
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/1/condition',
    schemaPath: '#/allOf/0/items/properties/condition/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];
