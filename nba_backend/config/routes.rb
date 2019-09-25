Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources "players", only: [:index, :show, :create]
  get "/teams", to: "players#teams"
end
