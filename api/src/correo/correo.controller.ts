import { Controller, Post, Body } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Controller('correo')
export class CorreoController {

    @Post('enviar')
    async enviarCorreo(@Body() body: { [key: string]: string }): Promise<string> {
        const destinatario = Object.keys(body)[0];
        const mensaje = "Estimado Usuario,\n\n¡Bienvenido a utcanicos! \n\n Nos complace informarte que tu cuenta ha sido creada exitosamente. Ahora tienes acceso a todas las increíbles funciones y servicios que ofrecemos.";
        const asunto = "¡Bienvenido! Tu cuenta ha sido creada exitosamente"

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'carlosyahir1819@gmail.com',
                    pass: 'kgjj doyg saks toyh ',
                },
            });

            const mailOptions = {
                from: 'carlosyahir1819@gmail.com',
                to: destinatario,
                subject: asunto,
                text: mensaje,
            };

            await transporter.sendMail(mailOptions);
            console.log("correo enviado")
            return 'Correo enviado con éxito';
        } catch (error) {
            console.error(`Error al enviar el correo: ${error.message}`);
            throw new Error('Error al enviar el correo');
        }
    }
}