class Pdf < Obj
  def self.create(attributes)
    attributes = attributes.with_indifferent_access

    unless attributes.has_key?(:_obj_class)
      attributes[:_obj_class] = 'Pdf'
    end

    if attributes.has_key?(:blob) && !attributes.has_key?(:_path)
      filename = Pathname.new(attributes[:blob].path).basename
      path = "_resources/#{SecureRandom.hex(8)}/#{filename}"

      attributes[:_path] = path
    end

    super(attributes)
  end

  def url_to_pdf
    self.try(:binary_url).split('?').first
  end

  def show_in_navigation?
    false
  end
end
