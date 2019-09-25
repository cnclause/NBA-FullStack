class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.references :team, null: false, foreign_key: true
      t.integer :number

      t.timestamps
    end
  end
end
