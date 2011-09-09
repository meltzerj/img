class UsersController < ApplicationController
  def index
    @email = Email.new
    @users = User.all
  end

end
