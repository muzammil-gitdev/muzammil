const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
