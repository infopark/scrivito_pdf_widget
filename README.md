# ScrivitoPdfWidget

A Scrivito widget that displays a PDF file on a page using PDF.js.

## Installation

Add this line to your application's Gemfile:

    gem 'scrivito_pdf_widget'

Add this line to your application stylesheet manifest:

    *= require scrivito_pdf_widget

If you use `sass-rails` for your application stylesheet manifest (e.g. `application.scss` or `application.css.scss`) add the following:

    @import "scrivito_pdf_widget/application";
    @import "scrivito_pdf_widget/editing";

Add this line to your application JavaScript manifest:

    //= require scrivito_pdf_widget

Note: this must be inserted below `//= require scrivito` in your manifest.

## Localization

The following code represents the default localization for English. Copy it to your `en.yml` and change it if necessary:

```yaml
en:
  scrivito_pdf_widget:
    thumbnail:
      title: Pdf
      description: Display a PDF on your page
    details:
      pdf: PDF
      description: Description
``