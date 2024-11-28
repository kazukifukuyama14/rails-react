class Book < ApplicationRecord
  belongs_to :recommender, class_name: "User"
  validates :recommender, :title, :author, :description, presence: true
end
