class PagesController < ApplicationController
  def home
  end

  def download_pdf
  send_file(
    "#{Rails.root}/public/CV.pdf",
    filename: "CV-FlorentGONON.pdf",
    type: "application/pdf"
  )
  end
end
