import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

// Helper function to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = error => reject(error);
  });
};

const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const StyleJudge: React.FC = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [judgement, setJudgement] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setError('');
            setJudgement('');
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleGetJudgement = async () => {
        if (!imageFile) {
            setError('Please upload an image first.');
            return;
        }
        setIsLoading(true);
        setError('');
        setJudgement('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const base64Data = await fileToBase64(imageFile);
            
            const imagePart = {
                inlineData: {
                    mimeType: imageFile.type,
                    data: base64Data,
                },
            };

            const textPart = {
                text: "You are an expert fashion critic for stage performers, known as 'The Eagle Eye'. Analyze the outfit in this image. Provide a constructive, encouraging, and stylish critique. Focus on its suitability for the stage, potential improvements, and what kind of performer would wear it best. Keep the feedback concise and impactful, in about 3-4 sentences.",
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: { parts: [imagePart, textPart] },
            });

            setJudgement(response.text);

        } catch (err) {
            console.error(err);
            setError('The Style Judge is unavailable at the moment. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const resetState = () => {
        setImagePreview(null);
        setImageFile(null);
        setJudgement('');
        setError('');
        if (fileInputRef.current) fileInputRef.current.value = '';
        if (cameraInputRef.current) cameraInputRef.current.value = '';
    }

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold font-playfair mb-4">Meet the Style Judge 🦅</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        Get an AI-powered expert opinion on your stage look. Upload a photo and let our 'Eagle Eye' provide a professional critique.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="flex flex-col items-center">
                            {imagePreview ? (
                                <div className="w-full">
                                    <img src={imagePreview} alt="Outfit preview" className="rounded-lg w-full h-auto max-h-[400px] object-contain" />
                                    <button
                                        onClick={resetState}
                                        className="mt-4 w-full text-center text-sm text-amber-400 hover:text-amber-500"
                                    >
                                        Change Photo
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full flex flex-col items-center">
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-full h-64 border-2 border-dashed border-gray-600 rounded-lg flex flex-col justify-center items-center text-gray-400 hover:bg-gray-800 hover:border-amber-400 cursor-pointer transition-colors"
                                    >
                                        <UploadIcon className="w-16 h-16 mb-4" />
                                        <h3 className="font-bold text-lg">Upload Your Look</h3>
                                        <p className="text-sm">Click to select a photo</p>
                                    </button>
                                    <div className="my-4 text-gray-500">OR</div>
                                    <button
                                        onClick={() => cameraInputRef.current?.click()}
                                        className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors"
                                    >
                                        <CameraIcon className="w-5 h-5" />
                                        Use Camera
                                    </button>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                            />
                             <input 
                                type="file" 
                                accept="image/*" 
                                capture="environment" 
                                ref={cameraInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            
                            <button
                                onClick={handleGetJudgement}
                                disabled={!imagePreview || isLoading}
                                className="w-full mt-6 bg-amber-400 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Judging...' : 'Get Judgment'}
                            </button>
                        </div>

                        <div className="h-full min-h-[400px] flex flex-col justify-center items-center bg-black/20 rounded-lg p-6">
                            {isLoading && <div className="text-white">The Judge is deliberating...</div>}
                            {error && <p className="text-red-500 text-center">{error}</p>}
                            {judgement && (
                                <div className="text-left w-full">
                                    <h4 className="text-xl font-bold text-amber-400 mb-4 font-playfair">The Eagle's Verdict:</h4>
                                    <p className="text-gray-300 italic whitespace-pre-wrap">"{judgement}"</p>
                                </div>
                            )}
                            {!isLoading && !judgement && !error && (
                                <p className="text-gray-500 text-center">Your style critique will appear here.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StyleJudge;
