import Image from "next/image";

const PrizeSection = () => {
  return (
    <div className="prizeSection" id="prizes">
      <Image src="/images/rewards.png" className="mx-auto my-5" width={400} height={100} alt="Prize Text"/>
      <Image  src="/images/price_objects.png" className="mx-auto" width={1000} height={100} alt="Prizes"/>
    </div>
    );
}
 
export default PrizeSection;