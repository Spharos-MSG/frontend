import ModalBackBtn from "@/images/svgs/ModalBackBtn";
import { CommonDataResType } from '@/types/commonResType';
import { useEffect, useState } from "react";


export default function OrderOptionModal({clickOptionModal, getOption, giveData, productId}: {clickOptionModal: any, getOption: any, giveData: any, productId: number}) {

    const [option, setOption] = useState([] as any);
    
    useEffect(() => { 
        const getData = async () => {
            const res = await fetch(`${process.env.API_BASE_URL}/option/first/${productId}`)
            if (res.ok) {
                const data:CommonDataResType = await res.json();
                setOption(data.data);
                console.log(option); 
            }
        }
        getData();
    }, [])

    
    console.log("option " ,option);
    

    // const { clickOptionModal } = props;
    // const {getOption} = props;
    // const data = props.giveData;

    const optionList = option;

    console.log("optionList " ,optionList);
    

    const possible: any = [];
    const impossible: any = [];

    optionList.map((e: any) => {
        if (e.stock == 0) impossible.push(e)
        else possible.push(e)
    })


    console.log(possible);
    

    // let optionRef = useRef([]);
    // console.log("디테일 " + JSON.stringify(optionRef));

    return (
        <div className="w-full h-[497px] bg-white fixed z-20 bottom-0 justify-center items-center rounded-t-md overflow-scroll shadow-[20px_10px_20px_15px_rgba(0,0,0,0.2)]">
            <div className="w-full ">
                <div className="w-[25px] h-[25px] m-auto pt-[5px]" onClick={clickOptionModal}><ModalBackBtn /></div>
            </div>
            <div>
                <div className="mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ededed] rounded-md">
                    선택하세요. &#40;사이즈&#41;
                </div>
                <div className="mx-[15px] pl-[10px] pr-[15px] pb-[24px]">
                    <ul>
                        {possible.map((option: any) => {
                            return (
                                <li key={option.product_option_id}
                                    className="mt-[12px] first:mt-0 text-[12px] text-left h-[50px]"
                                    onClick={() => {getOption(option); clickOptionModal()}}>
                                    {option.color} {option.size}
                                </li>
                            )
                        })}
                        {impossible.map((option: any) => {
                            return (
                                <li key={option.product_option_id}
                                    className="mt-[12px] w-full first:mt-0 text-[12px] text-left h-[50px] text-[#96969d]">
                                    <div className="flex">
                                        <span>{option.color} {option.size}&#40;품절&#41; </span>
                                        <span><a className="py-[8px] px-[20px] border border-[#222222] text-[#222222] text-right tracking-[-0.05rem]">입고알림</a></span>
                                    </div>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

