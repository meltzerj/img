Img::Application.routes.draw do
  root :to => "users#index"
  resources :users
  resources :emails
  match '/gotoedit' => 'users#go_to_edit', :as => 'go_to_edit'
end
