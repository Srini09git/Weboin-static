import Image from 'next/image';

export default function BlogSection() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Team Blog</h2>
            <div className="relative mt-8">
                <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
                    <BlogCard
                        imageSrc="/chatgpt-logo.png"
                        author="John Anderson"
                        title="We built an AI chess bot with ChatGPT"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor."
                    />
                    <BlogCard
                        imageSrc="/laptop-meeting.jpg"
                        author="Kyle Parsons"
                        title="How to grow your personal brand as a web designer"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor."
                    />
                    <BlogCard
                        imageSrc="/code-screen.jpg"
                        author="Andrea Bates"
                        title="Calm down, monoliths are totally fine"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor."
                    />
                    <BlogCard
                        imageSrc="/gradient.jpg"
                        author="Jess Drum"
                        title="A quick guide to web development for dummies"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor."
                    />
                </div>
            </div>
        </div>
    );
}

function BlogCard({ imageSrc, author, title, description }) {
    return (
        <div className="w-80 flex-shrink-0">
            <div className="rounded-lg overflow-hidden">
                <Image
                    src={imageSrc}
                    alt="Blog Image"
                    width={320}
                    height={180}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="mt-4">
                <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {author.toUpperCase()}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}
