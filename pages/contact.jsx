import { useFormik } from "formik";
import Head from "next/head";
import { useEnglish } from "../components/English";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import ReactLoading from 'react-loading';

export default function Contact() {
  const [english, setEnglish] = useEnglish();
  const [isLoading, setIsLoading] = useState(false)

  const ContactUsSchema = Yup.object().shape({
    name: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    message: Yup.string()
      .min(5, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const sendEmail = async (info) => {
    const serviceId = 'service_etxn5b9'
    const templateId = 'template_7d86vul'
    const publicKey = '_DHatQn4i33WKX-Up'

    try
    {
      const respEmail = await emailjs.send(serviceId, templateId, info, publicKey)
      return { respEmail }
    }
    catch(err)
    {
      console.error(err);
      return { respEmail: { status: 400 } }
    }
  }

  const onSubmit = async (values, { resetForm }) => {

      setIsLoading(!isLoading)

      const { respEmail } = await sendEmail(values)

      if ( respEmail.status === 200 )
      {
        toast.success(`${english ? 'Mensaje enviado correctamente' : 'Message sent successfully'}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setIsLoading(false)
        resetForm()
      }
      else
      {
        toast.error(`${english ? 'Mensaje no enviado' : 'Message not sent'}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setIsLoading(false)
      }
    }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactUsSchema,
    onSubmit
  });

  return (
    <div className="flex  flex-col justify-center items-center">
      <Head>
        <title>{english ? "Contacto" : "Contact"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      <h1 className="text-3xl mt-8 mb-4">{english ? "Hablemos" : "Let's talk"}</h1>

      <div className="w-2/4 text-black">
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <input
            placeholder={english ? "Nombre" : "Name"}
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className={`h-10 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 mt-3 px-2 rounded-sm ${
              formik.touched.name && formik.errors.name
                ? "border-2 border-red-400 "
                : ""
            }`}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-400">{formik.errors.name}</div>
          )}

          <input
            placeholder={english ? "Correo electrónico " : "Email"}
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`h-10 outline-none mt-3 px-2  focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-sm ${
              formik.touched.email && formik.errors.email
                ? "border-red-400 border-2"
                : ""
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-400">{formik.errors.email}</div>
          )}

          <textarea
            placeholder={english ? "Mensaje" : "Message"}
            id="message"
            name="message"
            type="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className={`2xl:h-48 h-40 outline-none mt-3 p-2  focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none rounded-sm ${
              formik.touched.message && formik.errors.message
                ? "border-red-400 border-2"
                : ""
            }`}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-400">{formik.errors.message}</div>
          )}

          <button
            type="submit"
            className="mt-3 py-3 px-12 border-2 bg-white/20 border-amber-400 text-amber-400 transition hover:bg-white/40 flex justify-center"
            disabled={isLoading}
          >
            {
              isLoading 
                      ? <ReactLoading type={'spin'} color={'#FBBF24'} height={25} width={25} /> 
                      : english ? "Enviar" : "Send"
            }
          </button>
        </form>
      </div>
    </div>
  );
}
