import React from 'react';
import { render, screen } from '@testing-library/react';
import Userprofile from './Userprofile';

describe('Userprofile Component', () => {
  it('renders user information correctly', () => {  

    const userData = [
      {
        name: 'Udit',
        email: 'xyz@gmail.com',
        phone: '12345'
      },
      {
        name: 'Ayush',
        email: 'glc@gmail.com',
        phone: '123456'
      },
      {
        name: 'Anant',
        email: 'abc@gmail.com',
        phone: '12345667'
      }
    ];
    render(<Userprofile dataprop={userData} />);
    userData.forEach((user) => {
      const nameElement = screen.getByText(user.name);
      const emailElement = screen.getByText(user.email);
      const phoneElement = screen.getByText(user.phone);
      
      expect(nameElement).toBeInTheDocument();
      expect(emailElement).toBeInTheDocument();
      expect(phoneElement).toBeInTheDocument();
    });
  });
});
