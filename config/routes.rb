Img::Application.routes.draw do
  get "pages/what_is_img"

  get "pages/schedule"

  get "pages/contact"

  root :to => "users#index"
  resources :users
  resources :emails
  match '/gotoedit' => 'users#go_to_edit', :as => 'go_to_edit'
end
