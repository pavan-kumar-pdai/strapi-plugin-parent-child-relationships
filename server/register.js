"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "relation",
    plugin: "parent-child-relationships",
    type: "json",
    inputSize: {
      default: 6,
      isResizable: true,
    },
  });

  strapi.customFields.register({
    name: "dynamic-root",
    plugin: "parent-child-relationships",
    type: "json",
    inputSize: {
      default: 6,
      isResizable: true,
    },
  });
};
