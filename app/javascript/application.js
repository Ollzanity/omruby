// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "./controllers"
Turbo.start()
import "../assets/stylesheets/application.sass"; // Go up one level to access assets
