const jwt = require('jsonwebtoken');

const secretKey = 'agjhdru56gjh';

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

const decrypt = (token) => {
  // return decoded payload
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return { error: 'Invalid or expired token' };
  }
}

const payload = { userId: 123, role: 'admin' };
const token = encrypt(payload);
const decoded = decrypt(token);

if (decoded.userId === payload.userId && decoded.role === payload.role) {
  console.log('Success');
} else {
  console.log('Failed');
}

module.exports = {
  encrypt,
  decrypt
}