'use client';

import React, {
    createContext,
    useContext,
    useRef,
    useState,
    ReactNode,
    RefObject,
} from 'react';

interface ModalContextType {
    modalRef: RefObject<HTMLDivElement | null>;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode>(null);

    const openModal = (content: ReactNode) => {
        setContent(content);
        setIsOpen(true);
        if (modalRef.current) {
            modalRef.current.style.display = 'flex';
        }
    };

    const closeModal = () => {
        setContent(null);
        setIsOpen(false);
        if (modalRef.current) {
            modalRef.current.style.display = 'none';
        }
    };

    return (
        <ModalContext.Provider value={{ modalRef, openModal, closeModal }}>
            {children}
            <div
                ref={modalRef}
                style={{ display: isOpen ? 'flex' : 'none' }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            >
                <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg w-[90%] max-w-md relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    >
                        ✖
                    </button>
                    {content}
                </div>
            </div>
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
