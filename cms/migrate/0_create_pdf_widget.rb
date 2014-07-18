class CreatePdfWidget < ::Scrivito::Migration
  def up
    create_obj_class(
      name: 'Pdf',
      type: 'generic',
      title: 'Pdf',
      attributes: [
        {:name=>"headline", :type=>"string"},
        {:name=>"description", :type=>"html"}
      ]
    )

    create_obj_class(
      name: 'PdfWidget',
      type: 'publication',
      title: 'Pdf Widget',
      attributes: [
        {:name=>"pdf", :type=>"reference"}
      ]
    )
  end
end
