import { forgotPassword } from './api';

test('forgotPassword returns data when email is valid', async () => {
  const email = 'user@example.com';
  const responseData = { message: 'Reset link sent successfully' };
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(responseData),
  });

  const result = await forgotPassword(email);

  expect(result).toEqual(responseData);
});

test('forgotPassword throws error when email is empty', async () => {
  const email = '';
  const errorMessage = 'Email is required!';
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: false,
    json: () => Promise.resolve({ message: errorMessage }),
  });

  await expect(forgotPassword(email)).rejects.toThrow(errorMessage);
});
