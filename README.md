# Khipu Integration :money_with_wings:

Integración de Khipu usando la [API Khipu Pagos Instantáneos](https://docs.khipu.com/openapi/es/v1/instant-payment/openapi/overview/) en modo desarrollador

## Configuración previa
1. Creación de cuenta de desarrollador en Khipu Developers
2. Creación de API Key

## Pasos para la integración
1. Simulación del sitio de compra. Maqueteado en HTML y CSS

2. Creación de pago con [API create payment](https://docs.khipu.com/openapi/es/v1/instant-payment/openapi/operation/postPayment/). Fetch al API con Javascript `https://payment-api.khipu.com/v3/payments`

3. Llamado de la url de Khipu para hacer las transacciones. Se encuentra en el parámetro `payment_url`

4. Visualización los cobros en el dashboard en modo desarrollador https://khipu.com/dashboard/bills

## Uso de este repositorio

1. Clonar este repositorio
2. Abrir el archivo `index.html` en el navegador
3. Estructura del proyecto

## Evidencia de integración exitosa


| :one: Simular tienda virtual  | :two: Agregar los campos |
| :-- |:--|
| ![](https://i.ibb.co/RGBdksQQ/imagen-1.png)    | ![](https://i.ibb.co/TDMtFk8B/imagen-22.png)    |
| *Realizar maqueteado de prueba con HTML y CSS* | *Llenar los campos obligatorios* |


| :three: Seleccionar Banco  | :four: Ingresar con RUT |
| :-- |:--|
| ![](https://i.ibb.co/mCHpBzB9/imagen-33.png)    | ![](https://i.ibb.co/qFXW3Wqq/imagen-4.png)    |
| *Para modo desarrollador seleccionar DemoBank* | *Usar RUT ficticio* |


| :five: Transferencia realizada  | :six: Pago Verificado por Khipu |
| :-- |:--|
| ![](https://i.ibb.co/rnTRZ3J/imagen-55.png)    | ![](https://i.ibb.co/WWJxqKH2/imagen-66.png)  |
| *Tener en cuenta el id de la transacción* | *Corroborar que se valide con el mismo id* |


| :seven: Visualizar Cobro en dashboard   | :eight: Revisar correo del pago |
| :-- |:--|
| ![](https://i.ibb.co/Fq3Pntcp/imagen-77.png)  | ![](https://i.ibb.co/Nns8WW5J/imagen-88.png)    |
| *Bola verde para transacciones exitosas* | *Verificar id de la transacción* |

