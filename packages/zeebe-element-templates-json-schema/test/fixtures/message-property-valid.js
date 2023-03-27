export const template = {
  'name': 'MissingBindingName',
  'id': 'com.camunda.example.MissingBindingName',
  'appliesTo': [
    'bpmn:IntermediateCatchEvent'
  ],
  'elementType': {
    value: 'bpmn:IntermediateCatchEvent',
    eventDefinition: 'bpmn:MessageEventDefinition'
  },
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'bpmn:Message#property',
        'name': 'name'
      }
    }
  ]
};

export const errors = null;
