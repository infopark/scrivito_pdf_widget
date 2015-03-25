(function($, App) {
  'use strict';

  $(function() {
    scrivito.register_default_obj_class_for_content_type({
      'application/pdf': 'Pdf'
    })

    scrivito.content_browser.filters.pdfs = {
      'title': 'PDF',
      'query': App.scrivito.obj_where('_obj_class', 'equals', 'Pdf')
    };
  });
})(jQuery, this);
