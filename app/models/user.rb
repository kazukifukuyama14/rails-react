class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :recommended_books, class_name: "Book", foreign_key: "recommender_id"

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end
