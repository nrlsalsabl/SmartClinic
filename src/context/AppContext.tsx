import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

import { Booking, User } from '../types';

type AppContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
};

const AppContext = createContext<AppContextType | undefined>(
  undefined
);

const initialBookings: Booking[] = [
  {
    id: 1,
    doctorId: 1,
    doctorName: 'Dr. Andi Pratama',
    specialty: 'Dokter Umum',
    date: '15 November 2026',
    time: '09:00',
    status: 'Dikonfirmasi',
  },
];

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const [bookings, setBookings] =
    useState<Booking[]>(initialBookings);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [booking, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        bookings,
        addBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp harus digunakan di dalam AppProvider');
  }

  return context;
};