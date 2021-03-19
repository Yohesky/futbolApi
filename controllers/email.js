const { response } = require("express");
const nodemailer = require("nodemailer")

const sendEmail = async (req, res = response) => {
    const template = 
    `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta content="text/html; charset=utf-8" http-equiv="Content-Type"><style type="text/css"></style><meta content="width=device-width, initial-scale=1" name="viewport"><title>Neopolitan Invoice Email</title><!-- Designed by https://github.com/kaytcat --><!-- Robot header image designed by Freepik.com --><style type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Droid+Sans);

  /* Take care of image borders and formatting */

  img {
    max-width: 600px;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
  }

  a {
    text-decoration: none;
    border: 0;
    outline: none;
    color: #bbbbbb;
  }

  a img {
    border: none;
  }

  /* General styling */

  td, h1, h2, h3  {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  td {
    text-align: center;
  }

  body {
    -webkit-font-smoothing:antialiased;
    -webkit-text-size-adjust:none;
    width: 100%;
    height: 100%;
    color: #37302d;
    background: #ffffff;
    font-size: 16px;
  }

   table {
    border-collapse: collapse !important;
  }

  .headline {
    color: #ffffff;
    font-size: 30px;
  }

 .force-full-width {
  width: 100% !important;
 }

 .force-width-80 {
  width: 80% !important;
 }




  </style><style media="screen" type="text/css">
      @media screen {
         /*Thanks Outlook 2013! https://goo.gl/XLxpyl*/
        td, h1, h2, h3 {
          font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
        }
      }
  </style><style media="only screen and (max-width: 480px)" type="text/css">
    /* Mobile styles */
    @media only screen and (max-width: 480px) {

      table[class="w320"] {
        width: 320px !important;
      }

      td[class="mobile-block"] {
        width: 100% !important;
        display: block !important;
      }


    }
  </style></head><body bgcolor="#ffffff" class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
<table align="center" cellpadding="0" cellspacing="0" class="force-full-width" height="100%">
<tbody><tr>
<td align="center" bgcolor="#ffffff" class="" valign="top" width="100%">
<center class="">
<table cellpadding="0" cellspacing="0" class="w320" style="margin: 0 auto;" width="600">
<tbody><tr>
<td align="center" class="" valign="top"><table cellpadding="0" cellspacing="0" class="force-full-width" style="margin: 0 auto;">
<tbody><tr>
<td class="" style="font-size: 30px; text-align:center;"></td>
</tr>
</tbody></table>
<table bgcolor="#008ACE" cellpadding="0" cellspacing="0" class="force-full-width" style="margin: 0 auto;">
<tbody class=""><tr class="">
<td class=""><br>
<br>
<a class="" data-click-track-id="8768" href="http://www.zenmate.com" target="_blank"><img class="" height="70" src="https://d1pgqke3goo8l6.cloudfront.net/onWRO1YrQiiubAgCRwAx_white_logo.png" width="70"></a>
<br>
<br></td>
</tr>
<tr class=""><td class="headline"><b class="headline">Futbol</b> App Notification Login</td></tr>
<tr>
<td>
<center class="">
<table cellpadding="0" cellspacing="0" style="margin: 0 auto;" width="70%">
<tbody><tr>
<td class="" style="color:#A0D8F4;"><br>
New Login
                            <br>
<br></td>
</tr>
</tbody></table>
</center>
</td>
</tr>
<tr>
<td class=""></td>
</tr></tbody></table>
<table bgcolor="#f5774e" cellpadding="0" cellspacing="0" class="force-full-width" style="margin: 0 auto;">
<tbody><tr class=""><td class="" style="background-color:#ffffff; border-left:solid; border-right:solid; border-color:#008ACE; color:#008ACE;">
<center class=""><br><br>
<table cellpadding="0" cellspacing="0" class="force-width-80" style="margin:0 auto;">
<tbody class="">
<tr class="">
<td class="" style="text-align:left; color:#4A4A4A;">
<span class="" style="color:#BABABA; font-weight:lighter;">Account</span>
</td>
<td class="" style="text-align:right; vertical-align:top; color:#4A4A4A;">
<span class="" style="color:#4a4a4a; font-weight:normal; text-align:right;">${req.body.name}</span>
</td>
</tr>
<tr class="">
<td class="" style="text-align:left; color:#4A4A4A;">
<br>
<span class="" style="color:#BABABA; font-weight:lighter;">Date</span>
</td>
<td class="" style="text-align:right; vertical-align:top; color:#4A4A4A;">
<br>
<span class="" style="color:#4a4a4a; font-weight:normal; text-align:right;">${req.body.updated_at}</span></td>
</tr>
<tr class="">
<td class="" style="text-align:left; color:#4A4A4A;">
<br>
<span class="" style="color:#BABABA; font-weight:lighter;">Email</span>
</td>
<td class="" style="text-align:right; vertical-align:top; color:#4A4A4A;">
<br>
<span class="" style="color:#4a4a4a; font-weight:normal; text-align:right;">${req.body.email}</span>
</td>
</tr>

</tbody></table>
<table cellpadding="0" cellspacing="0" class="force-width-80" style="margin:0 auto;"><tbody class=""><tr class=""><td class="mobile-block"></td>
<td class="mobile-block"></td>
<td class="mobile-block"></td></tr>
</tbody></table>
<table cellpadding="0" cellspacing="0" class="force-width-80" style="margin: 0 auto;">
<tbody><tr class=""></tr>
</tbody></table>
<table cellpadding="0" cellspacing="0" class="force-width-80" style="margin: 0 auto;">
<tbody><tr class="">
</tr>
</tbody></table></center>
</td></tr>
</tbody></table>
</body></html>
    `

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    
    const info = await transporter.sendMail({
        from: "Remitente",
        to: 'yoheskyjpp@gmail.com',
        subject: 'Futbol App',
        html: template
    })

    console.log('msg send', info.messageId)
    return res.json({
        ok:true,
        status: 200
    })

    // transporter.sendMail(mailOptions, (error,info) => {
    //     error ? res.status(500).send(error.message) : res.status(200).jsonp(req.body)
    // })
}

module.exports = {
    sendEmail
}