module.exports = [
    {
      name: 'Create Bar',
      type: 'command',
      code: 'createBar',
      icon: 'ctmod',
      category: 'Utilities',
      documentation: 'Creates a new bar.',
      pieces: [
        {
          type: 'label',
          name: 'Bar ID:',
          i18nKey: 'barID'
        },
        {
          type: 'argument',
          key: 'barID',
          typeHint: 'number',
          required: true
        },
        {
          type: 'label',
          name: 'Start Value:',
          i18nKey: 'minValue'
        },
        {
          type: 'argument',
          key: 'minValue',
          typeHint: 'number',
          required: true
        },
        {
          type: 'label',
          name: 'Current:',
          i18nKey: 'currentValue'
        },
        {
          type: 'argument',
          key: 'currentValue',
          typeHint: 'number',
          required: true
        },
        {
          type: 'label',
          name: 'End Value:',
          i18nKey: 'maxValue'
        },
        {
          type: 'argument',
          key: 'maxValue',
          typeHint: 'number',
          required: true
        },
        {
          type: 'label',
          name: 'X Position:',
          i18nKey: 'xPosition'
        },
        {
          type: 'argument',
          key: 'xPosition',
          typeHint: 'number',
          required: true
        },
        {
          type: 'label',
          name: 'Y Position:',
          i18nKey: 'yPosition'
        },
        {
          type: 'argument',
          key: 'yPosition',
          typeHint: 'number',
          required: true
        },
        {
          type: 'label',
          name: 'Background Template:',
          i18nKey: 'backgroundTemplate'
        },
        {
          type: 'argument',
          key: 'backgroundTemplate',
          typeHint: 'string',
          assets: 'template',
          required: true
        },
        {
          type: 'label',
          name: 'Foreground Template:',
          i18nKey: 'foregroundTemplate'
        },
        {
          type: 'argument',
          key: 'foregroundTemplate',
          typeHint: 'string',
          assets: 'template',
          required: true
        },
        {
          type: 'label',
          name: 'orientation',
          i18nKey: 'orientation'
        },
        {
          type: 'argument',
          key: 'orientation',
          typeHint: 'string',
          required: true
        },
        {
            type: 'filler'
        },{
            type: 'label',
            name: 'store in',
            i18nKey: 'store in'
        }, {
            type: 'argument',
            key: 'return',
            typeHint: 'wildcard'
        }
      ],
      jsTemplate: (values) => {
        
        if (values.return !== 'undefined') {
            return `${values.return} = createBar(${values.barID}, ${values.minValue}, ${values.currentValue}, ${values.maxValue}, ${values.xPosition}, ${values.yPosition}, ${values.backgroundTemplate}, ${values.foregroundTemplate}, ${values.orientation});`;
        }
        return `createBar(${values.barID}, ${values.minValue}, ${values.currentValue}, ${values.maxValue}, ${values.xPosition}, ${values.yPosition}, ${values.backgroundTemplate}, ${values.foregroundTemplate}, ${values.orientation});`;
        }
    },
    {
      name: 'Decrease the value',
      type: 'command',
      code: 'decrease',
      icon: 'ctmod',
      category: 'Utilities',
      documentation: 'Decrease the width or height of this bar.',
      pieces: [
        {
          type: 'label',
          name: 'of this bar:',
          i18nKey: 'ofthisbar'
        },
        {
          type: 'argument',
          key: 'bar',
          typeHint: 'wildcard',
          required: true
        },
        {
          type: 'label',
          name: 'Amount:',
          i18nKey: 'amount'
        },
        {
          type: 'argument',
          key: 'amount',
          typeHint: 'number',
          required: true
        }],
        jsTemplate: (values) => {
          
          return `decrease(${values.bar}, ${values.amount});`;
          
          }
    },
    {
      name: 'Increase the value',
      type: 'command',
      code: 'increase',
      icon: 'ctmod',
      category: 'Utilities',
      documentation: 'Increase the width or height of this bar.',
      pieces: [
        {
          type: 'label',
          name: 'of this bar:',
          i18nKey: 'ofthisbar'
        },
        {
          type: 'argument',
          key: 'bar',
          typeHint: 'wildcard',
          required: true
        },
        {
          type: 'label',
          name: 'Amount:',
          i18nKey: 'amount'
        },
        {
          type: 'argument',
          key: 'amount',
          typeHint: 'number',
          required: true
        }],
        jsTemplate: (values) => {
          
          return `increase(${values.bar}, ${values.amount});`;
          
          }
    },
    {
      name: 'Current Bar Status',
      type: 'command',
      code: 'currentBarStatus',
      icon: 'ctmod',
      category: 'Utilities',
      documentation: 'Check the bar status continupsly.',
      pieces: [
        {
          type: 'label',
          name: 'of this Bar:',
          i18nKey: 'ofthisbar'
        },
        {
          type: 'argument',
          key: 'bar',
          typeHint: 'wildcard',
          required: true
        }],
        jsTemplate: (values) => {
          
          return `currentBarStatus(${values.bar});`;
          
          }
    }
  ];
  