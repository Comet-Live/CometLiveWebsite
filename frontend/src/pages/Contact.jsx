import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import WebNavbar from "../components/WebNavbar";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                "service_ikuukx2",
                "template_559zlt7",
                {
                    from_name: form.name,
                    to_name: "Comet Live",
                    from_email: form.email,
                    to_email: "support@cometlive.me",
                    message: form.message,
                },
                "9OuI3gv7oB9ClVuRO"
            )
            .then(
                () => {
                    setLoading(false);
                    setAlert(true);

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert("Something went wrong. Please try again later.");
                }
            );
    };

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(false);
            }, 2000); // Alert disappears after 1 second
            return () => clearTimeout(timer); // Clean up timeout when alert changes
        }
    }, [alert, setAlert]);

    return (
        <div className="text-black">
            <WebNavbar />
            <div className="mt-16 text-center max-w-5xl mx-auto ">
                <h3 className="text-6xl font-bold text-primary">Contact.</h3>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: alert ? 1 : 0, y: alert ? 0 : -40 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mt-16 text-primary fixed top-0 left-0 right-0 mx-auto p-8 bg-white rounded-3xl shadow-2xl max-w-md z-40"
                >
                    Thank you. We will get back to you as soon as possible.
                </motion.div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8 rounded-3xl bg-white shadow-2xl px-20 py-12"
                >
                    <label className="flex flex-col">
                        <span className="text-left font-medium mb-4">
                            Your Name
                        </span>
                        <motion.input
                            whileFocus={{ scale: 1.1 }}
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="border-2 border-black focus:border-primary bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-3xl outline-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-left font-medium mb-4">
                            Your Email
                        </span>
                        <motion.input
                            whileFocus={{ scale: 1.1 }}
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className="border-2 border-black focus:border-primary bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-3xl outline-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-left font-medium mb-4">
                            Your Message
                        </span>

                        <motion.textarea
                            whileFocus={{ scale: 1.1 }}
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="border-2 border-black focus:border-primary bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-3xl outline-none font-medium"
                        />
                    </label>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        className="hover:bg-primary hover:text-white py-2 px-16 rounded-3xl mx-auto text-black hover: text-3xl font-bold"
                    >
                        {loading ? "Sending..." : "Send"}
                    </motion.button>
                </form>
            </div>
            <div className="h-36"></div>
        </div>
    );
};

export default Contact;
