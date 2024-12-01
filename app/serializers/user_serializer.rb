class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email
  has_many :recommended_books, serializer: BookSerializer
end
