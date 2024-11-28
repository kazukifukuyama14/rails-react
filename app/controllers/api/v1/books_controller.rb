class Api::V1::BooksController < ApplicationController
 before_action :authenticate_user!, :only [:new, :create]

 def index
   books = Book.all
    render json: books
 end
end
