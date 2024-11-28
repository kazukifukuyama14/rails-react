class Book < ApplicationRecord
  belongs_to :recommender, class_name: "User"
end
