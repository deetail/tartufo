import { Reaction } from "/server/api";

Reaction.registerPackage({
  // Label that shows up in tooltips and places where the package is accessable for settings
  label: "Tartufo",

  // Unique name, used for pulling package data out of the database
  name: "Tartufo",

  // Icon for toolbars
  icon: "fa fa-bars",

  // Auto-enable plugin, sets enabled: true in database
  autoEnable: true,

  // Settings for plugin
  settings: {},

  // Routes and other registry items related to layout
  registry: []
});
