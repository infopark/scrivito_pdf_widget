class PdfWidget < Widget
  attribute :pdf, :reference

  def self.filter
    {_obj_class: {field: '_obj_class', options: {images: {selected: true, title: 'PDFs', value: 'Pdf'}}}}
  end
end
