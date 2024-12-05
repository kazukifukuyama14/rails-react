require 'rails_helper'

describe StaticController, type: :request do
  describe 'GET #home' do
    before { get root_path }

    it 'returns a successful response' do
      expect(response).to have_http_status(:ok)
    end
  end
end
