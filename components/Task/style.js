import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    items:{
        flexDirection: 'row',
        backgroundColor:'#fff', 
        marginBottom: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    square:{
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      even:{
        backgroundColor: 'green',
      },
      odd:{
        backgroundColor:'blue',
      },
      number:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
      },
      content:{
        fontSize: 16,
        width: '80%'
      }
})

export default styles;