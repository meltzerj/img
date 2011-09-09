Img::Application.routes.draw do
  root :to => "users#index"
  get "users/index"
  resources :emails
end
