'use client'
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const PrivacyPolicyPage = () => {
    const [list, setList] = useState(false)
    return (
        <>
            <Navbar fontcolor='black' />
            <div className='font-sans mt-20 md:mt-24 mb-10'>
                <div className="flex justify-center items-center">
                    <section className="bg-white px-7 py-12 sm:px-16 sm:py-16 md:px-20 md:py-16 xl:px-28 xl:py-16 h-fit rounded-3xl w-[95%] xl:w-[1150px]">
                        <div className='lg:block hidden'>
                            <div className='flex md:space-x-6 lg:space-x-12 xl:space-x-16 text-[21px] font-light'>
                                <Link href='/membershippolicy' className='cursor-pointer'>
                                    Membership Policy
                                </Link>
                                <Link href='/termsofuse' className='cursor-pointer'>
                                    Terms of use
                                </Link>
                                <Link href='/privacypolicy' className='font-semibold border-b-2 border-[#FC3657] cursor-pointer'>
                                    Privacy Policy
                                </Link>
                                <Link href='/refundpolicy' className='cursor-pointer'>
                                    Refund & Cancellation Policy
                                </Link>
                            </div>
                        </div>

                        <div className='lg:hidden block'>
                            <div onClick={() => list ? setList(false) : setList(true)} className='flex space-x-2 text-[#444444]'>
                                <p className='font-semibold border-b sm:text-[21px] border-black'>
                                    Privacy Policy
                                </p>
                                <div className='flex items-center'>
                                    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.474469 0H6.57705C6.99922 0 7.21031 0.509932 6.91147 0.808776L3.86137 3.86125C3.67637 4.04625 3.37515 4.04625 3.19015 3.86125L0.140049 0.808776C-0.158795 0.509932 0.052293 0 0.474469 0Z" fill="black" />
                                    </svg>
                                </div>
                            </div>

                            {
                                list ?
                                    <div className='bg-white border border-[#444444] rounded-xl mt-4 p-4'>
                                        <div className='flex flex-col text-[16px] font-light'>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='mt-2'>
                                                <Link href='/membershippolicy'>
                                                    Membership Policy
                                                </Link>
                                            </h1>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='mt-2'>
                                                <Link href='/termsofuse'>
                                                    Terms of use
                                                </Link>
                                            </h1>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='font-semibold mt-2'>
                                                <Link href='/privacypolicy'>
                                                    Privacy Policy
                                                </Link>
                                            </h1>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='mt-2'>
                                                <Link href='/refundpolicy'>
                                                    Refund & Cancellation Policy
                                                </Link>
                                            </h1>
                                        </div>
                                    </div> : ''
                            }

                        </div>

                        <div className='text-[#444444]'>
                            <p className={list ? 'mt-8 sm:text-[21px] font-light' : 'mt-10 sm:mt-10 lg:mt-16 sm:text-[21px] font-light'}>
                                Effective from: 2024 April 1
                            </p>
                            <p className="font-semibold text-[24px] sm:text-[54px] mt-3">
                                PRIVACY POLICY
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-4">
                                Introduction
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                www.firstlook.pro (&quot;Website&quot;) and Firstlook (&quot;Mobile App&quot;) are social applications that
                                helps singles to find their life partner. This privacy statement is common for both our
                                website and mobile application. Since we are strongly committed to your right to
                                privacy, we have drawn out a privacy statement with regard to the information we
                                collect from you. You acknowledge that you are disclosing information voluntarily. By
                                accessing / using the Website / Mobile Apps and / or by providing your information,
                                you consent to the collection and use of the information you disclose on the Website
                                / Mobile App in accordance with this Privacy Policy. If you do not agree for use of
                                your information, please do not use or access this Website / Mobile App.
                            </p>

                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                What information you need to give in to use this Website / Mobile App?
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                The information we gather from members who register / signup for the various
                                services our Website / Mobile App offers includes, but may not be limited to, photos
                                and video reels of the user, any govt authorized id proof, mobile number, full name,
                                date of birth, educational qualifications, occupation details, residential address,
                                zip/pin code, native place, working location, habits, hobbies, physical appearance
                                information, partner preferences and personal interests.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                User activity
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We collect information about your activity on our services, such as date and time you
                                logged in, features you’ve been using, searches, clicks, pages and profiles visited by
                                you, your interaction with other users including chat messages exchanged.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We use a secure server for debit or credit card transactions to protect the card
                                information of our users and we do not use Cookies to store the card information. we
                                strictly against the auto payment debiting system. so, we never store your card
                                information’s and do not charge without your permission. Cookies are small files
                                placed on your hard drive that will assist us in providing our services. You may also
                                encounter Cookies or identical/related devices on certain pages of the Website /
                                Mobile Apps that are placed by third parties. We do not control the use of cookies by
                                third parties.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                If you establish a credit account with us to pay the fees we charge, some additional
                                information, including a billing address, a credit/debit card number and a credit/debit
                                card expiration date is collected.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                The user information we collect depends on the context of your interactions with us
                                and the Website or Mobile App, the choices you make and the products and features
                                you use. The User Information is used for authentication and account access. If a
                                user register’s using social networking platforms such as Facebook, Google,
                                LinkedIn and others we may collect personal data you choose to allow us to access
                                through their APIs. Currently we are not providing login with social media platforms.
                                When the user accesses our website or Mobile App, data relating to device ID, log
                                files, Geographic Location, device Information / specification are also collected
                                automatically.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We may use also analysis your personal information, search behaviour, interests,
                                usage trends to evaluate and improve our Website / Mobile App features, marketing
                                research, and preventing of frauds. In our efforts to continually improve our product
                                and service offerings, we collect and analyse demographic and profile data about our
                                user’s activity on our Website / Mobile App. We identify and use your IP address to
                                help diagnose problems with our server, and to administer our Website / Mobile App.
                                Your IP address is also used to help identify you and to gather broad demographic
                                information.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                How the Website / Mobile App uses the information it collects / tracks?
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                www.firstlook.pro / Firstlook Android / IOS Mobile app collects information for data
                                analysis, identifying usage trends, determining the effectiveness of our promotional
                                campaigns and to evaluate and improve our Websites / Mobile App, products, and
                                services, marketing research from our users primarily to ensure that we are able to
                                fulfil your requirements and to deliver Personalised experience.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Data Collection and Usage
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                At &#39;Firstlook&#39;, we prioritize your privacy while striving to enhance your matchmaking
                                experience. Here&#39;s how we handle the information you provide and share with
                                others:
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Sign-up Information: During sign-up, we collect your mobile number for verification
                                via OTP (One-Time Password). This ensures the authenticity of your account.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Personal Information: We gather additional personal details such as education, job,
                                current location, and native place to facilitate better match filtering, ensuring you
                                connect with individuals who align with your preferences and interests.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Data Sharing: We only share your collected data with registered users within the app
                                interface. We strictly prohibit sharing this data on any third-party app or website.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Sensitive Information Protection: Your address, family details, and contact
                                information (such as email and mobile number) are never shared with other users
                                under any circumstances.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Photos and Video Reels: You have the freedom to upload photos and video reels
                                without limitations. This feature is designed to allow you to make a compelling first
                                impression on your profile.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Sharing Information with Others: To enhance matchmaking, we share certain
                                personal details like gender, age, education, job, location, and native place with other
                                users. Additionally, we share photos and videos to help foster connections. However,
                                we never disclose sensitive information such as your address or contact details like
                                email or phone number to any other users.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                User Control: You have full control over the information you share. Whether it&#39;s via
                                your profile or through chat, the decision to share additional details with others is
                                entirely yours. We entrust you with the responsibility of managing the dissemination
                                of your personal data.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                At &#39;Firstlook&#39;, we&#39;re committed to maintaining the highest standards of privacy and
                                security. If you have any concerns or questions about our privacy practices, please
                                don&#39;t hesitate to reach out to us.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding photos and videos
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                You can add photos and videos without limits in your profile. This is intended to
                                create a better first impression. So, it would be better if you can add latest and high-
                                quality images with proper screen resolution.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Try to add full size photos and close-ups. Far and faded images, group photos
                                (except family), unclear profile photos, low quality photos, photos with water marks
                                and writings, face covered by mask, helmet etc are not allowed. You must add at-
                                least three photos. You don’t have any limits to add photos. We will not approve
                                profiles without photos and such profiles will not be listed in search results.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                You can add photos without limits to your profile, intended to create a better first
                                impression. However, these photos cannot be copied, downloaded, or even captured
                                via screenshots.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                At &#39;Firstlook&#39;, we value your privacy and are committed to providing a safe and
                                enjoyable experience for all users. Here&#39;s how we handle video reels and protect
                                your privacy:
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Video profiles are a new and innovative idea to captivate and find a possible life
                                partner. We believe, either than a still photo, a video can communicate more.
                                Through the profile video you can introduce yourself, or you can dance, sing, talk
                                something to your listeners, or anything you are interested. This will help others to
                                get more attached to you. Although this is not mandatory, adding a video profile will
                                make you stand out among the crowd. You can add a ‘One Minute’ (Length should
                                be Sixty seconds or less) selfie video or professionally captured video. You can even
                                add BGM to the video to make it more attractive. It is also possible to remove the
                                video instantly whenever you want.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Purpose of Video Reels: We collect video reels from users solely for entertainment
                                purposes and to enhance user profiles. We believe that video reels offer a more
                                dynamic and genuine representation of our users compared to still photos.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                No Download or Copying: We understand the importance of protecting users&#39;
                                content. Therefore, we do not provide any option for downloading or copying video
                                reels. Opposite users or matches can only watch the video reel within the app; they
                                cannot download or copy it in any way.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                User Control: Users have full control over the content of their video reels. They can
                                choose to upload, edit, or remove their video reels at any time through their profile
                                settings.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Additional Information: If a user finds a video reel attractive and wishes to learn more
                                about the user, they can navigate to the user&#39;s profile for additional information.
                                However, they cannot download or copy the video reel.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Data Protection: We are committed to safeguarding your personal data, including
                                photos and video reels. We employ industry-standard security measures to protect
                                against unauthorized access, alteration, disclosure, or destruction of your
                                information.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We will not allow nude or morally questionable photos and videos. Such contents will
                                be removed without any prior warning. If anyone repeats such behavior their profiles
                                will be removed.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                When a user deletes their account, we completely remove all data, including login
                                details, personal information, photos, and videos from our server. We never retain
                                this data for future use.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Data Privacy
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We collect your personal information’s, interests and choices, hobbies, academic,
                                occupation, and family details, concepts and preferences about life partners,
                                photographs via this application during the period of registration and between the
                                regular uses. The entire data we collect from you is only used for data analysis to
                                finding a right match for you.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Also, we collect your current location status to run the nearby feature in our app. This
                                feature will help you to find the matches nearby your location.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We will not share any of your information with any other entity outside of Firstlook
                                website and mobile app, for advertising, marketing or other data analysis purposes.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                The moment you terminate your account from this application, all information about
                                you will be removed automatically from our database. We do not keep any
                                information for future in any reason.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                For European Union Members (EU)
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                If you are located in the EU, you will be asked to provide consent to the collection,
                                processing, and sharing of your personal information. Personal information means
                                any information related to an identified or identifiable natural person. You have the
                                right to share and access your personal information and right to withdraw consent for
                                sharing your personal information at any point of time and right to erase your
                                personal information subject to applicable laws. You can withdraw your consent
                                provided by contacting us. Your personal information may be stored in databases
                                located outside of the EU including in India and USA. Where we transfer personal
                                data outside of EU, we either transfer personal information to countries that provide
                                an adequate level of protection or we have appropriate safeguards in place. We may
                                require proof of or need to verify your identity before we can give effect to these
                                rights. To request to review, update, or delete your personal information, please
                                submit a request form by sending an email to support@firstlook.pro. We may share
                                your information with third parties who are an anti-fraud solution provider(s) located
                                in USA. They help us to ensure we keep you safe from scammers and fraudster.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                With whom the website / Mobile App share the information it collects/tracks?
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We may share such identifiable information with our associates/affiliates/subsidiaries
                                and such associates/affiliates/subsidiaries may market to you as a result of such
                                sharing. Any information you give us is held with the utmost care and security. We
                                are also bound to cooperate fully should a situation arise where we are required by
                                law or legal process to provide information about a customer/visitor.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Where required or permitted by law, information may be provided to others, such as
                                regulators and law enforcement agencies or to protect the rights, property or
                                personal safety of other members or the general public. We may voluntarily share
                                your information with law enforcement agencies / Gateway service providers / anti-
                                fraud solution provider(s) if we feel that the transaction is of suspicious nature.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                From time to time, we may consider corporate transactions such as a merger,
                                acquisition, reorganization, asset sale, or similar. In these instances, we may transfer
                                or allow access to information to enable the assessment and undertaking of that
                                transaction. If we buy or sell any business or assets, personal information may be
                                transferred to third parties involved in the transaction.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                If our Website / Mobile App links to other website’s / Mobile Apps may collect
                                personally identifiable information about you. We are not responsible for the privacy
                                policy or the contents of those linked website’s / mobile apps.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                How Long Do We Keep Your Information?
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                As stipulated in the Privacy Policy we will retain the information we collect from users
                                under the following circumstances:
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                For as long as the users subscribe to our services to meet their suitable purpose(s)
                                for which it was collected, for the sake of enforcing agreements, for performing
                                audits, for resolving any form of disputes, for establishing legal defences, for
                                pursuing legitimate businesses and to comply with the relevant applicable laws.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                What are the Security Precautions in respect of your personal information?
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We aim to protect your personal information through a system of organizational and
                                technical security measures. We have implemented appropriate internal control
                                measures designed to protect the security of any personal information we process.
                                However, please also remember that we cannot guarantee that the internet itself is
                                100% secure. Once your information is in our possession, we adhere to security
                                guidelines protecting it against unauthorised access.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Change of Privacy Policy
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We may change this Privacy Policy from time to time without any notice to you.
                                However, changes will be updated in the Privacy Policy page.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                How to address your Grievance?
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                You can write us to: The Grievance / Customer support Officer; Address; Firstlook,
                                c/o. MCABEE, 715A, Spencer Plaza, Mount Road, Anna Salai, Chennai – 600 002.
                                E-mail: complaints@firstlook.pro
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                The Grievance / Customer Support officer shall be available on phone between 10
                                am to 6 pm IST from Monday to Saturday excluding Public Holidays in India. You can
                                call them from India directly through our Toll-Free number. If you are from outside
                                India, you can write a mail to the support officer.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                The Grievance / Customer Support officer is appointed as per Section 5 (9) of the
                                Information Technology ( Reasonable Security &amp; Procedures and Sensitive Personal
                                data or Information ) Rule, 2011.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                For More information, please write to us at <span className='text-[#FC3657] font-semibold'>support@firstlook.pro</span>
                            </p>
                        </div>

                        <div className='mt-5 sm:block hidden'>
                            <svg width="105" height="19" viewBox="0 0 105 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5459 18H0.865234V5.15039H8.23047V7.38281H3.5459V10.6963H7.90527V12.9199H3.5459V18ZM10.7441 18V5.15039H13.4688V18H10.7441ZM20.4473 5.15039C21.6133 5.15039 22.5742 5.29102 23.3301 5.57227C24.0918 5.85352 24.6572 6.27832 25.0264 6.84668C25.3955 7.41504 25.5801 8.13281 25.5801 9C25.5801 9.58594 25.4688 10.0986 25.2461 10.5381C25.0234 10.9775 24.7305 11.3496 24.3672 11.6543C24.0039 11.959 23.6113 12.208 23.1895 12.4014L26.9688 18H23.9453L20.8779 13.0693H19.4277V18H16.7031V5.15039H20.4473ZM20.2539 7.38281H19.4277V10.8545H20.3066C21.209 10.8545 21.8535 10.7051 22.2402 10.4062C22.6328 10.1016 22.8291 9.65625 22.8291 9.07031C22.8291 8.46094 22.6182 8.02734 22.1963 7.76953C21.7803 7.51172 21.1328 7.38281 20.2539 7.38281ZM36.1709 14.4316C36.1709 15.1934 35.9863 15.8555 35.6172 16.418C35.248 16.9805 34.709 17.4141 34 17.7188C33.2969 18.0234 32.4414 18.1758 31.4336 18.1758C30.9883 18.1758 30.5518 18.1465 30.124 18.0879C29.7021 18.0293 29.2949 17.9443 28.9023 17.833C28.5156 17.7158 28.1465 17.5723 27.7949 17.4023V14.8711C28.4043 15.1406 29.0371 15.3838 29.6934 15.6006C30.3496 15.8174 31 15.9258 31.6445 15.9258C32.0898 15.9258 32.4473 15.8672 32.7168 15.75C32.9922 15.6328 33.1914 15.4717 33.3145 15.2666C33.4375 15.0615 33.499 14.8271 33.499 14.5635C33.499 14.2412 33.3906 13.9658 33.1738 13.7373C32.957 13.5088 32.6582 13.2949 32.2773 13.0957C31.9023 12.8965 31.4775 12.6826 31.0029 12.4541C30.7041 12.3135 30.3789 12.1436 30.0273 11.9443C29.6758 11.7393 29.3418 11.4902 29.0254 11.1973C28.709 10.9043 28.4482 10.5498 28.2432 10.1338C28.0439 9.71191 27.9443 9.20801 27.9443 8.62207C27.9443 7.85449 28.1201 7.19824 28.4717 6.65332C28.8232 6.1084 29.3242 5.69238 29.9746 5.40527C30.6309 5.1123 31.4043 4.96582 32.2949 4.96582C32.9629 4.96582 33.5986 5.04492 34.2021 5.20312C34.8115 5.35547 35.4473 5.57813 36.1094 5.87109L35.2305 7.98926C34.6387 7.74902 34.1084 7.56445 33.6396 7.43555C33.1709 7.30078 32.6934 7.2334 32.207 7.2334C31.8672 7.2334 31.5771 7.28906 31.3369 7.40039C31.0967 7.50586 30.915 7.6582 30.792 7.85742C30.6689 8.05078 30.6074 8.27637 30.6074 8.53418C30.6074 8.83887 30.6953 9.09668 30.8711 9.30762C31.0527 9.5127 31.3223 9.71191 31.6797 9.90527C32.043 10.0986 32.4941 10.3242 33.0332 10.582C33.6895 10.8926 34.249 11.2178 34.7119 11.5576C35.1807 11.8916 35.541 12.2871 35.793 12.7441C36.0449 13.1953 36.1709 13.7578 36.1709 14.4316ZM43.457 18H40.7324V7.41797H37.2432V5.15039H46.9463V7.41797H43.457V18Z" fill="#FE1940" />
                                <path d="M49.0645 18V5.15039H50.5586V16.6641H56.2627V18H49.0645ZM69.6133 11.5576C69.6133 12.5479 69.4873 13.4502 69.2354 14.2646C68.9834 15.0732 68.6084 15.7705 68.1104 16.3564C67.6182 16.9365 67.0059 17.3848 66.2734 17.7012C65.541 18.0176 64.6914 18.1758 63.7246 18.1758C62.7285 18.1758 61.8584 18.0176 61.1143 17.7012C60.376 17.3848 59.7607 16.9336 59.2686 16.3477C58.7822 15.7617 58.416 15.0615 58.1699 14.2471C57.9297 13.4326 57.8096 12.5303 57.8096 11.54C57.8096 10.2275 58.0264 9.07617 58.46 8.08594C58.8936 7.0957 59.5498 6.3252 60.4287 5.77441C61.3135 5.22363 62.4209 4.94824 63.751 4.94824C65.0225 4.94824 66.0918 5.2207 66.959 5.76562C67.832 6.31055 68.4912 7.07812 68.9365 8.06836C69.3877 9.05273 69.6133 10.2158 69.6133 11.5576ZM59.3828 11.5576C59.3828 12.6475 59.5381 13.5908 59.8486 14.3877C60.1592 15.1846 60.6338 15.7998 61.2725 16.2334C61.917 16.667 62.7344 16.8838 63.7246 16.8838C64.7207 16.8838 65.5352 16.667 66.168 16.2334C66.8066 15.7998 67.2783 15.1846 67.583 14.3877C67.8877 13.5908 68.04 12.6475 68.04 11.5576C68.04 9.89941 67.6914 8.60449 66.9941 7.67285C66.3027 6.73535 65.2217 6.2666 63.751 6.2666C62.7549 6.2666 61.9346 6.48047 61.29 6.9082C60.6455 7.33594 60.165 7.94531 59.8486 8.73633C59.5381 9.52148 59.3828 10.4619 59.3828 11.5576ZM83.623 11.5576C83.623 12.5479 83.4971 13.4502 83.2451 14.2646C82.9932 15.0732 82.6182 15.7705 82.1201 16.3564C81.6279 16.9365 81.0156 17.3848 80.2832 17.7012C79.5508 18.0176 78.7012 18.1758 77.7344 18.1758C76.7383 18.1758 75.8682 18.0176 75.124 17.7012C74.3857 17.3848 73.7705 16.9336 73.2783 16.3477C72.792 15.7617 72.4258 15.0615 72.1797 14.2471C71.9395 13.4326 71.8193 12.5303 71.8193 11.54C71.8193 10.2275 72.0361 9.07617 72.4697 8.08594C72.9033 7.0957 73.5596 6.3252 74.4385 5.77441C75.3232 5.22363 76.4307 4.94824 77.7607 4.94824C79.0322 4.94824 80.1016 5.2207 80.9688 5.76562C81.8418 6.31055 82.501 7.07812 82.9463 8.06836C83.3975 9.05273 83.623 10.2158 83.623 11.5576ZM73.3926 11.5576C73.3926 12.6475 73.5479 13.5908 73.8584 14.3877C74.1689 15.1846 74.6436 15.7998 75.2822 16.2334C75.9268 16.667 76.7441 16.8838 77.7344 16.8838C78.7305 16.8838 79.5449 16.667 80.1777 16.2334C80.8164 15.7998 81.2881 15.1846 81.5928 14.3877C81.8975 13.5908 82.0498 12.6475 82.0498 11.5576C82.0498 9.89941 81.7012 8.60449 81.0039 7.67285C80.3125 6.73535 79.2314 6.2666 77.7607 6.2666C76.7646 6.2666 75.9443 6.48047 75.2998 6.9082C74.6553 7.33594 74.1748 7.94531 73.8584 8.73633C73.5479 9.52148 73.3926 10.4619 73.3926 11.5576ZM95.752 18H93.9854L89.3535 11.751L87.9824 12.9814V18H86.4883V5.15039H87.9824V11.5576C88.3164 11.1768 88.6592 10.7988 89.0107 10.4238C89.3623 10.043 89.7109 9.65918 90.0566 9.27246L93.8096 5.15039H95.5586L90.4434 10.7227L95.752 18Z" fill="black" />
                                <path d="M98.165 5H97.667V1.15918H96.3105V0.716797H99.5215V1.15918H98.165V5ZM102.064 5L100.611 1.20312H100.588C100.615 1.50391 100.629 1.86133 100.629 2.27539V5H100.169V0.716797H100.919L102.275 4.25H102.299L103.667 0.716797H104.411V5H103.913V2.24023C103.913 1.92383 103.927 1.58008 103.954 1.20898H103.931L102.466 5H102.064Z" fill="black" />
                            </svg>
                        </div>
                        <div className='sm:hidden block mt-4'>
                            <svg width="96" height="15" viewBox="0 0 96 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5459 14H0.865234V1.15039H8.23047V3.38281H3.5459V6.69629H7.90527V8.91992H3.5459V14ZM10.7441 14V1.15039H13.4688V14H10.7441ZM20.4473 1.15039C21.6133 1.15039 22.5742 1.29102 23.3301 1.57227C24.0918 1.85352 24.6572 2.27832 25.0264 2.84668C25.3955 3.41504 25.5801 4.13281 25.5801 5C25.5801 5.58594 25.4688 6.09863 25.2461 6.53809C25.0234 6.97754 24.7305 7.34961 24.3672 7.6543C24.0039 7.95898 23.6113 8.20801 23.1895 8.40137L26.9688 14H23.9453L20.8779 9.06934H19.4277V14H16.7031V1.15039H20.4473ZM20.2539 3.38281H19.4277V6.85449H20.3066C21.209 6.85449 21.8535 6.70508 22.2402 6.40625C22.6328 6.10156 22.8291 5.65625 22.8291 5.07031C22.8291 4.46094 22.6182 4.02734 22.1963 3.76953C21.7803 3.51172 21.1328 3.38281 20.2539 3.38281ZM36.1709 10.4316C36.1709 11.1934 35.9863 11.8555 35.6172 12.418C35.248 12.9805 34.709 13.4141 34 13.7188C33.2969 14.0234 32.4414 14.1758 31.4336 14.1758C30.9883 14.1758 30.5518 14.1465 30.124 14.0879C29.7021 14.0293 29.2949 13.9443 28.9023 13.833C28.5156 13.7158 28.1465 13.5723 27.7949 13.4023V10.8711C28.4043 11.1406 29.0371 11.3838 29.6934 11.6006C30.3496 11.8174 31 11.9258 31.6445 11.9258C32.0898 11.9258 32.4473 11.8672 32.7168 11.75C32.9922 11.6328 33.1914 11.4717 33.3145 11.2666C33.4375 11.0615 33.499 10.8271 33.499 10.5635C33.499 10.2412 33.3906 9.96582 33.1738 9.7373C32.957 9.50879 32.6582 9.29492 32.2773 9.0957C31.9023 8.89648 31.4775 8.68262 31.0029 8.4541C30.7041 8.31348 30.3789 8.14355 30.0273 7.94434C29.6758 7.73926 29.3418 7.49023 29.0254 7.19727C28.709 6.9043 28.4482 6.5498 28.2432 6.13379C28.0439 5.71191 27.9443 5.20801 27.9443 4.62207C27.9443 3.85449 28.1201 3.19824 28.4717 2.65332C28.8232 2.1084 29.3242 1.69238 29.9746 1.40527C30.6309 1.1123 31.4043 0.96582 32.2949 0.96582C32.9629 0.96582 33.5986 1.04492 34.2021 1.20312C34.8115 1.35547 35.4473 1.57813 36.1094 1.87109L35.2305 3.98926C34.6387 3.74902 34.1084 3.56445 33.6396 3.43555C33.1709 3.30078 32.6934 3.2334 32.207 3.2334C31.8672 3.2334 31.5771 3.28906 31.3369 3.40039C31.0967 3.50586 30.915 3.6582 30.792 3.85742C30.6689 4.05078 30.6074 4.27637 30.6074 4.53418C30.6074 4.83887 30.6953 5.09668 30.8711 5.30762C31.0527 5.5127 31.3223 5.71191 31.6797 5.90527C32.043 6.09863 32.4941 6.32422 33.0332 6.58203C33.6895 6.89258 34.249 7.21777 34.7119 7.55762C35.1807 7.8916 35.541 8.28711 35.793 8.74414C36.0449 9.19531 36.1709 9.75781 36.1709 10.4316ZM43.457 14H40.7324V3.41797H37.2432V1.15039H46.9463V3.41797H43.457V14Z" fill="#FE1940" />
                                <path d="M49.0645 14V1.15039H50.5586V12.6641H56.2627V14H49.0645ZM69.6133 7.55762C69.6133 8.54785 69.4873 9.4502 69.2354 10.2646C68.9834 11.0732 68.6084 11.7705 68.1104 12.3564C67.6182 12.9365 67.0059 13.3848 66.2734 13.7012C65.541 14.0176 64.6914 14.1758 63.7246 14.1758C62.7285 14.1758 61.8584 14.0176 61.1143 13.7012C60.376 13.3848 59.7607 12.9336 59.2686 12.3477C58.7822 11.7617 58.416 11.0615 58.1699 10.2471C57.9297 9.43262 57.8096 8.53027 57.8096 7.54004C57.8096 6.22754 58.0264 5.07617 58.46 4.08594C58.8936 3.0957 59.5498 2.3252 60.4287 1.77441C61.3135 1.22363 62.4209 0.948242 63.751 0.948242C65.0225 0.948242 66.0918 1.2207 66.959 1.76562C67.832 2.31055 68.4912 3.07812 68.9365 4.06836C69.3877 5.05273 69.6133 6.21582 69.6133 7.55762ZM59.3828 7.55762C59.3828 8.64746 59.5381 9.59082 59.8486 10.3877C60.1592 11.1846 60.6338 11.7998 61.2725 12.2334C61.917 12.667 62.7344 12.8838 63.7246 12.8838C64.7207 12.8838 65.5352 12.667 66.168 12.2334C66.8066 11.7998 67.2783 11.1846 67.583 10.3877C67.8877 9.59082 68.04 8.64746 68.04 7.55762C68.04 5.89941 67.6914 4.60449 66.9941 3.67285C66.3027 2.73535 65.2217 2.2666 63.751 2.2666C62.7549 2.2666 61.9346 2.48047 61.29 2.9082C60.6455 3.33594 60.165 3.94531 59.8486 4.73633C59.5381 5.52148 59.3828 6.46191 59.3828 7.55762ZM83.623 7.55762C83.623 8.54785 83.4971 9.4502 83.2451 10.2646C82.9932 11.0732 82.6182 11.7705 82.1201 12.3564C81.6279 12.9365 81.0156 13.3848 80.2832 13.7012C79.5508 14.0176 78.7012 14.1758 77.7344 14.1758C76.7383 14.1758 75.8682 14.0176 75.124 13.7012C74.3857 13.3848 73.7705 12.9336 73.2783 12.3477C72.792 11.7617 72.4258 11.0615 72.1797 10.2471C71.9395 9.43262 71.8193 8.53027 71.8193 7.54004C71.8193 6.22754 72.0361 5.07617 72.4697 4.08594C72.9033 3.0957 73.5596 2.3252 74.4385 1.77441C75.3232 1.22363 76.4307 0.948242 77.7607 0.948242C79.0322 0.948242 80.1016 1.2207 80.9688 1.76562C81.8418 2.31055 82.501 3.07812 82.9463 4.06836C83.3975 5.05273 83.623 6.21582 83.623 7.55762ZM73.3926 7.55762C73.3926 8.64746 73.5479 9.59082 73.8584 10.3877C74.1689 11.1846 74.6436 11.7998 75.2822 12.2334C75.9268 12.667 76.7441 12.8838 77.7344 12.8838C78.7305 12.8838 79.5449 12.667 80.1777 12.2334C80.8164 11.7998 81.2881 11.1846 81.5928 10.3877C81.8975 9.59082 82.0498 8.64746 82.0498 7.55762C82.0498 5.89941 81.7012 4.60449 81.0039 3.67285C80.3125 2.73535 79.2314 2.2666 77.7607 2.2666C76.7646 2.2666 75.9443 2.48047 75.2998 2.9082C74.6553 3.33594 74.1748 3.94531 73.8584 4.73633C73.5479 5.52148 73.3926 6.46191 73.3926 7.55762ZM95.752 14H93.9854L89.3535 7.75098L87.9824 8.98145V14H86.4883V1.15039H87.9824V7.55762C88.3164 7.17676 88.6592 6.79883 89.0107 6.42383C89.3623 6.04297 89.7109 5.65918 90.0566 5.27246L93.8096 1.15039H95.5586L90.4434 6.72266L95.752 14Z" fill="black" />
                            </svg>
                        </div>
                        <div className='sm:block hidden'>
                            <div className="flex flex-row space-x-4 mt-8">
                                <a href='https://www.facebook.com/firstlookappofficial?mibextid=ZbWKwL'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 17.028C24 21.396 21.396 24 17.028 24H15.6C14.94 24 14.4 23.46 14.4 22.8V15.876C14.4 15.552 14.664 15.276 14.988 15.276L17.1 15.24C17.268 15.228 17.412 15.108 17.448 14.94L17.868 12.648C17.904 12.432 17.736 12.228 17.508 12.228L14.952 12.264C14.616 12.264 14.352 12 14.34 11.676L14.292 8.736C14.292 8.544 14.448 8.37601 14.652 8.37601L17.532 8.328C17.736 8.328 17.892 8.17201 17.892 7.96801L17.844 5.08799C17.844 4.88399 17.688 4.728 17.484 4.728L14.244 4.77601C12.252 4.81201 10.668 6.444 10.704 8.436L10.764 11.736C10.776 12.072 10.512 12.336 10.176 12.348L8.736 12.372C8.532 12.372 8.37601 12.528 8.37601 12.732L8.41201 15.012C8.41201 15.216 8.568 15.372 8.772 15.372L10.212 15.348C10.548 15.348 10.812 15.612 10.824 15.936L10.932 22.776C10.944 23.448 10.404 24 9.732 24H6.972C2.604 24 0 21.396 0 17.016V6.972C0 2.604 2.604 0 6.972 0H17.028C21.396 0 24 2.604 24 6.972V17.028Z" fill="#FE1940" />
                                    </svg>
                                </a>
                                <a href='https://www.instagram.com/firstlook_app?igsh=aXlsbmx3dm96bHo2'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.028 0H6.972C2.604 0 0 2.604 0 6.972V17.016C0 21.396 2.604 24 6.972 24H17.016C21.384 24 23.988 21.396 23.988 17.028V6.972C24 2.604 21.396 0 17.028 0ZM12 16.656C9.432 16.656 7.344 14.568 7.344 12C7.344 9.432 9.432 7.344 12 7.344C14.568 7.344 16.656 9.432 16.656 12C16.656 14.568 14.568 16.656 12 16.656ZM19.104 5.856C19.044 6 18.96 6.132 18.852 6.252C18.732 6.36 18.6 6.444 18.456 6.504C18.312 6.564 18.156 6.6 18 6.6C17.676 6.6 17.376 6.48 17.148 6.252C17.04 6.132 16.956 6 16.896 5.856C16.836 5.712 16.8 5.556 16.8 5.4C16.8 5.244 16.836 5.088 16.896 4.944C16.956 4.788 17.04 4.668 17.148 4.548C17.424 4.272 17.844 4.14 18.228 4.224C18.312 4.236 18.384 4.26 18.456 4.296C18.528 4.32 18.6 4.356 18.672 4.404C18.732 4.44 18.792 4.5 18.852 4.548C18.96 4.668 19.044 4.788 19.104 4.944C19.164 5.088 19.2 5.244 19.2 5.4C19.2 5.556 19.164 5.712 19.104 5.856Z" fill="#FE1940" />
                                    </svg>
                                </a>
                                <a href='https://x.com/firstlook_app'>
                                    <svg width="26" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.4428 6.05211C26.4428 6.30637 26.4428 6.57558 26.4428 6.82984C26.4567 9.08853 26.0221 11.3275 25.1642 13.4169C24.3061 15.5063 23.042 17.4045 21.4448 19.0017C19.8476 20.5989 17.9494 21.863 15.86 22.7211C13.7706 23.579 11.5316 24.0136 9.27292 23.9997C5.98573 24.0093 2.76574 23.0692 0 21.2926C0.493559 21.2926 0.957204 21.2926 1.49563 21.2926C4.2079 21.2926 6.84153 20.3814 8.97379 18.7051C7.70989 18.6938 6.48204 18.2825 5.46639 17.5302C4.45073 16.7779 3.69945 15.7231 3.3203 14.5174C3.70117 14.5781 4.08628 14.6082 4.47194 14.6071C5.0061 14.6032 5.53806 14.538 6.05731 14.4127C4.70602 14.1369 3.49154 13.4027 2.61939 12.3342C1.74724 11.2659 1.27102 9.92892 1.27129 8.54981C2.10748 9.01107 3.03923 9.27219 3.99334 9.31257C3.15148 8.7557 2.46172 7.99775 1.98644 7.10726C1.51117 6.21678 1.26538 5.22185 1.27129 4.21248C1.27316 3.16177 1.55172 2.13008 2.07893 1.22122C3.5921 3.08724 5.48035 4.61463 7.62138 5.70446C9.76241 6.7943 12.1085 7.42229 14.5076 7.54774C14.4127 7.0951 14.3626 6.63422 14.3581 6.17176C14.319 4.94067 14.6611 3.72755 15.3373 2.69808C16.0136 1.66859 16.991 0.872929 18.1363 0.419707C19.2816 -0.0334992 20.5389 -0.12216 21.7365 0.165839C22.934 0.453838 24.0134 1.10447 24.8275 2.02886C26.1811 1.75697 27.4769 1.25083 28.6563 0.533226C28.2058 1.92889 27.2585 3.11048 25.9941 3.85353C27.1961 3.72363 28.3713 3.41093 29.4789 2.92624C28.6587 4.12418 27.6484 5.18005 26.4877 6.05211H26.4428Z" fill="#FE1940" />
                                    </svg>
                                </a>
                                <a href='https://youtube.com/@firstlook_app?si=pbbla-7I67I0b1eA'>
                                    <svg width="26" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 0H7.5C3 0 0 3 0 7.5V16.5C0 21 3 24 7.5 24H22.5C27 24 30 21 30 16.5V7.5C30 3 27 0 22.5 0ZM17.835 13.545L14.13 15.765C12.63 16.665 11.4 15.975 11.4 14.22V9.765C11.4 8.01002 12.63 7.32001 14.13 8.22001L17.835 10.44C19.26 11.31 19.26 12.69 17.835 13.545Z" fill="#FE1940" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='sm:hidden block'>
                            <div className="flex flex-row space-x-4 mt-5">
                                <a href='https://www.facebook.com/firstlookappofficial?mibextid=ZbWKwL'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 12.771C18 16.047 16.047 18 12.771 18H11.7C11.205 18 10.8 17.595 10.8 17.1V11.907C10.8 11.664 10.998 11.457 11.241 11.457L12.825 11.43C12.951 11.421 13.059 11.331 13.086 11.205L13.401 9.486C13.428 9.324 13.302 9.171 13.131 9.171L11.214 9.198C10.962 9.198 10.764 9 10.755 8.757L10.719 6.552C10.719 6.408 10.836 6.28201 10.989 6.28201L13.149 6.246C13.302 6.246 13.419 6.12901 13.419 5.97601L13.383 3.81599C13.383 3.66299 13.266 3.546 13.113 3.546L10.683 3.58201C9.189 3.60901 8.001 4.833 8.028 6.327L8.073 8.802C8.082 9.054 7.884 9.252 7.632 9.261L6.552 9.279C6.399 9.279 6.28201 9.396 6.28201 9.549L6.30901 11.259C6.30901 11.412 6.426 11.529 6.579 11.529L7.659 11.511C7.911 11.511 8.109 11.709 8.118 11.952L8.199 17.082C8.208 17.586 7.803 18 7.299 18H5.229C1.953 18 0 16.047 0 12.762V5.229C0 1.953 1.953 0 5.229 0H12.771C16.047 0 18 1.953 18 5.229V12.771Z" fill="#FE1940" />
                                    </svg>
                                </a>
                                <a href='https://www.instagram.com/firstlook_app?igsh=aXlsbmx3dm96bHo2'>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.271 0H5.729C2.453 0 0.5 1.953 0.5 5.229V12.762C0.5 16.047 2.453 18 5.729 18H13.262C16.538 18 18.491 16.047 18.491 12.771V5.229C18.5 1.953 16.547 0 13.271 0ZM9.5 12.492C7.574 12.492 6.008 10.926 6.008 9C6.008 7.074 7.574 5.508 9.5 5.508C11.426 5.508 12.992 7.074 12.992 9C12.992 10.926 11.426 12.492 9.5 12.492ZM14.828 4.392C14.783 4.5 14.72 4.599 14.639 4.689C14.549 4.77 14.45 4.833 14.342 4.878C14.234 4.923 14.117 4.95 14 4.95C13.757 4.95 13.532 4.86 13.361 4.689C13.28 4.599 13.217 4.5 13.172 4.392C13.127 4.284 13.1 4.167 13.1 4.05C13.1 3.933 13.127 3.816 13.172 3.708C13.217 3.591 13.28 3.501 13.361 3.411C13.568 3.204 13.883 3.105 14.171 3.168C14.234 3.177 14.288 3.195 14.342 3.222C14.396 3.24 14.45 3.267 14.504 3.303C14.549 3.33 14.594 3.375 14.639 3.411C14.72 3.501 14.783 3.591 14.828 3.708C14.873 3.816 14.9 3.933 14.9 4.05C14.9 4.167 14.873 4.284 14.828 4.392Z" fill="#FE1940" />
                                    </svg>
                                </a>
                                <a href='https://x.com/firstlook_app'>
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7341 4.53908C19.7341 4.72977 19.7341 4.93168 19.7341 5.12238C19.7445 6.81639 19.4202 8.49561 18.7799 10.0627C18.1396 11.6297 17.1962 13.0534 16.0042 14.2513C14.8122 15.4492 13.3956 16.3973 11.8363 17.0408C10.2769 17.6842 8.60598 18.0102 6.92034 17.9998C4.46712 18.0069 2.06406 17.3019 0 15.9694C0.368341 15.9694 0.714358 15.9694 1.11618 15.9694C3.14034 15.9694 5.10581 15.2861 6.6971 14.0289C5.75386 14.0203 4.83752 13.7119 4.07954 13.1476C3.32156 12.5834 2.76088 11.7924 2.47793 10.888C2.76216 10.9336 3.04957 10.9561 3.33739 10.9553C3.73604 10.9524 4.13303 10.9035 4.52055 10.8095C3.51208 10.6027 2.60572 10.052 1.95484 9.25065C1.30396 8.4494 0.948555 7.44669 0.948756 6.41236C1.5728 6.7583 2.26816 6.95414 2.98021 6.98443C2.35193 6.56678 1.83717 5.99831 1.48247 5.33045C1.12778 4.66258 0.944347 3.91639 0.948756 3.15936C0.950152 2.37133 1.15804 1.59756 1.5515 0.915912C2.68077 2.31543 4.08997 3.46097 5.68781 4.27835C7.28565 5.09573 9.03653 5.56671 10.827 5.6608C10.7561 5.32133 10.7187 4.97567 10.7154 4.62882C10.6862 3.70551 10.9415 2.79566 11.4461 2.02356C11.9509 1.25144 12.6803 0.654696 13.5351 0.31478C14.3897 -0.0251244 15.3281 -0.0916199 16.2218 0.124379C17.1156 0.340378 17.9211 0.828351 18.5287 1.52164C19.5388 1.31773 20.5059 0.938123 21.3861 0.399919C21.0499 1.44667 20.3429 2.33286 19.3993 2.89015C20.2964 2.79273 21.1734 2.55819 22 2.19468C21.3879 3.09313 20.6339 3.88504 19.7676 4.53908H19.7341Z" fill="#FE1940" />
                                    </svg>
                                </a>
                                <a href='https://youtube.com/@firstlook_app?si=pbbla-7I67I0b1eA'>
                                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.375 0H6.125C2.75 0 0.5 2.25 0.5 5.625V12.375C0.5 15.75 2.75 18 6.125 18H17.375C20.75 18 23 15.75 23 12.375V5.625C23 2.25 20.75 0 17.375 0ZM13.8763 10.1587L11.0975 11.8238C9.9725 12.4988 9.04998 11.9812 9.04998 10.665V7.32375C9.04998 6.00751 9.9725 5.49001 11.0975 6.16501L13.8763 7.83C14.945 8.4825 14.945 9.5175 13.8763 10.1587Z" fill="#FE1940" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </>
    )
}

export default PrivacyPolicyPage