import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import Image from "next/image";
import category1 from '@/assets/image/category/category1.png'
import category2 from '@/assets/image/category/category2.png'
import category3 from '@/assets/image/category/category3.png'
import category4 from '@/assets/image/category/category4.png'
import category5 from '@/assets/image/category/category5.png'
import category6 from '@/assets/image/category/category6.png'
import category7 from '@/assets/image/category/category7.png'
import category8 from '@/assets/image/category/category8.png'
import category9 from '@/assets/image/category/category9.png'
import category10 from '@/assets/image/category/category10.png'
import category11 from '@/assets/image/category/category11.png'
import category12 from '@/assets/image/category/category12.png'
import category13 from '@/assets/image/category/category13.png'
import nullImg from '@/assets/image/etc/nullImg.png'
import temaImg from '@/assets/image/etc/etc4.png'
import etc5 from '@/assets/image/etc/etc5.png'
import LeftNav from "@/components/layout/LeftNav";
import RightNav from "@/components/layout/RightNav";
import { CategoryDataType } from "@/types/categoryDataType";
import categoryData from "@/dummydata/category.json"
import CategoryTheme from "@/components/pages/category/CategoryTheme";
import CategoryListItem from "@/components/pages/category/CategoryListItem";
import { CommonDataResType } from '@/types/commonResType';

async function fetchData(){
    const res = await fetch(`${process.env.API_BASE_URL}/category?level=0`, {
        next: { revalidate: 3600*24 }
    });

    //console.log(res);
    
    return res.json();

    //const res = categoryData;
    //return res.cetegory_list; 
};


export default async function Page() {

    const result: CommonDataResType = await fetchData();
    console.log(result.data)

    const categoryList: CategoryDataType[] = result.data;

    

    return (
        <main>

            {/* <div style={{ background: 'linear-gradient(to right, red, #B404AE, purple)', width: '100%', height:'1.5px'}}>

            </div>
            <div style={{width: '100%', display:'flex', justifyContent:'space-evenly',paddingTop: '30px', paddingBottom: '20px'}}>
                <Image src={category1} alt='' style={{width:'60px', height:'75px'}}></Image>
                <Image src={category2} alt='' style={{width:'55px', height:'75px'}}></Image>
                <Image src={category3} alt='' style={{width:'58px', height:'75px'}}></Image>
                <Image src={category4} alt='' style={{width:'60px', height:'75px'}}></Image>
                <Image src={category5} alt='' style={{width:'62px', height:'75px'}}></Image>
            </div>
            <div style={{width: '100%', display:'flex', justifyContent:'space-evenly',paddingTop: '10px'}}>
                <Image src={category6} alt='' style={{width:'60px', height:'75px'}}></Image>
                <Image src={category7} alt='' style={{width:'60px', height:'75px'}}></Image>
                <Image src={category8} alt='' style={{width:'55px', height:'75px'}}></Image>
                <Image src={category9} alt='' style={{width:'65px', height:'75px'}}></Image>
                <Image src={category10} alt='' style={{width:'60px', height:'84px'}}></Image>
            </div>
            <div style={{width: '100%', display:'flex', justifyContent:'space-evenly',paddingTop: '10px', paddingBottom: '20px'}}>
                <Image src={category11} alt='' style={{width:'60px', height:'75px'}}></Image>
                <Image src={category12} alt='' style={{width:'55px', height:'75px'}}></Image>
                <Image src={category13} alt='' style={{width:'58px', height:'75px'}}></Image>
                <Image src={nullImg} alt='' style={{width:'60px', height:'75px'}}></Image>
                <Image src={nullImg} alt='' style={{width:'62px', height:'75px'}}></Image>
            </div>
 
            */}

            <div style={{ background: 'linear-gradient(to right, red, #B404AE, purple)', width: '100%', height: '1.5px' }}></div>

            <div className="mt-[16px] mb-[50px]">
                <CategoryListItem categoryList={categoryList} />
            </div>

            <CategoryTheme />
        </main>
    );
}