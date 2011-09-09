Img::Application.routes.draw do
  root :to => "users#index"
  resources :users
  resources :emails
end
