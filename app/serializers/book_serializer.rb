class BookSerializer
  include JSONAPI::Serializer
  attributes :title, :author, :description
  belongs_to :recommender, serializer: UserSerializer
end
