'use strict';

/**
 * stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stat.stat');
