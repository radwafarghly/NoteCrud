const { Model } = require('objection');
const Order = require('./order.model');

class Customer extends Model {
  static get tableName() {
    return 'customers';
  };

  $beforeInsert() {
    this.created_at = new Date();
  };

  $beforeUpdate() {
    this.updated_at = new Date();
  };

  static get nameColumn() {
    return 'name';
  };

  static get emailColumn() {
    return 'email';
  };
//JSON Schema Validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  };

  // static relationMappings = {
  //   order: {
  //     relation: Model.HasOneRelation,
  //     modelClass: Order,
  //     join: {
  //       from: 'customers.id',
  //       to: 'orders.customer_id'  //forign key
  //     }
  //   }
  // };

};

module.exports = Customer;