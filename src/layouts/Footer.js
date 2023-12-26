// * icons
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className="text-white bg-[#0f1522]">
                <div className="border-t border-white rounded-2xl px-14 py-10">
                    <div className="flex justify-center items-center">
                        <div className="flex justify-between items-center w-100">
                            <p className="font-bold">Web<span className="text-side">leek</span>.ma</p>
                            <div className="text-white flex gap-1">
                                <FaFacebookSquare className="text-2xl" />
                                <FaTwitter className="text-2xl" />
                                <FaInstagram className="text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <div className="flex justify-between items-end w-100">
                            <p className="w-[40%] font-light">Lorem ipsum dolor sit amet, consecteturdolor sit amet, consectetur dolor sit amet Lorem ipsum dolor sit amet consectetur </p>
                            <div className="flex items-center gap-2">
                                <p>webleek@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-center">
                        <p className="p-1 m-0">Copyright© 2023 Webleek. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}