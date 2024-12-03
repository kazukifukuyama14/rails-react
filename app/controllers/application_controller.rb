class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  protect_from_forgery with: :exception

  def authenticate_user!
    if user_signed_in?
      super
    else
      respond_to do |format|
        format.json { render json: { error: "You need to sign in or sign up before continuing." }, status: :unauthorized }
        format.html { super }
      end
    end
  end
end
