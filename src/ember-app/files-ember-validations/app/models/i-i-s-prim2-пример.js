import {
  defineNamespace,
  defineProjections,
  Model as ПримерMixin
} from '../mixins/regenerated/models/i-i-s-prim2-пример';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПримерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
