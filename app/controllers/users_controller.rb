class UsersController < ApplicationController
  before_filter :password_protected, :only => [:new, :create]
  
  def index
    @email = Email.new
    @users = User.all
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    respond_to do |format|
      if @user.save
        redirect_to new_user_path
        flash[:notice] = "Success!. Check the homepage to see your project displayed."
      else
        redirect_to :back
        flash[:alert] = "There was an error. Please try again."
      end
    end    
  end    

end
