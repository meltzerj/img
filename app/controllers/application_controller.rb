class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def password_protected
    authenticate_or_request_with_http_basic do |username, password|
      username == "img" && password == "kicksass"
    end
  end
end
