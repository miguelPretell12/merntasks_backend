import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {
    const {email, token, nombre } = datos
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
    // informacion del email
    const info = await transport.sendMail({
        from:"UpTask - Administrador de Proyecto <cuentas@uptask.com>",
        to:email,
        subject:"Uptask - Comprueba tu cuenta",
        text:"Comprueba tu cuenta en Uptask",
        html: `
            <p>Hola: ${nombre} Comprueba tu cuenta en uptask</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en l siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}


export const emailOlvidePassword = async (datos) => {
    const {email, token, nombre } = datos
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
    // informacion del email
    const info = await transport.sendMail({
        from:"UpTask - Administrador de Proyecto <cuentas@uptask.com>",
        to:email,
        subject:"Uptask - Reestablecer tu password",
        text:"Reestablecer tu password",
        html: `
            <p>Hola: ${nombre} has solicitado reestablecer tu password</p>
            <p>Sigue el siguiente enlace para generar un nuevo password:
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a>
            </p>

            <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
        `
    })
}

