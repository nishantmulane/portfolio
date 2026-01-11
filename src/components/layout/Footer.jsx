const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nishant Mulane · Clarity over cleverness.
      </div>
    </footer>
  );
};

export default Footer;
