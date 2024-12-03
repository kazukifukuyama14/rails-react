
User.destroy_all
Book.destroy_all

# Create users
users = Array.new(5) do
  User.create!(
    email: Faker::Internet.email,
    password: 'password',
    password_confirmation: 'password'
  )
end

# Create books for each user
users.each do |user|
  rand(3..7).times do
    user.recommended_books.create!(
      title: Faker::Book.title,
      author: Faker::Book.author,
      description: Faker::Lorem.paragraph(sentence_count: 3)
    )
  end
end
