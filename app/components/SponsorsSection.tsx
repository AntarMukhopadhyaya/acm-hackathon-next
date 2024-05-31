import Image from "next/image";

const Sponsors = () => {
  return ( 
    <div>
      <Image src="/images/1.png" className="mx-auto" width={600} height={100} alt="Gold Sponsors"/>
      <Image src="/images/4.png" className="mx-auto" width={600} height={100} alt="Silver Sponsors"/>
      <Image src="/images/5.png" className="mx-auto" width={600} height={100} alt="Silver Sponsors"/>
      <Image src="/images/2.png" className="mx-auto" width={600} height={100} alt="Silver Sponsors"/>
      <Image src="/images/3.png" className="mx-auto" width={600} height={100} alt="Silver Sponsors"/>
    </div>
   );
}
 
export default Sponsors;