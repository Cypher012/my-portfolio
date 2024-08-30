import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./contact.css";
import { motion } from "framer-motion";
import { pageAnimate } from "./pages";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define your location here
  const position = [7.600263692083058, 4.668231873363923]; // Example: Coordinates for a location in Nigeria

  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-20 lg:px-10 dark:text-neutral-300"
    >
      <span className="dark:bg-gray-800 dark:text-neutral-400 bg-slate-300 px-3 py-2 text-sm text-neutral-700 uppercase">
        Contact
      </span>

      {/* Leaflet Map */}
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-[400px] mt-16 rounded"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Your Location <br /> Lagos, Nigeria.
          </Popup>
        </Marker>
      </MapContainer>

      <form
        action="https://formsubmit.co/ayoojoade@gmail.com"
        method="POST"
        className="w-full flex flex-col gap-y-3 mt-20"
      >
        <input
          type="text"
          name="name"
          id="name"
          required
          className="p-3 text-neutral-600"
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          required
          className="p-3 text-neutral-600"
          placeholder="Email"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          className="p-3 text-neutral-600 resize-none"
        />
        <div className="mt-10">
          <button className="bg-black dark:bg-gray-300 dark:text-slate-900 text-gray-300 px-8 lg:hover:px-10 duration-300 py-4">
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
