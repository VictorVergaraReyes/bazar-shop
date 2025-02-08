
export interface User {
    id_usuario: number;
    nombre: string;
    email: string;
    contraseña: string;
    direccion: string;
    telefono: string;
    fecha_registro: Date;
  }
  
  export interface Product {
    id_producto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    id_categoria: number;
    fecha_creacion: Date;
  }
  
  export interface Category {
    id_categoria: number;
    nombre: string;
  }
  
  export interface Order {
    id_pedido: number;
    id_usuario: number;
    fecha_pedido: Date;
    estado: string;
    total: number;
  }
  
  export interface OrderDetail {
    id_detalle: number;
    id_pedido: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
  }
  
  export interface Review {
    id_reseña: number;
    id_usuario: number;
    id_producto: number;
    calificacion: number;
    comentario: string;
    fecha_reseña: Date;
  }
  
  export interface ShopCart {
    id_carrito: number;
    id_usuario: number;
    id_producto: number;
    cantidad: number;
    fecha_agregado: Date;
  }