import React from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions,FlatList } from "react-native";

const dibujar=StyleSheet.create({
  contenedor:{
    width:'100%',
    padding:20
  },
  titulo:{
    fontSize:20,
    color:'#6f6f6f'
  },
  textinput:{
    borderColor:'#6f6f6f',
    borderWidth:1,
    borderRadius:15,
    width:Dimensions.get("screen").width*0.6,
    paddingLeft:15
  },
  text:{
    fontSize:16,
    color:'#6f6f6f'
  },
  wtext:{
    fontSize:16,
    color:'#fff'
  },
  inputcontenedor:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  button:{
    width:Dimensions.get("screen").width*0.25,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
  },
  tareascontenedor:{
    paddingVertical:20,
    borderBottomColor:"black",
    borderBottomWidth:1
  }
})
const tareas=[
  {
    titulo:"Lavar baño",
    estado:false,
    fecha:new Date()
  },
  {
    titulo:"Lavar loza",
    estado:false,
    fecha:new Date()
  },
  {
    titulo:"Lavar ropa",
    estado:false,
    fecha:new Date()
  }
]
interface Task{
  titulo:string,
  estado:boolean,
  fecha:Date
}
function renderItem({item}:{item:Task}){
  return (
    <View style={dibujar.tareascontenedor}>
      <TouchableOpacity>
      <Text style={dibujar.text}>
        {item.titulo}
      </Text>
      <Text style={dibujar.text}>
        {item.fecha.toDateString()}
      </Text>
      </TouchableOpacity>
    </View>
  )
}
export default function App(){
  return(
    <View style={dibujar.contenedor}>
      <Text style={dibujar.titulo}>
        Hola OPM
      </Text>
      <View style={dibujar.inputcontenedor}>
        <TextInput placeholder="Agregar" style={dibujar.textinput}/>
        <TouchableOpacity style={dibujar.button}>
          <Text style={dibujar.wtext}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <FlatList
        data={tareas}
        renderItem={renderItem}
        />
      </View>
    </View>
  )
}