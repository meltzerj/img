class AddProjectDescToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :project_desc, :text
  end

  def self.down
    remove_column :users, :project_desc
  end
end
