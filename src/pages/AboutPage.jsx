import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Made with ❤️ by Debarghya Datta</p>
            <p>
              <Link to='/'> {/* we use link instead of href to prevent automatic refresh */}
                Back to Home
              </Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage