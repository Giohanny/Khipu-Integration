# Khipu Integration 💸

Integración de Khipu usando la [API Khipu Pagos Instantáneos](https://docs.khipu.com/openapi/es/v1/instant-payment/openapi/overview/) en modo desarrollador

## 🔨 Configuración previa
1. Creación de cuenta de desarrollador en Khipu Developers
2. Creación de API Key

<p align="center">
  <img src="./evidenciaImagenes/API key.png" height="400" />
</p>

## 🚀 Pasos para la integración
1. Simulación del sitio de compra. Maqueteado en HTML y CSS

2. Creación de pago con [API create payment](https://docs.khipu.com/openapi/es/v1/instant-payment/openapi/operation/postPayment/). Fetch al API con Javascript `https://payment-api.khipu.com/v3/payments`

<p align="center">
  <img src="./evidenciaImagenes/verificacionPostman.PNG" height="400"/>
</p>


3. Llamado de la url de Khipu para hacer las transacciones. Se encuentra en el parámetro `payment_url`

4. Visualización los cobros en el dashboard en modo desarrollador https://khipu.com/dashboard/bills

## 🎯 Uso de este repositorio

1. Clonar este repositorio
2. Abrir el archivo `index.html` en el navegador
3. Estructura del proyecto:

```
├── index.html          # Maqueteado de tienda virtual
├── fetchAPI.js         # Llamado al API Khipu
├── style.css           # Estilos CSS
├── evidenciaImagenes   # Imagenes de apoyo
└── README.md          
```

## 📸 Evidencia de integración exitosa


| :one: Simular tienda virtual  | :two: Agregar los campos |
| :-- |:--|
| <img src="./evidenciaImagenes/imagen 11.png" />    | <img src="./evidenciaImagenes/imagen 22.png" />   |
| *Realizar maqueteado de prueba con HTML y CSS* | *Llenar los campos obligatorios* |


| :three: Seleccionar Banco  | :four: Ingresar con RUT |
| :-- |:--|
| <img src="./evidenciaImagenes/imagen 33.png" />    | <img src="./evidenciaImagenes/imagen 44.png" />   |
| *Para modo desarrollador seleccionar DemoBank* | *Usar RUT ficticio* |


| :five: Transferencia realizada  | :six: Pago Verificado por Khipu |
| :-- |:--|
| <img src="./evidenciaImagenes/imagen 55.png" />    | <img src="./evidenciaImagenes/imagen 66.png" />   |
| *Tener en cuenta el código de la transacción* | *Corroborar que se valide con el mismo código* |


| :seven: Visualizar Cobro en dashboard   | :eight: Revisar correo del pago |
| :-- |:--|
| <img src="./evidenciaImagenes/imagen 77.png" />    | <img src="./evidenciaImagenes/imagen 88.png" />   |
| *Círculo verde para transacciones exitosas* | *Verificar código de la transacción* |

