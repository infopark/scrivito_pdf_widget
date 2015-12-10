class Pdf < Obj
  attribute :description, :html
  attribute :blob, :binary

  def url_to_pdf
    self.try(:binary_url)
  end
end
