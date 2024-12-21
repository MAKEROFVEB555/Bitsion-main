import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
export default __dirname;


export const encriptarPass = async (password) => {
    
    try {
        const hash = await bcrypt.hash(password, 10);
        
        return hash;
      } catch (error) {
        console.error('Error al generar el hash:', error);
        throw error;
      }
}

export const validarPass = async (password, hash) => {
    
    const result =  await bcrypt.compare(password, hash)
      
    console.log('Coincide la contraseña:', result); 
    return result
};


export const DataTime = () => {
    const currentDate = new Date();

  
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    
    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log("Current date and time:", formattedDateTime);
    return formattedDateTime
}




export const generarIDAleatorio = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numbers = '0123456789';
    let resultadoCaracteres = '';
    let resultadoNumeros = '';
    const caracteresLength = caracteres.length;
    const numbersLength = numbers.length;

    for (let i = 0; i < longitud; i++) {
        resultadoCaracteres += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    for (let i = 0; i < longitud-5; i++) {
        resultadoNumeros += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    console.log(resultadoCaracteres);
    console.log(resultadoNumeros);
    const id = `${resultadoNumeros}${resultadoCaracteres}`

    return id;
}


//generar ID venta
export const generarIDAleatorioVentas = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const numbers = '0123456789abcdefghijklmnopqrstuvwxyz';
    let resultadoCaracteres = '';
    let resultadoNumeros = '';
    const caracteresLength = caracteres.length;
    const numbersLength = numbers.length;

    for (let i = 0; i < longitud; i++) {
        resultadoCaracteres += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    for (let i = 0; i < longitud-5; i++) {
        resultadoNumeros += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    console.log(resultadoCaracteres);
    console.log(resultadoNumeros);
    const id = `${resultadoNumeros}${resultadoCaracteres}`

    return id;
}