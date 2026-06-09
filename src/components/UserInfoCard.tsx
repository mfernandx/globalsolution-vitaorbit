import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type UserInfoCardProps = {
    label: string;
    value: string;
    isLast?: boolean;
    onEdit?: () => void;
};

export function UserInfoCard({ label, value, isLast = false, onEdit }: UserInfoCardProps) {
    return (
        <View style={[styles.infoCampo, isLast && styles.infoLast]}>
            <Text style={styles.infoLabel}>{label}</Text>

            <View style={styles.infoRight}>
                <Text style={styles.infoValor}>{value || '-'}</Text>

                {onEdit && (
                    <TouchableOpacity onPress={onEdit}>
                        <Ionicons name="create-outline" size={22} color="#6366F1" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    infoCampo: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoLast: {
        borderBottomWidth: 0,
    },

    infoLabel: {
        color: '#1F2937',
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
    },

    infoRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1.3,
        justifyContent: 'flex-end',
    },

    infoValor: {
        color: '#334155',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'right',
        marginRight: 8,
    },

});