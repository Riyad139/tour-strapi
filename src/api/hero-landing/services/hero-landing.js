'use strict';

/**
 * hero-landing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-landing.hero-landing');
