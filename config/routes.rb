Rails.application.routes.draw do
  root to: 'site#index'
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
