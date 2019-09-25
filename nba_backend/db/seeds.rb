# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Team.destroy_all
Player.destroy_all

bulls = Team.create(name: "Bulls")
nuggets = Team.create(name: "Nuggets")
lakers = Team.create(name: "Lakers")

Player.create(name:"Birdman", number: 25, team: nuggets)

lakers.players.create(name: "Kobe", number: 8)

bulls.players.create(name: "MJ", number: 23)
