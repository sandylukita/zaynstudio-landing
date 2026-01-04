'use client';

import React from 'react';
import Link from 'next/link';

export default function DataDeletionPage() {
    const copyEmail = () => {
        navigator.clipboard.writeText('sandy@zaynstudio.app');
        alert('Email copied to clipboard!');
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Background */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            {/* Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/mambafocus" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors mb-8 font-mono text-sm">
                        <span className="mr-2">←</span> Back to Mamba Focus
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-heavy uppercase mb-4 text-white">
                        Data Deletion
                    </h1>
                    <p className="text-xl text-gray-400 font-mono">
                        How to delete your data from Mamba Focus
                    </p>
                </div>

                {/* Instructions */}
                <div className="space-y-8">
                    {/* In-App Deletion */}
                    <section className="bg-white/5 border border-white/10 rounded-lg p-8">
                        <h2 className="text-3xl font-heavy uppercase mb-6 text-red-500">
                            In-App Data Deletion
                        </h2>

                        <div className="space-y-6">
                            {/* Option 1: Nuclear Reset */}
                            <div className="bg-black/30 border-l-4 border-yellow-500 p-6">
                                <h3 className="text-xl font-bold mb-3 text-yellow-500 font-mono">
                                    OPTION 1: Nuclear Reset
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Delete all your stats and history while keeping your account:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-400 font-mono text-sm">
                                    <li>Open Mamba Focus app</li>
                                    <li>Go to <span className="text-white">Settings</span></li>
                                    <li>Tap <span className="text-yellow-500">Nuclear Reset</span></li>
                                    <li>Confirm deletion</li>
                                </ol>
                                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded">
                                    <p className="text-sm text-yellow-200">
                                        <strong>What gets deleted:</strong> All focus session stats, streaks, and history from local storage (AsyncStorage)
                                    </p>
                                </div>
                            </div>

                            {/* Option 2: Delete Account */}
                            <div className="bg-black/30 border-l-4 border-red-500 p-6">
                                <h3 className="text-xl font-bold mb-3 text-red-500 font-mono">
                                    OPTION 2: Delete Account & All Data
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Permanently delete your account and all associated data:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-400 font-mono text-sm">
                                    <li>Open Mamba Focus app</li>
                                    <li>Go to <span className="text-white">Settings</span></li>
                                    <li>Tap <span className="text-white">Account</span></li>
                                    <li>Tap <span className="text-red-500">Delete Account & Data</span></li>
                                    <li>Confirm permanent deletion</li>
                                </ol>
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded">
                                    <p className="text-sm text-red-200">
                                        <strong>What gets deleted:</strong> Your account, all local data (AsyncStorage), and all server-side data including Wall of Shame entries (Supabase database records)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Important Information */}
                    <section className="bg-red-900/20 border border-red-500/30 rounded-lg p-8">
                        <h2 className="text-3xl font-heavy uppercase mb-6 text-red-500">
                            ⚠️ Important Information
                        </h2>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-red-500 text-xl flex-shrink-0">•</span>
                                <p>
                                    <strong className="text-white">Deletion is immediate and irreversible.</strong> Once you confirm deletion, your data cannot be recovered.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-500 text-xl flex-shrink-0">•</span>
                                <p>
                                    <strong className="text-white">Nuclear Reset</strong> deletes local stats only. Your account remains active.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-500 text-xl flex-shrink-0">•</span>
                                <p>
                                    <strong className="text-white">Delete Account & Data</strong> removes everything including your Wall of Shame entries from our servers.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-500 text-xl flex-shrink-0">•</span>
                                <p>
                                    All data stored locally (AsyncStorage) and remotely (Supabase) will be permanently deleted.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Support */}
                    <section className="bg-white/5 border border-white/10 rounded-lg p-8">
                        <h2 className="text-3xl font-heavy uppercase mb-6 text-white">
                            Need Assistance?
                        </h2>

                        <p className="text-gray-300 mb-6">
                            If you're unable to delete your data using the in-app features or have questions about data deletion, please contact us:
                        </p>

                        <div
                            onClick={copyEmail}
                            className="bg-red-700/20 border border-red-500/50 rounded-lg p-6 cursor-pointer hover:bg-red-700/30 transition-colors"
                        >
                            <p className="text-2xl font-mono text-white mb-2">
                                sandy@zaynstudio.app
                            </p>
                            <p className="text-sm text-gray-400">
                                Click to copy email address
                            </p>
                        </div>

                        <p className="text-sm text-gray-400 mt-6 font-mono">
                            Please include "Mamba Focus - Data Deletion Request" in your subject line and provide your account details for verification.
                        </p>
                    </section>

                    {/* Privacy Policy Link */}
                    <section className="text-center py-8">
                        <p className="text-gray-400 mb-4">
                            For more information about how we handle your data:
                        </p>
                        <Link
                            href="/privacy"
                            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-mono transition-colors"
                        >
                            View Privacy Policy
                        </Link>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-6 bg-black font-mono text-xs">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600">
                        © {new Date().getFullYear()} ZaynStudio. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-gray-600 hover:text-white transition-colors uppercase">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-600 hover:text-white transition-colors uppercase">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-white transition-colors uppercase">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
