import React, { FC, useState } from 'react';

import { getSponsors } from '@services/api';
import { ISponsors } from '@services/api/firebase/firebase.typings';
import { usePromise } from '@services/hooks';

interface IModalContext {
  modalInfo?: ISponsors;
  isOpen?: boolean;
  setOpen?: (isOpen: boolean) => void;
}

export const ModalContext = React.createContext<IModalContext>({});

export const ModalContextProvider: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [modalInfo] = usePromise(async () => await getSponsors());

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpen,
        modalInfo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
