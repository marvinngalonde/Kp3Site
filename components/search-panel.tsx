"use client"

import { X, Search as SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SearchPanelProps {
    isOpen: boolean
    onClose: () => void
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-[#1a2332] z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute left-4 top-4 text-white hover:text-primary transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="p-8 pt-16">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative">
                            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                            <Input
                                type="text"
                                placeholder="Search..."
                                className="h-14 pl-12 pr-4 bg-white/10 border-white/20 text-white placeholder:text-white/60 text-lg"
                                autoFocus
                            />
                            <Button size="lg" className="absolute right-2 top-1/2 -translate-y-1/2">
                                Search
                            </Button>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="space-y-8">
                        {/* Who We Are */}
                        <div>
                            <h3 className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wider">Who We Are</h3>
                            <div className="space-y-2">
                                <Link href="/about/history" className="block text-white hover:text-primary transition-colors py-2">
                                    Our History
                                </Link>
                                <Link href="/about/beliefs" className="block text-white hover:text-primary transition-colors py-2">
                                    What We Believe
                                </Link>
                                <Link href="/about/leadership" className="block text-white hover:text-primary transition-colors py-2">
                                    Leadership Team
                                </Link>
                            </div>
                        </div>

                        {/* What We Believe */}
                        <div>
                            <h3 className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wider">What We Believe</h3>
                            <div className="space-y-2">
                                <Link href="/beliefs" className="block text-white hover:text-primary transition-colors py-2">
                                    28 Fundamental Beliefs
                                </Link>
                                <Link href="/bible-study" className="block text-white hover:text-primary transition-colors py-2">
                                    Bible Studies
                                </Link>
                            </div>
                        </div>

                        {/* What We Do */}
                        <div>
                            <h3 className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wider">What We Do</h3>
                            <div className="space-y-2">
                                <Link href="/ministries/youth" className="block text-white hover:text-primary transition-colors py-2">
                                    Youth Ministry
                                </Link>
                                <Link href="/ministries/children" className="block text-white hover:text-primary transition-colors py-2">
                                    Children's Ministry
                                </Link>
                                <Link href="/ministries/community" className="block text-white hover:text-primary transition-colors py-2">
                                    Community Service
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="pt-6 border-t border-white/20">
                            <div className="grid grid-cols-2 gap-4">
                                <Link href="/find-church" className="text-white hover:text-primary transition-colors">
                                    FIND A CHURCH
                                </Link>
                                <Link href="/news" className="text-white hover:text-primary transition-colors">
                                    NEWS
                                </Link>
                            </div>
                        </div>

                        {/* Study the Bible Button */}
                        <div className="pt-4">
                            <Button className="w-full h-12 text-base">
                                Study the Bible
                            </Button>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-12 pt-8 border-t border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-primary font-bold text-xl">KP3</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold">Adventist.org is the official website of the Seventh-day Adventist church.</p>
                            </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Seventh-day Adventists are devoted to helping people understand the Bible to find freedom, healing, and hope in Jesus.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
