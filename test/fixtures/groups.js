export const template = {
  'name': 'Grouping',
  'id': 'example.com.grouping',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'input1'
      }
    },
    {
      'label': 'input 2',
      'group': 'one',
      'type': 'String',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'input2'
      }
    },
    {
      'label': 'input 3',
      'group': 'one',
      'type': 'String',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'input3'
      }
    },
    {
      'label': 'input 4',
      'group': 'two',
      'type': 'String',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'input4'
      }
    },
    {
      'label': 'input 5',
      'group': 'three',
      'type': 'String',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'input5'
      }
    }
  ],
  'groups': [
    {
      'id': 'one',
      'label': 'Group one'
    },
    {
      'id': 'two',
      'label': 'Group two'
    },
    {
      'id': 'three',
      'label': 'Group three'
    }
  ]
};

export const errors = null;