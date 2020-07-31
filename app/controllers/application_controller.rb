class ApplicationController < ActionController::Base
  # include Pundit

  protected

  def after_sign_in_path_for(_resource)
    session[:user_return_to] || welcome_path
  end

  def after_sign_out_path_for(_resource)
    root_path
  end
end
