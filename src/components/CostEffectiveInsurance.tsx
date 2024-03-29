import { Button } from "./ui/button";

const CostEffectiveInsurance = () => {
    return (
        <div className="h-max md:h-[514px] w-full bg-no-repeat object-cover relative bg-cover rounded-xl mb-6 md:mb-20" style={{ backgroundImage: "url(/assets/bgImage.png)" }}>
            <div className="relative md:absolute md:bottom-[51px] md:left-[114px] bg-[#C81E1E] py-5 md:pt-7 px-4 md:pr-7 md:pb-6 md:pl-[34px] w-full md:w-[460px] flex flex-col gap-[18px] rounded-xl">
                <p className="text-lg font-bold text-white leading-[125%]">
                    Obtain cost-effective same-day insurance coverage quickly.
                </p>
                <p className="text-xs font-medium text-white">
                    Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. Etiam enim varius dictum amet hac imperdiet facilisis malesuada.
                </p>
                <div className="flex items-center">
                    <Button className="w-full md:w-max rounded-full px-8 py-4 h-max text-base text-[#E5E7EB] font-medium">
                        Report a Claim
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CostEffectiveInsurance