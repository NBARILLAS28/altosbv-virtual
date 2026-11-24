# altosbv-virtual

Tour virtual 3D de **Altos de Buena Vista** (CEI Corporation, Chimaltenango). Es una app web instalable (PWA) para celular y laptop, con acceso privado por aprobación del administrador.

## Qué incluye
- **Tour 3D** con terreno según las cotas del plano oficial (+96 a +40 m), 56 lotes clicables, modos Orbitar, Recorrer (WASD o joystick) y Recorrido automático, control de luz por hora, números de lote y casa ilustrativa.
- **Ficha de lote**: tipo, medidas, área (m² y varas²), nivel, estado, precio y botón de WhatsApp.
- **Control de acceso**: el cliente ve el logo de CEI y el botón *Solicitar acceso*. El administrador recibe un aviso en su teléfono y aprueba o rechaza (con duración: 24 h, 7 días, 30 días o sin límite).
- **Panel de administrador** (`admin.html`): solicitudes, accesos activos con opción de revocar, y edición de estado y precio de cada lote.
- **PWA**: se instala en la pantalla de inicio y abre a pantalla completa.

## Publicar en GitHub Pages
1. Settings > Pages > Source: `main`, carpeta `/ (root)`.
2. Tu tour queda en `https://nbarillas28.github.io/altosbv-virtual/` y el panel en `.../admin.html`.

Sin más pasos, el tour funciona en **modo abierto** (sin control de acceso). Para activar el acceso privado, sigue la sección siguiente.

## Activar el acceso privado (Cloudflare Worker, gratis)
1. En Cloudflare: **Workers & Pages > KV > Create namespace**, nombre `altosbv-acceso`.
2. **Workers & Pages > Create > Worker**, nombre `altosbv-acceso`. Pega el contenido de `worker/worker.js` y despliega.
3. En el Worker: **Settings > Bindings > Add > KV namespace**, variable `ACCESS`, elige el namespace creado.
4. **Settings > Variables and Secrets**: agrega
   - `ADMIN_PASSWORD`: la contraseña del panel (larga y propia).
   - `NTFY_TOPIC`: un nombre largo y secreto, por ejemplo `cei-altosbv-x7k29q4m`.
   - `ALLOWED_ORIGIN` (opcional): `https://nbarillas28.github.io`.
5. Copia la dirección del Worker (`https://altosbv-acceso.TU-USUARIO.workers.dev`) y pégala en `config.js` como `apiUrl`. Guarda el cambio en GitHub.

## Recibir avisos en el teléfono (administrador)
1. Instala la app gratuita **ntfy** (iPhone o Android).
2. Suscríbete al mismo tema que pusiste en `NTFY_TOPIC`.
3. Cada solicitud llega como notificación con los botones **Aprobar 7d** y **Rechazar**. También puedes decidir desde `admin.html`.

## Instalar como app
- **iPhone**: abrir en Safari > Compartir > *Añadir a pantalla de inicio*.
- **Android / laptop (Chrome o Edge)**: menú > *Instalar app*.

## Estados y precios de lotes
Desde `admin.html` > pestaña **Lotes**. Con el acceso privado activo se guardan en el Worker; en modo abierto se leen de `data/lotes.json` con el formato `{"L-1": {"estado": "vendido", "precio": 150000}}`.

## Nota de seguridad
Con el Worker activo, los datos del tour solo se entregan con un acceso aprobado. Una persona con acceso aprobado puede compartir lo que ve (capturas), y los accesos se pueden revocar en cualquier momento.

## Origen de los datos
Perímetro, tipos, medidas y niveles tomados del plano oficial (Planta de conjunto, 27/10/2026, 17,793.27 m²). Los árboles, luminarias, casa ilustrativa y texturas son representaciones. Los lotes L-24 a L-27 y L-32 a L-35 usan 7 × 16 m.
