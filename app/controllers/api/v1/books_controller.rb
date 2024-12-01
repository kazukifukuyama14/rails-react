class Api::V1::BooksController < ApplicationController
  before_action :authenticate_user!, only: %i[ create update destroy ]
  before_action :set_book, only: %i[ show update destroy ]

  def index
    books = Book.includes(:recommender)
    render json: BookSerializer.new(books).serializable_hash
  end

  def show
    render json: BookSerializer.new(@book, include: [ :recommender ]).serializable_hash
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
    if book.update(book_params)
     render json: BookSerializer.new(@book).serializable_hash
    else
      render json: book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :description)
  end
end
