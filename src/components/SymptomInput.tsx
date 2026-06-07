import { FontAwesome5, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput} from "react-native";

type SymptomInputProps = {
    iconType: 'fontawesome' | 'octicons' | 'material';
    iconName: string;
    iconColor: string;
    label: string;
    value: string;
    onChangeText: (value: string) => void;
    unit?: string;
    placeholder?: string;
    keyboardType?: 'default' | 'numeric';
    isLast?: boolean;
};

export function SymptomInput({iconType,iconName,iconColor,label,value,onChangeText,unit,placeholder = '-',keyboardType = 'default',isLast = false,}: SymptomInputProps) {
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
            <Octicons name={iconName as keyof typeof Octicons.glyphMap} size={32} color={iconColor}/>
        );
    }

    return (

        <View style={[styles.symptomInputCard, isLast && styles.symptomRowLast]}>
            <View style={styles.symptomLeft}>
                <View style={styles.iconBox}>{renderIcon()}</View>

                <Text style={styles.symptomLabel}>{label}</Text>
            </View>

            <View style={styles.symptomRight}><TextInput style={styles.symptomInput} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#B8C1D1" keyboardType={keyboardType}/>
                <Text style={styles.unidadeText}>{unit}</Text>
            </View>
        </View>

  );
}

const styles = StyleSheet.create({

    symptomInputCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },

    symptomRowLast: {
        borderBottomWidth: 0,
    },

    symptomLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    iconBox: {
        width: 42,
        alignItems: 'center',
        marginRight: 14,
    },

    symptomLabel: {
        color: '#1F2937',
        fontSize: 17,
        fontWeight: '600',
        flex: 1,
    },

    symptomRight: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 110,
        justifyContent: 'flex-end',
    },

    symptomInput: {
        color: '#111827',
        fontSize: 16,
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