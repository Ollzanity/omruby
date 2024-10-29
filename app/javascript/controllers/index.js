// Import and register all your controllers from the importmap via controllers/**/*_controller
// app/javascript/controllers/index.js

import { Application } from "@hotwired/stimulus"; // Import the Application class from Stimulus
//import { definitionsFromContext } from "@hotwired/stimulus-loading"; // Import for dynamic loading of controllers

// Initialize the Stimulus application
const application = Application.start();

// Load all controllers in this directory (and subdirectories) that match the .js extension
const context = require.context("./", true, /\.js$/);
//application.load(definitionsFromContext(context)); // Load the controllers dynamically

// Uncomment this line if you want to use eager loading of controllers
// import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";
// eagerLoadControllersFrom("data-controller", application);
