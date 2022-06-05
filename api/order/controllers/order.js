const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { email } = ctx.params;

    const entity = await strapi.services.order.findOne({ email });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};


