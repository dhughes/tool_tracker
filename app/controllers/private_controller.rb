class PrivateController < ApplicationController
  layout Proc.new { |controller| controller.request.xhr? ? "modal" : "private" }

  before_action :authenticate_user!
  # after_action :verify_authorized

  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from ActionController::RoutingError, with: :not_found

  # def user_not_authorized
  #   render(:file => File.join(Rails.root, 'public/403.html'), :status => 403, :layout => false)
  # end

  def not_found
    render(:file => File.join(Rails.root, 'public/404.html'), :status => 404, :layout => false)
  end

end
