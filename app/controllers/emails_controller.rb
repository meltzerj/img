class EmailsController < ApplicationController
  def create
    @email = Email.new(params[:email])
      respond_to do |format|
        if @email.save
          format.html {redirect_to :back}
          flash[:notice] = "Thanks for signing up! We'll be in contact soon."
        else
          format.html {redirect_to :back}
          flash[:alert] = "Your email was not saved correctly. Please try again."
        end 
      end
  end   
end
