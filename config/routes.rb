Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # nesting routes under an api namespace
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :create, :show, :new]
    resources :trails, only: [:index, :create, :show, :new, :destroy]
    resources :parks, only: [:index, :create, :show, :new, :destroy]
    resources :reviews, only: [:create, :show, :new, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end

  # root to static pages controller, root method
  root to: 'static_pages#root'
end
