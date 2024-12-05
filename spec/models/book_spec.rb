require 'rails_helper'

describe Book, type: :model do
  let(:book) { create(:book) }

  it 'is expected to have a valid factory' do
    expect(book.valid?).to eq true
  end

  context 'Associations' do
    it { should belong_to(:recommender).class_name('User') }
  end

  context 'Validations' do
    it { should validate_presence_of(:recommender) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:description) }

    it 'is invalid without a title' do
      book.title = nil
      expect(book.valid?).to eq false
    end

    it 'is invalid without a recommender' do
      book.recommender = nil
      expect(book.valid?).to eq false
    end

    it "is not valid with a empty title" do
      book.title = ''
      expect(book).to_not be_valid
    end
  end
end
