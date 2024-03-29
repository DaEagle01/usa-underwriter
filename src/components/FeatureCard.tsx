import Image from "next/image"
import shieldFrame from "../../public/assets/shieldFrame.png";

type Feature = {
    title: string,
    description: string
}
const FeatureCard = ({ feature }: { feature: Feature }) => {
    return (
        <div key={feature.title} className="col-span-12 md:col-span-4 px-5 pr-6 md:pr-12 md:px-12 pt-5 md:pt-12 pb-10 md:pb-[70px] border rounded-2xl">
            <div className="rounded-full bg-[#E5E7EB] w-[62px] h-[62px] flex justify-center items-center">
                <Image src={shieldFrame} width={32} height={32} alt="shield icon" />
            </div>
            <h3 className="text-xl font-semibold text-[#111928] pt-[18px] pb-[10px]">
                {feature.title}
            </h3>
            <p className="text-xs md:text-base font-medium text-[#6B7280]">
                {feature.description}
            </p>
        </div>
    )
}

export default FeatureCard