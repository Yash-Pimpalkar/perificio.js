import React, { useState, useRef, useEffect } from 'react';

// Main Chatbot component
// It now accepts a 'services' prop to display menu options based on website services.
const Chatbot = ({ services = [] }) => { // Default to empty array if no services are passed
    // State to store chat messages
    const [messages, setMessages] = useState([]);
    // State to store the current input message
    const [input, setInput] = useState('');
    // State to manage loading indicator during API calls
    const [loading, setLoading] = useState(false);
    // Ref for scrolling to the latest message
    const messagesEndRef = useRef(null);

    // API Key for Gemini. This has been updated with the key you provided.
    const apiKey = "AIzaSyDWvHAsPzX_VbmXo4VrJE7TeAzv0zNiEdk";

    // Initialize messages with the welcome greeting and menu options
    useEffect(() => {
        const menuOptions = services.length > 0
            ? services.map(service => `- ${service.title}`).join('\n')
            : "No specific topics available at the moment.";

        setMessages([
            {
                sender: 'model',
                text: "🙋‍♀️ Hi! Welcome to Perficio. I'm your digital assistant.\n\nHow can I help you today?\nPlease type in your question below or choose a topic from the menu to begin 👇"
            },
            {
                sender: 'model',
                text: `**Our Services:**\n${menuOptions}\n\nType your question or select a topic!`
            }
        ]);
    }, [services]); // Re-run effect if services change

    // Scroll to the bottom of the chat messages whenever messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    /**
     * Handles sending a message.
     * Appends the user's message to the chat and then calls the Gemini API for a response.
     */
    const handleSendMessage = async () => {
        if (input.trim() === '') return; // Don't send empty messages

        const userMessage = { sender: 'user', text: input };
        // Add user message to state
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInput(''); // Clear input field
        setLoading(true); // Show loading indicator

        try {
            // Prepare chat history for the API request
            const chatHistory = [...messages, userMessage].map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }));

            // Gemini API endpoint
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const payload = {
                contents: chatHistory,
                // Add generation configuration to limit output length
                generationConfig: {
                    maxOutputTokens: 50, // Limit to roughly 1-2 sentences/lines
                    temperature: 0.7,    // Adjust for creativity vs. directness
                    topP: 0.9,           // Adjust for diversity vs. focus
                },
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            // Check if response contains valid content
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const modelResponseText = result.candidates[0].content.parts[0].text;
                // Add model's response to state
                setMessages(prevMessages => {
                    const newMessages = [...prevMessages, { sender: 'model', text: modelResponseText }];
                    // Add the agent connection prompt after the model's response
                    newMessages.push({ sender: 'model', text: "Would you like to connect with an agent for more help? Please call: +91 98765 43210" });
                    return newMessages;
                });
            } else {
                // Handle cases where response structure is unexpected
                console.error("Gemini API returned an unexpected structure:", result);
                setMessages(prevMessages => [...prevMessages, { sender: 'model', text: 'Sorry, I could not get a response. Please try again.' }]);
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            // Display error message to the user
            setMessages(prevMessages => [...prevMessages, { sender: 'model', text: 'Oops! Something went wrong. Please try again later.' }]);
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    /**
     * Handles key press events, specifically 'Enter' for sending messages.
     * @param {KeyboardEvent} e - The keyboard event object.
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Allow Shift+Enter for new lines
            e.preventDefault(); // Prevent new line in textarea on Enter
            handleSendMessage();
        }
    };

    return (
        // Main container for the chatbot
        <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Chatbot Header */}
            <div className="bg-[#1D4ED8] text-white p-4 text-center font-bold text-lg rounded-t-lg">
                Perficio Chatbot
            </div>

            {/* Message display area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => ( // Render all messages, including initial ones
                    <div
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`rounded-xl p-3 max-w-[70%] text-sm shadow-md
                                ${msg.sender === 'user'
                                    ? 'bg-[#E0F2FE] text-gray-900 rounded-br-none' // User messages
                                    : 'bg-[#BFDBFE] text-gray-900 rounded-bl-none' // Bot messages
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                {/* Loading indicator */}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-200 rounded-xl p-3 max-w-[70%] text-sm animate-pulse">
                            Thinking...
                        </div>
                    </div>
                )}
                {/* Scroll reference point */}
                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center gap-2">
                <textarea
                    className="flex-1 resize-none border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                    placeholder="Type your message..."
                    rows="1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading} // Disable input while loading
                />
                <button
                    onClick={handleSendMessage}
                    disabled={loading || input.trim() === ''}
                    className={`bg-[#B91C1C] text-white rounded-lg p-2 px-4 font-semibold transition-colors duration-200
                        ${loading || input.trim() === '' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#DC2626]'}
                    `}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;