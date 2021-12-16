import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";

import { Icon } from "react-native-elements";

import Item from "./Item";
import { getProductos } from "../helpers/fetch";

import { FormaItem, PropsNavigationHome } from "./../interfaces/home";
import { ProductosContext } from "../context/ProductosContext";
import { Producto } from "../interfaces/producto";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// interface Props{
//   item:Producto
// }

const ListItem = ({ navigation }: PropsNavigationHome) => {
  // const listaItem : FormaItem[] = [
  //     {
  //         id: 1,
  //         nombre:"Sensor ",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://asistentegoogle.com/wp-content/uploads/2019/08/google.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 2,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://asistentegoogle.com/wp-content/uploads/2019/08/google.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 3,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 4,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://m.media-amazon.com/images/I/41-v1fozy0L._AC_SY400_.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 5,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 5,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 5,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 5,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  //     {
  //         id: 5,
  //         nombre:"Pablito del estado",
  //         precio: "18",
  //         Oferta: true,
  //         imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
  //         descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
  //     },
  // ]

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh=()=>{
    setRefreshing(true)
    cargarProductos
    console.log('refresh');
  }
  const { productos, setProductos, cargarProductos } =
    useContext<any>(ProductosContext);

  // const [productos2 , setProductos] = useState<Producto[]>();

  useEffect(() => {
    cargarProductos
  }, []);

  const handleAgregarProducto = () => {
    // console.log("agrego algo")
    navigation.navigate("agregarPorducto");
  };

  // console.log("set productos",productos2);
  // const memo=useMemo(() => cargarProductos, productos)

  return (
    <View style={style.contenedorBotonFlatList}>
      <FlatList
        style={{ flex: 1 }}
        data={productos}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(product) => product?._id!.toString()}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        // onEndReached={isNext ? loadMore : null}
        // onEndReachedThreshold={0.1}
        // ListFooterComponent={
        // isNext ? (
        //     <ActivityIndicator
        //     size="large"
        //     color="#AEAEAE"
        //     style={style.spinner}
        //     />
        // ) : null
        // }
        refreshControl={
          <RefreshControl
            colors={['#345467']}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      <TouchableOpacity
        style={style.botonAgregar}
        onPress={handleAgregarProducto}
      >
        <Icon
          type="material-community"
          name="plus"
          color="#fff"
          size={26}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  contenedorBotonFlatList: {
    flex: 1,
    padding: 20,
  },
  contenedor: {},
  botonAgregar: {
    width: 60,
    height: 60,
    alignItems: "center",
    backgroundColor: "#0C8BF0",
    padding: 1,
    borderRadius: 40,
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowOffset: { width: 1, height: 1 },
    justifyContent: "center",
    alignContent: "center",
  },
});

export default ListItem;
