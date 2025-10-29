import React, { useState } from 'react';
import api from "../api/axios";
import ReactMarkdown from 'react-markdown';

export default function AIChat() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('Ask me anything! I will connect to the Gemeni API via Laravel.');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!prompt.trim()) return; // খালি ইনপুট হলে বন্ধ

        setIsLoading(true);
        setResponse('Thinking...'); // লোডিং মেসেজ
        
        try {
            const result = await api.post('/ai/gemini', { 
                prompt: prompt 
            });

            if (result.data.success) {
                // AI রেসপন্স সেট করা
                setResponse(result.data.response); 
            } else {
                // Laravel থেকে আসা ত্রুটি হ্যান্ডেল করা
                setResponse('Error: ' + (result.data.error || 'Unknown API error.'));
            }
        } catch (error) {
            console.error('API Call Error:', error);
            // নেটওয়ার্ক বা CORS ত্রুটি হ্যান্ডেল করা
            setResponse('Failed to connect to the Laravel server. Check server URL and CORS settings.');
        } finally {
            setIsLoading(false);
            setPrompt(''); // ইনপুট ফিল্ড খালি করা
        }
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-[60vh] bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                🤖 AI Assistant (Powered by Laravel & gemini)
            </h2>
            
            {/* AI Response Area */}
            <div className="w-full max-w-2xl bg-white p-6 shadow-xl rounded-lg mb-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-indigo-600">AI Response:</h3>
                <div 
                    className={`p-4 rounded-md text-gray-700 whitespace-pre-wrap text-left ${
                        isLoading ? 'animate-pulse text-gray-500' : 'bg-indigo-50'
                    } markdown-content`} // markdown-content ক্লাস যোগ করা হয়েছে
                    style={{ minHeight: '100px' }}
                >
                    {/* ReactMarkdown ব্যবহার করে আউটপুট প্রদর্শন */}
                    {/* আপনার AI আউটপুটটি যদি Markdown ফরম্যাটে থাকে, তবে এটি নিজে থেকেই সুন্দরভাবে সাজিয়ে দেবে */}
                    <ReactMarkdown>{response}</ReactMarkdown>
                </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                <textarea
                    rows="4"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Type your question here (e.g., Explain the concept of quantum computing)..."
                    disabled={isLoading}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none mb-4 disabled:bg-gray-100"
                />
                
                <button 
                    type="submit" 
                    disabled={isLoading || !prompt.trim()}
                    className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
                        isLoading || !prompt.trim()
                        ? 'bg-indigo-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                >
                    {isLoading ? 'Sending Request...' : 'Generate AI Response'}
                </button>
            </form>
        </div>
    );
}