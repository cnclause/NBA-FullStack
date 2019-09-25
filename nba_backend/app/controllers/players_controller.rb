class PlayersController < ApplicationController
    def index
        @players = Player.all
        render json: @players
    end 

    def show
        @player = Player.find(params[:id])

        render json: @player
    end

    def create
        @player = Player.create({
            name: params[:name],
            number: params[:number],
            team_id: params[:team_id]
        })
        redirect_to "http://localhost:3001"
    end

    def teams
        @teams = Team.all

        render json: @teams, include: :players
    end
end
