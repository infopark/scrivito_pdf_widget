class CreatePdfWidget < ::Scrivito::Migration
  def up
    Scrivito::ObjClass.create(
      name: 'Pdf',
      type: 'generic',
      title: 'Pdf',
      attributes: [
        {:name=>"headline", :type=>"string"},
        {:name=>"description", :type=>"html"}
      ]
    )

    Scrivito::ObjClass.create(
      name: 'PdfWidget',
      type: 'publication',
      title: 'Pdf Widget',
      attributes: [
        {:name=>"pdf", :type=>"reference"}
      ]
    )
  end
end
