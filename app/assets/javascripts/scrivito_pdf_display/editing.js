(function($) {
  'use strict';

  $(function() {
    ResourcebrowserUploader.mimeTypeMapping['pdf/*'] = 'Pdf'

    Resourcebrowser.filters['pdfs'] = {
      'title': 'PDF',
      'query': scrivito.obj_where('_obj_class', 'equals', 'Pdf')
    }
  });
})(jQuery);
