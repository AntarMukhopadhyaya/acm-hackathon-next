import Image from "next/image";

const Sponsors = () => {
  return ( 
    <div>
      <Image src="/images/gold_sponsor.png" className="mx-auto" width={600} height={100} alt="Gold Sponsors"/>
      <Image src="/images/silver_sponsor.png" className="mx-auto" width={600} height={100} alt="Silver Sponsors"/>
    </div>
   );
}
 
export default Sponsors;