$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "scrivito_pdf_display/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = "scrivito_pdf_display"
  s.version     = ScrivitoPdfDisplay::VERSION
  s.authors     = ["Scrivito"]
  s.email       = ["support@scrivito.com"]
  s.homepage    = "https://www.scrivito.com"
  s.summary     = "Display a PDF on your Page."
  s.description = "Displays a PDF using PDF js to show it on your page."
  s.license     = "LGPL-3"

  s.files = Dir[
    "{app,lib,cms}/**/*",
    "LICENSE",
    "Rakefile",
  ]

  s.add_dependency 'bundler'
  s.add_dependency 'scrivito_sdk'
  s.add_dependency 'font-awesome-rails'

  s.add_dependency "rails", "~> 4.1.4"
end
