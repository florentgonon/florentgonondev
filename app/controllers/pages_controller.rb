class PagesController < ApplicationController
  def home
    # @numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    # @first_number = @numbers.sample
    # @second_number = @numbers.sample
    # @total = @first_number + @second_number
    if verify_recaptcha
      redirect_to root_path
    end
  end

  def download_pdf
  send_file(
    "#{Rails.root}/public/CV.pdf",
    filename: "CV-FlorentGONON.pdf",
    type: "application/pdf"
  )
  end
end
