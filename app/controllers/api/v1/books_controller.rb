class Api::V1::BooksController < ApplicationController
  before_action :authenticate_user!, only: [ :create, :update, :destroy ]

  def index
    books = Book.includes(:recommender)
    render json: BookSerializer.new(books).serializable_hash
  end

  def show
    book = Book.find(params[:id])
    render json: BookSerializer.new(book, include: [ :recommender ]).serializable_hash
  end

  def create
    book = current_user.recommended_books.build(book_params)

    if book.save
      render json: BookSerializer.new(book).serializable_hash, status: :created
    else
      render json: book.errors, status: :unprocessable_entity
    end
  end

  def update
    book = Book.find(params[:id])

    if book.update(book_params)
     render json: BookSerializer.new(book).serializable_hash
    else
      render json: book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description)
  end
end
