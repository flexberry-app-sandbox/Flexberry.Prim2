import { Serializer as ПримерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prim2-пример';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПримерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
