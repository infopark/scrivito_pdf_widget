scrivito_pdf_dispay
===================

[![Gem Version](https://badge.fury.io/rb/scrivito_pdf_display.svg)](http://badge.fury.io/rb/scrivito_pdf_display)

A Widget for Scrivito to display a PDF on the Page using PDF js.

## Installation

Add this line to your application's `Gemfile`:

    gem 'scrivito_pdf_display'

Add this line to your application Stylesheet manifest:

    *= require scrivito_crm_event/application

Add this line to your application Javascript manifest:

    // require scrivito_crm_event/application

Add this lines to your Ressource Browser Filter

    'pdfs':
      title: 'PDF',
      query: scrivito.obj_where('_obj_class', 'equals', 'Pdf')

And then execute:

    $ bundle
    $ rake cms:migrate:install
    $ rake cms:migrate
    $ rake cms:migrate:publish

## Contributing

1. Fork it ( https://github.com/infopark/scrivito_crm_event/merge_tags/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request