class ApplicationController < ActionController::Base
  require File.join(Rails.root, 'lib', 'authenticated_system.rb')
  # Be sure to include AuthenticationSystem in Application Controller instead
  include AuthenticatedSystem
  # If you want "remember me" functionality, add this before_filter to Application Controller
  before_filter :login_required
  before_filter :login_from_cookie
  
  protect_from_forgery
end
