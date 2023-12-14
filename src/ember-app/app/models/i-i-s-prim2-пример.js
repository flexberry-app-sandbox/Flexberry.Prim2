import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПримерMixin
} from '../mixins/regenerated/models/i-i-s-prim2-пример';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПримерMixin, Validations, {
});

defineProjections(Model);

export default Model;
