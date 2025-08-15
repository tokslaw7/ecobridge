import { useState } from 'react';
// import '../../css/App.css';

export default function ParentActivity() {
    const activities = [
        {
            title: "Basic Money Management",
            description: "Play a 'store' game using play money and household items.",
            skills: "Recognizing coins and bills, making simple transactions.",
            parentTip: "Encourage your child to help with real-life shopping using small amounts of money."
        },
        {
            title: "Communication Skills",
            description: "Role-play ordering food or asking for help.",
            skills: "Speaking clearly, asking questions, and listening.",
            parentTip: "Use social stories or visuals to practice conversation starters and responses."
        },
        {
            title: "Time Management",
            description: "Create a daily schedule using stickers or drawings.",
            skills: "Understanding time, following a routine.",
            parentTip: "Use timers to help your child manage time for tasks and breaks."
        },
        {
            title: "Cooking Basics",
            description: "Make a simple recipe together like a sandwich or snack.",
            skills: "Following directions, using kitchen tools safely.",
            parentTip: "Choose recipes that promote independence and require minimal supervision."
        },
        {
            title: "Job Skills",
            description: "Create a 'job' like cleaning crew or gardener with specific tasks.",
            skills: "Teamwork, responsibility, and completing tasks.",
            parentTip: "Celebrate task completion with praise or small rewards."
        },
        {
            title: "Social Skills",
            description: "Set up playdates and turn-taking games.",
            skills: "Sharing, initiating conversations, understanding social cues.",
            parentTip: "Model positive social behavior and reflect on interactions."
        },
        {
            title: "Problem-Solving Skills",
            description: "Create puzzles or scavenger hunts to encourage thinking.",
            skills: "Analyzing situations and finding solutions.",
            parentTip: "Guide children to brainstorm solutions before giving answers."
        }
    ];
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
                Parent Tips
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {activities.map((activity) => (
                    <div key={activity.title} className="bg-blue-100 p-6 rounded-lg shadow-lg border-2 border-blue-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">{activity.title}</h2>
                        <p className="text-gray-700">
                            <span className="font-bold">Tip:</span> {activity.parentTip}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200 mt-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">General Advice</h2>
                <ul className="space-y-2 text-gray-700">
                    <li>• Use visuals and timers to support understanding.</li>
                    <li>• Celebrate small wins with hugs, stickers, or kind words.</li>
                    <li>• Keep routines consistent and predictable.</li>
                    <li>• Involve children in daily decisions to boost confidence.</li>
                </ul>
            </div>
        </div>
    );
}