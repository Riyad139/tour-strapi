'use strict';

/**
 * hero-experience service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-experience.hero-experience');
