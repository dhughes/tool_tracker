Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users

  devise_scope :user do
    root 'home#index'
    # resource :password_reset_request, controller: :password_reset_request, only: [:show]
  end


end
