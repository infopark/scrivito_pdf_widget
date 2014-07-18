/**
 * PDF-Viewer Jquery Plugin
 *
 * A Plugin to show a PDF in your webpage with some basic buttons.
 * by Gertimon
 **/
(function($) {
  'use strict';

  $.fn.pdfViewer = function(options) {
    var self = this;
    var options = $.extend({
      // the first page that is shiwn
      startPage: 1,
      // scale for the pdf
      scale: 2.0,
      // src for the worker. Should be set in some frameworks (like rails with assets [?body=1])
      // because autoload from pdf.worker.js will not work.
      workerSrc: '',
      lacy: true,
      fullscreen: 'ico-fullscreen',
      exit_fullscreen: 'ico-resize-small',
      locals: {
        page: 'Page'
      }
    }, options)

    var loaded = !options.lacy;

    if(options.lacy) {
      $(self).find('.pdf-next, .pdf-last, .pdf-prev, .pdf-first, .pdf-fullscreen, .pdf_prev_image').on('click', function() {
        if(!loaded) {
          initializePdf(options, self)
          loaded = true;
        }
      });
    } else {
      initializePdf(options, self);
    }
  }; // end plugin
})(jQuery);

function addControllBar(elem, index, url, options) {
  var bar = elem.find('.pdf-bar');
  var canvas = elem.find('canvas');
  var next = elem.find('.pdf-next');
  var last = elem.find('.pdf-last');
  var previous = elem.find('.pdf-prev');
  var first = elem.find('.pdf-first');
  var pageNumbers = elem.find('.pdf-page-numbers');
  var pageNum = $("<span class='page-num'></span>");
  var pageCount = $("<span class='page-count'></span>");
  var fullscreen = elem.find('.pdf-fullscreen');
  if(pageNumbers) {
    pageNumbers.prepend(pageCount).prepend(pageNum).prepend(options.locals.page);
  }

  canvas.attr('id', 'canvas_' + index);
  $('.pdf_prev_image').hide();
  var imgHeight = $('.pdf_prev_image').height();
  canvas.css({
    'display':'block',
    'height':imgHeight
  });

  return $(bar);
}

function renderPage(pageNum, pdfDoc, canvas, scale, elem) {
  pdfDoc.getPage(pageNum).then(function getPage(page) {
    var viewport = page.getViewport(scale);
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    page.render({canvasContext: context, viewport: viewport});

    elem.html(pageNum);
    $(canvas).css("height","auto");
  });
}

function initializePdf(options, obj) {

  PDFJS.disableWorker = true;
  if (options.workerSrc !== '') {
    PDFJS.workerSrc = options.workerSrc;
  }

  obj.each(function(index, elem) {
    var self = $(elem);
    var pdfDoc = null;
    var pageNum = options.startPage;
    var url = self.data('url');

    var controlBar = addControllBar(self, index, url, options);
    var canvas = document.getElementById('canvas_' + index);

    var pageNumField = $(self).find('.page-num');
    var pageCountField = $(self).find('.page-count');

    PDFJS.getDocument(url).then(function getPdf(_pdfDoc) {
      pdfDoc = _pdfDoc;
      pageCountField.html(pdfDoc.numPages);
      renderPage(pageNum, pdfDoc, canvas, options.scale, pageNumField);
    });

    var nextButton = $(self).find('.pdf-next');
    nextButton.on('click', function() {
      if (pageNum >= pdfDoc.numPages)
        return;
      pageNum++;
      renderPage(pageNum, pdfDoc, canvas, options.scale, pageNumField);
    });

    $(canvas).on('click', function() {
      if (pageNum >= pdfDoc.numPages)
        return;
      pageNum++;
      renderPage(pageNum, pdfDoc, canvas, options.scale, pageNumField);
    });

    var firstButton = $(self).find('.pdf-first');
    firstButton.on('click', function() {
      pageNum = 1;
      renderPage(pageNum, pdfDoc, canvas, options.scale, pageNumField);
    });

    var lastButton = $(self).find('.pdf-last');
    lastButton.on('click', function() {
      pageNum = pdfDoc.numPages;
      renderPage(pageNum, pdfDoc, canvas, options.scale, pageNumField);
    });

    var prevButton = $(self).find('.pdf-prev');
    prevButton.on('click', function() {
      if (pageNum <= 1)
        return;
      pageNum--;
      renderPage(pageNum, pdfDoc, canvas, options.scale, pageNumField);
    });

    var fullscreenButton = $(self).find('.pdf-fullscreen');
    fullscreenButton.on('click', function(event) {
      event.preventDefault();
      if(self.hasClass('in-fullscreen')) {
        fullscreenButton.addClass(options.fullscreen).removeClass(options.exit_fullscreen);
        self.removeClass('in-fullscreen');
        $.fullscreen.exit();
      } else {
        var barHeight = controlBar.height();
        self.fullscreen();
        fullscreenButton.removeClass(options.fullscreen).addClass(options.exit_fullscreen);
        self.addClass('in-fullscreen');
      }
    });
  }); // end each
}
