'use client'

import { AnimatePresence, motion } from 'framer'
import React from 'react';

const ModalComponent = ({isOpen, onClose, children}) => {
  return (
    <div>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg relative mx-w-md w-full md:w-3/4 h-4/5 overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={onClose}
                >
                ✖
              </button>

            {/* Modal Content */}
              {children}

            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
    </div>
  )
}

export default ModalComponent