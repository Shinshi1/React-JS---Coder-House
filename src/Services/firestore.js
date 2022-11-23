// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs, doc, getDoc, where, query } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBqOiqRNlNVcjvvntMd_ZzE14f2CJarN8g",
    authDomain: "e-comerce-cac67.firebaseapp.com",
    projectId: "e-comerce-cac67",
    storageBucket: "e-comerce-cac67.appspot.com",
    messagingSenderId: "1028748763641",
    appId: "1:1028748763641:web:30210f8ff9b7d4848f1d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 0. Inicializamos Firestore
const DB = getFirestore(app)


//1. Traer todos los documentos
export const getItems = async () => {
    // 1.A Referenciamos nuestra colección
    const collectionProductsRef = collection(DB, "Productos")
    // 1.B Solicitamos todos los documentos de la colección
    const documentSnapshot = await getDocs(collectionProductsRef)

    const documentsData = documentSnapshot.docs.map((doc) => {
        // Opcion 1 - datos del producto + ID
        // 
        //     let docDataWithId = doc.data()
        //     docDataWithId.id = doc.id
        //
        return {
            // Opcion 2 - datos del producto + ID - SugarSyntax
            ...doc.data(),
            id: doc.id
        };
    })
    // console.log(documentsData)

    return documentsData;

}

//2. Traer un documento por ID
export const getSingleItem = async (idParams) => {


    const docRef = doc(DB, "Productos", idParams);

    const docSnapshot = await getDoc(docRef);
    // Opcion sin SugarSyntax
    //    const itemData = docSnapshot.data()
    //    itemData.id = docSnapshot.id
    //    return itemData

    return {
        ...docSnapshot.data(),
        id: docSnapshot.id
    }
}

//3. Traer todos los documentos según categoria
export const getItemsByCategory = async (categoryParams) => {

    const collectionRef = collection(DB, "Productos")

    const queryCategory = query(collectionRef, where("category", "==", categoryParams))

    const documentSnapshot = await getDocs(queryCategory)
    //
    const documentsData = documentSnapshot.docs.map((doc) => {
        //   return doc.data();
        return {
            ...doc.data(),
            id: doc.id
        };
    })

    return documentsData;
}

