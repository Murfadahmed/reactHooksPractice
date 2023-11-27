import React, { useState } from 'react';

const generatePassword = (length, includeNumbers) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numCharset = '0123456789';

  let passwordCharset = charset;
  if (includeNumbers) {
    passwordCharset += numCharset;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordCharset.length);
    password += passwordCharset.charAt(randomIndex);
  }

  return password;
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength, includeNumbers);
    setPassword(newPassword);
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <label>
        Password Length:
        <input
          type="range"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <p>
        {passwordLength}
        </p>
      </label>
      
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </label>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      {password && (
        <div>
          <h3>Your Password:</h3>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
