# Configuración de Resend para Formulario de Contacto

Este documento explica cómo configurar Resend para recibir emails del formulario de contacto en **deliciasdeltandileventos2@gmail.com**.

## 📋 Requisitos Previos

- Cuenta en [Resend](https://resend.com)
- Cuenta en [Vercel](https://vercel.com) para deployment

## 🔑 Paso 1: Obtener API Key de Resend

1. Ve a [resend.com](https://resend.com) e inicia sesión
2. Navega a la sección **API Keys** en el dashboard
3. Haz clic en **Create API Key**
4. Dale un nombre descriptivo (ej: "Delicias del Tandil Production")
5. Selecciona permisos de **Sending access**
6. Copia la API Key (solo se muestra una vez)

## ⚙️ Paso 2: Configurar Variables de Entorno

### Para desarrollo local:

1. Abre el archivo `.env` en la raíz del proyecto
2. Pega tu API Key de Resend:
   ```
   RESEND_API_KEY=re_tu_api_key_aqui
   ```
3. Guarda el archivo

### Para producción (Vercel):

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Navega a **Settings** > **Environment Variables**
3. Agrega una nueva variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Tu API Key de Resend
   - **Environment**: Production, Preview, Development (todas)
4. Guarda los cambios

## 🚀 Paso 3: Deploy en Vercel

### Primera vez:

1. Instala Vercel CLI (opcional):
   ```bash
   npm install -g vercel
   ```

2. Desde la terminal en tu proyecto:
   ```bash
   vercel
   ```

3. Sigue las instrucciones en pantalla

### O desde el dashboard de Vercel:

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa tu repositorio de GitHub/GitLab/Bitbucket
3. Vercel detectará automáticamente Angular
4. No olvides agregar la variable de entorno `RESEND_API_KEY` antes del deploy
5. Haz clic en **Deploy**

## 📧 Configuración del Email Remitente

**IMPORTANTE**: Por defecto, Resend usa `onboarding@resend.dev` como remitente. Para usar tu propio dominio:

1. Ve a **Domains** en el dashboard de Resend
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones
4. Una vez verificado, actualiza el archivo `api/contact.ts`:
   ```typescript
   from: 'Contacto Web <contacto@tudominio.com>'
   ```

## 🧪 Pruebas en Desarrollo Local

Para probar localmente con Vercel Dev:

```bash
npm install -g vercel
vercel dev
```

Esto iniciará un servidor local que simula el entorno de Vercel, incluyendo las serverless functions.

## 📝 Destinos de Email

Los emails se envían a: **deliciasdeltandileventos2@gmail.com**

Para cambiar el destinatario, edita el archivo `api/contact.ts`:

```typescript
to: ['nuevo-email@ejemplo.com']
```

Puedes agregar múltiples destinatarios:

```typescript
to: ['email1@ejemplo.com', 'email2@ejemplo.com']
```

## 🎨 Personalización del Email

El template del email se encuentra en `api/contact.ts`. Puedes personalizar:

- Los estilos CSS en el `<style>` tag
- El contenido HTML
- Los colores de marca
- La estructura del mensaje

## 🔍 Verificación

Después del deploy, puedes probar el formulario:

1. Ve a tu sitio en producción
2. Navega a la página de contacto
3. Llena y envía el formulario
4. Deberías recibir un email en deliciasdeltandileventos2@gmail.com
5. Verifica también los logs en Vercel Dashboard > Functions

## ⚠️ Troubleshooting

### El email no llega:

1. Verifica que la API Key esté configurada correctamente en Vercel
2. Revisa los logs en Vercel Dashboard > Functions > contact
3. Verifica que no haya errores en la consola del navegador
4. Asegúrate de que Resend tenga créditos disponibles

### Error 401 (Unauthorized):

- La API Key es incorrecta o ha expirado
- Regenera la API Key en Resend y actualízala en Vercel

### Error 422 (Unprocessable Entity):

- El formato del email es incorrecto
- Verifica el dominio remitente en Resend

## 📊 Límites de Resend

- **Plan gratuito**: 100 emails/día, 3,000 emails/mes
- Si necesitas más, considera actualizar a un plan de pago

## 🔐 Seguridad

- **NUNCA** subas el archivo `.env` a Git (ya está en `.gitignore`)
- Mantén tu API Key segura y privada
- Rota las API Keys periódicamente
- No compartas las API Keys en screenshots o documentación pública

## 📚 Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [Documentación de Vercel Functions](https://vercel.com/docs/functions)
- [Angular HttpClient](https://angular.io/guide/http)

## ✅ Checklist de Configuración

- [ ] Cuenta creada en Resend
- [ ] API Key obtenida
- [ ] Variable de entorno configurada en `.env`
- [ ] Variable de entorno configurada en Vercel
- [ ] Proyecto deployado en Vercel
- [ ] Formulario probado y funcionando
- [ ] Emails llegando correctamente

---

¿Problemas? Revisa los logs en Vercel Dashboard o contacta al soporte de Resend.
