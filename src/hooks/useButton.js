/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import Button from '../shared/Button';

export const useButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('USE BUTTON', isOpen);

  const onClick = () => setIsOpen((prevState) => !prevState);

  const CloseButton = () => (
    <Button onClick={onClick} isOpen={isOpen} />
  );

  return { isOpen, CloseButton, onClick };
};
