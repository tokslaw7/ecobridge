import { useState } from 'react';
//import '../src/css/App.css';
import KidActivity from './KidActivity';
import ParentActivity from './ParentActivity';



export default function Activity() {
    const [activeTab, setActiveTab] = useState('kids');
    const [completed, setCompleted] = useState({});

    const handleComplete = (title) => {
        setCompleted({ ...completed, [title]: true });
    };

    return (
        <div className="min-h-screen bg-blue-50">
            {/* Tab Navigation */}
            <div className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex">
                        <button
                            onClick={() => setActiveTab('kids')}
                            className={`flex-1 py-4 px-6 text-center font-semibold text-lg transition-colors duration-200 ${
                                activeTab === 'kids'
                                    ? 'bg-blue-500 text-white border-b-2 border-blue-500'
                                    : 'text-blue-500 hover:bg-blue-50'
                            }`}
                        >
                            For Kids
                        </button>
                        <button
                            onClick={() => setActiveTab('parents')}
                            className={`flex-1 py-4 px-6 text-center font-semibold text-lg transition-colors duration-200 ${
                                activeTab === 'parents'
                                    ? 'bg-blue-500 text-white border-b-2 border-blue-500'
                                    : 'text-blue-500 hover:bg-blue-50'
                            }`}
                        >
                            For Parents
                        </button>
                    </nav>
                </div>
            </div>

            {/* Tab Content */}
            <div className="py-8">
                {activeTab === 'kids' ? (
                    <KidActivity completed={completed} onComplete={handleComplete} />
                ) : (
                    <ParentActivity />
                )}
            </div>
        </div>
    );
}