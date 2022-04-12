import { Link } from "react-router-dom";

// component for navigation
export function Navigation() {
  return (
    <nav>
      {/* Link is how we navigate with react router */}
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
