class PagesController < ApplicationController
  def home
    # if verify_recaptcha
    #   redirect_to root_path
    # end
  end

  def download_pdf
  send_file(
    "#{Rails.root}/public/CV.pdf",
    filename: "CV-FlorentGONON.pdf",
    type: "application/pdf"
  )
  end
end
