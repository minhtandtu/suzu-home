import TeamBranches from '../components/TeamBranches';
import Fields from '../components/Fields';
import Works from '../components/Works';
import Projects from '../components/Projects';
import NewProject from '../components/NewProject';
import SuzuGroup from '../components/SuzuGroup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blogs from '../components/Blogs';
import Testimonial from '../components/Testimonial';
import ContactUs from '../components/ContactUs';
import CustomerLogo from '../components/CustomerLogo';
import Team from '../components/Team';

export default function Home() {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        {/* Header */}
        <Header/>
        <SuzuGroup/>
        {/* Customer Logos */}
        <CustomerLogo/>
        {/* Our Projects */}
        <NewProject/>
        
        {/* WORK -CHUNG TOI LAM GI */}
        <Works />
        {/* Linh Vuc Cua Chung Toi */}
        <Fields />
        {/* Our Branch Members Đội Ngũ Của Chúng Tôi */}
        <Team/>
        {/* Testimonial section */}
        <Testimonial/>
        {/* Blog section - Tin Tức Nổi Bật */}
        <Blogs/>
        {/* Contact Us Now - Liên hệ ngay */}
        <ContactUs/>
        {/* FOOTER */}
       <Footer/>
      </div>
    </div>
  );
}
