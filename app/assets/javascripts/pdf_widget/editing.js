(function($, App) {
  'use strict';

  $(function() {
    App.ResourcebrowserUploader.mimeTypeMapping['pdf/*'] = 'Pdf';

    App.Resourcebrowser.filters.pdfs = {
      'title': 'PDF',
      'query': App.scrivito.obj_where('_obj_class', 'equals', 'Pdf')
    };
  });
})(jQuery, this);
