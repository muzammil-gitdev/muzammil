export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-black dark:text-zinc-600">
      <p>
        &copy; {new Date().getFullYear()} Muzammil Ali. All rights reserved.
      </p>
      <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion.</p>
    </footer>
  );
}
