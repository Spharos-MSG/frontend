import EmptyCartUser from "../../components/pages/cart/emptyCartUser";
import NotLogin from "../../components/pages/cart/notLogin";
import NotUser from "../../components/pages/cart/notUser";
import dataList from "@/app/(commonAccess)/dummydata/cart.json"
import OrderProductInfo from "@/components/pages/cart/orderProductInfo";


export default function Page() {
    const data = dataList[0];

    return (
        <main>
            <div className="pb-[100px]">
                
                {/* 비회원일 때 장바구니 물건이 없으면 */}
                {/* <NotLogin/> */}
                {/* 비회원일 때 장바구니 물건이 있으면*/}
                <NotUser/>

                {/* 회원일 때 장바구니 물건이 없으면*/}
                {/* <EmptyCartUser/>*/}


                {/* 주문상품유닛 */}
                <OrderProductInfo data={data} />
            </div>
        </main>
    )
}