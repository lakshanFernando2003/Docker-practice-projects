const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-5">
      <div className="container">
        <p>© {new Date().getFullYear()} User Management App</p>
      </div>
    </footer>
  );
};

export default Footer;
