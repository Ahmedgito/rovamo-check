  import { Link } from 'react-router-dom';

  // Replace all <a> tags with <Link> components in both App.tsx and services.tsx
  // Example:
  <Link to="/" className="group">
    <span className="text-[#007BC9] text-xs block">01.</span>
    <span className="text-base hover:text-[#0093D7] transition-colors">Home</span>
  </Link>

  <Link to="/services" className="group">
    <span className="text-[#0093D7] text-xs block">02.</span>
    <span className="text-base hover:text-[#0093D7] transition-colors">Services</span>
  </Link> 