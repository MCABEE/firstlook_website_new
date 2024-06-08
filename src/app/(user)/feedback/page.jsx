'use client'
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [base64, setBase64] = useState('');
    const [preview, setPreview] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFile = (file) => {
        const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB in bytes
        if (file.size > maxSizeInBytes) {
            toast.error('The file size exceeds the 2 MB limit. Please select a smaller file.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setBase64(base64String);
            setPreview(reader.result);
        };
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const dropzone = document.getElementById('dropzone-file');
        dropzone.addEventListener('dragover', handleDragOver);
        dropzone.addEventListener('drop', handleDrop);

        return () => {
            dropzone.removeEventListener('dragover', handleDragOver);
            dropzone.removeEventListener('drop', handleDrop);
        };
    }, []);

    const uploadFeedback = async () => {
        try {
            await axios.post('https://testapi.firstlook.pro/data/general/saveFeedback', {
                imgAfterCrop: `data:image/png;base64,${base64}`,
                email,
                name,
                phone,
                subject,
                message
            });
            toast.success('Thank you for your feedback, we appreciate your input and will use it to improve our services.');
        } catch (error) {
            toast.error('Please try again later!');
        }
    };

    return (
        <>
            <div className='font-sans mt-20 md:mt-24 mb-10'>
                <Toaster />
                <div className="flex justify-center items-center">
                    <section className="bg-white px-7 py-12 sm:px-16 sm:py-16 md:px-20 md:py-16 xl:px-28 xl:py-16 h-fit rounded-3xl w-[95%] xl:w-[1150px]">
                        <h1 className="text-xl md:text-[48px] font-semibold">
                            Compose your Feedback
                        </h1>
                        <div className="mt-14">
                            <p className="text-[12px] sm:text-lg">
                                Your email address
                            </p>
                            <input type="text" className="border border-gray-400 rounded-md mt-2 py-1.5 px-2 w-[95%] md:w-[50%]" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mt-8">
                            <p className="text-[12px] sm:text-lg">
                                Your name
                            </p>
                            <input type="text" className="border border-gray-400 rounded-md mt-2 py-1.5 px-2 w-[95%] md:w-[50%]" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mt-8">
                            <p className="text-[12px] sm:text-lg">
                                Registered phone number
                            </p>
                            <input type="text" className="border border-gray-400 rounded-md mt-2 py-1.5 px-2 w-[95%] md:w-[50%]" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="mt-8">
                            <p className="text-[12px] sm:text-lg">
                                I want to communicate you about
                            </p>
                            <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer">
                                <input type="text" placeholder="Select your reason" className="border cursor-pointer border-gray-400 rounded-md mt-2 py-1.5 px-2 w-[95%] md:w-[50%]" value={subject} />
                                <div className="-ml-7 mt-5">
                                    <svg width="15" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0814 10C9.26724 10 8.45304 9.68595 7.83658 9.06949L0.252982 1.4859C-0.0843272 1.14859 -0.0843272 0.590291 0.252982 0.252982C0.590291 -0.0843272 1.1486 -0.0843272 1.4859 0.252982L9.06951 7.83657C9.62781 8.39487 10.5351 8.39487 11.0934 7.83657L18.677 0.252982C19.0143 -0.0843272 19.5726 -0.0843272 19.9099 0.252982C20.2472 0.590291 20.2472 1.14859 19.9099 1.4859L12.3263 9.06949C11.7098 9.68595 10.8956 10 10.0814 10Z" fill="#444444" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {
                            isOpen &&
                                <div className='bg-white border border-[#444444] rounded-xl mt-4 p-4 w-[95%] md:w-[50%]'>
                                    <div className='flex flex-col text-[16px] font-light'>
                                        <p onClick={() => {
                                            setSubject("new account signup");
                                            setIsOpen(false);
                                        }} className='mt-2 cursor-pointer'>
                                            new account signup
                                        </p>
                                        <p onClick={() => {
                                            setSubject("technical support");
                                            setIsOpen(false);
                                        }} className='mt-2 cursor-pointer'>
                                            technical support
                                        </p>
                                        <p onClick={() => {
                                            setSubject("payment issues");
                                            setIsOpen(false);
                                        }} className='mt-2 cursor-pointer'>
                                            payment issues
                                        </p>
                                        <p onClick={() => {
                                            setSubject("feedback");
                                            setIsOpen(false);
                                        }} className='mt-2 cursor-pointer'>
                                            feedback
                                        </p>
                                        <p onClick={() => {
                                            setSubject("business relations");
                                            setIsOpen(false);
                                        }} className='mt-2 cursor-pointer mb-2'>
                                            business relations
                                        </p>
                                    </div>
                                </div>
                        }
                        <div className="mt-8">
                            <p className="text-[12px] sm:text-lg">
                                Write in detail
                            </p>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 mt-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[95%] md:w-[50%]" />
                        </div>
                        <div className="mt-8">
                            <p className="text-[12px] sm:text-lg">
                                Attachments if any (Optional)
                            </p>
                            <div className="flex items-center justify-center w-[95%] md:w-[50%] mt-2.5">
                                <label htmlFor="dropzone-file" id="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        {preview ?
                                            <Image src={preview} alt="feedback image" width={50} height={50} />
                                            :
                                            <>
                                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500">PNG, JPG or JPEG (Max. 2 mb)</p>
                                            </>
                                        }
                                    </div>
                                    <input id="dropzone-file" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button onClick={uploadFeedback} className="bg-[#FC3657] w-[95%] md:w-[50%] flex justify-center items-center text-white py-2 rounded-md">
                                Submit
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Feedback;