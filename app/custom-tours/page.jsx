import Nav from "@/Components/Nav/Nav";
import Footer from "@/Components/Footer/Footer";
import CustomTourHero from "@/Components/CustomTourHero/CustomTourHero";
import CustomTourBookingForm from "@/Components/CustomTourBookingForm/CustomTourBookingForm";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";

const page = () => {
  return (
    <div>
      <Nav />
      <CustomTourHero />

      <CustomTourBookingForm tourTitle="Sri Lanka Custom Safari Tour" />
      <FloatingIcons />
      <Footer />
    </div>
  );
};

export default page;
