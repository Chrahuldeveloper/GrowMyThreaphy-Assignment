import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ settootleSideBar, isOpen = true }) => {
  const closeSidebar = () => {
    settootleSideBar(false);
  };

  const navigate = (section) => {
    console.log(`Navigating to: ${section}`);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sidebarVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const menuItems = [
    { id: "how-i-help", label: "How I Help" },
    { id: "about-me", label: "About Me" },
    { id: "testimonials", label: "Testimonials" },
    { id: "rates-faqs", label: "Rates & FAQs" },
    { id: "areas-served", label: "Areas Served" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 backdrop-blur-2xl w-full h-full z-40"
            onClick={closeSidebar}
          />

          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 w-72 h-full bg-gray-50 border-r border-gray-200 shadow-xl z-50 overflow-hidden"
          >
            <motion.button
              onClick={closeSidebar}
              className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 text-3xl font-light"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              ×
            </motion.button>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="pt-16 px-8 pb-8 flex flex-col items-center text-center h-full"
            >
              <motion.h1
                className="text-3xl font-semibold text-gray-800 mb-16 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              >
                Dr. Serena Blake
              </motion.h1>

              <nav className="w-full flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => navigate(item.id)}
                    className="py-4 text-lg text-gray-600 cursor-pointer hover:text-gray-800 hover:bg-gray-100 hover:bg-opacity-50 rounded transition-all duration-200"
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
