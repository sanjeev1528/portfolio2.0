import {React,useState} from 'react'
import emailjs from '@emailjs/browser'
import { Element } from 'react-scroll';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message:''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const dataTosend = {
            from_name:formData.name,
            email:formData.email,
            message:formData.message,
            reply_to:"sanjeevcsevec@gmail.com"
        }
    
        const submit = (e) => {
            e.preventDefault();
            console.log('Form Data:', formData);

            emailjs.send('service_n5kicxa', 'template_84autmf', dataTosend, 'GqCiVqUZmi6xSg8jq').then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                  console.log('FAILED...', error);
                },
              );
    
        }


      

  return (
    <>
    <Element className="bg-white dark:bg-gray-900" name='contact-section'>
    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white text-center m-auto">Contact me</h1>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh_-_155px)] lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-200 rounded-md">
               
                <form className="space-y-1 md:space-y-1" action="#" onSubmit={submit}>
                <div>
                        <label for="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="text" name="name" id="name" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sanjeev kumar" required="" onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">your message</label>
                        <textarea type="text" name="message" id="message" placeholder="Type here" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg mb-2 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-green-300 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                   
                </form>
            </div>
        </div>
    </div>
  </Element>
  
  </>
)
}

export default Contact