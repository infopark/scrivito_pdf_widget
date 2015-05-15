(function($, App) {
  'use strict';

  scrivito.on('content', function() {
    if(scrivito.in_editable_view()) {
      scrivito.register_default_obj_class_for_content_type({
        'application/pdf': 'Pdf'
      });
    }
  });
})(jQuery, this);
