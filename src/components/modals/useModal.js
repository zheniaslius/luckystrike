import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);

  const triggerOpen = () => setOpen((prevOpen) => !prevOpen);

  return { open, triggerOpen };
};

export default useModal;
