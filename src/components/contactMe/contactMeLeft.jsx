import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMeLeft = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent!'); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='flex flex-col justify-center items-center gap-4 sm:w-[80%] md:w-2/5' >

      <h2 className='text-darkBrown text-3xl font-bold lg:mt-0 sm:mt-4'>Get in touch</h2>

      <p className='text-lg text-white font-semibold'>{success}</p>

      <form onSubmit={handleSubmit}  ref={form} className='flex flex-col gap-3 sm:w-[100%] md:max-w-[700px]'>

        <input 
            name='name' 
            type="text" 
            placeholder='Your name' 
            required 
            className='text-white p-3 bg-white/10 rounded-lg'
            value={name}
            onChange={handleName}
            />
        <input 
            name='email' 
            type='email' 
            placeholder='Email address' 
            required className='text-white p-3 bg-white/10 rounded-lg'
            value={email}
            onChange={handleEmail}
            />
        <textarea 
            name='message' 
            placeholder='Message' 
            className='text-white p-3 bg-white/10 rounded-lg'
            value={message}
            onChange={handleMessage}
            />
        <button 
            className='text-white p-3 bg-blue rounded-lg font-semibold hover:bg-cyan/90 transition-all duration-500' >
              Send
        </button>
      
      </form>

    </div>
  )
}

export default ContactMeLeft
