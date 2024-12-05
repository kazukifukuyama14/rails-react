require 'rails_helper'

describe User, type: :model do
  let(:user) { create(:user) }

  it 'is expected to have a valid factory' do
    expect(user.valid?).to eq true
  end

  context 'Associations' do
    it { should have_many(:recommended_books).class_name('Book').with_foreign_key('recommender_id') }
  end

  context 'Validation' do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should validate_presence_of(:password) }
  end
end
