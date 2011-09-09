class AddProjectUrlAndProjectNameAndGravatarUrlToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :project_dest, :string
    add_column :users, :project_name, :string
    add_column :users, :gravatar_dest, :string
  end

  def self.down
    remove_column :users, :gravatar_dest
    remove_column :users, :project_name
    remove_column :users, :project_dest
  end
end
