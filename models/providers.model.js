const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB


const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true 
    },
    address: { 
        type: String, 
        required: true,
        unique: true
    },
    url_web: { 
        type: String, 
        required: true,
        unique: true
    }, 
    isActive: {
        type: Boolean,
        required: true,
    }
};

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;



// const mongoose = require('mongoose');
// require('../config/db_mongo') // Conexión a BBDD MongoDB
// const regEx = /^[A-Z]{1}[0-9]{8}$/;


// const objectSchema = {
//     company_name: { 
//         type: String, 
//         required: true,
//         unique: true
//     },
//     CIF: { 
//         type: String, 
//         required: true,
//         unique: true,
//         validate: {
//             validator: function(CIF){
//                 if(regEx.test(CIF))
//                     return true;
//                 else {
//                     return false;
//                 }
//             }, 
//             message: "introduce un CIF válido con la siguiente estructura: A12345678"
//         }
//     },
//     address: { 
//         type: String, 
//         required: true 
//     },
//     url_web: { 
//         type: String, 
//         required: true 
//     }
// };
// // Crear el esquema
// const providerSchema = mongoose.Schema(objectSchema);


// // Crear el modelo --> Colección
// const Provider = mongoose.model('Provider', providerSchema);

// module.exports = Provider;

