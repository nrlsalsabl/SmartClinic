export type Doctor = {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    schedule: string;
    rating: string;
    avatar: string;
};

export type Patient = {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: 'Aktif' | 'Nonaktif';
};

export type Booking = {
    id: number;
    doctorId: number;
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    status: 'Menunggu' | 'Dikonfirmasi' | 'Selesai';
};

export type User = {
    name: string;
    email: string;
    role: 'patient' | 'admin';
};