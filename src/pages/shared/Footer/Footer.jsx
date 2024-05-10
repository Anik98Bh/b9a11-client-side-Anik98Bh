import facebook from "../../../assets/facebook-svgrepo-com.svg"
import linkedin from "../../../assets/linkedin-svgrepo-com.svg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-7">
            <aside>
                <a className="btn btn-ghost text-3xl font-acma"><span className="text-red-500 text-6xl">A$</span> Alternative Stocks</a>
                <p className="pl-5 mt-2">Providing reliable tech since 1992</p>
                <aside className="pl-5">
                    <p>Copyright © 2024 - All right reserved by  <span className="font-bold">Alternative Stocks</span></p>
                </aside>
                <nav className="pl-5">
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://m.facebook.com/login/?locale=en_GB"><img className="h-9 w-9"  src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com/home"><img className="h-9 w-9"  src={linkedin} alt="" /></a>
                        <a href="https://www.youtube.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                    </div>
                </nav>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;