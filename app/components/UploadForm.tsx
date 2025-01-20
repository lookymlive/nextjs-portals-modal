'use client';

import { useState } from 'react';

const UploadForm = ({ onSubmit }: { onSubmit: (video: File) => void }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (file) {
            onSubmit(file);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload Video:
                <input type="file" accept="video/*" onChange={handleFileChange} />
            </label>
            <button type="submit" disabled={!file}>
                Submit
            </button>
        </form>
    );
};

export default UploadForm;
