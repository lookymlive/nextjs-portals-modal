'use client';

import  { useModal } from '@/app/context/ModalContext';
import { Button } from "@/components/ui/button"


export default function Dashboard() {
    const { openModal } = useModal();

    const handleOpenUploadModal = () => {
        openModal(
            <div>
                <h2 className="text-lg font-bold mb-4">Upload Video</h2>
                <form>
                    <input
                        type="file"
                        className="block w-full mb-4 border rounded-md p-2"
                        accept="video/*"
                    />
                    <Button type="submit">Upload</Button>
                </form>
            </div>
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            <Button onClick={handleOpenUploadModal}>Upload Video</Button>
        </div>
    );
}
