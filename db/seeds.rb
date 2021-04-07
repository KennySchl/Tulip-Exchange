User.delete_all

test_user = User.create(
  email: 'test@mail.com',
  first_name: 'Test',
  last_name: 'Tester',
  password: '123456'
)