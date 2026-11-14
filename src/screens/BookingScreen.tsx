import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import Header from '../components/Header';
import DoctorCard from '../components/DoctorCard';
import CustomButton from '../components/CustomButton';

import { doctors } from '../data/doctors';
import { COLORS } from '../theme/colors';
import { useApp } from '../context/AppContext';

type TabParamList = {
    Home: undefined;
    Booking: undefined;
    History: undefined;
    Profile: undefined;
    Doctors: undefined;
};

type Props = BottomTabScreenProps<TabParamList, 'Booking'>;

const dates = [
    '15 November 2026',
    '16 November 2026',
    '17 November 2026',
];

const times = [
    '08:00',
    '09:00',
    '10:00',
    '13:00',
    '14:00',
];

export default function BookingScreen({ navigation }: Props) {
    const { addBooking } = useApp();

    const [doctorId, setDoctorId] = useState(1);
    const [date, setDate] = useState(dates[0]);
    const [time, setTime] = useState(times[0]);

    const selectedDoctor = doctors.find(
        (doctor) => doctor.id === doctorId
    )!;

    const handleBooking = () => {
        addBooking({
            id: Date.now(),
            doctorId: selectedDoctor.id,
            doctorName: selectedDoctor.name,
            specialty: selectedDoctor.specialty,
            date,
            time,
            status: 'Menunggu',
        });

        Alert.alert(
            'Booking Berhasil',
            'Jadwal pemeriksaan berhasil dibuat.',
            [
                {
                    text: 'Lihat Riwayat',
                    onPress: () => navigation.navigate('History'),
                },
            ]
        );
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Header
                title="Booking Dokter"
                subtitle="Buat janji pemeriksaan Anda"
            />

            <Text style={styles.title}>Pilih Dokter</Text>

            {doctors.map((doctor) => (
                <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    selected={doctorId === doctor.id}
                    onPress={() => setDoctorId(doctor.id)}
                />
            ))}

            <Text style={styles.title}>Pilih Tanggal</Text>

            <View style={styles.options}>
                {dates.map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.dateOption,
                            date === item && styles.activeOption,
                        ]}
                        onPress={() => setDate(item)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                date === item && styles.activeText,
                            ]}
                        >
                            {item.split(' ').slice(0, 2).join(' ')}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.title}>Pilih Jam Pemeriksaan</Text>

            <View style={styles.options}>
                {times.map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.timeOption,
                            time === item && styles.activeOption,
                        ]}
                        onPress={() => setTime(item)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                time === item && styles.activeText,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.summary}>
                <Text style={styles.summaryTitle}>
                    Ringkasan Booking
                </Text>

                <Text style={styles.summaryText}>
                    Dokter: {selectedDoctor.name}
                </Text>

                <Text style={styles.summaryText}>
                    Spesialisasi: {selectedDoctor.specialty}
                </Text>

                <Text style={styles.summaryText}>
                    Tanggal: {date}
                </Text>

                <Text style={styles.summaryText}>
                    Jam: {time}
                </Text>
            </View>

            <CustomButton
                title="Konfirmasi Booking"
                onPress={handleBooking}
            />

            <View style={{ height: 30 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.dark,
        marginTop: 15,
        marginBottom: 13,
    },
    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 9,
    },
    dateOption: {
        backgroundColor: COLORS.white,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    timeOption: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    activeOption: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    optionText: {
        color: COLORS.dark,
        fontSize: 12,
    },
    activeText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    summary: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
        padding: 17,
        marginTop: 25,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    summaryTitle: {
        color: COLORS.dark,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    summaryText: {
        color: COLORS.text,
        fontSize: 13,
        marginTop: 8,
    },
});