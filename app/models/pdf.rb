class Pdf < Obj
  attribute :headline, :string
  attribute :description, :html
  attribute :blob, :binary

  def url_to_pdf
    self.try(:binary_url).split('?').first
  end

  def show_in_navigation?
    false
  end
end
