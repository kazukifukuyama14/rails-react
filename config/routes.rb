Rails.application.routes.draw do
  namespace :api do
  resources :books, only: [ :index, :create, :update, :destroy, :show ]
end
  get "up" => "rails/health#show", as: :rails_health_check
  root "static#home"
  get "*path", to: "static#home", constraints: ->(req) { !req.xhr? && req.format.html? }
end
