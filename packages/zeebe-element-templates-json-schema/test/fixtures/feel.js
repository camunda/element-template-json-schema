export const template = {
  'name': 'Pattern Template',
  'id': 'com.example.PatternTemplate',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Feel Required (String)',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'required'
    },
    {
      'label': 'Feel Optional (String)',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'optional'
    },
    {
      'label': 'Feel Required (Text)',
      'type': 'Text',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'required'
    },
    {
      'label': 'Feel Optional (Text)',
      'type': 'Text',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'optional'
    },
    {
      'label': 'Feel static (Number)',
      'type': 'Number',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'static'
    },
    {
      'label': 'Feel optional (Number)',
      'type': 'Number',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'optional'
    },
    {
      'label': 'Feel static (Boolean)',
      'type': 'Boolean',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'static'
    },
    {
      'label': 'Feel optional (Boolean)',
      'type': 'Boolean',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'optional'
    }
  ]
};

export const errors = null;