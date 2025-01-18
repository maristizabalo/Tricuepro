import { Button } from 'antd';

const Home = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
            <header className="flex flex-col items-center mb-10">
                <img src="/path/to/your/logo.png" alt="TriCue Pro Logo" className="w-32 h-32 mb-4" />
                <h1 className="text-4xl font-bold">TriCue Pro</h1>
                <p className="text-xl mt-2">The best platform for your projects</p>
            </header>
            <main className="flex flex-col items-center">
                <Button type="primary" size="large" className="mb-4">
                    Get Started
                </Button>
                <Button type="default" size="large">
                    Learn More
                </Button>
            </main>
            <footer className="mt-10">
                <p>© 2023 TriCue Pro. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;