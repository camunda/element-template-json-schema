export const template = {
  'name': 'ConnectorGetTask',
  'id': 'my.connector.http.get.Task',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'scopes': {
    'camunda:Connector': {
      'properties': [
        {
          'label': 'ConnectorId',
          'type': 'String',
          'value': 'My Connector HTTP - GET'
        }
      ]
    }
  }
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/scopes',
    schemaPath: '#/type',
    params: { type: 'array' },
    message: 'should be array'
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
