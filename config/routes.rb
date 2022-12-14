Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:index, :show]
    resources :reservations, only: [:create, :destroy, :show, :index, :update]
  end


  root to: 'static_pages#root'

end
