import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import Header from '../components/Header';
import DoctorCard from '../components/DoctorCard';
import CustomButton from '../components/CustomButton';

import { doctors } from '../data/doctors';
import { COLORS } from '../theme/colors';

type TabParamList = {
    Home: undefined;
    Booking: undefined;
    History: undefined;
    Profile: undefined;
    Doctors: undefined;
};

type Props = BottomTabScreenProps<TabParamList, 'Doctors'>;

export default function DoctorScreen({ navigation }: Props) {
    return (
        <ScrollView style={styles.container}>
            <Header
                title="Daftar Dokter"
                subtitle="Pilih dokter sesuai kebutuhan Anda"
            />

            <View style={styles.info}>
                <Text style={styles.infoTitle}>
                    👨‍⚕️ Dokter SmartClinic
                </Text>
                <Text style={styles.infoText}>
                    Temukan tenaga medis profesional untuk
                    pemeriksaan kesehatan Anda.
                </Text>
            </View>

            {doctors.map((doctor) => (
                <View key={doctor.id}>
                    <DoctorCard doctor={doctor} />

                    <CustomButton
                        title="Booking Dokter"
                        onPress={() => navigation.navigate('Booking')}
                        style={{ marginTop: -5, marginBottom: 18 }}
                    />
                </View>
            ))}

            <View style={{ height: 25 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    info: {
        backgroundColor: COLORS.secondary,
        padding: 17,
        borderRadius: 14,
        marginBottom: 20,
    },
    infoTitle: {
        color: COLORS.dark,
        fontWeight: 'bold',
        fontSize: 15,
    },
    infoText: {
        color: COLORS.text,
        fontSize: 12,
        marginTop: 8,
        lineHeight: 19,
    },
});