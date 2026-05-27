import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Manejar preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    // Verificar que la API key existe
    const apiKey = process.env['RESEND_API_KEY'];
    if (!apiKey) {
      console.error('RESEND_API_KEY no está configurada');
      return res.status(500).json({ 
        message: 'Error de configuración del servidor',
        error: 'API key no configurada'
      });
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, eventType, eventDate, guestCount, message } = req.body;

    // Validación básica
    if (!name || !email || !phone || !eventType || !message) {
      return res.status(400).json({ 
        message: 'Faltan campos requeridos',
        error: true 
      });
    }

    // Limpiar el número de teléfono para WhatsApp (quitar espacios, guiones, etc.)
    const whatsappNumber = phone.replace(/[\s\-\(\)]/g, '');
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    // Enviar email usando Resend
    const data = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>',
      to: ['deliciasdeltandileventos2@gmail.com'],
      subject: `🎉 Nueva consulta de ${eventType} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nueva Consulta - Delicias del Tandil</title>
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #101010;
                background-color: #f5f5f5;
                padding: 20px;
              }
              
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              }
              
              .header {
                background: linear-gradient(135deg, #D6A350 0%, #F0E1BD 100%);
                padding: 40px 30px;
                text-align: center;
                position: relative;
              }
              
              .header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.2)"/></svg>') repeat;
                opacity: 0.3;
              }
              
              .logo {
                font-size: 48px;
                margin-bottom: 10px;
              }
              
              .header-title {
                color: #ffffff;
                font-size: 28px;
                font-weight: 700;
                margin: 0;
                position: relative;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              
              .header-subtitle {
                color: rgba(255, 255, 255, 0.95);
                font-size: 16px;
                margin-top: 8px;
                position: relative;
              }
              
              .content {
                padding: 40px 30px;
              }
              
              .client-badge {
                display: inline-block;
                background: linear-gradient(135deg, #D6A350 0%, #F0E1BD 100%);
                color: #ffffff;
                padding: 8px 20px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 25px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              
              .info-card {
                background-color: #FAFAF8;
                border-radius: 12px;
                padding: 25px;
                margin-bottom: 20px;
                border-left: 4px solid #D6A350;
              }
              
              .info-row {
                display: flex;
                margin-bottom: 18px;
                align-items: flex-start;
              }
              
              .info-row:last-child {
                margin-bottom: 0;
              }
              
              .info-icon {
                font-size: 24px;
                width: 40px;
                min-width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #D6A350 0%, #F0E1BD 100%);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
              }
              
              .info-content {
                flex: 1;
              }
              
              .info-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #5a5a5a;
                font-weight: 600;
                margin-bottom: 4px;
              }
              
              .info-value {
                font-size: 16px;
                color: #101010;
                font-weight: 500;
                word-wrap: break-word;
              }
              
              .info-value a {
                color: #D6A350;
                text-decoration: none;
              }
              
              .info-value a:hover {
                text-decoration: underline;
              }
              
              .message-box {
                background: linear-gradient(135deg, #fff9f0 0%, #ffffff 100%);
                border: 2px solid #F0E1BD;
                border-radius: 12px;
                padding: 20px;
                margin-top: 20px;
              }
              
              .message-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #D6A350;
                font-weight: 700;
                margin-bottom: 10px;
              }
              
              .message-content {
                font-size: 15px;
                color: #101010;
                line-height: 1.7;
              }
              
              .action-section {
                background: linear-gradient(135deg, #F0E1BD 0%, #ffffff 100%);
                padding: 30px;
                text-align: center;
                margin-top: 30px;
                border-radius: 12px;
              }
              
              .action-title {
                font-size: 18px;
                font-weight: 700;
                color: #101010;
                margin-bottom: 15px;
              }
              
              .whatsapp-button {
                display: inline-block;
                background: #25D366;
                color: #ffffff !important;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 50px;
                font-weight: 600;
                font-size: 16px;
                margin: 10px 0;
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
                transition: all 0.3s ease;
              }
              
              .whatsapp-button:hover {
                background: #128C7E;
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
              }
              
              .whatsapp-icon {
                font-size: 20px;
                vertical-align: middle;
                margin-right: 8px;
              }
              
              .footer {
                background-color: #101010;
                color: #ffffff;
                padding: 30px;
                text-align: center;
              }
              
              .footer-note {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.8);
                margin-bottom: 15px;
              }
              
              .footer-brand {
                font-size: 20px;
                font-weight: 700;
                color: #D6A350;
                margin-bottom: 5px;
              }
              
              .footer-tagline {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.6);
              }
              
              .divider {
                height: 2px;
                background: linear-gradient(90deg, transparent 0%, #D6A350 50%, transparent 100%);
                margin: 25px 0;
              }
              
              .priority-badge {
                display: inline-block;
                background: #ff4757;
                color: #ffffff;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 15px;
              }
              
              @media only screen and (max-width: 600px) {
                .email-container {
                  border-radius: 0;
                }
                
                .content {
                  padding: 30px 20px;
                }
                
                .header {
                  padding: 30px 20px;
                }
                
                .header-title {
                  font-size: 24px;
                }
                
                .info-row {
                  flex-direction: column;
                }
                
                .info-icon {
                  margin-bottom: 10px;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <!-- Header -->
              <div class="header">
                <div class="logo">🎉</div>
                <h1 class="header-title">Nueva Consulta de Evento</h1>
                <p class="header-subtitle">Delicias del Tandil</p>
              </div>
              
              <!-- Content -->
              <div class="content">
                <div class="priority-badge">⚡ Requiere Atención</div>
                <div class="client-badge">Nuevo Cliente Potencial</div>
                
                <!-- Info Card -->
                <div class="info-card">
                  <div class="info-row">
                    <div class="info-icon">👤</div>
                    <div class="info-content">
                      <div class="info-label">Nombre del Cliente</div>
                      <div class="info-value">${name}</div>
                    </div>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <div class="info-row">
                    <div class="info-icon">📧</div>
                    <div class="info-content">
                      <div class="info-label">Email</div>
                      <div class="info-value">
                        <a href="mailto:${email}">${email}</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <div class="info-row">
                    <div class="info-icon">📱</div>
                    <div class="info-content">
                      <div class="info-label">Teléfono</div>
                      <div class="info-value">
                        <a href="tel:${phone}">${phone}</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <div class="info-row">
                    <div class="info-icon">🎊</div>
                    <div class="info-content">
                      <div class="info-label">Tipo de Evento</div>
                      <div class="info-value">${eventType}</div>
                    </div>
                  </div>
                  
                  ${eventDate ? `
                  <div class="divider"></div>
                  <div class="info-row">
                    <div class="info-icon">📅</div>
                    <div class="info-content">
                      <div class="info-label">Fecha del Evento</div>
                      <div class="info-value">${new Date(eventDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                  </div>
                  ` : ''}
                  
                  ${guestCount ? `
                  <div class="divider"></div>
                  <div class="info-row">
                    <div class="info-icon">👥</div>
                    <div class="info-content">
                      <div class="info-label">Cantidad de Invitados</div>
                      <div class="info-value">${guestCount} personas</div>
                    </div>
                  </div>
                  ` : ''}
                </div>
                
                <!-- Message Box -->
                <div class="message-box">
                  <div class="message-label">💬 Mensaje del Cliente</div>
                  <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <!-- Action Section -->
                <div class="action-section">
                  <div class="action-title">¡Contacta al cliente ahora!</div>
                  <a href="${whatsappLink}" class="whatsapp-button">
                    <span class="whatsapp-icon">💬</span>
                    Abrir WhatsApp
                  </a>
                  <p style="font-size: 13px; color: #5a5a5a; margin-top: 12px;">
                    Haz clic en el botón para abrir WhatsApp y responder inmediatamente
                  </p>
                </div>
              </div>
              
              <!-- Footer -->
              <div class="footer">
                <div class="footer-note">
                  💡 <strong>Recordatorio:</strong> Responde lo antes posible para asegurar este evento
                </div>
                <div class="footer-brand">Delicias del Tandil</div>
                <div class="footer-tagline">Eventos inolvidables</div>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email, // Permite responder directamente al cliente
    });

    console.log('Email enviado exitosamente:', data);

    return res.status(200).json({ 
      message: 'Mensaje enviado exitosamente',
      success: true,
      data: data
    });

  } catch (error: any) {
    console.error('Error detallado:', {
      message: error.message,
      statusCode: error.statusCode,
      name: error.name,
      stack: error.stack
    });
    
    return res.status(500).json({ 
      message: 'Error al enviar el mensaje',
      error: error.message,
      details: error.statusCode ? `Status: ${error.statusCode}` : undefined
    });
  }
}
