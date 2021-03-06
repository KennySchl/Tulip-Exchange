Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create] do
      resources :watchlists, only: [:index, :create, :show, :update, :destroy] do
        resources :watchlist_items, only: [:index, :create, :destroy]
      end
    end
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index, :show]
    # resources :watchlist_items, only: [:index, :create, :destroy]
  end
  
  root "static_pages#root"
end
