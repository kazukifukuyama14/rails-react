class Api::V1::UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    recommended_books = user.recommended_books
    render json: { data: recommended_books.map { |book| BookSerializer.new(book).serializable_hash } }
  end
end
