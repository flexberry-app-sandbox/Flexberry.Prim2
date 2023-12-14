import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('number')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-prim2-пример.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПримерE', 'i-i-s-prim2-пример', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ПримерL', 'i-i-s-prim2-пример', {
    наименование: attr('Наименование', { index: 0 })
  });
};
