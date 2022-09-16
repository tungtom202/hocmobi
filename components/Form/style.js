import { StyleSheet } from "react-native";
import color from "./../../containes/color";
const styles =StyleSheet.create({
  addTask:{
     bottom: 30,
     paddingHorizontal: 20,
     width: '100%',
     flexDirection:'row',
     justifyContent: 'space-between',
     alignItems:'center'
  },
  input:{
     height: 44,
     width:'80%',
     backgroundColor:color.white,
     borderWidth: 1,
     borderColor:color.primary,
     borderRadius: 20,
     paddingHorizontal: 20,
     paddingVertical:10

  },
  iconWaper:{
     width: 44,
     height:44,
     backgroundColor:color.primary,
     borderRadius: 44,
     alignItems:'center',
     borderWidth:2,
     borderColor:'#21a3d0',
     justifyContent:'center'
  },
  icon:{
    fontSize: 24,
    color:'#fff'
  }
})

export default styles;