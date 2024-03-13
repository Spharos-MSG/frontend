import SearchForm from "@/app/(commonAccess)/search/_components/searchForm";
import CartIcon from "@/images/svgs/CartIcon";
import Image from "next/image";
import BackBtn from '@/app/(commonAccess)/search/_components/backBtn';

import RecommendSearch from "@/app/(commonAccess)/search/_serverComponents/recommendSearch";
import Event from "@/app/(commonAccess)/search/_serverComponents/event";
import RecentSearch from "./_components/recentSearch";


export default function Page() {


    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3">
                <BackBtn/>
                <SearchForm/>
                <div className="flex items-center justify-end">
                <CartIcon />
                </div>
            </div>

            {/* 최근 검색어 클라이언트 컴포넌트*/}

            {/* 추천검색어 - 서버 컴포넌트 */}
            <RecentSearch/>
            <RecommendSearch/>
            <Event/>
        </>
    );
}