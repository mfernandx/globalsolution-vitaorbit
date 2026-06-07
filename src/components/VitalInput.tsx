import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput} from "react-native";

type VitalInputProps = {
    iconType: 'fontawesome' | 'ionicons' | 'material';
    iconName: string;
    iconColor: string;
    label: string;
    value: string;
    onChangeText: (value: string) => void;
    unit: string;
    placeholder?: string;
    keyboardType?: 'default' | 'numeric';
    isLast?: boolean;
};

export function VitalInput({iconType,iconName,iconColor,label,value,onChangeText,unit,placeholder = '-',keyboardType = 'default',isLast = false,}: VitalInputProps) {
    function renderIcon() {
        if (iconType === 'fontawesome') {
            return (
                <FontAwesome5 name={iconName as keyof typeof FontAwesome5.glyphMap} size={28} color={iconColor}/>
            );
        }

        if (iconType === 'material') {
            return (
                <MaterialCommunityIcons name={iconName as keyof typeof MaterialCommunityIcons.glyphMap} size={32} color={iconColor}/>
            );
    }

    return (
      <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={32} color={iconColor}/>);
    }

    return (
        <View style={[styles.vitalInputCard, isLast && styles.vitalRowLast]}>
            <View style={styles.vitalLeft}>
                <View style={styles.iconBox}>{renderIcon()}</View>

                <Text style={styles.vitalLabel}>{label}</Text>
            </View>

            <View style={styles.vitalRight}><TextInput style={styles.vitalInput} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#B8C1D1" keyboardType={keyboardType}/>
                <Text style={styles.unidadeText}>{unit}</Text>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({

    vitalInputCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },

    vitalRowLast: {
        borderBottomWidth: 0,
    },

    vitalLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    iconBox: {
        width: 42,
        alignItems: 'center',
        marginRight: 14,
    },

    vitalLabel: {
        color: '#1F2937',
        fontSize: 17,
        fontWeight: '600',
        flex: 1,
    },

    vitalRight: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 110,
        justifyContent: 'flex-end',
    },

    vitalInput: {
        color: '#111827',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
        minWidth: 64,
        padding: 0,
    },

    unidadeText: {
        color: '#64748B',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 8,
    },

    
})